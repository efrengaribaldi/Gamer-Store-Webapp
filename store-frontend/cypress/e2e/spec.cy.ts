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

describe("Shopping item", () => {
  it.only("should add item to cart and access car list", () => {
    cy.visit("http://localhost:3000");
    cy.contains("SIGN IN").click();
    cy.url().get("#userN").type("lars").get("#pwd").type("123");
    cy.contains("LOGIN").click();
    cy.contains("SHOP NOW").click();
    cy.visit("http://localhost:3000/product/6240fb46996982c927e76097");
    cy.wait(2000);
    cy.contains("ADD TO CART").click();
    cy.wait(2000);
    cy.contains("Gamer-Store").click();
    cy.contains("Cart").click();
    cy.contains("CHECKOUT NOW").click();
    cy.wait(3000);
    // cy.get(".stripe_checkout_app").within(function ($iFrame) {
    //   const iframe = $iFrame.contents().find("body");
    //   cy.wrap(iframe).contains("Gamer");
    // });
  });
});
