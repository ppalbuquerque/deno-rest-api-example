import { Model, DataTypes } from '../../deps.ts';

class Entry extends Model {
  static table = 'entries';

  static fields = {
    _id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dayValue: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    acumulated: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  } 
}

export default Entry;