import { Cargo } from "../entities/cargo.entity";

export class CreateCargoDTO {
    id: number;
  
    weightBefor: number;
  
    weightAfter: number;

    status: string;
}

export function convertCargo(dto: Array<CreateCargoDTO>): Array<Cargo> {
    return dto.map((item) => {
      const tmp = new Cargo();
      Object.assign(tmp, item);
      tmp.weightBefor = item.weightBefor;
      tmp.weightAfter = item.weightAfter;
      tmp.status = item.status;
      return tmp;
    });
  }