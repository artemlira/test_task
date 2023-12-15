import './iconsFont.css';
import './style.scss';

const buttons = document.querySelectorAll('.product__table__item--btn');
const sideItems = document.querySelectorAll('.side-menu__item');

buttons.forEach((btn) => {
  btn.addEventListener('click', (evn) => {
    if (evn.target.matches('.active')) {
      evn.target.classList.remove('active');
      evn.target.innerText = 'Inactive';
    } else {
      evn.target.classList.add('active');
      evn.target.innerText = 'Active';
    }
  });
});

function removeClass(block, className) {
  block.forEach((i) => {
    i.classList.remove(className);
  });
}

sideItems.forEach((item) => {
  item.addEventListener('click', (evn) => {
    removeClass(sideItems, 'active');
    evn.target.closest('.side-menu__item').classList.add('active');
  });
});
