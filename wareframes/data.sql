/*CreaciOn de Categorias*/
INSERT INTO newsoft6.categories (categories) VALUES
('Cases'),
('Teclados'),
('Audifonos'),
('Mouse'),
('Camaras'),
('Audio (Microfonos)');
SELECT id_categories, categories
FROM newsoft6.categories;


/*CreaciOn de Colores*/
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


/*CreaciOn de Marcas*/
INSERT INTO newsoft6.brands (brand) VALUES
('Logitech'),
('Corsair'),
('Raizer'),
('Ozone'),
('MSI'),
('El Gato');
SELECT id_brands, brand
FROM newsoft6.brands;

/*CreaciOn de RelaciOn de Productos y sus Colores*/
INSERT INTO newsoft6.products_has_colors
(id_products, id_colors)
VALUES(2, 1),
(2, 2),
(2, 3),
(2, 8);
SELECT id_products, id_colors
FROM newsoft6.products_has_colors;

/*CreaciOn de Un Producto*/

INSERT INTO newsoft6.products
(name, price, accesories, image, description, visible, id_categories, id_brands, deleted_at, car)
VALUES('K63 Wireless',87,NULL,'1648198282620_img_.png','Mechanical Gaming Keyboard',true, 2, 2,NULL,'true'),
('HARPOON RGB',89,NULL,'1648258146347_img_.png','The CORSAIR HARPOON RGB WIRELESS gaming mouse',true, 4, 2,NULL,'true'),
('K65 RGB MINI 60%',109,NULL,'1648197999024_img_.png','Mechanical Gaming Keyboard — CHERRY',true, 2, 2,NULL,'true'),
('K60 RGB PRO',89,NULL,'1648198117887_img_.png','Mechanical Gaming Keyboard — 100%',true, 2, 2,NULL,'true'),
('Chasis inteligente para PC',89,NULL,'1648219952498_img_.png','ATX semitorre con cristal templado iCUE RGB',true, 1, 2,NULL,'true'),
('Chasis inteligente ATX',102,NULL,'1648224034791_img_.png','ATX semitorre con cristal templado iCUE',true, 1, 2,NULL,'true'),
('Chasis ATX 4000D',120,NULL,'1648224169146_img_.png','Chasis ATX semitorre con cristal templado',true, 1, 2,NULL,'true'),
('VOID RGB ELITE',110,NULL,'1648225089256_img_.png','VOID RGB ELITE Wireless',true, 3, 2,NULL,'false'),
('Wave 1',200,NULL,'1648225253692_img_.png','Combina la comodidad plug and play.',true, 6, 2,NULL,'false'),
('Facecam',80,NULL,'1648225762998_img_.png','Professional optics in a webcam form factor',true, 5, 2,NULL,'true'),
('FPS M65 RGB ELITE',85,NULL,'1648225911046_img_.png','CORSAIR M65 RGB ELITE ajustable es el ratón para juegos',true, 4, 2,NULL,'false'),
('K100 RGB — CHERRY MX',135,NULL,'1648229912638_img_.png','El incomparable teclado mecánico para juegos CORSAIR K100 RGB',true, 2, 2,NULL,'false'),
('iCUE 5000T RGB',399,NULL,'1648243423959_img_.JPG','Tempered Glass Mid-Tower ATX PC Case ',true, 1, 3,NULL,'false'),
('iCUE 4000X RGB',129,NULL,'1648243553606_img_.JPG','Tempered Glass Mid-Tower ATX Case',true, 1, 2,NULL,'false'),
('7000D AIRFLOW',269,NULL,'1648243654060_img_.JPG','Full-Tower ATX PC Case ',true, 1, 2,NULL,'false'),
('4000D AIRFLOW',94,NULL,'1648243737847_img_.JPG','Tempered Glass Mid-Tower ATX Case',true, 1, 1,NULL,'false'),
('iCUE 220T',109,NULL,'1648243966796_img_.JPG','RGB Airflow Tempered Glass Mid-Tower Smart Case',true, 1, 3,NULL,'false'),
('iCUE 5000X',349,NULL,'1648244070511_img_.JPG','RGB QL Edition Mid-Tower ATX Case —true ',true, 1, 3,NULL,'false'),
('Crystal Series 680X',274,NULL,'1648244176570_img_.JPG','RGB ATX High Airflow Tempered Glass Smart Case ',true, 1, 1,NULL,'false'),
('iCUE 220T ',124,NULL,'1648244257950_img_.JPG','RGB Tempered Glass Mid-Tower Smart Case — Black',true, 1, 1,NULL,'false'),
('Carbide Series SPEC-DELTA',104,NULL,'1648244398405_img_.JPG','RGB Tempered Glass Mid-Tower ATX Gaming Case — Black',true, 1, 2,NULL,'false'),
('4000D Tempered ',94,NULL,'1648244500519_img_.JPG','Glass Mid-Tower ATX Case — Black',true, 1, 3,NULL,'false'),
('Carbide Series',64,NULL,'1648244650418_img_.JPG','SPEC-04 Tempered Glass Mid-Tower Gaming Case — Black/Red',true, 1, 1,NULL,'false'),
('iCUE 5000X ',249,NULL,'1648244761798_img_.JPG','RGB SIGNATURE SERIES Mid-Tower Smart Case — Glitch',true, 1, 3,NULL,'false'),
('M65 PRO RGB FPS',80,NULL,'1648601987667_img_.png','The M65 PRO RGB is a competition-grade FPS gaming',true, 4, 2,NULL,'false'),
('IRONCLAW RGB WIRELESS',70,NULL,'1648615794337_img_.png','Ratón para juegos',true, 4, 2,NULL,'false'),
('M65 RGB ELITE ajustable — Blanco (EU)',90,NULL,'1648616418716_img_.png','Ratón para juegos FPS',true, 4, 2,NULL,'false'),
('KATAR PRO Wireless (EU)',68,NULL,'1648616764663_img_.png','Ratón para juegos',true, 4, 2,NULL,'false'),
('HARPOON RGB PRO (EU)',83,NULL,'1648616938700_img_.png','FPS/MOBA Ratón para juegos',true, 4, 2,NULL,'false'),
('M65 RGB ELITE ajustable — Negro',65,NULL,'1648617164281_img_.png','Ratón para juegos FPS',true, 4, 2,NULL,'false'),
('DARK CORE RGB PRO SE',102,NULL,'1648617470851_img_.png','Ratón para juegos Inalámbrico ',true, 4, 2,NULL,'false'),
('PRO CHAMPION SERIES (EU)',88,NULL,'1648617710975_img_.png','Ratón óptico para juegos.',true, 4, 2,NULL,'false'),
('GLAIVE RGB PRO aluminio (EU)',64,NULL,'1648617963505_img_.png','Ratón para juegos',true, 4, 2,NULL,'false'),
('HARPOON RGB',95,NULL,'1648618215001_img_.png','Ratón para juegos',true, 4, 2,NULL,'false'),
('HARPOON RGB WIRELESS',77,NULL,'1648618367768_img_.png','Ratón para juegos',true, 4, 2,NULL,'false'),
('K70 RGB PRO',169,NULL,'1648826324864_img_.png','Mechanical Gaming Keyboard ',true, 2, 2,NULL,'false'),
('K55 RGB PRO',49,NULL,'1648826599173_img_.png','Gaming keyboard',true, 2, 2,NULL,'false'),
('K70 RGB MK.2 SE',100,NULL,'1648827047867_img_.png','Mechanical Gaming Keyboard - CHERRY ',true, 2, 2,NULL,'false'),
('K95 RGB PLATINUM',130,NULL,'1648827441629_img_.png','Mechanical Gaming Keyboard — CHERRY',true, 2, 2,NULL,'false'),
('K70 LUX RGB',70,NULL,'1648827722190_img_.PNG','Mechanical Gaming Keyboard — CHERRY',true, 2, 2,NULL,'false'),
('K63 COMPACT',110,NULL,'1648827957274_img_.PNG','Mechanical Gaming Keyboard — CHERRY',true, 2, 2,NULL,'false'),
('HS35 HEADSET',100,NULL,'1648828505001_img_.PNG','Stereo Gaming — Carbon',true, 3, 2,NULL,'false'),
('HS70 PRO WIRELESS',150,NULL,'1648828787471_img_.PNG','Gaming Headset — Cream',true, 3, 2,NULL,'false'),
('HS75 XB WIRELESS',120,NULL,'1648829028538_img_.png','Gaming Headset for Xbox',true, 3, 2,NULL,'false'),
('HS60 HAPTIC STEREO',150,NULL,'1648829568360_img_.png','Gaming Headset with Haptic Bass',true, 3, 2,NULL,'false'),
('HS45 SURROUND',95,NULL,'1648829846429_img_.PNG','Gaming Headset — Carbon',true, 3, 2,NULL,'false'),
('VOID PRO ',150,NULL,'1648830246666_img_.PNG','Premium Gaming Headset',true, 3, 2,NULL,'false'),
('VIRTUOSO RGB WIRELESS',110,NULL,'1648830472314_img_.png','Fidelity Gaming Headset',true, 3, 2,NULL,'false'),
('HS50 PRO STEREO',130,NULL,'1648830658613_img_.png','Gaming Headset — Carbon',true, 3, 2,NULL,'false'),
('HS80 RGB WIRELESS',100,NULL,'1648830804699_img_.png','Premium Gaming Headset ',true, 3, 2,NULL,'false'),
('Wave 3',200,NULL,'1648832182716_img_.png','Premium microphone and digital mixing solution',true, 6, 2,NULL,'false');

/*CreaciOn de Un Usuario*/

INSERT INTO newsoft6.users
(name, lastname, email, password, image, newsletter, id_shopping_car)
VALUES('CRISTIAN', 'CASTRO BRIJALDO', 'blaser89@gmail.com', '$2a$10$Wpk7zmv3jq0SIMlktYpde.3S.e35.Ka8N.UGDg8HBUsIVcYHDP4Ba', '1650734300167_img_.jpg', 0, 1);

SELECT id_users, name, lastname, email, password, image, newsletter, id_shopping_car
FROM newsoft6.users;

/*CreaciOn de relaciOn entre usuario y productos en el carrito*/

INSERT INTO newsoft6.car
(quantity, id_users, id_products, car)
VALUES(2, 2, 2, 'true');

SELECT id_products_car, quantity, id_users, id_products, car
FROM newsoft6.car;

/*CreaciOn de Carrito de compras*/

INSERT INTO newsoft6.shopping_car
(quantity, total, address, payment_mehtod, phone)
VALUES(2, 220, 'Callex#z-38', 'CreditCard', '+5731354654654');

SELECT id_shopping_car, quantity, total, address, payment_mehtod, phone
FROM newsoft6.shopping_car;





