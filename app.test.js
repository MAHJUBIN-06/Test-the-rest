
const request = require("supertest");
const app = require('./app');


// const post1 = {
//   id: 1,
//   title: "first note",
//   body: "hello first",
// };
// const post2 = {
//   id: 2,
//   title: "second note",
//   body: "hello second",
// };
// const post3 = {
//   id: 3,
//   title: "third note",
//   body: "hello third",
// };

describe('GET /', () => {
  test('Responds with 200 status code and a message', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body.message).toEqual('Bonjour, mon ami');
  });
});

// describe("GET /notes", () => {
//   test("Get all new post from the database", async () => {
//     //await request(app).post("/notes").send([post1, post2, post3]);
//     await request(app).post("/notes").send(post1);
//     await request(app).post("/notes").send(post2);
//     await request(app).post("/notes").send(post3);
//     const response = await request(app).get("/notes");
//     expect(response.status).toBe(200);
//     expect(response.body.data.length).toBe(3);
//     expect(response.body.message).toBe("all notes");
//   });
// }); 
