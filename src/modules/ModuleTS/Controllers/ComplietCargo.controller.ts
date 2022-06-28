import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Res } from '@nestjs/common';
import { convertCargo, CreateCargoDTO } from '../dto/createCargo.dto';
import { convert, CreateTransportDto } from '../dto/createTransport.dto';
import { Cargo } from '../entities/cargo.entity';
import { CargoType } from '../entities/cargoType.entity';
import { Problem } from '../entities/problems.entity';
import { Transport } from '../entities/tranport.entity';
import { ComplietCargoService } from '../Services/compliet-cargo/compliet-cargo.service';

@Controller('compliet-cargo')
export class ComplietCargoController {
  constructor(private complieteCargoService: ComplietCargoService) {}

  @Get('TS')
  async findAll(): Promise<Array<Transport>> {
   const ts = await this.complieteCargoService.findAllTS();
    return  ts    
  }

  @Get('cargoType') 
   async findAllCargoType(): Promise<Array<CargoType>> {
   const cargoType = await this.complieteCargoService.findAllCargoType();
    return  cargoType    
  }

  @Get('cargo') 
  async findAllCargo(): Promise<Array<Cargo>> {
  const cargo = await this.complieteCargoService.findAllCargo();
   return  cargo    
 }

  @Get('TS/:idTS')
  async findTS(@Res() res, @Param('tsID') tsID): Promise<Array<Transport>> {
    const ts = this.complieteCargoService.searchTS(tsID);
    if (!ts) throw new NotFoundException('Транспорт не найден!');
    return  res.status (HttpStatus.OK).json(ts);
    }

  /**
   * API для загрузки ТС
   */
  @Post('loadTs')
  async loadTransport(
    @Body() transport: Array<CreateTransportDto>,
  ): Promise<Array<Transport>> {
    return this.complieteCargoService.addTransport(convert(transport));
  }

  @Post('cargo')
  async CreateCargo(
    @Body() Cargo: Array<CreateCargoDTO>
  ): Promise<Array<Cargo>> {
    return this.complieteCargoService.createCargo(convertCargo(Cargo));
  }
}
