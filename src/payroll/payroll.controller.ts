import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CalculatePayrollDto } from './dto/calculate-payroll.dto';
import { PayrollService } from './payroll.service';

@ApiTags('payroll')
@Controller('payroll')
export class PayrollController {
  constructor(private readonly payrollService: PayrollService) {}

  @Post('calculate')
  @ApiOperation({ summary: 'Menghitung gaji berdasarkan jam kerja' })
  @ApiResponse({ status: 200, description: 'Perhitungan gaji berhasil' })
  calculate(@Body() calculatePayrollDto: CalculatePayrollDto) {
    return this.payrollService.calculatePayroll(calculatePayrollDto);
  }
}