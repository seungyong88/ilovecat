export default class SearchingSection{
  constructor({$target}) {
    this.$target = $target;
    this.section = document.createElement('section');
    this.section.className = 'searching-section';
    
    this.$target.appendChild(this.section);

    this.render();
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

    searchBox.addEventListener('keyup', e=> {
      if(e.keyCode == 13) {
        // Todo Event
      }
    })

    searchingWrapper.appendChild(randomBtn);
    searchingWrapper.appendChild(searchBox);

    this.section.appendChild(searchingWrapper);
  }

}