const { CYCLIC_KEY } = require("@storybook/addon-actions/dist/constants");

describe("Appointments", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");
    cy.visit("/");
    cy.contains("Monday");
  });

  it("should visit the root", () => {
    cy.get("[alt=Add]").first().click();

    cy.get("[data-testid=student-name-input]").type("Lydia Miller-Jones");

    cy.get("[alt='Sylvia Palmer'").click();

    cy.get(".button--confirm").click();

    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });
  it("should edit an interview", () => {
    cy.get("[alt=Edit]").first().click({ force: true });

    cy.get("[alt='Tori Malcolm'").click();
    cy.get("[data-testid=student-name-input]").clear().type("Liam Smith");

    cy.get(".button--confirm").click();

    cy.contains(".appointment__card--show", "Liam Smith");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });
  it("should delete an existing appointment", () => {
    cy.get("[alt=Delete]").click({ force: true });

    cy.get(".appointment__actions")
      .contains("Confirm").click( {force: true })
    
    cy.contains("Deleting").should("exist")
    cy.contains("Deleting").should("not.exist")
    cy.contains(".appointment__card--show", "Archie Cohen").should("not.exist");
  })
});
