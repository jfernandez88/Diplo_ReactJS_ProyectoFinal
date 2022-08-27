var express = require('express');
var router = express.Router();
var inicioModel = require('../../models/inicioModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function (req, res, next) {
  var inicio = await inicioModel.getInicio();

  inicio = inicio.map(resumen => {
    if (resumen.img_id) {
      const imagen = cloudinary.image(resumen.img_id, {
        width: 100,
        height: 100,
        crop: 'fill'
      });
      return {
        ...resumen,
        imagen
      }
    } else {
      return {
        ...resumen,
        imagen: ''
      }
    }
  });

 res.render('admin/inicio', {
    layout: 'admin/layout',
    persona: req.session.nombre,
    inicio
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/manejador_inicio/agregar', {
    layout: 'admin/layout',
  });
});


router.post('/agregar', async (req, res, next) => {
  try {

    var img_id  = '';
    if (req.files && Object.keys(req.files).length > 0)  {
      imagen = req.files.imagen;
      img_id  = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.titulo != ""  && req.body.cuerpo != "") {
      await inicioModel.insertInicio({
        ...req.body,
        img_id
      });
      res.redirect('/admin/inicio')
    } else {
      res.render('admin/manejador_inicio/agregar', {
        layout: 'admin/layout',
        error: true, message: 'Todos los campos son requeridos'
      })
    }

  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true, message: 'No se cargo la noticia'
    });
  }
})

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  let inicio = await inicioModel.getInicioById(id);
  if(inicio.img_id){
    await(destroy(inicio.img_id));
  }
  await inicioModel.deleteInicioById(id);
  res.redirect('/admin/inicio');
});

router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  var inicio = await inicioModel.getInicioById(id);

  res.render('admin/manejador_inicio/modificar', {
    layout: 'admin/layout',
    inicio
  })
});

router.post('/modificar', async (req, res, next) => {
  try {

    let img_id = req.body.img_original;
    let borrar_img_vieja = false;

    if(req.body.img_delete === "1"){
      img_id = null;
      borrar_img_vieja = true;
    } else{
      if (req.files && Object.keys(req.files).length > 0)  {
        imagen = req.files.imagen;
        img_id  = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original){
      await (destroy(req.body.img_original));
    }

    var obj = {
      titulo: req.body.titulo,
      cuerpo: req.body.cuerpo,
      img_id
    }
    await inicioModel.modificarInicioById(obj, req.body.id);
    res.redirect('/admin/inicio');

  } catch (error) {
    console.log(error)
    res.render('admin/manejador_inicio/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico el Resumen Mensual'
    })
  }
});



router.get('/', function (req, res, next) {
  res.render('admin/noticias', {
    layout: 'admin/layout',
    persona: req.session.nombre
  });
});

module.exports = router;