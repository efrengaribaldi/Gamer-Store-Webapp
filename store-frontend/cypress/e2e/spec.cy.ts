describe("spec.cy.ts", () => {
  it("should visit login", () => {
    cy.visit("http://localhost:3000");
    cy.contains("SIGN IN").click();
    cy.url().should("include", "/login");
  });
});

describe("spec.cy.ts", () => {
  it("should visit Register", () => {
    cy.visit("http://localhost:3000");
    cy.contains("REGISTER").click();
    cy.url().should("include", "/register");
  });
});

describe("second Tests", () => {
  it("should visit login and go back", () => {
    cy.visit("http://localhost:3000");
    cy.contains("SIGN IN").click();
    cy.url().should("include", "/login");
    cy.contains("Gamer-Store").click();
    cy.url().should("include", "http://localhost:3000");
  });
});

describe("third Tests", () => {
  it("should visit Register and go back", () => {
    cy.visit("http://localhost:3000");
    cy.contains("REGISTER").click();
    cy.url().should("include", "/register");
    cy.contains("Gamer-Store").click();
    cy.url().should("include", "http://localhost:3000");
  });
});

describe("automatic login", () => {
  it("should visit login and write", () => {
    cy.visit("http://localhost:3000");
    cy.contains("SIGN IN").click();
    cy.url().get("#userN").type("lars").get("#pwd").type("123");
    cy.contains("LOGIN").click();
  });
});
