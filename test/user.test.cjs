import { expect } from 'chai';
import request from 'supertest';
import  app  from '../app.js';  // Asegúrate de que app.js exporte la instancia de la aplicación

// Prueba para crear un usuario
describe('POST /api/users', () => {
  it('should create a user and return 201', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        username: 'john_doe',
        password: 'securepassword123',
        email: 'john.doe@example.com'
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('id');
    expect(response.body.username).to.equal('john_doe');
  });

  it('should return 500 if the users table does not exist', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        username: 'john_doe',
        password: 'securepassword123',
        email: 'john.doe@example.com'
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    expect(response.status).to.equal(500);
    expect(response.body).to.have.property('error').that.includes('relation "users" does not exist');
  });
});

// Prueba para obtener todos los usuarios
describe('GET /api/users', () => {
  it('should return all users and status 200', async () => {
    const response = await request(app)
      .get('/api/users')
      .set('Accept', 'application/json');

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
    expect(response.body.length).to.be.greaterThan(0);
  });
});
