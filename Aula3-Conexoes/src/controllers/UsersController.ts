import { UsersService } from "../services/UsersService"
import { Request, Response } from "express";

class UsersController {

    async create(request: Request, response: Response) {
        const { email } = request.body;
        
        const userService = new UsersService();

        const user = await userService.create(email);

        return response.json(user);
    }
}

export { UsersController }