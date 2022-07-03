import { UserAccountService } from './user-account.service';
import { CreateUserAccountDto } from './dto/create-user-account.dto';
import { Response } from 'express';
import { userDTO } from './dto/userAcc.dto';
export declare class UserAccountController {
    private readonly userAccountService;
    constructor(userAccountService: UserAccountService);
    registerAcc(registerAccs: any): Promise<void>;
    loginAcc(loginAcc: any, response: Response): Promise<import("./entities/user-account.entity").UserAccount>;
    logout(response: Response): void;
    update(id: string, useracc: userDTO, response: Response): void;
    getUsers(id: number, response: Response): Promise<void>;
    getAllUsers(): Promise<import("./entities/user-account.entity").UserAccount[]>;
    create(createUserAccountDto: CreateUserAccountDto): string;
    findAll(): Promise<import("./entities/user-account.entity").UserAccount[]>;
    findOne(id: string): Promise<import("./entities/user-account.entity").UserAccount>;
    remove(id: string): string;
}
