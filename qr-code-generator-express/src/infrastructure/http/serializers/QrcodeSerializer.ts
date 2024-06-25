import { ISerializer } from "./ISerializer";

export class QrcodeSerializer implements ISerializer {
  serialize(data: any): any {
    return {
      ...data,
    };
  }
}
