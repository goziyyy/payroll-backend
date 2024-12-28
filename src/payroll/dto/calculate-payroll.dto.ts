import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';

export class CalculatePayrollDto {
  @ApiProperty({ description: 'Jumlah jam kerja' })
  @IsNumber()
  @Min(0)
  jamKerja: number;

  @ApiProperty({ description: 'Tarif per jam' })
  @IsNumber()
  @Min(0)
  tarifPerJam: number;
}