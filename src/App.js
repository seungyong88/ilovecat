import SearchingSection from "./components/SearchingSection.js";
import ResultSection from "./components/ResultSection.js";
import DetailModal from "./components/DetailModal.js";
import Loading from "./components/Loading.js";
import api from "./api/theCatAPI.js";
import { setItem, getItem } from "./util/sessionStorage.js";

export default class App {
  constructor($target) {
    const keywords = getItem('keywords');

    const searchingSection = new SearchingSection({
      $target,
      keywords,
      onSearch: keyword => {
        loading.toggleSpinner();

        api.fetchCats(keyword).then(cats => {
          loading.toggleSpinner();
          resultSection.setState(cats);
        })
      },
      onRandom: () => {
        loading.toggleSpinner();

        api.randomCats().then(cats => {
          loading.toggleSpinner();
          resultSection.setState(cats);
        })
      }
    });

    const resultSection = new ResultSection({
      $target,
      onClick: data => {
        modal.setState(data);
      },
      onScroll: () => {
        loading.toggleSpinner();

        api.randomCats().then(data => {
          const beforeData = getItem('data');
          const nextData = beforeData.concat(data);

          setItem('data', nextData);
          resultSection.setState(nextData);
          loading.toggleSpinner();
        })
      }
    });

    const modal = new DetailModal({$target});
    const loading = new Loading({$target});

    const darkmodeBtn = document.createElement('span');
    darkmodeBtn.className = 'darkmode-btn';
    darkmodeBtn.innerText = 'Darkmode';

    $target.appendChild(darkmodeBtn);
  }
}