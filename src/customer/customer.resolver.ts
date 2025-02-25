import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { Customer } from './entities/customer.entity';

@Resolver('Customer')
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @Mutation(()=>Customer)
  createCustomer(@Args('createCustomerInput') createCustomerInput: CreateCustomerInput) {
    return this.customerService.create(createCustomerInput);
  }

  @Query(()=>[Customer])
  findAllCustomers() {
    return this.customerService.findAll();
  }

  @Query(()=>Customer)
  findOneCustomer(@Args('id',{ type: () => ID }) id: number) {
    return this.customerService.findOne(id);
  }

  @Mutation(()=>Customer)
  updateCustomer(@Args('updateCustomerInput') updateCustomerInput: UpdateCustomerInput) {
    return this.customerService.update(updateCustomerInput.id, updateCustomerInput);
  }

  @Mutation(()=>Number)
  removeCustomer(@Args('id',{ type: () => ID }) id: number) {
    return this.customerService.remove(id);
  }
}
