import { TestingrecipesPage } from './app.po';

describe('testingrecipes App', function() {
  let page: TestingrecipesPage;

  beforeEach(() => {
    page = new TestingrecipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
