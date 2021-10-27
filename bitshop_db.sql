-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-10-2021 a las 22:20:02
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
(2, 'Mother Asrock H310CM-HDV Socket 1151 8va Gen', 'CARACTERISTICAS GENERALES Plataforma Intel Socket 1151 8va Chipsets Principal Intel H310 CONECTIVIDAD Cantidad De Slot Pci 0 Cantidad De Slot Pci-e 16X 1 Cantidad De Slot Pci-e 1X 1 Tecnología Multi Gpu 0 Puertos Sata 4 Puertos Ide 0 Salidas Vga 1 Salidas Hdmi 1 Salidas Dvi 1 Salidas Display Ports 0 Cantidad De Slot M2 0 Placa Wifi Integrada No Placa De Red Gigabit LAN 10/100/1000 Mb/s Puerto Ps/2 No Puertos Usb 2.0 Traseros 4 Puertos Usb 3.0 Traseros 2 Puertos Usb 3.1 Traseros 0 ', '695599.00', '1629657527158-.jpg', 1),
(13, 'Mother Asrock H310CM-HDV Socket 1151 8va Gen', 'CARACTERISTICAS GENERALES Plataforma Intel Socket 1151 8va Chipsets Principal Intel H310 CONECTIVIDAD Cantidad De Slot Pci 0 Cantidad De Slot Pci-e 16X 1 Cantidad De Slot Pci-e 1X 1 Tecnología Multi Gpu 0 Puertos Sata 4 Puertos Ide 0 Salidas Vga 1 Salidas Hdmi 1 Salidas Dvi 1 Salidas Display Ports 0 Cantidad De Slot M2 0 Placa Wifi Integrada No Placa De Red Gigabit LAN 10/100/1000 Mb/s Puerto Ps/2 No Puertos Usb 2.0 Traseros 4 Puertos Usb 3.0 Traseros 2 Puertos Usb 3.1 Traseros 0 ', '6390.00', '1633989597971-.jpg', 1),
(14, 'Placa de Video GeForce MSI GT 710 1GB LP Disipador', 'CARACTERISTICAS GENERALES Tipo pcie Chipset Gpu GT 710 Entrada Video No Puente Para Sli/croosfirex - Doble Puente No Características Especiales Otras tecnologías CONECTIVIDAD Vga 1 Dvi Digital 1 Hdmi 1 Rca No S-video 0 Displayports 0 Dvi Analógico/digital 0 ', '8940.00', '1634562722654-.jpg', 1),
(15, 'Gabinete Corsair Crystal 680X RGB TG Smart Black', 'CARACTERISTICAS GENERALES Factor Mother ITX,M-ATX,ATX Fuente En Posición Superior No Con Ventana Si Tipo De Ventana Vidrio templado Colores Negro CONECTIVIDAD Usb 2.0 Frontal 0 Usb 3.0 Frontal 0 Usb 3.1 Frontal 3 Usb 3.1 Interno 2 Lector De Tarjetas Frontal No Audio Ac97 Frontal No Audio Hd Frontal Si', '39998.00', '1634563096769-.jpg', 1),
(17, 'Monitor LG 22\\\" 22MK600M IPS Full HD Bordes Ultra Finos', 'CARACTERISTICAS GENERALES Tipo De Ilumunación LED Tipo De Panel IPS Pantalla Curva No CONECTIVIDAD Conexión 3.5 Mm - Entrada No Conexión 3.5 Mm - Salida No Hdmi 2 Dvi 0 Vga 1 Display Port 0 Puertos Usb 2.0 0 Puertos Usb 3.0 0 Puertos Usb 3.1 0 Mini Display Port 0 ', '21740.00', '1634563240637-.jpg', 2),
(18, 'Monitor Portátil Asus ZenScreen 15.6\\\" MB16AC', 'CARACTERISTICAS GENERALES Tipo De Ilumunación LED Tipo De Panel IPS Pantalla Curva No CONECTIVIDAD Conexión 3.5 Mm - Entrada No Conexión 3.5 Mm - Salida No Hdmi 0 Dvi 0 Vga 0 Display Port 0 Puertos Usb 2.0 0 Puertos Usb 3.0 0 Puertos Usb 3.1 1 Mini Display Port 0 ', '43430.00', '1634563287785-.jpg', 2),
(19, 'Mouse Logitech G903 Lightspeed Wireless Gaming 16.000dpi', 'CARACTERISTICAS GENERALES Color Negro Cantidad De Botones 11 Tipo De Sensor Óptico Sensor Hero Tipo Inalámbrico Si Orientación Para ambidiestros Agarre Palm Grip Si Agarre Claw Grip Si Agarre Finger Grip Si Agarre Ergonómico Vertical No', '10620.00', '1634563339873-.jpg', 2),
(20, 'Teclado Marvo KG880 Retroiluminado Multimedia', 'CARACTERISTICAS GENERALES Tipo De Teclado Completo Color Negro Tipo De Mecanismo Semi Mecánico Material Plástico Touchpad No ', '2820.00', '1634563375751-.jpg', 2),
(21, 'Auriculares HyperX Gaming Cloud II Wireless', 'CARACTERISTICAS GENERALES Audio 7.1 Colores Negro,Rojo Conexión Inalámbrico Con Micrófono Si Tipo De Audio Virtual Tipo Headset CONECTIVIDAD Usb Si Inalámbrico Con Receptor Si Inalámbrico Por Bluetooth No Usb De Alimentación Si ', '19140.00', '1634563448519-.jpg', 2),
(22, 'Memoria OLOy DDR4 32GB (2x16GB) Owl Red 3000MHz CL16', 'CARACTERISTICAS GENERALES Capacidad 32 gb Velocidad 3000 mhz Tipo DDR4 Cantidad De Memorias 2 Latencia 16 cl Voltaje 1.35 v COMPATIBILIDAD Tipo Sodimm No COOLERS Y DISIPADORES Disipador Si Disipador Alto Si ', '17945.00', '1634563500152-.jpg', 1),
(23, 'Memoria Kingston DDR3 8GB 1866MHz HyperX Fury Blue', 'CARACTERISTICAS GENERALES Capacidad 8 gb Velocidad 1866 mhz Tipo DDR3 Cantidad De Memorias 1 Latencia 10 cl Voltaje 1.50 v COMPATIBILIDAD Tipo Sodimm No COOLERS Y DISIPADORES Disipador Si Disipador Alto No ', '8270.00', '1634563536589-.jpg', 1),
(24, 'Placa de Video Zotac GeForce RTX 3090 24GB GDDR6X Trinity', 'CARACTERISTICAS GENERALES Tipo pcie Chipset Gpu GTX 1650 Entrada Video No Puente Para Sli/croosfirex - Doble Puente No CONECTIVIDAD Vga 0 Dvi Digital 1 Hdmi 1 Rca No S-video 0 Displayports 1 Dvi Analógico/digital 0 Usb Type-c 0 ', '83500.00', '1634563600554-.jpg', 1),
(25, 'Notebook ASUS ZenBook UX425EA 14\\\" Core i5 1135G7 8GB SSD 512GB WIN10', 'CARACTERISTICAS GENERALES Color Gris Claro Sistema Operativo Windows 10 Home 64bits Tipo De Cpu Intel Tipo De Gpu Intel HD Graphic Batería Extraible No Modelo Gpu Iris® Xe Graphics Modelo Cpu Core i5 1135G7 Tipo Notebook Lector De Huellas No Familia Del Procesador Intel Core i5 ALMACENAMIENTO Slot M2 Si Capacidad Hd 0 gb Tipo De M.2 NVME Capacidad Sólido 512 gb Lector De Memorias Si', '143542.00', '1634563649749-.jpg', 1),
(26, 'Notebook Gamer ASUS TUF FX506 15.6\\\" Core i5 10300H GTX 1650Ti 4GB 512GB Win10 144Hz', 'CARACTERISTICAS GENERALES Color Gris Claro Sistema Operativo Windows 10 Home 64bits Tipo De Cpu Intel Tipo De Gpu nVidia GeForce Batería Extraible No Modelo Gpu GTX 1650Ti Modelo Cpu Core i5 10300H Tipo Notebook Memoria Gpu 4 gb Lector De Huellas No Familia Del Procesador Intel Core i5 ALMACENAMIENTO Slot M2 Si Capacidad Hd 0 gb Tipo De M.2 NVME Capacidad Sólido 512 gb Lector De Memorias No ', '155790.00', '1634563690161-.jpg', 1),
(27, 'PC GAMER AMD RYZEN 5 3600+B450+16GB+240GB SSD+1TB+1660 SUPER', 'CARACTERÍSTICAS DEL EQUIPO  1 | MOTHER B450M AM4 1 | MICRO AMD RYZEN 5 3600 2 | MEMORIA 8GB DDR4 1 | DISCO HDD 1TB SATA3 1 | GABINETE GAMER 1 | VIDEO GEFORCE GTX 1660 SUPER 6GB 1 | FUENTE 600W 80 PLUS BRONZE 1 | HD SSD 240GB', '200710.00', '1634563730392-.jpg', 3),
(28, 'PC GAMER AMD RYZEN 7 3700X+A520+16GB+240GB SSD+1TB+RTX 2060', '1 | MICRO AMD RYZEN 7 3700X 1 | MOTHER A520 AM4 2 | MEMORIA 8GB 3200 C/RGB 1 | HD SSD 240GB 1 | DISCO HDD 1TB SATA3 1 | VIDEO GEFORCE RTX 2060 6GB 1 | GABINETE GAMER 1 | FUENTE 600W CERTIFICADA 80 PLUS BRONZE', '229060.00', '1634563770356-.jpg', 3),
(29, 'PC INTEL I7 10700+B460+16GB+480GB SSD+KIT', '1 | MICRO INTEL CORE I7 10700 1 | MOTHER B460M 2 | MEMORIA 8GB DDR4 1 | GABINETE KIT 1 | HD SSD 480GB', '89630.00', '1634563797748-.jpg', 3),
(30, 'PC AMD RYZEN 9 3900X+X570+32GB+240GB SSD+1TB+RTX 3080', ' 1 | MICRO AMD RYZEN 9 3900X 1 | MOTHER X570 AM4 2 | MEMORIA 16GB DRR4 3200 C/RGB 1 | HD SSD 240GB 1 | DISCO HDD 1TB SATA3 1 | VIDEO GEFORCE RTX 3080 10GB 1 | GABINETE GAMER ULTRA 1 | FUENTE 700W CERTIFICADA 80 PLUS BRONZE VOLTAJE REAL 1 | WATER COOLER\r\n', '418220.00', '1634563850751-.dib', 3);

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

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `user_name`, `first_name`, `last_name`, `email`, `password`, `image`, `category_id`) VALUES
(15, 'ecadmin', 'ecc', 'coo', 'ecadmin@bitshop.com', '$2a$10$9zs9NeL9gaQyRfnR/rAda.OzKvkAlmfD.fdP/UYWYkXuzXzVFtQyi', '1635007815037-.png', 1),
(16, 'ecnoadmin', 'Ecc', 'Coo', 'ecnoadmin@gmail.com', '$2a$10$xhOOIYi9DjTI2A4T2CAabeSXiQZuY2GJt7PN6b5co1exMI3HHDSqy', '1635007893160-.png', 2),
(17, 'ecadmin2', 'ec', 'ec', 'ec@bitshop.com', '$2a$10$/MBX0h1kiUGxESTTK6YZUOh8dn9llxDypVic6XaFRwXpdHJHGe0D6', '1635018270822-.png', 1),
(18, 'noadmin', 'no', 'admin', 'noadmin@g.com', '$2a$10$IL79upNHUvCyRdtWLIFPwui9udvyCyXYLy9BDGnaz/Ua/irLHCd/y', '1635020778541-.png', 2),
(19, 'lucas', 'Lucas', 'Rodriguez', 'lucas@bitshop.com', '$2a$10$bErR0ey.QGj3HsvQmVbiYun2xUQcMstvECbFlyDgHpiYkxNtHGPh6', '1635165911651-.png', 1),
(20, 'manuel', 'Manuel', 'Laporta', 'manuel@bitshop.com', '$2a$10$tvC3IDGrBFDbToAHGnagNuLGUIjYeeg9pWjG.3t3UHv0aNH5.Rt1.', '1635165963905-.png', 1),
(21, 'emiliano', 'Emiliano', 'Costa', 'emiliano@bitshop.com', '$2a$10$K9Bc257lAm5Em9Yrcxo/p.Z2jItdzMA7bm82ClCgf/eHCjf9KUNN.', '1635166094068-.png', 1);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `products_category`
--
ALTER TABLE `products_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

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
