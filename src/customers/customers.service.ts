import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer, CustomerDocument } from './entities/customer.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class CustomersService {

  constructor(@InjectModel(Customer.name) private customerModel: Model<CustomerDocument> ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<CreateCustomerDto |  object> {
    const reqUsers = this.findAll()
    const allUsers = await reqUsers
    let isNotUnique: boolean
    let newUser: CreateCustomerDto  = createCustomerDto

    newUser.password_hash = bcrypt.hashSync(newUser.password_hash, 8)
    
    isNotUnique = allUsers.some(customer => customer.email === createCustomerDto.email)  
       
    if(!isNotUnique){
      const user = new this.customerModel(newUser)
      return user.save()
    }

    return {error: "this email already exist"}
  }

  findAll() {
    return this.customerModel.find() 
  }

  remove(id: string) {
    return this.customerModel.deleteOne({
      _id: id,
    })
    .exec();
  }
}
