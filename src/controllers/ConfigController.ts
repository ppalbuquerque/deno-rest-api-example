import { RouterContext } from '../deps.ts';

import Config from '../database/models/Config.ts';

export const getConfig = async (ctx: RouterContext) => {
  try {
    const config = await Config.create({ commission: 1500 });
    ctx.response.body = { config }
  } catch (error) {
    console.error('Error: ', error);
  }
}