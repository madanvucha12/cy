describe("mouse drag", () => {
  it("mouse hover action", () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu");

    cy.get(".context-menu-icon-copy > span").should("be.visible");
  });
});
