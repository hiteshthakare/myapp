const request = require("supertest");
const app = require("../src/index");

test("GET / should return message", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
});
