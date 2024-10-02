/// <reference types="cypress" />

const el = {
  homeContainer: () => cy.get("#home-page"),
  mineButton: () => cy.get("#order"),
  buildContaniner: () => cy.get("#build-page"),
  flag: () => cy.get("#flag"),
  hometitle: () => cy.get("h1"),
  partImages: {
    head: () => cy.get("#top-part-image"),
    leftArm: () => cy.get("#left-part-image"),
    rightArm: () => cy.get("#right-part-image"),
    center: () => cy.get("#center-part-image"),
    bottom: () => cy.get("#bottom-part-image"),
  },
  partImagesArray: ()=> cy.get(".part .part-images"),
}

describe('Home test', () => {

})

describe('Home test', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('visiting home page', () => {
    el.homeContainer().should("exist")
  })

  it('testing mine button', () => {
    el.mineButton().should("exist")
    el.mineButton().click()
    el.buildContaniner().should("exist")
  })

  it('testing translation', () => {
    const flag = el.flag()
    flag.should("exist")
    flag.click()
    el.hometitle().should("contain.text", "Construa agora seu Mange Bot!")
  })

})

describe('Build test', ()=> {
  beforeEach(() => {
    cy.visit('/build')
  })
  it('visiting build page', () => {
    el.buildContaniner().should("exist")
  })
  it('checking backend parts', () => {
    // el.partImages.head().should("exist")
    // el.partImages.leftArm().should("exist")
    // el.partImages.rightArm().should("exist")
    // el.partImages.center().should("exist")
    // el.partImages.bottom().should("exist")
  
    const images = el.partImagesArray();
    images.should("have.length", 5).each(($img) => {
      cy.wrap($img).should('exist')
    })
  
  
  }
)


})