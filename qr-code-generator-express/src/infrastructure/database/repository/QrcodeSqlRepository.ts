import { IQrcodeRepository } from "./IQrcodeRepository";
import { IRepository } from "./IRepository";
import { Qrcode } from "@prisma/client";
import prisma from "../prisma";

export class QrcodeSqlRepository implements IQrcodeRepository, IRepository {
  async findFirstAvailable(): Promise<Qrcode | null> {
    const qrcode = await prisma.qrcode.findFirst({
      where: {
        status: "available",
      },
    });

    return qrcode;
  }

  async generate(data: Object): Promise<Qrcode> {
    const qrcode = await prisma.qrcode.create({
      data: {
        ...data,
        external_reference: "",
      } as Qrcode,
    });

    return qrcode;
  }

  async reserve(qrcode: Qrcode): Promise<void> {
    await prisma.qrcode.update({
      where: {
        id: qrcode.id,
      },
      data: {
        status: "reserved",
        external_reference: qrcode.external_reference,
      },
    });
  }
}
