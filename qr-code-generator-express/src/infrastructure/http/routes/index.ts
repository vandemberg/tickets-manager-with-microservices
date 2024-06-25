import { Application } from "express";
import qrcodeRoutes from "./qrcode.routes";

export default function(app: Application): void {
  app.use("/", qrcodeRoutes);
}
