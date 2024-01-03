describe("Page: Home", () => {
  it("Renders page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="foods-list"]').should("exist");
  });
});
