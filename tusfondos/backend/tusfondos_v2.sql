-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 31, 2022 at 10:14 PM
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
-- Table structure for table `inicio`
--

DROP TABLE IF EXISTS `inicio`;
CREATE TABLE IF NOT EXISTS `inicio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `inicio`
--

INSERT INTO `inicio` (`id`, `titulo`, `cuerpo`, `img_id`) VALUES
(6, 'Agosto', 'La cartera se sigue concentrando en sectores anti-cíclicos, pero\r\nagregamos la primera empresa china en meses. Es JOYY,\r\nespecializada en AI para servicios online de usuarios,\r\nprincipalmente streaming además de juegos online. Es una\r\ncartera que busca capturar el riesgo de que la economía China\r\nvuelva algún cierre parcial durante el otoño, mientras cotizamos\r\neventos pharma especialmente neurológicos y oncológicos.\r\nRango de precios en Pesos:\r\nNo pagar franjas mayores al 3% del cierre al 17/8. Si se tiene que\r\ndesarmar posiciones grandes armar un rango de compra hasta\r\n>5% de los precios del 17/8.\r\nActivos a desarmar con prioridad:\r\nCommodities energéticos y agrícolas (con excepción de\r\nbiotecnología agropecuaria), FAANG y sector bancario.\r\nActivos que necesitan un seguimiento especial:\r\nSector tecnología con balances y comentarios de la FED sobre\r\nuna potencial suba de 50ptos (sep) y el', 'fexaxff07roxfm61mbrm'),
(7, 'Septiembre', 'EL PLAN MASSA: DETALLES OPERATIVOS\r\nLOS PUNTOS CLAVES DEL ESQUEMA STATUS QUO HASTA LLEGAR AL PLAN A\r\n● No se utilizarán Adelantos del Tesoro por lo que resta del año.\r\n● Rige el congelamiento de la planta del estado para todos los sectores de la\r\nadministración pública nacional centralizada, y\r\n● En lo referente a los subsidios:\r\n● 4 millones de hogares argentinos renunciaron a usar los subsidios.\r\n● Entre los casi 10 millones de hogares que sí pidieron el subsidio, se\r\npromoverá el ahorro de consumo.\r\n● Se va a promover, por decreto de necesidad y urgencia, regímenes para los\r\nsectores de agroindustria, minería, hidrocarburos por aumento de producción,\r\ny de economía del conocimiento.\r\n● Lanzamiento de un programa de crédito a tasas promocionales, y un\r\nesquema de garantías para primeros exportadores.\r\n● Puesta en marcha un sistema de trazabilidad de comercio exterior para\r\nmayor control y transparencia en el uso de divisas para importaciones.', 'axeb9cmwpqgf15dllnjw'),
(9, 'Septiembre', 'Esto es un resumen', 'cma5mym1u7xs0o2jhy0y');

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
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(47, 'Macarena Sánchez presentó su renuncia al cargo de Directora Ejecutiva del Instituto Nacional de Juventudes', 'La Directora Ejecutiva del Instituto Nacional de Juventudes publicó la decisión en sus redes sociales mediante una carta dirigida a Alberto Fernández.', 'La Directora Ejecutiva del Instituto Nacional de Juventudes, Macarena Sánchez, presentó este miércoles su renuncia al cargo mediante una carta dirigida al presidente Alberto Fernández. \"Gracias Alberto y Cristina por la confianza depositada en mi persona\", publicó en su cuenta de la red social Twitter, acompañado del texto con la decisión.', 'npdjbhjyopyrtjokbnlb'),
(48, 'Búsqueda de talentos: faltan cubrir al menos 10.000 empleos de tecnología en Argentina', 'Actualmente, hay miles de puestos de trabajo sin cubrir en el mercado por falta de profesionales cualificados. En algunas compañías se está utilizando la Inteligencia Artificial para suplir la escasez de profesionales.', 'Actualmente, hay miles de puestos de trabajo sin cubrir en el mercado por falta de profesionales cualificados. Según el Foro Económico Mundial, cerrar la brecha de cualificación global podría añadir 11,5 billones de dólares al PIB mundial en 2028, pero los sistemas de educación y formación tendrían que seguir el ritmo de las demandas del mercado. Cuál es la situación en la Argentina.', 'oytperznvydnp5xftaqz'),
(53, 'Dirigentes de izquierda y presidentes la región renovaron su apoyo a Cristina Kirchner', 'Evo Morales y Rafael Correa reiteraron su respaldo a la vicepresidenta luego de la represión en la puerta de su casa. Nicolás Maduro envió una carta en solidaridad.', 'Tras el agitado sábado en su casa de Recoleta, Cristina Kirchner volvió a cosechar este fin de semana el apoyo de distintos líderes, dirigentes de izquierda y presidentes de la región, con la particularidad de que, en esta ocasión, también se sumó el respaldo del venezolano Nicolás Maduro.\r\nEl presidente de Venezuela transmitió su solidaridad con Cristina a través de una carta de dos páginas que fue publicada por el embajador argentino en Caracas, Oscar Laborde, en su cuenta oficial de Twitter.\r\n\"La Venezuela bolivariana y chavista siempre te defenderá, compañera\", destaca en otro pasaje del texto. Y cierra: \"Sabremos que tu pueblo sabrá defenderte y que al final todas estas patrañas serán arrojadas al basurero de la historia. Pero mientras pasa esta nueva tormenta, aquí estamos y estaremos a tu lado\".\r\n\r\nEl escrito llega en medio de la tensión entre Argentina y Venezuela por la tripulación del avión venezolano - iraní que se encuentra varado en la Argentina, mientras avanza la investigación judicial en curso.', 'ljc21e0brmd9koesq1jb');

-- --------------------------------------------------------

--
-- Table structure for table `rendimientos`
--

DROP TABLE IF EXISTS `rendimientos`;
CREATE TABLE IF NOT EXISTS `rendimientos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `rendimiento` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rendimientos`
--

INSERT INTO `rendimientos` (`id`, `nombre`, `rendimiento`) VALUES
(1, 'Delta-A', 25.6),
(2, 'DELTA C', 88.6),
(4, 'INT -A ', 3.6),
(5, 'ADCAP - A', 66.6),
(6, 'BALANZ - A', 56.88),
(7, 'BULLMARKET', 40.5),
(8, 'FIMA-A', 15),
(9, 'FIMA-B', 23),
(10, 'BALANZ-A', 60.66);

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
(3, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
