describe("Page: Home", () => {
  const imageLink =
    "https://static.vecteezy.com/system/resources/previews/026/759/486/non_2x/lasagna-with-ai-generated-free-png.png";

  beforeEach(() => {
    cy.intercept("GET", "**/foods", { fixture: "foods.json" });
    cy.intercept("POST", "**/foods", {
      body: {
        image: imageLink,
        name: "Lasanha",
        price: "10.90",
        description: "Lasanha de queijo com molho branco",
        id: 4,
      },
    });
    cy.visit("http://localhost:3000/");
  });

  it("render the page", () => {
    cy.get('[data-testid="foods-list"]')
      .should("exist")
      .children()
      .should("have.length", 3);
  });

  it("should create a new food", () => {
    cy.get('[data-testid="foods-list"]').children().should("have.length", 3);
    cy.get('[data-testid="add-new-food-button"]').click();

    cy.get('[data-testid="add-food-form-image"]').type(imageLink);
    cy.get('[data-testid="add-food-form-name"]').type("Lasanha");
    cy.get('[data-testid="add-food-form-price"]').type("10.00");
    cy.get('[data-testid="add-food-form-description"]').type("test");
    cy.get('[data-testid="add-food-button"]').click();

    cy.get('[data-testid="foods-list"]').children().should("have.length", 4);
  });
});
