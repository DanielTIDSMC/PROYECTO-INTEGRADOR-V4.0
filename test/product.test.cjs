import { expect } from 'chai';
import request from 'supertest';
import app from '../index.js';  // Usa la extensión .js porque es un ES module

// Prueba para crear un producto
describe('POST /api/products', () => {
  it('should create a product and return 201', async () => {
    const response = await request(app)
      .post('/api/products')
      .send({
        name: 'Leche',
        description: 'Leche descremada',
        price: 20.5,
        category_id: 1
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('id');
    expect(response.body.name).to.equal('Leche');
  });

  it('should return 500 if the product table does not exist', async () => {
    const response = await request(app)
      .post('/api/products')
      .send({
        name: 'Leche',
        description: 'Leche descremada',
        price: 20.5,
        category_id: 1
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    expect(response.status).to.equal(500);
    expect(response.body).to.have.property('error').that.includes('relation "product" does not exist');
  });
});

// Prueba para obtener todos los productos
describe('GET /api/products', () => {
  it('should return all products and status 200', async () => {
    const response = await request(app)
      .get('/api/products')
      .set('Accept', 'application/json');

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
    expect(response.body.length).to.be.greaterThan(0);
  });
});
