import { mockServer } from "./mock/mockServer";

const server = mockServer();

async function doesNotHaveText(ele, text) {
  try {
    await expect(ele).toHaveText(text);
    throw new Error(`Element ${testId} should not have text ${text}`);
  } catch (error) {
    return;
  }
}

describe('Example', () => {
  beforeAll(async () => {
    server.listen()
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  it('should have time title', async () => {
    const timeTitle = element(by.id('time-title'));
    await expect(timeTitle).toBeVisible();
    await expect(timeTitle).toHaveText('Time Zone');
  });

  it('should have time zone', async () => {
    const timeZoneText = element(by.id('time-zone-text'));
    await expect(timeZoneText).toBeVisible();
    await expect(timeZoneText).toHaveText('(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima');
  });

  it('should have date time text that isn\'t unknown', async () => {
    const dateTimeText = element(by.id('time-datetime-text'));
    await expect(dateTimeText).toBeVisible();

    // Wait for the date time text to be updated
    await new Promise(resolve => setTimeout(resolve, 800));
    await doesNotHaveText(dateTimeText, 'unknown');
  });

});
