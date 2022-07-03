import { Repository } from 'typeorm';
import { orderList } from './dto/orderlist.dto';
import { UpdateOrderListDto } from './dto/update-order-list.dto';
import { OrderList } from './entities/order-list.entity';
export declare class OrderListService {
    private orders;
    constructor(orders: Repository<OrderList>);
    uploadFile(data: orderList[]): Promise<"Success" | "Error">;
    lineup(id: number, data: any): void;
    fg(id: number, data: any): void;
    con(id: number, data: any): void;
    getPlanner(): Promise<OrderList[]>;
    getLineup(): Promise<OrderList[]>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateData: UpdateOrderListDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
