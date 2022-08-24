var express = require('express');
var router = express.Router();
var noticiasModel = require('./../models/noticiasModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/noticias', async function (req, res, next) {
  var noticias = await noticiasModel.getNoticias();

  noticias = noticias.map(noticia => {
    if (noticia.img_id) {
      const imagen = cloudinary.url(noticia.img_id, {
        width: 960,
        height: 200,
        crop: 'fill'
      });
      return {
        ...noticia,
        imagen
      }
    } else {
      return {
        ...noticia,
        imagen: ''
      }
    }
  });
  res.json(noticias);
});

router.post('/contacto', async(req, res) => {
  const mail={
    to: 'jonathanfernandez88@hotmail.com', 
    subject:'Contacto web', 
    html: `${req.body.nombre} se contacto a traves de la web y quiere mas información 
    a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} 
    <br> Su tel es: ${req.body.telefono}`
  }
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transport.sendMail(mail)

  res.status(201).json({
    error: false,
    message: 'Mensaje enviado'

  });

});

module.exports = router;