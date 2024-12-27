import { CalculatePayrollDto } from './dto/calculate-payroll.dto';
import { PayrollService } from './payroll.service';
export declare class PayrollController {
    private readonly payrollService;
    constructor(payrollService: PayrollService);
    calculate(calculatePayrollDto: CalculatePayrollDto): import("./interfaces/payroll-result.interface").PayrollResult;
}
