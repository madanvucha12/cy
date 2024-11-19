import { method } from "lodash";

describe("HTTP request", () => {
  let accessToken =
    "77054797b26f3ba82323dad211a1cc4024c9b8481b3b3df6c5ffcd9f79947b6a";
  //   it("Get Call", () => {
  //     cy.request({
  //       method: "GET",
  //       url: "https://gorest.co.in/public/v2/users",
  //       headers: {
  //         authorization: "Bearer" + accessToken,
  //       },
  //     }).then((res) => {
  //       cy.log(JSON.stringify(res));
  //       expect(res.status).to.eq(200);
  //     });
  //   });

  //   it("Get request for id", () => {
  //     cy.request({
  //       method: "GET",
  //       url: "https://gorest.co.in/public/v2/users/7522240",
  //       headers: {
  //         authorization: "Bearer" + accessToken,
  //       },
  //     }).then((res) => {
  //       cy.log(JSON.stringify(res));
  //       expect(res.status).to.eq(200);
  //     });
  //   });
  it("POST Call", () => {
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        authorization: "Bearer" + accessToken,
      },
      body: {
        name: "mango",
        email: "gayu1@gmail.com",
        gender: "male",
        status: "active",
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.eq(201);
      expect(res.body).has.property("email", "gayu1@gmail.com");
      expect(res.body).has.property("status", "active");
    });
  });
});
