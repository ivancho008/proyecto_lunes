import { Controller, Get } from '@nestjs/common';

@Controller('vendors')
export class VendorsController {

    @Get()
    consultarVendors(){
        return"aqui estaran todos los vendors"
    }
}
