-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: newsoft6
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id_brands` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_brands`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Logitech'),(2,'Corsair'),(3,'Raizer'),(4,'Ozone'),(5,'MSI'),(6,'El Gato');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car`
--

DROP TABLE IF EXISTS `car`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `car` (
  `id_products_car` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) NOT NULL,
  `id_users` int(11) NOT NULL,
  `id_products` int(11) NOT NULL,
  `status_car` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `total_car` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_products_car`),
  KEY `id_users` (`id_users`),
  KEY `id_products` (`id_products`),
  CONSTRAINT `car_ibfk_1` FOREIGN KEY (`id_users`) REFERENCES `users` (`id_users`),
  CONSTRAINT `car_ibfk_2` FOREIGN KEY (`id_products`) REFERENCES `products` (`id_products`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car`
--

LOCK TABLES `car` WRITE;
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
INSERT INTO `car` VALUES (1,2,2,2,'true',NULL),(2,3,2,2,'true',NULL),(3,3,2,15,'true',NULL),(4,1,2,18,'true',NULL);
/*!40000 ALTER TABLE `car` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id_categories` int(11) NOT NULL AUTO_INCREMENT,
  `categories` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_categories`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Cases'),(2,'Teclados'),(3,'Audifonos'),(4,'Mouse'),(5,'Camaras'),(6,'Audio (Microfonos)');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colors` (
  `id_colors` int(11) NOT NULL AUTO_INCREMENT,
  `colors` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_colors`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'Negro'),(2,'Blanco'),(3,'Amarillo'),(4,'Azul'),(5,'Rojo'),(6,'Violeta'),(7,'Verde'),(8,'Gris'),(9,'Rosado');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id_products` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(10) NOT NULL,
  `accesories` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `visible` tinyint(3) DEFAULT NULL,
  `id_categories` int(11) NOT NULL,
  `id_brands` int(11) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `car` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_products`),
  KEY `id_categories` (`id_categories`),
  KEY `id_brands` (`id_brands`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_categories`) REFERENCES `categories` (`id_categories`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`id_brands`) REFERENCES `brands` (`id_brands`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,'VOID RGB ELITE',110,NULL,'1648225089256_img_.png','VOID RGB ELITE Wireless',1,3,2,NULL,'false',NULL,NULL),(3,'K63 Wireless',87,NULL,'1648198282620_img_.png','Mechanical Gaming Keyboard',1,2,2,NULL,'false',NULL,NULL),(4,'HARPOON RGB',89,NULL,'1648258146347_img_.png','The CORSAIR HARPOON RGB WIRELESS gaming mouse',1,4,2,NULL,'false',NULL,NULL),(5,'K65 RGB MINI 60%',109,NULL,'1648197999024_img_.png','Mechanical Gaming Keyboard ÔÇö CHERRY',1,2,2,NULL,'false',NULL,NULL),(6,'K60 RGB PRO',89,NULL,'1648198117887_img_.png','Mechanical Gaming Keyboard ÔÇö 100%',1,2,2,NULL,'false',NULL,NULL),(7,'Chasis inteligente para PC',89,NULL,'1648219952498_img_.png','ATX semitorre con cristal templado iCUE RGB',1,1,2,NULL,'false',NULL,NULL),(8,'Chasis inteligente ATX',102,NULL,'1648224034791_img_.png','ATX semitorre con cristal templado iCUE',1,1,2,NULL,'false',NULL,NULL),(9,'Chasis ATX 4000D',120,NULL,'1648224169146_img_.png','Chasis ATX semitorre con cristal templado',0,1,2,NULL,'false',NULL,NULL),(11,'Wave 1',200,NULL,'1648225253692_img_.png','Combina la comodidad plug and play.',1,6,2,NULL,'false',NULL,NULL),(12,'Facecam',80,NULL,'1648225762998_img_.png','Professional optics in a webcam form factor',1,5,2,NULL,'false',NULL,NULL),(13,'FPS M65 RGB ELITE',85,NULL,'1648225911046_img_.png','CORSAIR M65 RGB ELITE ajustable es el rat├│n para juegos',1,4,2,NULL,'false',NULL,NULL),(14,'K100 RGB ÔÇö CHERRY MX',135,NULL,'1648229912638_img_.png','El incomparable teclado mec├ínico para juegos CORSAIR K100 RGB',1,2,2,NULL,'false',NULL,NULL),(15,'iCUE 5000T RGB',399,NULL,'1648243423959_img_.JPG','Tempered Glass Mid-Tower ATX PC Case ',1,1,3,NULL,'true','2022-05-19 00:19:21',NULL),(16,'iCUE 4000X RGB',129,NULL,'1648243553606_img_.JPG','Tempered Glass Mid-Tower ATX Case',1,1,2,NULL,'false',NULL,NULL),(17,'7000D AIRFLOW',269,NULL,'1648243654060_img_.JPG','Full-Tower ATX PC Case ',1,1,2,NULL,'false',NULL,NULL),(18,'4000D AIRFLOW',94,NULL,'1648243737847_img_.JPG','Tempered Glass Mid-Tower ATX Case',1,1,1,NULL,'false',NULL,NULL),(19,'iCUE 220T',109,NULL,'1648243966796_img_.JPG','RGB Airflow Tempered Glass Mid-Tower Smart Case',1,1,3,NULL,'false',NULL,NULL),(20,'iCUE 5000X',349,NULL,'1648244070511_img_.JPG','RGB QL Edition Mid-Tower ATX Case ÔÇötrue ',1,1,3,NULL,'false',NULL,NULL),(21,'Crystal Series 680X',274,NULL,'1648244176570_img_.JPG','RGB ATX High Airflow Tempered Glass Smart Case ',1,1,1,NULL,'false',NULL,NULL),(22,'iCUE 220T ',124,NULL,'1648244257950_img_.JPG','RGB Tempered Glass Mid-Tower Smart Case ÔÇö Black',1,1,1,NULL,'false',NULL,NULL),(23,'Carbide Series SPEC-DELTA',104,NULL,'1648244398405_img_.JPG','RGB Tempered Glass Mid-Tower ATX Gaming Case ÔÇö Black',1,1,2,NULL,'false',NULL,NULL),(24,'4000D Tempered ',94,NULL,'1648244500519_img_.JPG','Glass Mid-Tower ATX Case ÔÇö Black',1,1,3,NULL,'false',NULL,NULL),(25,'Carbide Series',64,NULL,'1648244650418_img_.JPG','SPEC-04 Tempered Glass Mid-Tower Gaming Case ÔÇö Black/Red',1,1,1,NULL,'false',NULL,NULL),(26,'iCUE 5000X ',249,NULL,'1648244761798_img_.JPG','RGB SIGNATURE SERIES Mid-Tower Smart Case ÔÇö Glitch',1,1,3,NULL,'false',NULL,NULL),(27,'M65 PRO RGB FPS',80,NULL,'1648601987667_img_.png','The M65 PRO RGB is a competition-grade FPS gaming',1,4,2,NULL,'true',NULL,NULL),(28,'IRONCLAW RGB WIRELESS',70,NULL,'1648615794337_img_.png','Rat├│n para juegos',1,4,2,NULL,'true','2022-05-19 03:17:52',NULL),(29,'M65 RGB ELITE ajustable ÔÇö Blanco (EU)',90,NULL,'1648616418716_img_.png','Rat├│n para juegos FPS',1,4,2,NULL,'false','2022-05-11 02:18:49',NULL),(30,'KATAR PRO Wireless (EU)',68,NULL,'1648616764663_img_.png','Rat├│n para juegos',1,4,2,'2022-05-08 15:42:40','false',NULL,NULL),(31,'HARPOON RGB PRO (EU)',83,NULL,'1648616938700_img_.png','FPS/MOBA Rat├│n para juegos',1,4,2,NULL,'false',NULL,NULL),(32,'M65 RGB ELITE ajustable ÔÇö Negro',65,NULL,'1648617164281_img_.png','Rat├│n para juegos FPS',1,4,2,NULL,'false',NULL,NULL),(33,'DARK CORE RGB PRO SE',102,NULL,'1648617470851_img_.png','Rat├│n para juegos Inal├ímbrico ',1,4,2,NULL,'false',NULL,NULL),(34,'PRO CHAMPION SERIES (EU)',88,NULL,'1648617710975_img_.png','Rat├│n ├│ptico para juegos.',1,4,2,NULL,'false',NULL,NULL),(35,'GLAIVE RGB PRO aluminio (EU)',64,NULL,'1648617963505_img_.png','Rat├│n para juegos',1,4,2,NULL,'false',NULL,NULL),(36,'HARPOON RGB',95,NULL,'1648618215001_img_.png','Rat├│n para juegos',1,4,2,NULL,'false',NULL,NULL),(37,'HARPOON RGB WIRELESS',77,NULL,'1648618367768_img_.png','Rat├│n para juegos',1,4,2,NULL,'false',NULL,NULL),(38,'K70 RGB PRO',169,NULL,'1648826324864_img_.png','Mechanical Gaming Keyboard ',1,2,2,NULL,'false',NULL,NULL),(39,'K55 RGB PRO',49,NULL,'1648826599173_img_.png','Gaming keyboard',1,2,2,NULL,'false',NULL,NULL),(40,'K70 RGB MK.2 SE',100,NULL,'1648827047867_img_.png','Mechanical Gaming Keyboard - CHERRY ',1,2,2,NULL,'false',NULL,NULL),(41,'K95 RGB PLATINUM',130,NULL,'1648827441629_img_.png','Mechanical Gaming Keyboard ÔÇö CHERRY',1,2,2,NULL,'false',NULL,NULL),(42,'K70 LUX RGB',70,NULL,'1648827722190_img_.PNG','Mechanical Gaming Keyboard ÔÇö CHERRY',1,2,2,NULL,'false',NULL,NULL),(43,'K63 COMPACT',110,NULL,'1648827957274_img_.PNG','Mechanical Gaming Keyboard ÔÇö CHERRY',1,2,2,NULL,'false',NULL,NULL),(44,'HS35 HEADSET',100,NULL,'1648828505001_img_.PNG','Stereo Gaming ÔÇö Carbon',1,3,2,NULL,'false','2022-05-08 18:13:21',NULL),(45,'HS70 PRO WIRELESS',150,NULL,'1648828787471_img_.PNG','Gaming Headset ÔÇö Cream',1,3,2,NULL,'false',NULL,NULL),(46,'HS75 XB WIRELESS',120,NULL,'1648829028538_img_.png','Gaming Headset for Xbox',1,3,2,NULL,'false','2022-05-08 20:48:52',NULL),(47,'HS60 HAPTIC STEREO',150,NULL,'1648829568360_img_.png','Gaming Headset with Haptic Bass',1,3,2,NULL,'false',NULL,NULL),(48,'HS45 SURROUND',95,NULL,'1648829846429_img_.PNG','Gaming Headset ÔÇö Carbon',1,3,2,NULL,'false',NULL,NULL),(49,'VOID PRO ',150,NULL,'1648830246666_img_.PNG','Premium Gaming Headset',1,3,2,NULL,'false','2022-05-08 17:21:01',NULL),(50,'VIRTUOSO RGB WIRELESS',110,NULL,'1648830472314_img_.png','Fidelity Gaming Headset',1,3,2,NULL,'false',NULL,NULL),(51,'HS50 PRO STEREO',130,NULL,'1648830658613_img_.png','Gaming Headset ÔÇö Carbon',1,3,2,NULL,'false',NULL,NULL),(52,'HS80 RGB WIRELESS',100,NULL,'1648830804699_img_.png','Premium Gaming Headset ',1,3,2,NULL,'false',NULL,NULL),(53,'Wave 3',200,NULL,'1648832182716_img_.png','Premium microphone and digital mixing solution',1,6,2,NULL,'false',NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_has_colors`
--

DROP TABLE IF EXISTS `products_has_colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_has_colors` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_products` int(11) NOT NULL,
  `id_colors` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_products` (`id_products`),
  KEY `id_colors` (`id_colors`),
  CONSTRAINT `products_has_colors_ibfk_1` FOREIGN KEY (`id_products`) REFERENCES `products` (`id_products`),
  CONSTRAINT `products_has_colors_ibfk_2` FOREIGN KEY (`id_colors`) REFERENCES `colors` (`id_colors`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_has_colors`
--

LOCK TABLES `products_has_colors` WRITE;
/*!40000 ALTER TABLE `products_has_colors` DISABLE KEYS */;
INSERT INTO `products_has_colors` VALUES (1,2,1),(2,2,2),(3,2,3),(4,2,8);
/*!40000 ALTER TABLE `products_has_colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id_users` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `newsletter` tinyint(3) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_rol` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_phone` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_address` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_users`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-19 12:28:08
