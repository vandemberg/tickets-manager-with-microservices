import { Qrcode } from "../../domain/entities/Qrcode";
import { Qrcode as QrcodePrisma } from "@prisma/client";
import { IQrcodeRepository } from "../../infrastructure/database/repository/IQrcodeRepository";
import { QrcodeSqlRepository } from "../../infrastructure/database/repository/QrcodeSqlRepository";
import { QrcodeSerializer } from "../../infrastructure/http/serializers/QrcodeSerializer";
import { IUseCase } from "./IUseCase";

export class ReserveQRCodeUseCase implements IUseCase {
  constructor(
    private externalReference: string,
    private qrcodeRepository: IQrcodeRepository = new QrcodeSqlRepository()
  ) {}

  public async execute(): Promise<QrcodeSerializer> {
    let qrcode = await this.qrcodeRepository.findFirstAvailable();

    if (!qrcode) {
      qrcode = Qrcode.createDefault() as QrcodePrisma;
      const qrcodePersisted = await this.qrcodeRepository.generate(qrcode);
      qrcode.id = qrcodePersisted.id;
    }

    qrcode.external_reference = this.externalReference;
    this.qrcodeRepository.reserve(qrcode);

    return new QrcodeSerializer().serialize(qrcode);
  }
}
