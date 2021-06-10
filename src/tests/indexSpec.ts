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

    it('will send status 400 for invalid dimension parameter', async (done) => {
        const response = await request.get(
            '/img?filename=fjord&width=200&height=hi'
        );
        expect(response.status).toBe(400);
        done();
    });
});
