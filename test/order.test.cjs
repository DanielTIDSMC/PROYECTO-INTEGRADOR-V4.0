import  {expect}  from 'chai';
import request from 'supertest';
import  app  from '../app.js';  // Asegúrate de que app.js exporte la instancia de la aplicación

// Prueba para crear una orden
describe('POST /api/orders', () => {
  it('should create an order and return 201', async () => {
    const response = await request(app)
      .post('/api/orders')
      .send({
        user_id: 1,
        total_price: 100.5,
        status: 'pending',
        products: [{ product_id: 1, quantity: 2 }]
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('id');
    expect(response.body.total_price).to.equal(100.5);
  });

  it('should return 500 if the orders table does not exist', async () => {
    const response = await request(app)
      .post('/api/orders')
      .send({
        user_id: 1,
        total_price: 100.5,
        status: 'pending',
        products: [{ product_id: 1, quantity: 2 }]
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    expect(response.status).to.equal(500);
    expect(response.body).to.have.property('error').that.includes('relation "orders" does not exist');
  });
});

// Prueba para obtener todas las órdenes
describe('GET /api/orders', () => {
  it('should return all orders and status 200', async () => {
    const response = await request(app)
      .get('/api/orders')
      .set('Accept', 'application/json');

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
    expect(response.body.length).to.be.greaterThan(0);
  });
});
