// Arrange - setup initial application state
// - visit a web page
// - query for an element

// Act - take an action 
// interact with element

// Assert - make an assertion
// make an assertion about page content

const API_ALIAS = 'fruitApi';

describe('Pages: main page', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  })

  const executeViewElementsTest = () => {
    cy.get('.search-panel')
      .should('be.visible')
      .get('input').should('have.attr', 'placeholder', 'на каждое нажатие будет новая картинка');
      
    cy.get('.search-panel input').type(1);

    cy.get(`@${API_ALIAS}`).then(({ response: { body } }) => {
      expect(body).to.have.property('id');
      expect(body).to.have.property('src');

      cy.get('.search-table')
        .should('be.visible')
        .get('img:last-child')
          .should('have.attr', 'src', body.src)
          .should('have.attr', 'alt', `image_${body.id}`)
    });
  }

  it('should be nice with mocked server', () => {
    const staticResponse = { body: { id: 228, src: 'mock.com/image_src' } };

    cy.intercept('GET', '/api/fruits*', staticResponse).as(API_ALIAS);

    executeViewElementsTest();
  });

  it('should be nice with real server', () => {
    cy.intercept('GET', '/api/fruits*').as(API_ALIAS);

    executeViewElementsTest();
  });
})