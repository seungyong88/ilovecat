export default class SearchingSection{
  constructor({$target, onSearch, onRandom}) {
    this.onSearch = onSearch;
    this.onRandom = onRandom;
    this.section = document.createElement('section');
    this.section.className = 'searching-section';
    
    $target.appendChild(this.section);

    this.render();
  }

  searchRandomCats() {
    this.onRandom();
    this.deleteKeyword();
  }

  searchByKeyword(keyword){
    this.onSearch(keyword);
    this.deleteKeyword();
  }

  deleteKeyword(){
    const searchBox = document.querySelector('.search-box');
    searchBox.value = '';
  }

  render() {
    const searchingWrapper = document.createElement('div');
    searchingWrapper.className = 'searching-wrapper';

    const randomBtn = document.createElement('button');
    randomBtn.className = 'random-btn';
    randomBtn.innerText = 'RANDOM';

    const searchBox = document.createElement('input');
    searchBox.className = 'search-box';
    searchBox.placeholder = '고양이를 검색하세요.';

    randomBtn.addEventListener('click', e => this.searchRandomCats());
    searchBox.addEventListener('keyup', e=> {
      if(e.keyCode == 13) {
        this.searchByKeyword(searchBox.value);
      }
    })

    searchingWrapper.appendChild(randomBtn);
    searchingWrapper.appendChild(searchBox);

    this.section.appendChild(searchingWrapper);
  }

}