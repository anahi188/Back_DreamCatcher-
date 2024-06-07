import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getHello(): string {
    const response = await this.userService.findAll ();
    return respuesta; 
  }

  @Get(':id')
  findOneUser(
    @Param('id') id:number
    ){
    const response = await this.userService.findOneUser(id);
    return respuesta; 
    
  }

  @Post()
  create(@Body() payload:any){
    const response = await this.userService.actualizarUaser(payload)
    return payload;
  }
}
