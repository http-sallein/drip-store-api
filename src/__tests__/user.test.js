import request from 'supertest';
import { User } from '../models/user.js';

import app from '../server.js'; 
import { context } from '../config/context.js';

beforeAll(async () => {
  await context.sync();
});

afterAll(async () => {
  await context.close();
});

describe('User Routes', () => {

  describe('GET /api/v1/user', () => {
    it('deve resgatar todos os usuários', async () => {
      await User.create({ first_name: 'Lucas ', sur_name:'de Paula', email: 'lucas@email.com', password: 'senha123' });

      const res = await request(app).get('/api/v1/user');
      expect(res.statusCode).toBe(200);
      expect(res.body).toBeInstanceOf(Array);
      expect(res.body.length).toBe(1);
    });
  });

  describe('GET /api/v1/user/:id', () => {
    it('deve resgatar um usuário por id', async () => {
      const user = await User.create({ first_name: 'Lucas', sur_name: ' de Paula',  email: 'lucas@email.com', password: 'senha123' });

      const res = await request(app).get(`/api/v1/user/${user.id}`);
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('email', 'lucas@email.com');
    });

    it('deve retornar erro 404 para usuário não encontrado', async () => {
      const res = await request(app).get('/api/v1/user/999');
      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty('message', 'Usuário não encontrado');
    });
  });

  describe('PUT /api/v1/user/:id', () => {
    it('deve editar um usuário', async () => {
      const user = await User.create({ first_name: 'Lucas', sur_name: 'de Paula' ,email: 'lucas@email.com', password: 'senha123' });
      
      const res = await request(app)
        .put(`/api/v1/user/${user.id}`)
        .send({ full_name: 'Lucas de Paula atualizado!' });

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('full_name', 'Lucas de Paula atualizado!');
    });

    it('deve retornar erro 404 para usuário não encontrado', async () => {
      const res = await request(app)
        .put('/api/v1/user/999')
        .send({ full_name: 'Usuário não existe' });

      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty('message', 'Usuário não encontrado');
    });
  });

  describe('DELETE /api/v1/user/:id', () => {
    it('deve deletar um usuário por id', async () => {
      const user = await User.create({ first_name: 'Lucas ', sur_name:'de Paula', email: 'lucas@email.com', password: 'senha123' });

      const res = await request(app).delete(`/api/v1/user/${user.id}`);
      expect(res.statusCode).toBe(204);
    });

    it('deve retornar erro 404 para usuário não encontrado', async () => {
      const res = await request(app).delete('/api/v1/user/999');
      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty('message', 'Usuário não encontrado');
    });
  });
});