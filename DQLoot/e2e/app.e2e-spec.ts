import { DQLootPage } from './app.po';

describe('dqloot App', () => {
  let page: DQLootPage;

  beforeEach(() => {
    page = new DQLootPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
