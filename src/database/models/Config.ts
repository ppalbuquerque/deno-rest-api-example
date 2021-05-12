import { Model, DataTypes } from 'https://deno.land/x/denodb/mod.ts';

class Config extends Model {
  static table = 'config';

  static fields = {
    _id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    commission: DataTypes.INTEGER,
  }

  static defaults = {
    commission: 0,
  }
}

export default Config;