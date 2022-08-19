-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 19, 2022 at 08:06 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tusfondos`
--

-- --------------------------------------------------------

--
-- Table structure for table `noticias`
--

DROP TABLE IF EXISTS `noticias`;
CREATE TABLE IF NOT EXISTS `noticias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(11, 'Nuevo paro de colectivos: desde cuándo y a qué líneas afecta', 'Las Cámaras adheridas señalaron que \"se impone la necesidad de adaptar la cantidad de servicios diurnos a las prestaciones de día sábado hasta tanto cuenten con los recursos necesarios para regularizar las prestaciones\".', 'Un centenar de líneas de colectivos que circulan en el AMBA no prestarán servicios desde las 22 de este viernes hasta las 5 del sábado, y mantendrán restricciones en las frecuencias durante el día, en reclamo del pago de subsidios atrasados.\r\nEl conflicto por la demora en los giros de las compensaciones tarifarias se inició a principios de julio y aún sigue sin resolverse, por lo cual los empresarios continúan recortando prestaciones para compensar costos.'),
(10, 'Dólar hoy: a cuánto cerró este viernes 19 de agosto', 'Mirá a cuánto cerró el dólar, dólar blue, dólar ahorro, el dólar turista, dólar MEP, dólar CCL y dólar cripto en la Argentina. Conocé además el precio de la moneda estadounidense en el Banco Nación.', 'El Banco Central mantuvo este viernes 19 de agosto la posición de compra en el mercado y se hizo de un saldo de u$s5 millones en la rueda. De esta manera, acumuló casi u$s145 millones en las últimas siete ruedas.\r\nSe da luego de una larga racha con saldos diarios negativos, producto de la importante demanda para energía, y de una desaceleración de la liquidación del complejo agroexportador.'),
(12, 'Alberto Fernández encabezó el acuerdo para construir un acueducto entre Santa Fe y Córdoba', 'El Presidente protagonizó la firma del convenio para la construcción de un acueducto biprovincial entre Santa Fe y Córdoba y estará al frente de una reunión por la Hidrovía Paraná-Paraguay.', 'El presidente Alberto Fernández encabezó la firma del convenio para la construcción de un acueducto biprovincial entre Santa Fe y Córdoba, y estará al frente de una reunión por la Hidrovía Paraná-Paraguay.\r\nLa primera actividad finalizó esta tarde en la Casa Rosada y contó con la presencia del ministro de Economía, Sergio Massa; el canciller, Santiago Cafiero; el gobernador de Santa Fe, Omar Perotti; el vicegobernador de Córdoba, Manuel Calvo; y embajadores.'),
(13, 'Massa firmó acuerdos con la CAF por u$s740 millones para infraestructura y programas sociales', 'El dinero será destinado a fomentar exportaciones, promover el desarrollo sostenible, mejorar la infraestructura vial y educativa, garantizar la seguridad alimentaria y ampliar los servicios de agua y saneamiento en el AMBA.', 'El ministro de Economía, Sergio Massa, encabezó la firma de convenios acordados con CAF \"Banco de Desarrollo de América Latina, antiguamente Corporación Andina de Fomento) por u$s740 millones, los cuales serán destinados a fomentar exportaciones, promover el desarrollo sostenible, mejorar la infraestructura vial y educativa, garantizar la seguridad alimentaria y ampliar los servicios de agua y saneamiento en el Área Metropolitana de Buenos Aires.');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'jona', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'vero', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
