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

  @Get(':id / :name')
  findOneUser(
    @Param('id') id:number,
     @Param('name') id:number
    ){
    const response = await this.userService.findOneUser(id,name);
    return respuesta; 
    
  }

  @Put(':id')
  update(@Param('iduser') id:number, @Body() payload:any){
    const response = await this.userService.actualizarUaser(id,playload);
    return response;
  }
}
