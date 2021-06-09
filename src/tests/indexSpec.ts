import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
    it('will send status 404 with a wrong filename', async (done) => {
        const response = await request.get(
            '/img?filename=non&width=100&height=100'
        );
        expect(response.status).toBe(404);
        done();
    });
});
