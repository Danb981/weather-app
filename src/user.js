class User {
  constructor(defaultCity, preferredUnit) {
    this.defaultCity = defaultCity;
    this.preferredUnit = preferredUnit;
    if (this.preferredUnit === 'metric') {
      this.preferredUnitAbbreviation = 'C';
      this.preferredWindUnit = 'm/s';
    } else if (this.preferredUnit === 'imperial') {
      this.preferredUnitAbbreviation = 'F';
      this.preferredWindUnit = 'mph';
    }
  }

  changePreferredUnit(newUnit) {
    this.preferredUnit = newUnit;
    if (this.preferredUnit === 'metric') {
      this.preferredUnitAbbreviation = 'C';
      this.preferredWindUnit = 'm/s';
    } else if (this.preferredUnit === 'imperial') {
      this.preferredUnitAbbreviation = 'F';
      this.preferredWindUnit = 'mph';
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export { User };
