/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const TransactionSchema = new Schema({
    montant: Number,
    categorie: String,
    description: String,
  date: { type: Date, default: Date.now() },
  userId: { type: Schema.Types.ObjectId, ref: 'User' } ,// Reference to the User schema
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }]

});

