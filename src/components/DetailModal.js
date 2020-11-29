export default class DetailModal {
  constructor({$target, data}) {
    this.data = null;
    this.modalWrapper = document.createElement('div');
    this.modalWrapper.className = 'modal-wrapper';
    this.modalWrapper.classList.add('hidden');

    $target.appendChild(this.modalWrapper);
  
    this.render();
  }

  setState(data) {
    this.data = data;
    this.toggleModal();
    
    this.render();
  }

  toggleModal() {
    const modalWrapper = document.querySelector('.modal-wrapper');
    modalWrapper.classList.toggle('hidden');
    modalWrapper.innerHTML = '';
  }

  render() {
    if(this.data == null) return;

    const url = this.data.url;
    const {temperament, name, origin} = this.data.breeds.length > 0 ? this.data.breeds[0] : {temperament: '정보없음', name: '정보없음', origin:'정보없음'};
    
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const modal = document.createElement('section');
    modal.className = 'modal';

    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';

    const modalTitle = document.createElement('p');
    modalTitle.className = 'modal-title';
    modalTitle.innerText = name;

    const closeBtn = document.createElement('span');
    closeBtn.className = 'close-btn';
    closeBtn.innerText = 'X';

    const modalImg = document.createElement('img');
    modalImg.className = 'modal-image';
    modalImg.src = url;

    const modalInfo = document.createElement('div');
    modalInfo.className = 'modal-info';

    const catOrigin = document.createElement('p');
    catOrigin.className = 'cat-origin';
    catOrigin.innerText = origin;

    const catTemperament = document.createElement('p');
    catTemperament.className = 'cat-temperament';
    catTemperament.innerText = temperament;

    closeBtn.addEventListener('click', e => {
      // e.stopPropagation();
      this.toggleModal();
    });

    overlay.addEventListener('click', e => this.toggleModal());
    
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeBtn);

    modalInfo.appendChild(catOrigin);
    modalInfo.appendChild(catTemperament);
    
    modal.appendChild(modalHeader);
    modal.appendChild(modalImg);
    modal.appendChild(modalInfo);

    this.modalWrapper.appendChild(overlay);
    this.modalWrapper.appendChild(modal);
  }
}