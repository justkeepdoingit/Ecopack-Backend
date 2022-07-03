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
exports.UserAccountController = void 0;
const common_1 = require("@nestjs/common");
const user_account_service_1 = require("./user-account.service");
const create_user_account_dto_1 = require("./dto/create-user-account.dto");
const userAcc_dto_1 = require("./dto/userAcc.dto");
let UserAccountController = class UserAccountController {
    constructor(userAccountService) {
        this.userAccountService = userAccountService;
    }
    async registerAcc(registerAccs) {
        this.userAccountService.registerAcc(registerAccs);
    }
    async loginAcc(loginAcc, response) {
        const logins = await this.userAccountService.loginAcc(loginAcc);
        if (logins) {
            response.cookie('id', logins.id);
            response.cookie('user_rights', logins.user_rights);
            response.cookie('planner', logins.planner);
            response.cookie('converting', logins.converting);
            response.cookie('delivery', logins.delivery);
            response.cookie('edit_orders', logins.edit_orders);
            response.cookie('lineup', logins.lineup);
            response.cookie('fg', logins.fg);
            response.cookie('returns', logins.returns);
            response.cookie('status_page', logins.status_page);
            response.cookie('useracc', logins.useracc);
            response.cookie('import_orders', logins.import_orders);
            return logins;
        }
    }
    logout(response) {
        response.clearCookie('id');
        response.clearCookie('user_rights');
        response.clearCookie('planner');
        response.clearCookie('converting');
        response.clearCookie('delivery');
        response.clearCookie('edit_orders');
        response.clearCookie('lineup');
        response.clearCookie('fg');
        response.clearCookie('returns');
        response.clearCookie('status_page');
        response.clearCookie('useracc');
        response.clearCookie('import_orders');
    }
    update(id, useracc, response) {
        return this.userAccountService.update(+id, useracc);
    }
    async getUsers(id, response) {
        const user = await this.userAccountService.findOne(id);
        if (user) {
            response.cookie('id', user.id);
            response.cookie('user_rights', user.user_rights);
            response.cookie('planner', user.planner);
            response.cookie('converting', user.converting);
            response.cookie('delivery', user.delivery);
            response.cookie('edit_orders', user.edit_orders);
            response.cookie('lineup', user.lineup);
            response.cookie('fg', user.fg);
            response.cookie('returns', user.returns);
            response.cookie('status_page', user.status_page);
            response.cookie('useracc', user.useracc);
            response.cookie('import_orders', user.import_orders);
        }
    }
    async getAllUsers() {
        return await this.findAll();
    }
    create(createUserAccountDto) {
        return this.userAccountService.create(createUserAccountDto);
    }
    findAll() {
        return this.userAccountService.findAll();
    }
    findOne(id) {
        return this.userAccountService.findOne(+id);
    }
    remove(id) {
        return this.userAccountService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserAccountController.prototype, "registerAcc", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserAccountController.prototype, "loginAcc", null);
__decorate([
    (0, common_1.Get)('/logout'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserAccountController.prototype, "logout", null);
__decorate([
    (0, common_1.Patch)('/updateUsers/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, userAcc_dto_1.userDTO, Object]),
    __metadata("design:returntype", void 0)
], UserAccountController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('/findUser/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UserAccountController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('/getAllUsers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserAccountController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_account_dto_1.CreateUserAccountDto]),
    __metadata("design:returntype", void 0)
], UserAccountController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserAccountController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserAccountController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserAccountController.prototype, "remove", null);
UserAccountController = __decorate([
    (0, common_1.Controller)('user-account'),
    __metadata("design:paramtypes", [user_account_service_1.UserAccountService])
], UserAccountController);
exports.UserAccountController = UserAccountController;
//# sourceMappingURL=user-account.controller.js.map