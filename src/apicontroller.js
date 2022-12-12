class APIController {
  static tries = 0;

  static maxTries = 5;

  static apiKey = '00e8daf01cd1ddaced71911e08b02338';

  static getCityWeather = async (cityName) => {
    const apiQuery = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${this.apiKey}`;

    try {
      const result = await fetch(apiQuery);
      if (!result.ok) {
        throw new Error('Issue getting info from API');
      }
      const json = await result.json();
      console.log(json);
    } catch (e) {
      this.tries += 1;
      if (this.tries < this.maxTries) {
        this.getCityWeather('Toronto'); // perform some default fetch
      } else {
        console.log(`Failed ${this.maxTries} times, try again later`);
      }
    }

    // promise version
    /*
    fetch(apiQuery).then((result) => {
      if (!result.ok) {
        throw new Error('404');
      }
      return result.json();
    }).then((json) => {
      console.log(json);
    }).catch((err) => {
      console.log(err);
      this.getCityWeather('Toronto'); // perform some default fetch
    });
    */
  };
}

export { APIController };
