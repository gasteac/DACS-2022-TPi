import { Module } from "@nestjs/common";
import { UserController } from "./controllers/user.controller";
import { UserProvider } from "./providers/users.provider";

@Module ({
    imports: [],
    controllers: [UserController],
    providers: [...UserProvider],
    exports: [],

})
export class UsersModule {}