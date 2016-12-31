import Express from 'express.oi'
import Db from './db/connection'

export default class {
  constructor() {
    this.server = Express();
    this.server.use(Express.static('static'));
  }

  start() {
    this.server.http().io();
    this.server.io.session({
      secret: process.env.SECRET || 'this is just a random secret for now',
      resave: false,
      saveUninitialized: true
    });
    let port = process.env.PORT || 3000;
    console.log(`Starting server on ${port}`);
    this.server.listen(port);
    this.mapRoutes();
  }

  mapRoutes() {

  }
}
