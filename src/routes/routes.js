
import express from "express";
import apiController from "../app/controller/apiController.js";
const routes = express.Router();


routes.get('/products/search',apiController.productSearch);
routes.post('/products/create',apiController.productAdd);
routes.put('/products/:id/update',apiController.productUpdate);
routes.delete('/products/:id/destroy',apiController.productDestroy);
routes.delete('/products/:id',apiController.productSoftDelete);
routes.get('/products/:id',apiController.productId);
routes.get('/user-fav',apiController.playlist);
routes.get('/users',apiController.users);
routes.get('/products',apiController.product);


export default routes;