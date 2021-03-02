const { json } = require("body-parser");
const express = require("express");
const supertest = require("supertest");
const app = require('../../app.js');

// describe("/", () => {
//  test("/", async () => {    

//     await request(app).post("/").send(data() {
//         return {
//             expect(response).toBe(200)
//         }
//     },);
  
//     // expect(response.body.message).toBe("HELLO WORLD");
//  })
// })
describe('GET /', () => {
    test('Responds with 200 status code and a message', async () => {
      const response = await request(app).get('/');
  
      expect(response.status).toBe(200);
      expect(response.body.message).toEqual('Bonjour, mon ami');
    });
  });


