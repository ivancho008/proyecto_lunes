import { Controller, 
        Get,
        Post,
        Put,
        Patch,
        Delete } from '@nestjs/common';

@Controller('customers')
export class CustomerController {

    // endpoint: punto de entrada
    //que otro proyecto va a utilizar 
    //va a recibir request http de a que 
    //proyecto
    //se programa con una funcion 
    //con sintaxis del lenguaje de programación
    @Post()
    crearCustomer(){
        return"aqui se va a crear un customers"
    }
    @Get()
    consultarCustomers(){
        return"retromamos los customers"
    }
}
