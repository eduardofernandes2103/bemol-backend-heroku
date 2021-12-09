import { Length } from 'class-validator';

export class CreateCustomerDto {

    @Length(1, 127)
    name: string;

    @Length(1, 127)
    email: string;

    @Length(8, 127)
    password_hash: string;

    @Length(8, 10)
    zipcode: string;
    street: string;
    number: number;
    complement: string;
    city: string;
}
