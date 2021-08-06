import establishmentRouter from "./establishment.routes";

const express = require('express');

const routes = express.Router();

routes.use('/api/establishment',establishmentRouter)


export default routes;