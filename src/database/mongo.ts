import { dotEnvConfig, Database, MongoDBConnector } from '../deps.ts'

import ConfigModel from './models/Config.ts';
import EntryModel from './models/Entry.ts';

dotEnvConfig({ safe: true, export: true })

const connector = new MongoDBConnector({
  database: Deno.env.get('MONGODB_DB') || '',
  db: Deno.env.get('MONGODB_DB') || '',
  tls: true,
  servers: [
    {
      host: Deno.env.get('MONGODB_HOST') || '',
      port: 27017
    }
  ],
  credential: {
    username: Deno.env.get('MONGODB_USER') || '',
    password: Deno.env.get('MONGODB_PASS') || '',
    db: Deno.env.get('MONGODB_DB') || '',
    mechanism: 'SCRAM-SHA-1'
  }
});


const db = new Database(connector);

db.link([ConfigModel, EntryModel]);

await db.sync();

export default db;
