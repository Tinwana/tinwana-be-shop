
import routes from "./routes.js";

function route(app) {
  app.use('/api', routes)
}
export default route;