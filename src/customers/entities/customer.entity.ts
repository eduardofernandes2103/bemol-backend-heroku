import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password_hash: string;

  @Prop({ required: true })
  zipcode: string;

  @Prop({ required: true })
  street: string;

  @Prop()
  number: number;

  @Prop()
  complement: string;

  @Prop({ required: true })
  city: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);