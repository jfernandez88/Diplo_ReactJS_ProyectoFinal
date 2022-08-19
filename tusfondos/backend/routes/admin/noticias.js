var express = require('express');
var router = express.Router();
var noticiasModel = require('./../../models/noticiasModel');

router.get('/', async function (req, res, next) {
  var noticias = await noticiasModel.getNoticias();
  res.render('admin/noticias', {
    layout: 'admin/layout',
    persona: req.session.nombre,
    noticias
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout',
  });
});


router.post('/agregar', async (req, res, next) => {
  try {
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.subtitulo != "" &&
      req.body.cuerpo != "") {
      await noticiasModel.insertNoticia(req.body);
      res.redirect('/admin/noticias')
    } else {
      res.render('admin/agregar', {
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
  await noticiasModel.deleteNoticiaById(id);
  res.redirect('/admin/noticias');
});

router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  var noticia = await noticiasModel.getNoticiasById(id);

  res.render('admin/modificar', {
    layout: 'admin/layout',
    noticia
  })
});

router.post('/modificar', async (req, res, next) => {
  try {
    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    }
    console.log(obj)

    await noticiasModel.modificarNoticiaById(obj, req.body.id);
    res.redirect('/admin/noticias');
    
  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico la Noticia'
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