const request = require('supertest');
const app = require('../server');

describe('Backend Server Verification', () => {
  test('Health check endpoint returns 200', async () => {
    const response = await request(app).get('/api/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('healthy');
  });

  test('Verify endpoint returns correct structure', async () => {
    const response = await request(app).get('/api/verify');
    expect(response.statusCode).toBe(200);
    expect(response.body.verified).toBe(true);
    expect(Array.isArray(response.body.endpoints)).toBe(true);
  });

  test('Status endpoint returns server info', async () => {
    const response = await request(app).get('/api/status');
    expect(response.statusCode).toBe(200);
    expect(response.body.server).toBe('running');
    expect(typeof response.body.uptime).toBe('number');
  });
});
