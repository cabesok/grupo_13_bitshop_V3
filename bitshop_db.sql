-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-09-2021 a las 16:40:10
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bitshop_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` longtext NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` longtext NOT NULL,
  `category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `image`, `category_id`) VALUES
(2, 'Mother Asrock H310CM-HDV Socket 1151 8va Gen', 'CARACTERISTICAS GENERALES Plataforma Intel Socket 1151 8va Chipsets Principal Intel H310 CONECTIVIDAD Cantidad De Slot Pci 0 Cantidad De Slot Pci-e 16X 1 Cantidad De Slot Pci-e 1X 1 Tecnología Multi Gpu 0 Puertos Sata 4 Puertos Ide 0 Salidas Vga 1 Salidas Hdmi 1 Salidas Dvi 1 Salidas Display Ports 0 Cantidad De Slot M2 0 Placa Wifi Integrada No Placa De Red Gigabit LAN 10/100/1000 Mb/s Puerto Ps/2 No Puertos Usb 2.0 Traseros 4 Puertos Usb 3.0 Traseros 2 Puertos Usb 3.1 Traseros 0 ', '6390.00', '1629657527158-.jpg', NULL),
(3, 'Mother Gigabyte H410M H V2 S1200', 'CARACTERISTICAS GENERALES Plataforma Intel Socket 1200 Comet Lake Chipsets Principal Intel H410 CONECTIVIDAD Cantidad De Slot Pci 0 Cantidad De Slot Pci-e 16X 1 Cantidad De Slot Pci-e 1X 2 Tecnología Multi Gpu 0 Puertos Sata 4 Puertos Ide 0 Salidas Vga 1 Salidas Hdmi 1 Salidas Dvi 0 Salidas Display Ports 0 Cantidad De Slot M2 1 Placa Wifi Integrada No Sistema De Conexión Rgb RGB Header Placa De Red 1 Gb/s Puerto Ps/2 Si Puertos Usb 2.0 Traseros 4 Puertos Usb 3.0 Traseros 2 Puertos Usb 3.1 Traseros 0 ', '10320.00', '1629657725513-.jpg', NULL),
(4, 'Mother MSI MEG Z590 ACE Socket 1200', 'CARACTERISTICAS GENERALES Plataforma Intel Socket 1200 Comet Lake,1200 Rocket Lake-S Chipsets Principal Intel Z590 CONECTIVIDAD Cantidad De Slot Pci 0 Cantidad De Slot Pci-e 16X 3 Cantidad De Slot Pci-e 1X 2 Tecnología Multi Gpu SLI,Crossfire Puertos Sata 6 Puertos Ide 0 Salidas Vga 0 Salidas Hdmi 1 Salidas Dvi 0 Salidas Display Ports 0 Cantidad De Slot M2 4 Placa Wifi Integrada Si Sistema De Conexión Rgb ARGB Header,RGB Header Placa De Red 2.5 Gb/s Puerto Ps/2 No Puertos Usb 2.0 Traseros 2 Puertos Usb 3.0 Traseros 4 Puertos Usb 3.1 Traseros 4 ', '66899.00', '1629657826031-.jpg', NULL),
(6, 'ddddd', '        fffff', '1234.00', '', 1),
(8, 'p1', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '123456.00', '', 3),
(9, 'p2', 'gggggggggggggggggggggggg', '123456.00', '', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_category`
--

CREATE TABLE `products_category` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products_category`
--

INSERT INTO `products_category` (`id`, `title`) VALUES
(1, 'componentes'),
(2, 'perifericos'),
(3, 'pcs');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `image` longtext NOT NULL,
  `category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_category`
--

CREATE TABLE `user_category` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user_category`
--

INSERT INTO `user_category` (`id`, `title`) VALUES
(1, 'admin'),
(2, 'user');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_products_category_idx` (`category_id`);

--
-- Indices de la tabla `products_category`
--
ALTER TABLE `products_category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_usercategory_idx` (`category_id`);

--
-- Indices de la tabla `user_category`
--
ALTER TABLE `user_category`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `products_category`
--
ALTER TABLE `products_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user_category`
--
ALTER TABLE `user_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fkprodcat` FOREIGN KEY (`category_id`) REFERENCES `products_category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_usercategory` FOREIGN KEY (`category_id`) REFERENCES `user_category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
