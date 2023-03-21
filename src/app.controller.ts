import { Controller, Get,Post,Body,Put,Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.models';
import { UserupdateDto } from './userUpdate.dto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

@Post()
async createUser(@Body() userDto:User){
  console.log(userDto);
  return this.appService.createUser(userDto)
}
@Get('users')
readUser(){
  return this.appService.readUser()
}
@Put('users/:id')
async updateUser(@Param('id') id:string, @Body() updateData:UserupdateDto):Promise<User>{
  return this.appService.updateUser(id,updateData)
}
@Delete('users/:id')
async deleteUser(@Param('id') id:string){
  return this.appService.deleteUser(id)
}

}
