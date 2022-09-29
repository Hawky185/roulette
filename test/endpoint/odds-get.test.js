import {createApp} from "./helper/app"
import request from "supertest";
import {allOdds} from "../../src/odds/odds";

describe('send request', () => {
    let response;

    beforeEach(async () => {
        const app = createApp();
        response = await request(app).get("/odds");
    });

    it('responds with 200', () => {
        expect(response.statusCode).toEqual(200);
    });

    it('response body is correct', () => {
        expect(response.body.odds).toEqual(allOdds);
    });
});
