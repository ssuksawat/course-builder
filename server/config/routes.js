const config = require('./config');
const CatalogRouter = require('../catalog/catalog.routes');

module.exports = (app) => {
  app.use('/api', CatalogRouter);

  // Always send back index.html for Client-side routing
  app.get('*', (req, res) => {
    res.sendFile(`${config.rootPath}/public/index.html`);
  });
};
