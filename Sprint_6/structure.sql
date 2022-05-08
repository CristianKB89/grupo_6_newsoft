
-- -----------------------------------------------------
-- Schema newsoft6
-- -----------------------------------------------------
DROP DATABASE IF EXISTS newsoft6;
CREATE SCHEMA IF NOT EXISTS newsoft6 DEFAULT CHARACTER SET utf8 ;
USE newsoft6 ;

-- -----------------------------------------------------
-- Table newsoft6.shopping_car
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shopping_car`;
CREATE TABLE `shopping_car` (
  `id_shopping_car` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NOT NULL,
  `total` INT NULL,
  `address` VARCHAR(45) NOT NULL,
  `payment_mehtod` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_shopping_car`)
  )ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- -----------------------------------------------------
-- Table newsoft6.users
-- -----------------------------------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id_users` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `lastname` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARBINARY(100) NOT NULL,
  `image` VARCHAR(100) NULL,
  `newsletter` TINYINT(3) NULL,
  `id_shopping_car` INT NULL,
  PRIMARY KEY (`id_users`),
  FOREIGN KEY (`id_shopping_car`)
    REFERENCES `shopping_car` (`id_shopping_car`)
  )ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- -----------------------------------------------------
-- Table newsoft6.categories
-- -----------------------------------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id_categories` INT NOT NULL AUTO_INCREMENT,
  `categories` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_categories`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- -----------------------------------------------------
-- Table newsoft6.brands
-- -----------------------------------------------------
DROP TABLE IF EXISTS `brands`;
CREATE TABLE `brands` (
  `id_brands` INT NOT NULL AUTO_INCREMENT,
  `brand` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_brands`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- -----------------------------------------------------
-- Table newsoft6.products
-- -----------------------------------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id_products` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `price` INT(10) NOT NULL,
  `accesories` VARCHAR(100) NULL,
  `image` VARCHAR(100) NULL,
  `description` TEXT(200) NOT NULL,
  `visible` TINYINT(3) NULL,
  `id_categories` INT NOT NULL,
  `id_brands` INT NOT NULL,
  PRIMARY KEY (`id_products`),
  FOREIGN KEY (`id_categories`)
    REFERENCES `categories` (`id_categories`),
  FOREIGN KEY (`id_brands`)
    REFERENCES `brands` (`id_brands`)
  )ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
-- -----------------------------------------------------
-- Table newsoft6.colors
-- -----------------------------------------------------
DROP TABLE IF EXISTS `colors`;
CREATE TABLE `colors` (
  `id_colors` INT NOT NULL AUTO_INCREMENT,
  `colors` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_colors`)
  )ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- -----------------------------------------------------
-- Table newsoft6.car
-- -----------------------------------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id_products_car` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NOT NULL,
  `id_users` INT NOT NULL,
  `id_products` INT NOT NULL,
  `car` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id_products_car`),
  FOREIGN KEY (`id_users`)
    REFERENCES `users` (`id_users`),
  FOREIGN KEY (`id_products`)
    REFERENCES `products` (`id_products`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- -----------------------------------------------------
-- Table newsoft6.products_has_colors
-- -----------------------------------------------------
DROP TABLE IF EXISTS `products_has_colors`;
CREATE TABLE `products_has_colors` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_products` INT NOT NULL,
  `id_colors` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_products`)
    REFERENCES `products` (`id_products`),
  FOREIGN KEY (`id_colors`)
    REFERENCES `colors` (`id_colors`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;