import SearchingSection from "./components/SearchingSection.js";
import ResultSection from "./components/ResultSection.js";
import Card from './components/Card.js';
import api from "./api/theCatAPI.js";

export default class App {
  constructor($target) {
    const searchingSection = new SearchingSection({$target});
    const resultSection = new ResultSection({$target});

    const data1 = api.fetchCats("no");
    const data2 = api.randomCats();

    data1.then(cats => console.log(cats));
    data2.then(cats => console.log(cats));
  }
}