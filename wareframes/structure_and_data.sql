DROP DATABASE IF EXISTS newsoft6;
CREATE SCHEMA IF NOT EXISTS newsoft6 DEFAULT CHARACTER SET utf8mb3 ;
USE newsoft6 ;


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
--
-- Table structure for table brands
--

CREATE TABLE brands (
  id_brands int(11) NOT NULL AUTO_INCREMENT,
  brand varchar(45) NOT NULL,
  PRIMARY KEY (id_brands)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;


--
-- Dumping data for table brands
--

LOCK TABLES brands WRITE;

INSERT INTO brands VALUES (1,'Logitech');
INSERT INTO brands VALUES (2,'Corsair');
INSERT INTO brands VALUES (3,'Raizer');
INSERT INTO brands VALUES (4,'Ozone');
INSERT INTO brands VALUES (5,'MSI');
INSERT INTO brands VALUES (6,'El Gato');

UNLOCK TABLES;

--
-- Table structure for table products_has_colors
--

DROP TABLE IF EXISTS products_has_colors;
CREATE TABLE products_has_colors (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  id_products INT NOT NULL,
  id_colors INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id_products)
    REFERENCES products (id_products),
  FOREIGN KEY (id_colors)
    REFERENCES colors (id_colors)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;


--
-- Dumping data for table products_has_colors
--

LOCK TABLES products_has_colors WRITE;

INSERT INTO products_has_colors VALUES (1,2,1);
INSERT INTO products_has_colors VALUES (2,2,2);
INSERT INTO products_has_colors VALUES (3,2,3);
INSERT INTO products_has_colors VALUES (4,2,8);

UNLOCK TABLES;

--
-- Table structure for table products
--

CREATE TABLE products (
  id_products int(11) NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  price int(10) NOT NULL,
  accesories varchar(100) DEFAULT NULL,
  image varchar(100) DEFAULT NULL,
  description text NOT NULL,
  visible tinyint(3) DEFAULT NULL,
  id_categories int(11) NOT NULL,
  id_brands int(11) NOT NULL,
  deleted_at timestamp NULL DEFAULT NULL,
  car varchar(45) DEFAULT NULL,
  updated_at timestamp NULL DEFAULT NULL,
  created_at timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id_products),
  KEY id_categories (id_categories),
  KEY id_brands (id_brands),
  FOREIGN KEY (id_categories) REFERENCES categories (id_categories),
  FOREIGN KEY (id_brands) REFERENCES brands (id_brands)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;


--
-- Dumping data for table products
--

LOCK TABLES products WRITE;

INSERT INTO products VALUES (2,'VOID RGB ELITE',110,NULL,'1648225089256_img_.png','VOID RGB ELITE Wireless',1,3,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (3,'K63 Wireless',87,NULL,'1648198282620_img_.png','Mechanical Gaming Keyboard',1,2,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (4,'HARPOON RGB',89,NULL,'1648258146347_img_.png','The CORSAIR HARPOON RGB WIRELESS gaming mouse',1,4,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (5,'K65 RGB MINI 60%',109,NULL,'1648197999024_img_.png','Mechanical Gaming Keyboard — CHERRY',1,2,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (6,'K60 RGB PRO',89,NULL,'1648198117887_img_.png','Mechanical Gaming Keyboard — 100%',1,2,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (7,'Chasis inteligente para PC',89,NULL,'1648219952498_img_.png','ATX semitorre con cristal templado iCUE RGB',1,1,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (8,'Chasis inteligente ATX',102,NULL,'1648224034791_img_.png','ATX semitorre con cristal templado iCUE',1,1,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (9,'Chasis ATX 4000D',120,NULL,'1648224169146_img_.png','Chasis ATX semitorre con cristal templado',0,1,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (11,'Wave 1',200,NULL,'1648225253692_img_.png','Combina la comodidad plug and play.',1,6,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (12,'Facecam',80,NULL,'1648225762998_img_.png','Professional optics in a webcam form factor',1,5,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (13,'FPS M65 RGB ELITE',85,NULL,'1648225911046_img_.png','CORSAIR M65 RGB ELITE ajustable es el ratón para juegos',1,4,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (14,'K100 RGB — CHERRY MX',135,NULL,'1648229912638_img_.png','El incomparable teclado mecánico para juegos CORSAIR K100 RGB',1,2,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (15,'iCUE 5000T RGB',399,NULL,'1648243423959_img_.JPG','Tempered Glass Mid-Tower ATX PC Case ',1,1,3,NULL,'true','2022-05-19 00:19:21',NULL);
INSERT INTO products VALUES (16,'iCUE 4000X RGB',129,NULL,'1648243553606_img_.JPG','Tempered Glass Mid-Tower ATX Case',1,1,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (17,'7000D AIRFLOW',269,NULL,'1648243654060_img_.JPG','Full-Tower ATX PC Case ',1,1,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (18,'4000D AIRFLOW',94,NULL,'1648243737847_img_.JPG','Tempered Glass Mid-Tower ATX Case',1,1,1,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (19,'iCUE 220T',109,NULL,'1648243966796_img_.JPG','RGB Airflow Tempered Glass Mid-Tower Smart Case',1,1,3,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (20,'iCUE 5000X',349,NULL,'1648244070511_img_.JPG','RGB QL Edition Mid-Tower ATX Case —true ',1,1,3,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (21,'Crystal Series 680X',274,NULL,'1648244176570_img_.JPG','RGB ATX High Airflow Tempered Glass Smart Case ',1,1,1,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (22,'iCUE 220T ',124,NULL,'1648244257950_img_.JPG','RGB Tempered Glass Mid-Tower Smart Case — Black',1,1,1,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (23,'Carbide Series SPEC-DELTA',104,NULL,'1648244398405_img_.JPG','RGB Tempered Glass Mid-Tower ATX Gaming Case — Black',1,1,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (24,'4000D Tempered ',94,NULL,'1648244500519_img_.JPG','Glass Mid-Tower ATX Case — Black',1,1,3,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (25,'Carbide Series',64,NULL,'1648244650418_img_.JPG','SPEC-04 Tempered Glass Mid-Tower Gaming Case — Black/Red',1,1,1,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (26,'iCUE 5000X ',249,NULL,'1648244761798_img_.JPG','RGB SIGNATURE SERIES Mid-Tower Smart Case — Glitch',1,1,3,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (27,'M65 PRO RGB FPS',80,NULL,'1648601987667_img_.png','The M65 PRO RGB is a competition-grade FPS gaming',1,4,2,NULL,'true',NULL,NULL);
INSERT INTO products VALUES (28,'IRONCLAW RGB WIRELESS',70,NULL,'1648615794337_img_.png','Ratón para juegos',1,4,2,NULL,'true','2022-05-19 03:17:52',NULL);
INSERT INTO products VALUES (29,'M65 RGB ELITE ajustable — Blanco (EU)',90,NULL,'1648616418716_img_.png','Ratón para juegos FPS',1,4,2,NULL,'false','2022-05-11 02:18:49',NULL);
INSERT INTO products VALUES (30,'KATAR PRO Wireless (EU)',68,NULL,'1648616764663_img_.png','Ratón para juegos',1,4,2,'2022-05-08 15:42:40','false',NULL,NULL);
INSERT INTO products VALUES (31,'HARPOON RGB PRO (EU)',83,NULL,'1648616938700_img_.png','FPS/MOBA Ratón para juegos',1,4,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (32,'M65 RGB ELITE ajustable — Negro',65,NULL,'1648617164281_img_.png','Ratón para juegos FPS',1,4,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (33,'DARK CORE RGB PRO SE',102,NULL,'1648617470851_img_.png','Ratón para juegos Inalámbrico ',1,4,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (34,'PRO CHAMPION SERIES (EU)',88,NULL,'1648617710975_img_.png','Ratón óptico para juegos.',1,4,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (35,'GLAIVE RGB PRO aluminio (EU)',64,NULL,'1648617963505_img_.png','Ratón para juegos',1,4,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (36,'HARPOON RGB',95,NULL,'1648618215001_img_.png','Ratón para juegos',1,4,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (37,'HARPOON RGB WIRELESS',77,NULL,'1648618367768_img_.png','Ratón para juegos',1,4,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (38,'K70 RGB PRO',169,NULL,'1648826324864_img_.png','Mechanical Gaming Keyboard ',1,2,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (39,'K55 RGB PRO',49,NULL,'1648826599173_img_.png','Gaming keyboard',1,2,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (40,'K70 RGB MK.2 SE',100,NULL,'1648827047867_img_.png','Mechanical Gaming Keyboard - CHERRY ',1,2,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (41,'K95 RGB PLATINUM',130,NULL,'1648827441629_img_.png','Mechanical Gaming Keyboard — CHERRY',1,2,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (42,'K70 LUX RGB',70,NULL,'1648827722190_img_.PNG','Mechanical Gaming Keyboard — CHERRY',1,2,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (43,'K63 COMPACT',110,NULL,'1648827957274_img_.PNG','Mechanical Gaming Keyboard — CHERRY',1,2,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (44,'HS35 HEADSET',100,NULL,'1648828505001_img_.PNG','Stereo Gaming — Carbon',1,3,2,NULL,'false','2022-05-08 18:13:21',NULL);
INSERT INTO products VALUES (45,'HS70 PRO WIRELESS',150,NULL,'1648828787471_img_.PNG','Gaming Headset — Cream',1,3,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (46,'HS75 XB WIRELESS',120,NULL,'1648829028538_img_.png','Gaming Headset for Xbox',1,3,2,NULL,'false','2022-05-08 20:48:52',NULL);
INSERT INTO products VALUES (47,'HS60 HAPTIC STEREO',150,NULL,'1648829568360_img_.png','Gaming Headset with Haptic Bass',1,3,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (48,'HS45 SURROUND',95,NULL,'1648829846429_img_.PNG','Gaming Headset — Carbon',1,3,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (49,'VOID PRO ',150,NULL,'1648830246666_img_.PNG','Premium Gaming Headset',1,3,2,NULL,'false','2022-05-08 17:21:01',NULL);
INSERT INTO products VALUES (50,'VIRTUOSO RGB WIRELESS',110,NULL,'1648830472314_img_.png','Fidelity Gaming Headset',1,3,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (51,'HS50 PRO STEREO',130,NULL,'1648830658613_img_.png','Gaming Headset — Carbon',1,3,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (52,'HS80 RGB WIRELESS',100,NULL,'1648830804699_img_.png','Premium Gaming Headset ',1,3,2,NULL,'false',NULL,NULL);
INSERT INTO products VALUES (53,'Wave 3',200,NULL,'1648832182716_img_.png','Premium microphone and digital mixing solution',1,6,2,NULL,'false',NULL,NULL);

UNLOCK TABLES;

--
-- Table structure for table car

CREATE TABLE car (
  id_products_car int(11) NOT NULL AUTO_INCREMENT,
  quantity int(11) NOT NULL,
  id_users int(11) NOT NULL,
  id_products int(11) NOT NULL,
  status_car varchar(10) NOT NULL,
  total_car int(11) DEFAULT NULL,
  PRIMARY KEY (id_products_car),
  KEY id_users (id_users),
  KEY id_products (id_products),
  FOREIGN KEY (id_users) REFERENCES users (id_users),
  FOREIGN KEY (id_products) REFERENCES products (id_products)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;


--
-- Dumping data for table car
--

LOCK TABLES car WRITE;

INSERT INTO car VALUES (1,2,2,2,'true',NULL);
INSERT INTO car VALUES (2,3,2,2,'true',NULL);
INSERT INTO car VALUES (3,3,2,15,'true',NULL);
INSERT INTO car VALUES (4,1,2,18,'true',NULL);

UNLOCK TABLES;

--
-- Table structure for table users
--

CREATE TABLE users (
  id_users int(11) NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  lastname varchar(100) NOT NULL,
  email varchar(100) NOT NULL,
  password varchar(100) NOT NULL,
  image varchar(100) DEFAULT NULL,
  newsletter tinyint(3) DEFAULT NULL,
  deleted_at timestamp NULL DEFAULT NULL,
  created_at timestamp NULL DEFAULT NULL,
  updated_at timestamp NULL DEFAULT NULL,
  user_rol varchar(100) DEFAULT NULL,
  user_phone varchar(100) DEFAULT NULL,
  user_address varchar(100) DEFAULT NULL,
  PRIMARY KEY (id_users)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table users
--

LOCK TABLES users WRITE;

INSERT INTO users VALUES (2,'CRISTIAN','CASTRO BRIJALDO','blaser89@gmail.com','$2a$10$Wpk7zmv3jq0SIMlktYpde.3S.e35.Ka8N.UGDg8HBUsIVcYHDP4Ba','1650734300167_img_.jpg',0,1,NULL,NULL,NULL,NULL,NULL,NULL);

UNLOCK TABLES;

--
-- Table structure for table categories
--


CREATE TABLE categories (
  id_categories int(11) NOT NULL AUTO_INCREMENT,
  categories varchar(45) NOT NULL,
  PRIMARY KEY (id_categories)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;


--
-- Dumping data for table categories
--

LOCK TABLES categories WRITE;

INSERT INTO categories VALUES (1,'Cases');
INSERT INTO categories VALUES (2,'Teclados');
INSERT INTO categories VALUES (3,'Audifonos');
INSERT INTO categories VALUES (4,'Mouse');
INSERT INTO categories VALUES (5,'Camaras');
INSERT INTO categories VALUES (6,'Audio (Microfonos)');

UNLOCK TABLES;

--
-- Table structure for table colors
--

CREATE TABLE colors (
  id_colors int(11) NOT NULL AUTO_INCREMENT,
  colors varchar(100) NOT NULL,
  PRIMARY KEY (id_colors)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;


--
-- Dumping data for table colors
--

LOCK TABLES colors WRITE;

INSERT INTO colors VALUES (1,'Negro');
INSERT INTO colors VALUES (2,'Blanco');
INSERT INTO colors VALUES (3,'Amarillo');
INSERT INTO colors VALUES (4,'Azul');
INSERT INTO colors VALUES (5,'Rojo');
INSERT INTO colors VALUES (6,'Violeta');
INSERT INTO colors VALUES (7,'Verde');
INSERT INTO colors VALUES (8,'Gris');
INSERT INTO colors VALUES (9,'Rosado');

UNLOCK TABLES;

