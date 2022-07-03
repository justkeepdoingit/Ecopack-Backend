import { Repository } from 'typeorm';
import { CreateUserAccountDto } from './dto/create-user-account.dto';
import { userDTO } from './dto/userAcc.dto';
import { UserAccount } from './entities/user-account.entity';
export declare class UserAccountService {
    private readonly accounts;
    constructor(accounts: Repository<UserAccount>);
    registerAcc(data: any): void;
    loginAcc(data: any): Promise<UserAccount>;
    create(createUserAccountDto: CreateUserAccountDto): string;
    findAll(): Promise<UserAccount[]>;
    findOne(id: any): Promise<UserAccount>;
    update(id: number, updateAcc: userDTO): void;
    remove(id: number): string;
}
