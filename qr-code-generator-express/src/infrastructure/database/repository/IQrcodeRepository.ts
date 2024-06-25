import { Qrcode } from "@prisma/client";

export interface IQrcodeRepository {
  findFirstAvailable(): Promise<Qrcode | null>;

  generate(data: Object): Promise<Qrcode>;

  reserve(qrcode: Qrcode): Promise<void>;
}
