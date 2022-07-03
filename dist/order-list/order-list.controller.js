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
exports.OrderListController = void 0;
const common_1 = require("@nestjs/common");
const order_list_service_1 = require("./order-list.service");
const platform_express_1 = require("@nestjs/platform-express");
const update_order_list_dto_1 = require("./dto/update-order-list.dto");
const orderlist_dto_1 = require("./dto/orderlist.dto");
let OrderListController = class OrderListController {
    constructor(orderListService) {
        this.orderListService = orderListService;
    }
    async getPlanners() {
        return await this.orderListService.getPlanner();
    }
    async getLineup() {
        return await this.orderListService.getLineup();
    }
    updateToLineup(data) {
        data.forEach(element => {
            let newData = {
                lineup: true
            };
            this.orderListService.lineup(element.id, newData);
        });
    }
    updateToFG(data) {
        data.forEach(element => {
            let newData = {
                fg: true
            };
            this.orderListService.fg(element.id, newData);
        });
    }
    updateToCon(data) {
        data.forEach(element => {
            let newData = {
                fg: true
            };
            this.orderListService.con(element.id, newData);
        });
    }
    async fileUploader(file, responses) {
        const csv = require('csv-parser');
        const fs = require('fs');
        const results = [];
        let message = 'noError';
        await fs.createReadStream(`./csvFileUploaded/${file.filename}`)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', async () => {
            this.orderListService.uploadFile(results);
        });
    }
    findAll() {
        return this.orderListService.findAll();
    }
    findOne(id) {
        return this.orderListService.findOne(+id);
    }
    update(id, updateOrderListDto) {
        return this.orderListService.update(+id, updateOrderListDto);
    }
    updateOrder(id, updateData) {
        return this.orderListService.update(id, updateData);
    }
    remove(id) {
        return this.orderListService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)('/planners'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderListController.prototype, "getPlanners", null);
__decorate([
    (0, common_1.Get)('lineupOrders'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderListController.prototype, "getLineup", null);
__decorate([
    (0, common_1.Post)('/lineup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], OrderListController.prototype, "updateToLineup", null);
__decorate([
    (0, common_1.Post)('/fg'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], OrderListController.prototype, "updateToFG", null);
__decorate([
    (0, common_1.Post)('/convert'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], OrderListController.prototype, "updateToCon", null);
__decorate([
    (0, common_1.Post)('/uploads'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("csv", {
        dest: './csvFileUploaded'
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderListController.prototype, "fileUploader", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderListController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderListController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_order_list_dto_1.UpdateOrderListDto]),
    __metadata("design:returntype", void 0)
], OrderListController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('/updateOrder/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, orderlist_dto_1.orderList]),
    __metadata("design:returntype", void 0)
], OrderListController.prototype, "updateOrder", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderListController.prototype, "remove", null);
OrderListController = __decorate([
    (0, common_1.Controller)('order-list'),
    __metadata("design:paramtypes", [order_list_service_1.OrderListService])
], OrderListController);
exports.OrderListController = OrderListController;
//# sourceMappingURL=order-list.controller.js.map