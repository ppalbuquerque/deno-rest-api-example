import { Application } from "./deps.ts";

import configurationsRouter from './routes/configuration.routes.ts';
import './database/mongo.ts';

const app = new Application();

app.use(configurationsRouter.routes())
app.use(configurationsRouter.allowedMethods());

app.listen({ port: 8000 });

console.log(`Server is running on port: 8000`)