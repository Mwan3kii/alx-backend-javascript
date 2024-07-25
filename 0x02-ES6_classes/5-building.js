export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error('Cannot instantiate abstract class Building directly');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
