-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: mysql-cristianiksl.alwaysdata.net
-- Generation Time: May 08, 2022 at 10:51 PM
-- Server version: 10.6.5-MariaDB
-- PHP Version: 7.4.19
DROP DATABASE IF EXISTS cristianiksl_newsoft6;
CREATE SCHEMA IF NOT EXISTS cristianiksl_newsoft6 DEFAULT CHARACTER SET utf8 ;
USE cristianiksl_newsoft6 ;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cristianiksl_newsoft6`
--

-- --------------------------------------------------------

--
-- Table structure for table `Brands`
--

CREATE TABLE `Brands` (
  `id_brands` int(11) NOT NULL,
  `brand` varchar(45) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `Brands`
--

INSERT INTO `Brands` (`id_brands`, `brand`) VALUES
(1, 'Logitech'),
(2, 'Corsair'),
(3, 'Raizer'),
(4, 'Ozone'),
(5, 'MSI'),
(6, 'El Gato');

-- --------------------------------------------------------

--
-- Table structure for table `Car`
--

CREATE TABLE `Car` (
  `id_products_car` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `id_users` int(11) NOT NULL,
  `id_products` int(11) NOT NULL,
  `car` varchar(10) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `Car`
--

INSERT INTO `Car` (`id_products_car`, `quantity`, `id_users`, `id_products`, `car`) VALUES
(1, 2, 2, 2, 'true'),
(2, 3, 2, 2, 'true'),
(3, 3, 2, 15, 'true'),
(4, 1, 2, 18, 'true');

-- --------------------------------------------------------

--
-- Table structure for table `Categories`
--

CREATE TABLE `Categories` (
  `id_categories` int(11) NOT NULL,
  `categories` varchar(45) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `Categories`
--

INSERT INTO `Categories` (`id_categories`, `categories`) VALUES
(1, 'Cases'),
(2, 'Teclados'),
(3, 'Audifonos'),
(4, 'Mouse'),
(5, 'Camaras'),
(6, 'Audio (Microfonos)');

-- --------------------------------------------------------

--
-- Table structure for table `Colors`
--

CREATE TABLE `Colors` (
  `id_colors` int(11) NOT NULL,
  `colors` varchar(100) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `Colors`
--

INSERT INTO `Colors` (`id_colors`, `colors`) VALUES
(1, 'Negro'),
(2, 'Blanco'),
(3, 'Amarillo'),
(4, 'Azul'),
(5, 'Rojo'),
(6, 'Violeta'),
(7, 'Verde'),
(8, 'Gris'),
(9, 'Rosado');

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `id_products` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb3_unicode_ci NOT NULL,
  `price` int(10) NOT NULL,
  `accesories` varchar(100) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `image` varchar(100) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb3_unicode_ci NOT NULL,
  `visible` tinyint(3) DEFAULT NULL,
  `id_categories` int(11) NOT NULL,
  `id_brands` int(11) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `car` varchar(45) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`id_products`, `name`, `price`, `accesories`, `image`, `description`, `visible`, `id_categories`, `id_brands`, `deleted_at`, `car`, `updated_at`, `created_at`) VALUES
(2, 'VOID RGB ELITE', 110, NULL, '1648225089256_img_.png', 'VOID RGB ELITE Wireless', 1, 3, 2, NULL, 'false', NULL, NULL),
(3, 'K63 Wireless', 87, NULL, '1648198282620_img_.png', 'Mechanical Gaming Keyboard', 1, 2, 2, NULL, 'false', NULL, NULL),
(4, 'HARPOON RGB', 89, NULL, '1648258146347_img_.png', 'The CORSAIR HARPOON RGB WIRELESS gaming mouse', 1, 4, 2, NULL, 'false', NULL, NULL),
(5, 'K65 RGB MINI 60%', 109, NULL, '1648197999024_img_.png', 'Mechanical Gaming Keyboard — CHERRY', 1, 2, 2, NULL, 'false', NULL, NULL),
(6, 'K60 RGB PRO', 89, NULL, '1648198117887_img_.png', 'Mechanical Gaming Keyboard — 100%', 1, 2, 2, NULL, 'false', NULL, NULL),
(7, 'Chasis inteligente para PC', 89, NULL, '1648219952498_img_.png', 'ATX semitorre con cristal templado iCUE RGB', 1, 1, 2, NULL, 'false', NULL, NULL),
(8, 'Chasis inteligente ATX', 102, NULL, '1648224034791_img_.png', 'ATX semitorre con cristal templado iCUE', 1, 1, 2, NULL, 'false', NULL, NULL),
(9, 'Chasis ATX 4000D', 120, NULL, '1648224169146_img_.png', 'Chasis ATX semitorre con cristal templado', 0, 1, 2, NULL, 'false', NULL, NULL),
(11, 'Wave 1', 200, NULL, '1648225253692_img_.png', 'Combina la comodidad plug and play.', 1, 6, 2, NULL, 'false', NULL, NULL),
(12, 'Facecam', 80, NULL, '1648225762998_img_.png', 'Professional optics in a webcam form factor', 1, 5, 2, NULL, 'false', NULL, NULL),
(13, 'FPS M65 RGB ELITE', 85, NULL, '1648225911046_img_.png', 'CORSAIR M65 RGB ELITE ajustable es el ratón para juegos', 1, 4, 2, NULL, 'false', NULL, NULL),
(14, 'K100 RGB — CHERRY MX', 135, NULL, '1648229912638_img_.png', 'El incomparable teclado mecánico para juegos CORSAIR K100 RGB', 1, 2, 2, NULL, 'false', NULL, NULL),
(15, 'iCUE 5000T RGB', 399, NULL, '1648243423959_img_.JPG', 'Tempered Glass Mid-Tower ATX PC Case ', 1, 1, 3, NULL, 'false', NULL, NULL),
(16, 'iCUE 4000X RGB', 129, NULL, '1648243553606_img_.JPG', 'Tempered Glass Mid-Tower ATX Case', 1, 1, 2, NULL, 'false', NULL, NULL),
(17, '7000D AIRFLOW', 269, NULL, '1648243654060_img_.JPG', 'Full-Tower ATX PC Case ', 1, 1, 2, NULL, 'false', NULL, NULL),
(18, '4000D AIRFLOW', 94, NULL, '1648243737847_img_.JPG', 'Tempered Glass Mid-Tower ATX Case', 1, 1, 1, NULL, 'false', NULL, NULL),
(19, 'iCUE 220T', 109, NULL, '1648243966796_img_.JPG', 'RGB Airflow Tempered Glass Mid-Tower Smart Case', 1, 1, 3, NULL, 'false', NULL, NULL),
(20, 'iCUE 5000X', 349, NULL, '1648244070511_img_.JPG', 'RGB QL Edition Mid-Tower ATX Case —true ', 1, 1, 3, NULL, 'false', NULL, NULL),
(21, 'Crystal Series 680X', 274, NULL, '1648244176570_img_.JPG', 'RGB ATX High Airflow Tempered Glass Smart Case ', 1, 1, 1, NULL, 'false', NULL, NULL),
(22, 'iCUE 220T ', 124, NULL, '1648244257950_img_.JPG', 'RGB Tempered Glass Mid-Tower Smart Case — Black', 1, 1, 1, NULL, 'false', NULL, NULL),
(23, 'Carbide Series SPEC-DELTA', 104, NULL, '1648244398405_img_.JPG', 'RGB Tempered Glass Mid-Tower ATX Gaming Case — Black', 1, 1, 2, NULL, 'false', NULL, NULL),
(24, '4000D Tempered ', 94, NULL, '1648244500519_img_.JPG', 'Glass Mid-Tower ATX Case — Black', 1, 1, 3, NULL, 'false', NULL, NULL),
(25, 'Carbide Series', 64, NULL, '1648244650418_img_.JPG', 'SPEC-04 Tempered Glass Mid-Tower Gaming Case — Black/Red', 1, 1, 1, NULL, 'false', NULL, NULL),
(26, 'iCUE 5000X ', 249, NULL, '1648244761798_img_.JPG', 'RGB SIGNATURE SERIES Mid-Tower Smart Case — Glitch', 1, 1, 3, NULL, 'false', NULL, NULL),
(27, 'M65 PRO RGB FPS', 80, NULL, '1648601987667_img_.png', 'The M65 PRO RGB is a competition-grade FPS gaming', 1, 4, 2, NULL, 'true', NULL, NULL),
(28, 'IRONCLAW RGB WIRELESS', 70, NULL, '1648615794337_img_.png', 'Ratón para juegos', 1, 4, 2, NULL, 'false', NULL, NULL),
(29, 'M65 RGB ELITE ajustable — Blanco (EU)', 90, NULL, '1648616418716_img_.png', 'Ratón para juegos FPS', 1, 4, 2, NULL, 'true', '2022-05-08 18:13:16', NULL),
(30, 'KATAR PRO Wireless (EU)', 68, NULL, '1648616764663_img_.png', 'Ratón para juegos', 1, 4, 2, '2022-05-08 15:42:40', 'false', NULL, NULL),
(31, 'HARPOON RGB PRO (EU)', 83, NULL, '1648616938700_img_.png', 'FPS/MOBA Ratón para juegos', 1, 4, 2, NULL, 'false', NULL, NULL),
(32, 'M65 RGB ELITE ajustable — Negro', 65, NULL, '1648617164281_img_.png', 'Ratón para juegos FPS', 1, 4, 2, NULL, 'false', NULL, NULL),
(33, 'DARK CORE RGB PRO SE', 102, NULL, '1648617470851_img_.png', 'Ratón para juegos Inalámbrico ', 1, 4, 2, NULL, 'false', NULL, NULL),
(34, 'PRO CHAMPION SERIES (EU)', 88, NULL, '1648617710975_img_.png', 'Ratón óptico para juegos.', 1, 4, 2, NULL, 'false', NULL, NULL),
(35, 'GLAIVE RGB PRO aluminio (EU)', 64, NULL, '1648617963505_img_.png', 'Ratón para juegos', 1, 4, 2, NULL, 'false', NULL, NULL),
(36, 'HARPOON RGB', 95, NULL, '1648618215001_img_.png', 'Ratón para juegos', 1, 4, 2, NULL, 'false', NULL, NULL),
(37, 'HARPOON RGB WIRELESS', 77, NULL, '1648618367768_img_.png', 'Ratón para juegos', 1, 4, 2, NULL, 'false', NULL, NULL),
(38, 'K70 RGB PRO', 169, NULL, '1648826324864_img_.png', 'Mechanical Gaming Keyboard ', 1, 2, 2, NULL, 'false', NULL, NULL),
(39, 'K55 RGB PRO', 49, NULL, '1648826599173_img_.png', 'Gaming keyboard', 1, 2, 2, NULL, 'false', NULL, NULL),
(40, 'K70 RGB MK.2 SE', 100, NULL, '1648827047867_img_.png', 'Mechanical Gaming Keyboard - CHERRY ', 1, 2, 2, NULL, 'false', NULL, NULL),
(41, 'K95 RGB PLATINUM', 130, NULL, '1648827441629_img_.png', 'Mechanical Gaming Keyboard — CHERRY', 1, 2, 2, NULL, 'false', NULL, NULL),
(42, 'K70 LUX RGB', 70, NULL, '1648827722190_img_.PNG', 'Mechanical Gaming Keyboard — CHERRY', 1, 2, 2, NULL, 'false', NULL, NULL),
(43, 'K63 COMPACT', 110, NULL, '1648827957274_img_.PNG', 'Mechanical Gaming Keyboard — CHERRY', 1, 2, 2, NULL, 'false', NULL, NULL),
(44, 'HS35 HEADSET', 100, NULL, '1648828505001_img_.PNG', 'Stereo Gaming — Carbon', 1, 3, 2, NULL, 'false', '2022-05-08 18:13:21', NULL),
(45, 'HS70 PRO WIRELESS', 150, NULL, '1648828787471_img_.PNG', 'Gaming Headset — Cream', 1, 3, 2, NULL, 'false', NULL, NULL),
(46, 'HS75 XB WIRELESS', 120, NULL, '1648829028538_img_.png', 'Gaming Headset for Xbox', 0, 3, 2, NULL, 'false', '2022-05-08 17:20:55', NULL),
(47, 'HS60 HAPTIC STEREO', 150, NULL, '1648829568360_img_.png', 'Gaming Headset with Haptic Bass', 1, 3, 2, NULL, 'false', NULL, NULL),
(48, 'HS45 SURROUND', 95, NULL, '1648829846429_img_.PNG', 'Gaming Headset — Carbon', 1, 3, 2, NULL, 'false', NULL, NULL),
(49, 'VOID PRO ', 150, NULL, '1648830246666_img_.PNG', 'Premium Gaming Headset', 1, 3, 2, NULL, 'false', '2022-05-08 17:21:01', NULL),
(50, 'VIRTUOSO RGB WIRELESS', 110, NULL, '1648830472314_img_.png', 'Fidelity Gaming Headset', 1, 3, 2, NULL, 'false', NULL, NULL),
(51, 'HS50 PRO STEREO', 130, NULL, '1648830658613_img_.png', 'Gaming Headset — Carbon', 1, 3, 2, NULL, 'false', NULL, NULL),
(52, 'HS80 RGB WIRELESS', 100, NULL, '1648830804699_img_.png', 'Premium Gaming Headset ', 1, 3, 2, NULL, 'false', NULL, NULL),
(53, 'Wave 3', 200, NULL, '1648832182716_img_.png', 'Premium microphone and digital mixing solution', 1, 6, 2, NULL, 'false', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products_has_colors`
--

