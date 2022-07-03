/// <reference types="multer" />
import { OrderListService } from './order-list.service';
import { UpdateOrderListDto } from './dto/update-order-list.dto';
import { orderList } from './dto/orderlist.dto';
import { Response } from 'express';
export declare class OrderListController {
    private readonly orderListService;
    constructor(orderListService: OrderListService);
    getPlanners(): Promise<import("./entities/order-list.entity").OrderList[]>;
    getLineup(): Promise<import("./entities/order-list.entity").OrderList[]>;
    updateToLineup(data: orderList[]): void;
    updateToFG(data: orderList[]): void;
    updateToCon(data: orderList[]): void;
    fileUploader(file: Express.Multer.File, responses: Response): Promise<void>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOrderListDto: UpdateOrderListDto): Promise<import("typeorm").UpdateResult>;
    updateOrder(id: number, updateData: orderList): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}
