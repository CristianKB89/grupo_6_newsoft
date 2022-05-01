/*Creación de Categorias*/
INSERT INTO newsoft6.categories (categories) VALUES
('Cases'),
('Teclados'),
('Audifonos'),
('Mouse'),
('Camaras'),
('Audio (Microfonos)');
SELECT id_categories, categories
FROM newsoft6.categories;


/*Creación de Colores*/
INSERT INTO newsoft6.colors (colors) VALUES
('Negro'),
('Blanco'),
('Amarillo'),
('Azul'),
('Rojo'),
('Violeta'),
('Verde'),
('Gris'),
('Rosado');
SELECT id_colors, colors
FROM newsoft6.colors;


/*Creación de Marcas*/
INSERT INTO newsoft6.brands (brand) VALUES
('Logitech'),
('Corsair'),
('Raizer'),
('Ozone'),
('MSI'),
('El Gato');
SELECT id_brands, brand
FROM newsoft6.brands;

/*Creación de Relación de Productos y sus Colores*/
INSERT INTO newsoft6.products_has_colors
(id_products, id_colors)
VALUES(2, 1),
(2, 2),
(2, 3),
(2, 8);
SELECT id_products, id_colors
FROM newsoft6.products_has_colors;

/*Creación de Un Producto*/

INSERT INTO newsoft6.products
(name, price, accesories, image, description, visible, id_categories, id_brands)
VALUES('VOID RGB ELITE', 110, NULL, '1648225089256_img_.png', 'VOID RGB ELITE Wireless', true, 3, 2);
SELECT id_products, name, price, accesories, image, description, visible, id_categories, id_brands
FROM newsoft6.products;

/*Creación de Un Usuario*/

INSERT INTO newsoft6.users
(name, lastname, email, password, image, newsletter, id_shopping_car)
VALUES('CRISTIAN', 'CASTRO BRIJALDO', 'blaser89@gmail.com', '$2a$10$Wpk7zmv3jq0SIMlktYpde.3S.e35.Ka8N.UGDg8HBUsIVcYHDP4Ba', '1650734300167_img_.jpg', 0, 1);

SELECT id_users, name, lastname, email, password, image, newsletter, id_shopping_car
FROM newsoft6.users;

/*Creación de relación entre usuario y productos en el carrito*/

INSERT INTO newsoft6.car
(quantity, id_users, id_products, car)
VALUES(2, 2, 2, 'true');

SELECT id_products_car, quantity, id_users, id_products, car
FROM newsoft6.car;

/*Creación de Carrito de compras*/

INSERT INTO newsoft6.shopping_car
(quantity, total, address, payment_mehtod, phone)
VALUES(2, 220, 'Callex#z-38', 'CreditCard', '+5731354654654');

SELECT id_shopping_car, quantity, total, address, payment_mehtod, phone
FROM newsoft6.shopping_car;





