import config from './config';

export default class Pool {
  constructor(str) {
    this.str = str;
    this.split();
  }

  split() {
    this.cells =
      this.str.split( new RegExp(`${config.rowSeparator}${config.cellSeparator}+${config.rowSeparator}${config.cellSeparator}+`, 'g') )
              .map(s => s.split(config.rowSeparator)
                         .map(s => s.split(config.cellSeparator)
                                    .map(s => typeof s === "string" ? s.rQ() : s)
                                    .filter(s => s !== ""))
                         .filter(arr => arr.length > 0));
  }
};

String.prototype.rQ = function() {
  return this.replace(/["']/g, '');
};