import { ContactsTroyPage } from './app.po';

describe('contacts-troy App', () => {
  let page: ContactsTroyPage;

  beforeEach(() => {
    page = new ContactsTroyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
