import { Post, Body, Controller, Inject } from "@nestjs/common";
import { User } from "../entitities/users.entity";

@Controller ('users')
export class UserController {
    constructor(@Inject('USER_REPOSITORY') private userRepository: User ){ 

    } 
    @Post()
    async createUser(@Body() user: User) {
        const newUser =  new User( {...user} );
        await newUser.save();
        return newUser;
    }
    }