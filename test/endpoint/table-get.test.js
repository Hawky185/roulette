import {createApp} from "./helper/app"
import request from "supertest";
import {tableValues} from "../../src/table/table";

describe('send request', () => {
    let response;

    beforeEach(async () => {
        const app = createApp();
        response = await request(app).get("/table");
    });

    it('responds with 200', () => {
        expect(response.statusCode).toEqual(200);
    });

    it('response body is correct', () => {
        expect(response.body.tableValues).toEqual(tableValues);
    });
});
