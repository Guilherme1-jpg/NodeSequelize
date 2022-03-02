import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface UserInstance extends Model {
    id: number;
    name: string;
    age: number;
}

export const User = sequelize.define<UserInstance>("User", {
    id: {
        primaryKey: true,
        autoIncrement : true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        get(){
            const raw = this.getDataValue('name');
            return raw[0].toUpperCase()+ raw.slice(1);
        }
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18
    }
   
}, {
    tableName: 'users',
    timestamps: false
});