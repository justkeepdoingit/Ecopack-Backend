"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderListService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_list_entity_1 = require("./entities/order-list.entity");
let OrderListService = class OrderListService {
    constructor(orders) {
        this.orders = orders;
    }
    async uploadFile(data) {
        try {
            let Id = await this.orders.query('SELECT * FROM order_list ORDER BY id DESC LIMIT 1');
            let orderId = Id[0].id;
            let uploadData = data;
            const date = require('date-and-time');
            let saveData = [];
            uploadData.forEach(item => {
                orderId++;
                let newData = {
                    id: orderId,
                    date: date.format(new Date(item.date), 'YYYY-MM-DD'),
                    so: item.so,
                    po: item.po,
                    name: item.name,
                    item: item.item,
                    itemdesc: item.itemdesc,
                    qty: item.qty
                };
                saveData.push(newData);
            });
            this.orders.save(saveData);
            return 'Success';
        }
        catch (error) {
            return 'Error';
        }
    }
    lineup(id, data) {
        this.orders.update(id, data);
    }
    fg(id, data) {
        this.orders.update(id, data);
    }
    con(id, data) {
        this.orders.update(id, data);
    }
    getPlanner() {
        return this.orders.createQueryBuilder().
            where('lineup = false AND converting = false AND fg = false AND delivery = false').
            getMany();
    }
    getLineup() {
        return this.orders.createQueryBuilder().
            where('lineup = true AND converting = false AND fg = false AND delivery = false').
            getMany();
    }
    findAll() {
        return `This action returns all orderList`;
    }
    findOne(id) {
        return `This action returns a #${id} orderList`;
    }
    update(id, updateData) {
        return this.orders.update(id, updateData);
    }
    remove(id) {
        return `This action removes a #${id} orderList`;
    }
};
OrderListService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_list_entity_1.OrderList)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrderListService);
exports.OrderListService = OrderListService;
//# sourceMappingURL=order-list.service.js.map