import { RouterContext } from '../deps.ts';

import createNewEntry from '../services/createNewEntryService.ts';

export const createEntry = async (ctx: RouterContext) => {
  const result = ctx.request.body({ type: "json" });
  const { actualValue, date } = await result.value;

  const newEntry = await createNewEntry({ actualValue, date });
  ctx.response.body = { newEntry };
}