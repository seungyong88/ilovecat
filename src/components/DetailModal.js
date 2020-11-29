export default class DetailModal {
  constructor({$target, data}) {
    this.data = null;
    this.overlay = document.createElement('div');
    this.overlay.className = 'overlay';
    // this.overlay.classList.add('hidden');

    $target.appendChild(this.overlay);
  
    this.render();
  }

  render() {
    const modal = document.createElement('section');
    modal.className = 'modal';

    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';

    const modalTitle = document.createElement('p');
    modalTitle.className = 'modal-title';
    modalTitle.innerText = 'title'

    const closeBtn = document.createElement('span');
    closeBtn.className = 'close-btn';
    closeBtn.innerText = 'X';

    const modalImg = document.createElement('img');
    modalImg.className = 'modal-image';
    modalImg.src = 'https://cdn2.thecatapi.com/images/12d.jpg';

    const modalInfo = document.createElement('div');
    modalInfo.className = 'modal-info';

    const catOrigin = document.createElement('p');
    catOrigin.className = 'cat-origin';
    catOrigin.innerText = 'cat-origin';

    const catTemperament = document.createElement('p');
    catTemperament.className = 'cat-temperament';
    catTemperament.innerText = 'cat-temperament';

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeBtn);

    modalInfo.appendChild(catOrigin);
    modalInfo.appendChild(catTemperament);
    
    modal.appendChild(modalHeader);
    modal.appendChild(modalImg);
    modal.appendChild(modalInfo);

    this.overlay.appendChild(modal);
  }
}