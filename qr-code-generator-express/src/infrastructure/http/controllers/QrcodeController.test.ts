import app from '../../../app';
import request from 'supertest';

describe('QrcodeController', () => {
  it('should return a qr code', async () => {
    const response = await request(app).post('/qrcodes').send({
      external_reference: '123456',
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('qrcode');
    expect(response.body.qrcode).toHaveProperty('qrcode_image');
    expect(response.body.qrcode).toHaveProperty('code');
    expect(response.body.qrcode).toHaveProperty('external_reference');

    expect(response.body.qrcode.external_reference).toBe('123456');
  });
});
