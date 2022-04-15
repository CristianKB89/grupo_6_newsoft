const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const productsFilePath = path.join(__dirname, '../data/products.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controlador = {
    creacion: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let productoCart = productos.filter(producto => producto.car == "true");

        let total = 0;
        if(productoCart.length > 0){
            let preciosString = [];
            for(let i = 0; i < productoCart.length; i++){
                preciosString.push(productoCart[i].precio);
                var preciosInt = preciosString.map(function(item) {
                return parseInt(item, 10);
                });
            }
            total = preciosInt.reduce(function(a, b) { return a + b; }, 0);
        }else{ 
            total = 0;
        }

        res.render(path.resolve(__dirname, '../views/products/formularioCreacionDeProducto.ejs'), { productoCart , total });
    },

    crearProducto: (req, res) => {

        const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render((path.resolve(__dirname, '../views/products/formularioCreacionDeProducto.ejs')), {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
     
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let image

        if(req.file != undefined){
			image = req.file.filename
		} else {
			image = 'default.jpg'
		}

		// capturar los datos del producto
		const nuevoProducto = {
			id: productos.length == 0 ? 1 : productos[productos.length -1].id +1,
			nombre: req.body.nombre,
			marca: req.body.marca,
			precio: req.body.precio,
			categoria: req.body.categoria,
            color:req.body.color,	
            accesorios:req.body.accesorios,	
            imagen:image,	
            descripcion:req.body.descripcion,
            visible: true,
            car: false
		};
		// guardarlo BD
		productos.push(nuevoProducto)
		// guardar los productos en archivo.json
		fs.writeFileSync( productsFilePath , JSON.stringify(productos, null, 2))

		// redireccionar al usuairo /products
		res.redirect('/products/productdetail/'+ req.params.id)
    },

 
    edicion: (req, res) => {
        let idProducto = req.params.id;
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let productoEditar = productos.find( products => products.id == idProducto)

        let productoCart = productos.filter(producto => producto.car == "true");

        let total = 0;
        if(productoCart.length > 0){
            let preciosString = [];
            for(let i = 0; i < productoCart.length; i++){
                preciosString.push(productoCart[i].precio);
                var preciosInt = preciosString.map(function(item) {
                return parseInt(item, 10);
                });
            }
            total = preciosInt.reduce(function(a, b) { return a + b; }, 0);
        }else{ 
            total = 0;
        }

        res.render((path.resolve(__dirname, '../views/products/formularioEdicionDeProducto.ejs')), {productoEditar:productoEditar , productoCart , total });
       
    },

    editarProducto:(req, res) => {

        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let id = req.params.id;
        let productoEditar = productos.find( products => products.id == id);

        const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
            let productoCart = productos.filter(producto => producto.car == "true");

            let total = 0;
            if(productoCart.length > 0){
                let preciosString = [];
                for(let i = 0; i < productoCart.length; i++){
                    preciosString.push(productoCart[i].precio);
                    var preciosInt = preciosString.map(function(item) {
                    return parseInt(item, 10);
                    });
                }
                total = preciosInt.reduce(function(a, b) { return a + b; }, 0);
            }else{ 
                total = 0;
            }
			return res.render((path.resolve(__dirname, '../views/products/formularioEdicionDeProducto.ejs'),{ total, productoCart }), {
				errors: resultValidation.mapped(),
				oldData: req.body,
                productoEditar:productoEditar
			});
		}

        let image
	
		if(req.file != undefined){
			image = req.file.filename
		} else {
			image = productoEditar.imagen
		}
        
        const productoOculto = productos.map(producto =>{
            
            if (producto.id == id){
                producto.nombre = req.body.nombre;
                producto.marca = req.body.marca;
                producto.precio = req.body.precio;
                producto.categoria = req.body.categoria;
				producto.color = req.body.color;
				producto.accesorios = req.body.accesorios;
				producto.imagen = image;
				producto.descripcion = req.body.descripcion;
                producto.visible = true;
                producto.car = false;
            }
            return producto;
            })
            

            fs.writeFileSync( productsFilePath , JSON.stringify(productoOculto, null, 2))

            res.redirect('/products/productdetail/'+ req.params.id)
        
    },

    eliminar : (req, res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let idProducto = req.params.id
		
		let productoFiltrado = productos.filter( producto => producto.id != idProducto)

		fs.writeFileSync( productsFilePath , JSON.stringify(productoFiltrado, null, 2))

        res.redirect('/products?categoria=catalogo')
	},

    productDetail: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let productoCart = productos.filter(producto => producto.car == "true");

        let total = 0;
        if(productoCart.length > 0){
            let preciosString = [];
            for(let i = 0; i < productoCart.length; i++){
                preciosString.push(productoCart[i].precio);
                var preciosInt = preciosString.map(function(item) {
                return parseInt(item, 10);
                });
            }
            total = preciosInt.reduce(function(a, b) { return a + b; }, 0);
        }else{ 
            total = 0;
        }

        let idProducto = req.params.id;
        
        const productoDetalle = productos.find( producto => producto.id == idProducto)

        if (!productoDetalle) {
			res.redirect('/products?categoria=catalogo')
		}

        // Renderiza el detalle del producto
        res.render(path.resolve(__dirname, '../views/products/productDetail.ejs'), { productoDetalle , total, productoCart });
    },

    ocultarProducto: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let id = req.params.id;
        const productoOculto = productos.map(producto =>{
            
            if (producto.id == id){
                producto.visible = false;
            }
            return producto;
            })

            fs.writeFileSync( productsFilePath , JSON.stringify(productoOculto, null, 2))

            res.redirect('/products?categoria=catalogo');
    },
    mostrarProducto: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let id = req.params.id;
        const productoOculto = productos.map(producto =>{
            if (producto.id == id){
                producto.visible = true;
            }
            return producto;
            })
            fs.writeFileSync( productsFilePath , JSON.stringify(productoOculto, null, 2))
            res.redirect('/products?categoria=catalogo');
    },
    productosOcultos: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let productoCart = productos.filter(producto => producto.car == "true");

        let total = 0;
        if(productoCart.length > 0){
            let preciosString = [];
            for(let i = 0; i < productoCart.length; i++){
                preciosString.push(productoCart[i].precio);
                var preciosInt = preciosString.map(function(item) {
                return parseInt(item, 10);
                });
            }
            total = preciosInt.reduce(function(a, b) { return a + b; }, 0);
        }else{ 
            total = 0;
        }

        const ocultos = productos.filter( product => product.visible === false );
        res.render(path.resolve(__dirname, '../views/products/productsOcultos.ejs'), { ocultos , total, productoCart });
    }
}

module.exports = controlador;