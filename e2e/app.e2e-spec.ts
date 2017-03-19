import { QuanlythuchiPage } from './app.po';

describe('quanlythuchi App', () => {
  let page: QuanlythuchiPage;

  beforeEach(() => {
    page = new QuanlythuchiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