CREATE TABLE `products_has_colors` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_products` int(11) NOT NULL,
  `id_colors` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `products_has_colors`
--

INSERT INTO `products_has_colors` (`id`, `id_products`, `id_colors`) VALUES
(1, 2, 1),
(2, 2, 2),
(3, 2, 3),
(4, 2, 8);

-- --------------------------------------------------------

--
-- Table structure for table `Shopping_car`
--

CREATE TABLE `Shopping_car` (
  `id_shopping_car` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total` int(11) DEFAULT NULL,
  `address` varchar(45) COLLATE utf8mb3_unicode_ci NOT NULL,
  `payment_mehtod` varchar(45) COLLATE utf8mb3_unicode_ci NOT NULL,
  `phone` varchar(45) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `Shopping_car`
--

INSERT INTO `Shopping_car` (`id_shopping_car`, `quantity`, `total`, `address`, `payment_mehtod`, `phone`) VALUES
(1, 2, 220, 'Callex#z-38', 'CreditCard', '+5731354654654');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id_users` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb3_unicode_ci NOT NULL,
  `lastname` varchar(100) COLLATE utf8mb3_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb3_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb3_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `newsletter` tinyint(3) DEFAULT NULL,
  `id_shopping_car` int(11) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id_users`, `name`, `lastname`, `email`, `password`, `image`, `newsletter`, `id_shopping_car`, `deleted_at`, `created_at`, `updated_at`) VALUES
