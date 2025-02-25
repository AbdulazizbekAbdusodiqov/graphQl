import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Customer } from 'src/customer/entities/customer.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Order, Customer])],
  providers: [OrderResolver, OrderService],
  exports:[OrderService]
})
export class OrderModule {}
