describe("Http request", () => {
  it("test api with json data fixture", () => {
    cy.visit("https://jsonplaceholder.typicode.com/");
    cy.intercept("GET", "/posts", { fixtures: "createuser.JSON" }).as("posts");
    cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)").click();
  });
});
