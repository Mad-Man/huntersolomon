import { HuntersolomonPage } from './app.po';

describe('huntersolomon App', () => {
  let page: HuntersolomonPage;

  beforeEach(() => {
    page = new HuntersolomonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
