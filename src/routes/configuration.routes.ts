import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getConfig } from '../controllers/Configs.ts';

const router = new Router({ prefix: '/config' });

router.get('/', getConfig)

export default router;