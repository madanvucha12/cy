describe("Amazon Login Page Assertions", () => {
  beforeEach(() => {
    cy.visit(
      "https://www.amazon.in/-/hi/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fspr%2Freturns%2Fgift&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_psr_desktop_in&openid.mode=checkid_setup&language=en_IN&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
    );
  });

  it("should have the email input field visible", () => {
    //implicit assertion
    cy.get("#ap_email").should("be.visible");
  });

  it('should show the "Continue" button', () => {
    // Explicit Assertion
    cy.get("#continue")
      .should("exist")
      .and("contain", "Continue");
  });
});
