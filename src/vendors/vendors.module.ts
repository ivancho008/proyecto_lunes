import { Module } from '@nestjs/common';
import { VendorsController } from './vendors/vendors.controller';

@Module({
  controllers: [VendorsController]
})
export class VendorsModule {}
