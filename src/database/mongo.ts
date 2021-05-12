import { Database, MongoDBConnector } from 'https://deno.land/x/denodb/mod.ts';

import Config from './models/Config.ts';

const connector = new MongoDBConnector({
  database: 'contab',
  db: 'contab',
  tls: true,
  servers: [
    {
      host: 'functional-contab-shard-00-01.oz2wt.mongodb.net',
      port: 27017
    }
  ],
  credential: {
    username: 'contab_admin_db',
    password: 'ZtlZqEjcGBfmDhVO',
    db: 'contab',
    mechanism: 'SCRAM-SHA-1'
  }
});


const db = new Database(connector);

db.link([Config]);

await db.sync();

export default db;
