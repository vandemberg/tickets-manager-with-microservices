import { Qrcode } from "../entities/Qrcode";

export class QrcodeGenerator {
  static async generate(data: string): Promise<any> {
    try {
      return Qrcode.createDefault();
    } catch (err) {
      throw new Error("Error generating QR code");
    }
  }
}
