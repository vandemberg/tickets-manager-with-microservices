import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import qr from "qr-image";

export class Qrcode {
  public static createDefault(): Object {
    const code = uuidv4();
    const qrcode_image = Qrcode.buildQrcodeImage(code);
    const status = "available";

    return {
      code,
      qrcode_image,
      status,
    };
  }

  public static buildQrcodeImage(code: string): string {
    const url = `http://localhost:3000/qrcodes/${code}`;
    const filename = `tmp/${code}.png`;
    fs.writeFileSync(filename, qr.imageSync(url, { type: "png" }));
    var bitmap = fs.readFileSync(filename);
    const qrcode_image = Buffer.from(bitmap).toString("base64");

    return `data:image/png;base64,${qrcode_image}`;
  }
}
