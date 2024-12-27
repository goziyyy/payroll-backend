import { Injectable } from '@nestjs/common';
import { CalculatePayrollDto } from './dto/calculate-payroll.dto';
import { PayrollResult } from './interfaces/payroll-result.interface';

@Injectable()
export class PayrollService {
  private readonly JAM_NORMAL_MAX = 40;
  private readonly LEMBUR_MULTIPLIER = 1.5;

  calculatePayroll(data: CalculatePayrollDto): PayrollResult {
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
}
