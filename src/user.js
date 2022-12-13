class User {
  constructor(defaultCity, preferredUnit) {
    this.defaultCity = defaultCity;
    this.preferredUnit = preferredUnit;
  }

  changePreferredUnit(newUnit) {
    this.preferredUnit = newUnit;
  }
}

// eslint-disable-next-line import/prefer-default-export
export { User };
