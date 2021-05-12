import { Application } from "./deps.ts";

import configurationsRouter from './routes/configuration.routes.ts';
import entriesRouter from './routes/entries.routes.ts';

import './database/mongo.ts';

const app = new Application();

app.use(configurationsRouter.routes())
app.use(configurationsRouter.allowedMethods());
app.use(entriesRouter.routes());
app.use(entriesRouter.allowedMethods());

app.listen({ port: 8000 });

console.log(`Server is running on port: 8000`)