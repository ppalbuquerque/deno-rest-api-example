import { Router } from '../deps.ts';
import { createEntry } from '../controllers/EntryController.ts';

const router = new Router({ prefix: '/entry' })

router.post('/', createEntry);

export default router;