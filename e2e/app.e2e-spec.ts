import { WardrobeAppPage } from './app.po';

describe('wardrobe-app App', () => {
  let page: WardrobeAppPage;

  beforeEach(() => {
    page = new WardrobeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
