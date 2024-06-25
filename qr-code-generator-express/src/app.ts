import express from "express";
import router from "./infrastructure/http/routes";
import prisma from "./infrastructure/database/prisma";

const app = express();
app.use(express.json());
router(app);

app.get('/health-check', async (_, res) => {
  await prisma.qrcode.findFirst();

  res.json({ message: 'Is working' });
});

export default app;
