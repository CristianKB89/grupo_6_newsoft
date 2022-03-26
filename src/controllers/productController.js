const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controlador = {
    creacion: (req, res) => {
        res.render(path.resolve(__dirname, '../views/products/formularioCreacionDeProducto.ejs'));
    },

    crearProducto: (req, res) => {
     
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        const filename = req.file.filename ;

		// capturar los datos del usuario
		const nuevoProducto = {
			id: productos.length == 0 ? 1 : productos[productos.length -1].id +1,
			nombre: req.body.nombre,
			marca: req.body.marca,
			precio: req.body.precio,
			categoria: req.body.categoria,
            color:req.body.color,	
            accesorios:req.body.accesorios,	
            imagen:filename,	
            descripcion:req.body.descripcion,
            visible: true
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

        res.render((path.resolve(__dirname, '../views/products/formularioEdicionDeProducto.ejs')), {productoEditar:productoEditar});
       
    },

    editarProducto:(req, res) => {
       
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        const filename = req.file.filename ;

        let id = req.params.id;
        
        const productoOculto = productos.map(producto =>{
            
            if (producto.id == id){
                producto.nombre = req.body.nombre;
                producto.marca = req.body.marca;
                producto.precio = req.body.precio;
                producto.categoria = req.body.categoria;
				producto.color = req.body.color;
				producto.accesorios = req.body.accesorios;
				producto.imagen = filename;
				producto.descripcion = req.body.descripcion;
                producto.visible = req.body.visible;
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

        res.redirect('/products')
	},

    productDetail: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let idProducto = req.params.id;
        
        const productoDetalle = productos.find( producto => producto.id == idProducto)

        if (!productoDetalle) {
			res.redirect('/products')
		}

        // Renderiza el detalle del producto
        res.render(path.resolve(__dirname, '../views/products/productDetail.ejs'), { productoDetalle });
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

            res.redirect('/products');
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
            res.redirect('/products');
    },
    productosOcultos: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        const ocultos = productos.filter( product => product.visible === false );
        res.render(path.resolve(__dirname, '../views/products/productsOcultos.ejs'), { ocultos });
    }
}

module.exports = controlador;