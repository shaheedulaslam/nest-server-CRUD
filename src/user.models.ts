import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"


export type UserDocument = User & Document

@Schema()
export class User{
    @Prop({unique:true})
    name: string

    @Prop()
    Age: number

    @Prop({unique:true})
    email : string

    @Prop()
    place : string
}

export const UserSchema = SchemaFactory.createForClass(User)