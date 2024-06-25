import { QrcodeGenerator } from "./QrcodeGenerator";
import { Qrcode } from "../entities/Qrcode";

export class QrcodeServices {
  static async generate(data: string): Promise<string> {
    try {
      return await QrcodeGenerator.generate(data);
    } catch(err) {
      throw new Error('Error generating QR code');
    }
  }
}
