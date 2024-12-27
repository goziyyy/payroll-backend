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
exports.PayrollController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const calculate_payroll_dto_1 = require("./dto/calculate-payroll.dto");
const payroll_service_1 = require("./payroll.service");
let PayrollController = class PayrollController {
    constructor(payrollService) {
        this.payrollService = payrollService;
    }
    calculate(calculatePayrollDto) {
        return this.payrollService.calculatePayroll(calculatePayrollDto);
    }
};
exports.PayrollController = PayrollController;
__decorate([
    (0, common_1.Post)('calculate'),
    (0, swagger_1.ApiOperation)({ summary: 'Menghitung gaji berdasarkan jam kerja' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Perhitungan gaji berhasil' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [calculate_payroll_dto_1.CalculatePayrollDto]),
    __metadata("design:returntype", void 0)
], PayrollController.prototype, "calculate", null);
exports.PayrollController = PayrollController = __decorate([
    (0, swagger_1.ApiTags)('payroll'),
    (0, common_1.Controller)('payroll'),
    __metadata("design:paramtypes", [payroll_service_1.PayrollService])
], PayrollController);
//# sourceMappingURL=payroll.controller.js.map