import { Router } from 'express';
import ActionsMongo from '../Controllers/controller.mongo.js';

const viewsRoutes = Router();

// Ruta base
viewsRoutes.get('/', (req, res) => {
    res.render('home');
});

// Rutas de productos
viewsRoutes.get('/products', ActionsMongo.getAll);
viewsRoutes.get('/product/:id', ActionsMongo.getOne);
viewsRoutes.get('/addproducts', (req, res) => {
    res.render('addProduct');
});

// Rutas de carritos
viewsRoutes.get('/carts', ActionsMongo.getAllCarts);
viewsRoutes.get('/cart/:id', ActionsMongo.getOneCart);

// Rutas de autenticación
viewsRoutes.get('/login', (req, res) => {
    res.render('login');
});
viewsRoutes.get('/register', (req, res) => {
    res.render('register');
});
viewsRoutes.get('/profile', (req, res) => {
    res.render('profile', {
        user: req.session.user
    });
});






export default viewsRoutes