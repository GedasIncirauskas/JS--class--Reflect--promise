import { button, input } from "./js/elements.js";
import { searchWeather } from "./js/functions.js";

button.addEventListener("click", () => searchWeather(input));
