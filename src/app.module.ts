import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://eduardofernandes2103:duda2015@cluster0.r6lg0.mongodb.net/test'
    ),
    CustomersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
