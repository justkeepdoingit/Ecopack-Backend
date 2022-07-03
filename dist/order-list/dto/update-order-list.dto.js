"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderListDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const orderlist_dto_1 = require("./orderlist.dto");
class UpdateOrderListDto extends (0, mapped_types_1.PartialType)(orderlist_dto_1.orderList) {
}
exports.UpdateOrderListDto = UpdateOrderListDto;
//# sourceMappingURL=update-order-list.dto.js.map