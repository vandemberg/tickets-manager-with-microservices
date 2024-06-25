import { Request, Response } from "express";
import { ReserveQRCodeUseCase } from "../../../application/use-cases/ReserverQRCodeUseCase";

export class QrcodeController {
  public static async create(req: Request, res: Response) {
    const externalReference = req.body.externalReference;
    const qrcode = await new ReserveQRCodeUseCase(externalReference).execute();

    res.json(qrcode).status(200);
  }
}
