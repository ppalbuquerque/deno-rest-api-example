import { Model } from '../deps.ts';

import Entry from '../database/models/Entry.ts';
import Config from '../database/models/Config.ts';

interface CreateNewEntryDTO {
  actualValue: number;
  date: Date;
}

export default async function createNewEntry({ actualValue, date }: CreateNewEntryDTO): Promise<Model> {
  const config = await Config.first();
  const lastEntry = await Entry.select('acumulated', 'date').orderBy({date: 'desc'}).limit(10).all();

  let commission = 100;

  if (config.commission) {
    commission = config.commission as number;
  }

  const profit = actualValue * commission;

  let previousAcumulated = 0;

  if (lastEntry.length > 0) {
    previousAcumulated = lastEntry[0].acumulated as number;
  }

  const acumulated = previousAcumulated + actualValue;

  const newEntry = await Entry.create({ 
    profit,
    acumulated,
    date: new Date(date),
    dayValue: actualValue,
  })

  return newEntry;
}