describe("Http request", () => {
  //   it.only("test api with intercept", () => {
  //     cy.visit("https://jsonplaceholder.typicode.com/");
  //     cy.intercept({
  //       path: "/post",
  //     }).as("tests");
  //     cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)").click();
  //     cy.wait("@posts").then((inter) => {
  //       cy.log(JSON.stringify(inter));
  //       console.log(JSON.stringify(inter));
  //     });
  it.only("test api with intercept", () => {
    cy.visit("https://jsonplaceholder.typicode.com/");
    cy.intercept("GET", "/posts", { totalpost: 5 }).as("posts");
    cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)").click();
    cy.wait("@posts");
  });
});
