"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollService = void 0;
const common_1 = require("@nestjs/common");
let PayrollService = class PayrollService {
    constructor() {
        this.JAM_NORMAL_MAX = 40;
        this.LEMBUR_MULTIPLIER = 1.5;
    }
    calculatePayroll(data) {
        const { jamKerja, tarifPerJam } = data;
        const jamNormal = Math.min(jamKerja, this.JAM_NORMAL_MAX);
        const jamLembur = Math.max(0, jamKerja - this.JAM_NORMAL_MAX);
        const gajiPokok = jamNormal * tarifPerJam;
        const gajiLembur = jamLembur * tarifPerJam * this.LEMBUR_MULTIPLIER;
        const totalGaji = gajiPokok + gajiLembur;
        return {
            totalGaji,
            gajiLembur,
            gajiPokok,
            jamNormal,
            jamLembur
        };
    }
};
exports.PayrollService = PayrollService;
exports.PayrollService = PayrollService = __decorate([
    (0, common_1.Injectable)()
], PayrollService);
//# sourceMappingURL=payroll.service.js.map