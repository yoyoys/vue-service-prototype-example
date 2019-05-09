/* eslint-disable import/prefer-default-export */
import { getAbout } from '@/data-access/about';

export class About2Service {
  public about = '';

  public error: null | string = null;

  public async init() {
    try {
      const result = await getAbout();
      this.about = result;
    } catch (error) {
      this.error = 'some error';
    }
  }
}
