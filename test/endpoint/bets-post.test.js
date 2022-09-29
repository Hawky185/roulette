import {createApp} from "./helper/app"
import request from "supertest";

describe('send valid request', () => {
    let response;

    const validBody = [
        {
            "type": "number",
            "value": "17",
            "stake": 10
        },
        {
            "type": "colour",
            "value": "black",
            "stake": 50
        },
        {
            "type": "oddEven",
            "value": "odd",
            "stake": 87
        },
        {
            "type": "colour",
            "value": "green",
            "stake": 4
        }
    ];

    beforeEach(async () => {
        const app = createApp();
        response = await request(app).post("/player/bets").send(validBody);
    });

    it('responds with 200', () => {
        expect(response.statusCode).toEqual(200);
    });
});

describe('send invalid request', () => {
    let response;

    const invalidBody = [
        {
            "type": "number",
            "value": "546",
            "stake": 10
        },
        {
            "type": "colour",
            "value": "purple",
            "stake": 50
        },
        {
            "type": "oddEven",
            "value": "odd",
            "stake": 87
        },
        {
            "type": "colour",
            "value": "green",
            "stake": 4
        }
    ];

    beforeEach(async () => {
        const app = createApp();
        response = await request(app).post("/player/bets").send(invalidBody);
    });

    it('responds with 400', () => {
        expect(response.statusCode).toEqual(400);
    });
});
