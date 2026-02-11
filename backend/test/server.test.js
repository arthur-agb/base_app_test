const request = require('supertest');
const app = require('../server');

describe('Backend Server Tests', () => {
  test('Health check endpoint returns 200', async () => {
    const response = await request(app).get('/api/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status', 'healthy');
    expect(response.body).toHaveProperty('timestamp');
    expect(response.body).toHaveProperty('service', 'backend-api');
  });

  test('Data endpoint returns correct data', async () => {
    const response = await request(app).get('/api/data');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Hello from the backend!');
    expect(response.body).toHaveProperty('data');
    expect(Array.isArray(response.body.data)).toBe(true);
    expect(response.body.data).toEqual([1, 2, 3, 4, 5]);
  });

  test('Server handles 404 for unknown routes', async () => {
    const response = await request(app).get('/api/nonexistent');
    expect(response.statusCode).toBe(404);
  });
});
