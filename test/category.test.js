import chai from 'chai';
import supertest from 'supertest';
import app from '../app.js';  // Importamos app desde app.js

const { expect } = chai;
const request = supertest(app);  // Usamos supertest para interactuar con la API

describe("POST /api/categories", () => {
  it("should create a new category", async () => {
    const response = await request
      .post("/api/categories")
      .send({ name: "Electronics" });

    // Verificamos que la respuesta tenga el estado correcto
    expect(response.status).to.equal(201);
    expect(response.body).to.have.property("name", "Electronics");
  });
});
