const CatalogRouter = require('express').Router();
const CatalogCtrl = require('./catalog.controller');

CatalogRouter.get('/catalog', CatalogCtrl.getCatalog);
CatalogRouter.get('/bigcatalog', CatalogCtrl.getBigCatalog);

module.exports = CatalogRouter;
