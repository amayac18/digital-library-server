const request = require('supertest');
const app = require('../app'); // Assuming app.js is where you configure your server

describe('POST /books', () => {
  it('should create a new book', async () => {
    const res = await request(app)
      .post('/books')
      .send({ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', isFiction: true });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('title', 'The Great Gatsby');
  });
});
