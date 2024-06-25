import request from 'supertest';
import app from './app';

describe('GET /health-check', () => {
  it('should return 200', async () => {
    const response = await request(app).get('/health-check');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Is working' });
  });
});
