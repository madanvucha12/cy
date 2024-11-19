import { method } from "lodash";
const user = require("../../fixtures/APITESTINGFIX/createuser.json")

describe("HTTP request", () => {
  let accessToken =
    "77054797b26f3ba82323dad211a1cc4024c9b8481b3b3df6c5ffcd9f79947b6a";
  let randomText = "";
  let testEmail = "";
  it("POST Call", () => {
    var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 10; i++)
      randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
    testEmail = randomText + "@gmail.com";
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        authorization: "Bearer " + accessToken,
      },
      body: {
        name: user.name,
        email: user.email,
        gender: user.gender,
        status: user.status,
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.eq(201);
      expect(res.body).has.property("email", user.email);
      expect(res.body).has.property("status", user.status);
    });
  });
});
