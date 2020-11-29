import SearchingSection from "./components/SearchingSection.js";
import ResultSection from "./components/ResultSection.js";
import DetailModal from "./components/DetailModal.js";
import api from "./api/theCatAPI.js";

export default class App {
  constructor($target) {
    const searchingSection = new SearchingSection({
      $target,
      onSearch: keyword => {
        api.fetchCats(keyword).then(cats => {
          resultSection.setState(cats);
        })
      },
      onRandom: () => {
        api.randomCats().then(cats => {
          resultSection.setState(cats);
        })
      }
    });

    const resultSection = new ResultSection({
      $target,
      onClick: data => {
        console.log('sdd');
        modal.setState(data);
      }
    });
    const modal = new DetailModal({$target});
  }
}