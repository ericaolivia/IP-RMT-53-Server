const request = require('supertest');
const app = require('../app'); 
const { User, Favorite } = require('../models'); 

jest.mock('../middlewares/authentication', () => (req, res, next) => {
  req.user = { id: 1, role: 'user' }; 
  next();
});

jest.mock('../helpers/jwt', () => ({
  verifyToken: jest.fn(() => {
    return { email: 'test@example.com' }; 
  }),
}));


describe('User Registration', () => {
  it('should register a user successfully', async () => {
    const res = await request(app)
      .post('/user/register')
      .send({
        email: 'test@example.com',
        password: 'password123'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('access_token');
  });

  it('should return validation error if email is missing', async () => {
    const res = await request(app)
      .post('/user/register')
      .send({
        password: 'password123'
      });

    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toBe('Email is required'); 
  });
});

describe('User Login', () => {
  it('should login a user successfully', async () => {
    const res = await request(app)
      .post('/user/login')
      .send({
        email: 'test@example.com',
        password: 'password123'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('access_token');
  });

  it('should return 401 for invalid credentials', async () => {
    const res = await request(app)
      .post('/user/login')
      .send({
        email: 'invalid@example.com',
        password: 'wrongpassword'
      });

    expect(res.statusCode).toEqual(401);
    expect(res.body.message).toBe('Invalid credentials');
  });
});

describe('Protected Routes', () => {
  it('should return user profile for authenticated user', async () => {
    const res = await request(app)
      .get('/user/profile')
      .set('Authorization', 'Bearer valid_token'); 

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('email', 'test@example.com');
  });

  it('should return 401 for missing token', async () => {
    const res = await request(app).get('/user/profile');
    expect(res.statusCode).toEqual(401);
    expect(res.body.message).toBe('Access token required');
  });
});

describe('Recipe Routes', () => {
  it('should return a list of recipes', async () => {
    const res = await request(app)
      .get('/recipes')
      .set('Authorization', 'Bearer valid_token');

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return recipe details by ID', async () => {
    const res = await request(app)
      .get('/recipes/detail/1')
      .set('Authorization', 'Bearer valid_token');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('title');
  });
});

describe('Favorite Routes', () => {
  it('should create a favorite successfully', async () => {
    const res = await request(app)
      .post('/favorite/1')
      .set('Authorization', 'Bearer valid_token');

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'Favorite added successfully');
  });

  it('should return 401 for missing token', async () => {
    const res = await request(app).post('/favorite/1');
    expect(res.statusCode).toEqual(401);
    expect(res.body.message).toBe('Access token required');
  });
});

describe('Error Handling', () => {
    it('should handle validation errors', async () => {
      const res = await request(app)
        .post('/user/register')
        .send({ email: '', password: 'short' }); 
  
      expect(res.statusCode).toEqual(400);
      expect(res.body.message).toBe('Validation error message here');
    });
  });
  