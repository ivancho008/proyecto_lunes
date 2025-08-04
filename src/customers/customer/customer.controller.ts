import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomerController {

    // endpoint: punto de entrada
    //que otro proyecto va a utilizar 
    //va a recibir request http de a que 
    //proyecto
    //se programa con una funcion 
    //con sintaxis del lenguaje de programación
    @Get()
    consultarCustomers(){
        return"retromamos los customers"
    }
}