(2, 'CRISTIAN', 'CASTRO BRIJALDO', 'blaser89@gmail.com', '$2a$10$Wpk7zmv3jq0SIMlktYpde.3S.e35.Ka8N.UGDg8HBUsIVcYHDP4Ba', '1650734300167_img_.jpg', 0, 1, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Brands`
--
ALTER TABLE `Brands`
  ADD PRIMARY KEY (`id_brands`);

--
-- Indexes for table `Car`
--
ALTER TABLE `Car`
  ADD PRIMARY KEY (`id_products_car`),
  ADD KEY `id_users` (`id_users`),
  ADD KEY `id_products` (`id_products`);

--
-- Indexes for table `Categories`
--
ALTER TABLE `Categories`
  ADD PRIMARY KEY (`id_categories`);

--
-- Indexes for table `Colors`
--
ALTER TABLE `Colors`
  ADD PRIMARY KEY (`id_colors`);

--
-- Indexes for table `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`id_products`),
  ADD KEY `id_categories` (`id_categories`),
  ADD KEY `id_brands` (`id_brands`);

--
-- Indexes for table `products_has_colors`
--
ALTER TABLE `products_has_colors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_products` (`id_products`),
  ADD KEY `id_colors` (`id_colors`);

--
-- Indexes for table `Shopping_car`
--
ALTER TABLE `Shopping_car`
  ADD PRIMARY KEY (`id_shopping_car`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id_users`),
  ADD KEY `users_ibfk_1` (`id_shopping_car`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Brands`
--
ALTER TABLE `Brands`
  MODIFY `id_brands` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Car`
--
ALTER TABLE `Car`
  MODIFY `id_products_car` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Categories`
--
ALTER TABLE `Categories`
  MODIFY `id_categories` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Colors`
--
ALTER TABLE `Colors`
  MODIFY `id_colors` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `Products`
--
ALTER TABLE `Products`
  MODIFY `id_products` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `products_has_colors`
--
ALTER TABLE `products_has_colors`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Shopping_car`
--
ALTER TABLE `Shopping_car`
  MODIFY `id_shopping_car` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id_users` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Car`
--
ALTER TABLE `Car`
  ADD CONSTRAINT `Car_ibfk_1` FOREIGN KEY (`id_users`) REFERENCES `Users` (`id_users`),
  ADD CONSTRAINT `Car_ibfk_2` FOREIGN KEY (`id_products`) REFERENCES `Products` (`id_products`);

--
-- Constraints for table `Products`
--
ALTER TABLE `Products`
  ADD CONSTRAINT `Products_ibfk_1` FOREIGN KEY (`id_categories`) REFERENCES `Categories` (`id_categories`),
  ADD CONSTRAINT `Products_ibfk_2` FOREIGN KEY (`id_brands`) REFERENCES `Brands` (`id_brands`);

--
-- Constraints for table `products_has_colors`
--
ALTER TABLE `products_has_colors`
  ADD CONSTRAINT `products_has_colors_ibfk_1` FOREIGN KEY (`id_products`) REFERENCES `Products` (`id_products`),
  ADD CONSTRAINT `products_has_colors_ibfk_2` FOREIGN KEY (`id_colors`) REFERENCES `Colors` (`id_colors`);

--
-- Constraints for table `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `Users_ibfk_1` FOREIGN KEY (`id_shopping_car`) REFERENCES `Shopping_car` (`id_shopping_car`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
