import request from 'supertest';
import app from '../apicalls.js';
beforeEach(() => {
    //forms some kind of initialization
    // some common code that runs before the tests
})

afterEach(() => {
    //this method runs after the test, for instance the closing
})

describe('Test GET with the path /data', () => {
    test("Response to the GET", async () => {
        const response = await request(app)
            .get("/data");
        expect(response.status).toEqual(200); //testing if the server returns ok using 200
        expect(response.headers['content-type']). toMatch(/json/);     //test the http headersection
    })
})

describe('Test GET with the path /data/1', () => {
    test("Response to the GET", async () => {
        const expected =    { "id": "1", "Firstname": "Chioma", "Surname": "Anyiam"} 


        const response = await request(app)
            .get("/data/1");
        expect(response.status).toEqual(200); //testing if the server returns ok using 200
        expect(response.headers['content-type']). toMatch(/json/);     //test the http headersection
        expect(response.body).toEqual(expected)
    })
})

// to test for new user

describe('Test POST with the path /data/1', () => {
    test("Response to the POST with acceptable data", async () => {
        const newUser =    { "id": "3", "Firstname": "New", "Surname": "User"} 


        const response = await request(app)
            .post("/data")
            .send(newUser)
            .set('content-type', 'application/json');
            expect(response.status).toEqual(200); //testing if the server returns ok using 200
            expect(response.headers['content-type']). toMatch(/json/);     //test the http headersection
            expect(response.body).toEqual(newUser)
    })
})

describe('Test POST with the path /data/1', () => {
    test("Response to the POST with not acceptable data", async () => {
        const newUser =    { "id": "2", "Firstname": "New", "Surname": "User"} 


        const response = await request(app)
            .post("/data")
            .send(newUser)
            .set('content-type', 'application/json');
            expect(response.status).toEqual(409); //testing if the server returns ok using 200
            expect(response.headers['content-type']). toMatch(/json/);     //test the http headersection
            expect(response.body).toEqual({"error": "record already exists"})
    })
})