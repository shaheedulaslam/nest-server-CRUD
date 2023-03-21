import { Injectable } from '@nestjs/common';
import { User,UserDocument } from './user.models';
import { Model } from 'mongoose';
import {InjectModel} from '@nestjs/mongoose'

@Injectable()
export class AppService {
constructor(
  @InjectModel('user')private readonly userModel: Model<UserDocument>
  ){}
  //creating user
// async createUser(user:User):Promise<User>{
  async createUser(user:User){
  // const newUser = new this.userModel(user)
  try {
  const newUser = new this.userModel({
    name:user.name,
    Age:user.Age,
    place:user.place,
    email:user.email
  })
  // return newUser.save()
    await newUser.save()
  } catch (error) {
    console.log(error);
  }
 
}
// reading the user
async readUser(){
  return this.userModel.find({}).then(user=>{
    console.log(user);
    return user
  }).catch((err)=>{console.log(err)})
}
//updating data

async updateUser(id,data):Promise<User>{
  return this.userModel.findByIdAndUpdate(id,data,{new:true})
}
// deleting the data
async deleteUser(id){
  return this.userModel.findByIdAndDelete(id)
}

}
