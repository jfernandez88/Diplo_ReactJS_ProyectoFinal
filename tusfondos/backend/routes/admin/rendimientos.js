var express = require('express');
var router = express.Router();
var rendimientosModel = require('../../models/rendimientosModel');

router.get('/', async function (req, res, next) {
  var rendimientos = await rendimientosModel.getRendimientos();
  res.render('admin/rendimientos', {
    layout: 'admin/layout',
    persona: req.session.nombre,
    rendimientos
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/manejador_rendimientos/agregar', {
    layout: 'admin/layout',
  });
});


router.post('/agregar', async (req, res, next) => {
  try {

    if (req.body.nombre != ""  && req.body.rendimiento!= "") {
      await rendimientosModel.insertRendimientos({
        ...req.body
      });
      res.redirect('/admin/rendimientos')
    } else {
      res.render('admin/manejador_rendimientos/agregar', {
        layout: 'admin/layout',
        error: true, message: 'Todos los campos son requeridos'
      })
    }

  } catch (error) {
    console.log(error)
    res.render('admin/manejador_rendimientos/agregar', {
      layout: 'admin/layout',
      error: true, message: 'No se cargo la noticia'
    });
  }
})

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await rendimientosModel.deleteRendimientosById(id);
  res.redirect('/admin/rendimientos');
});

router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  var rendimientos = await rendimientosModel.getRendimientosById(id);

  res.render('admin/manejador_rendimientos/modificar', {
    layout: 'admin/layout',
    rendimientos
  })
});

router.post('/modificar', async (req, res, next) => {
  try {
    var obj = {
      nombre: req.body.nombre,
      rendimiento: req.body.rendimiento
    }
    await rendimientosModel.modificarRendimientosById(obj, req.body.id);
    res.redirect('/admin/rendimientos');

  } catch (error) {
    console.log(error)
    res.render('admin/manejador_rendimientos/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico el Resumen Mensual'
    })
  }
});



router.get('/', function (req, res, next) {
  res.render('admin/rendimientos', {
    layout: 'admin/layout',
    persona: req.session.nombre
  });
});

module.exports = router;