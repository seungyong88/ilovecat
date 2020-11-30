import { setItem } from '../util/sessionStorage.js';

export default class SearchingSection{
  constructor({$target, keywords, onSearch, onRandom}) {
    this.recent = keywords;
    this.onSearch = onSearch;
    this.onRandom = onRandom;
    this.section = document.createElement('section');
    this.section.className = 'searching-section';
    
    $target.appendChild(this.section);

    this.render();

    this.initFocus();
  }

  initFocus() {
    document.querySelector('.search-box').focus();
  }

  searchRandomCats() {
    this.onRandom();
    this.deleteKeyword();
  }

  searchByKeyword(keyword){
    if(keyword.length == 0) return;

    this.addRecentKeyword(keyword);
    this.onSearch(keyword);
    setItem('keywords', this.recent);
    this.deleteKeyword();
  }

  deleteKeyword(){
    const searchBox = document.querySelector('.search-box');
    searchBox.value = '';
  }

  addRecentKeyword(keyword) {
    if(this.recent.includes(keyword)) return;
    if(this.recent.length == 5) this.recent.shift();

    this.recent.push(keyword);
    this.render();
  }

  render() {
    this.section.innerHTML = '';

    const searchingWrapper = document.createElement('div');
    searchingWrapper.className = 'searching-wrapper';

    const randomBtn = document.createElement('button');
    randomBtn.className = 'random-btn';
    randomBtn.innerText = 'RANDOM';

    const searchBox = document.createElement('input');
    searchBox.className = 'search-box';
    searchBox.placeholder = '고양이를 검색하세요.';

    const recentKeywords = document.createElement('div');
    recentKeywords.className = 'recent-keywords';

    randomBtn.addEventListener('click', e => this.searchRandomCats());
    searchBox.addEventListener('keyup', e=> {
      if(e.keyCode == 13) {
        this.searchByKeyword(searchBox.value);
      }
    })

    this.recent.forEach(keyword => {
      const keywordLink = document.createElement('span');
      keywordLink.className = 'keyword-link';
      keywordLink.innerText = keyword;

      keywordLink.addEventListener('click', () => this.searchByKeyword(keyword));

      recentKeywords.appendChild(keywordLink);
    })

    searchingWrapper.appendChild(randomBtn);
    searchingWrapper.appendChild(searchBox);

    this.section.appendChild(searchingWrapper);
    this.section.appendChild(recentKeywords);
  }

}