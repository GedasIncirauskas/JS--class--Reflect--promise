export class WeatherData {
  constructor(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this.temperature = "";
  }
}

export const weatherProxyHandler = {
  get: function (target, property) {
    return Reflect.get(target, property);
  },
  set: function (target, property, value) {
    const newValue = (value - 273.15).toFixed(0) + "C.";
    return Reflect.set(target, property, newValue);
  },
};
