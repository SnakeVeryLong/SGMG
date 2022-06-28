import { Problem } from "../entities/problems.entity";

export class CreateProblemDTO {
  id: number;

  photo: string;

  comment: string;

  weight: number;

  status: string;
}

export function convertProblem(dto: Array<CreateProblemDTO>): Array<Problem> {
    return dto.map((item) => {
      const tmp = new Problem();
      Object.assign(tmp, item);
      tmp.photo = item.photo;
      tmp.comment = item.comment;
      tmp.weight = item.weight;
      tmp.status = item.status;
      return tmp;
    });
  }