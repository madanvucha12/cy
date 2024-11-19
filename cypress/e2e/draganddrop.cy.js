require('@4tw/cypress-drag-drop')
describe("templet spec", () => {
  it("actioncomands", () => {
    cy.visit(
      "http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
    );
    cy.get("#box6").drag('#box106',{force:true});
    // cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(86) > td:nth-child(2)").scrollIntoView()
    //cy.get(
      //":nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img"
    //).scrollIntoView();
  });
});
