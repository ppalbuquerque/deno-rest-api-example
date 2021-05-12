import { Router } from '../deps.ts';
import { getConfig } from '../controllers/ConfigController.ts';

const router = new Router({ prefix: '/config' });

router.get('/', getConfig)

export default router;