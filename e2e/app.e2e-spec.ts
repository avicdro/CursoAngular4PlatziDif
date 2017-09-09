import { P9PlatziAngularPage } from './app.po';

describe('p9-platzi-angular App', () => {
  let page: P9PlatziAngularPage;

  beforeEach(() => {
    page = new P9PlatziAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to mvat!!');
  });
});
