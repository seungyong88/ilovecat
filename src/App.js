import SearchingSection from "./components/SearchingSection.js";
import ResultSection from "./components/ResultSection.js";
import Card from './components/Card.js';

export default class App {
  constructor($target) {
    const searchingSection = new SearchingSection({$target});
    const resultSection = new ResultSection({$target});

  }
}