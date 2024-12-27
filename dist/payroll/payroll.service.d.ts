import { CalculatePayrollDto } from './dto/calculate-payroll.dto';
import { PayrollResult } from './interfaces/payroll-result.interface';
export declare class PayrollService {
    private readonly JAM_NORMAL_MAX;
    private readonly LEMBUR_MULTIPLIER;
    calculatePayroll(data: CalculatePayrollDto): PayrollResult;
}
