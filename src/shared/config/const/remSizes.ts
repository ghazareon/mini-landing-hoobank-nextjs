/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

export const remSizes = {
 defaultBrowser: 16,
 relative: 62.5,
 get current() {
  return (this.defaultBrowser * this.relative) / 100;
 }
};
