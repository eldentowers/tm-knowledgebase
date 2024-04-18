// // window.onscrollend(e => location.reload());

// // window.onscroll(e => {

let tableOfContentLinks = document.querySelectorAll('a.toc-item');

// console.log(tableOfContentLinks.entries());

let prevElem = null;

function updateGlow() {
  tableOfContentLinks.forEach(x => {
    x.style.textShadow = 'none';
  });

  let selectedId = location.href.split('#')[location.href.split('#').length - 1];
  let elem = null;
  tableOfContentLinks.forEach(x => {
    if (x.href.match(new RegExp(selectedId, 'gim'))) elem = x;
  });
  let elemId = elem.href.split('#')[elem.href.split('#').length - 1];
  console.log(elemId, selectedId);

  elem.style.textShadow = 'var(--text-shadow)';
  //   if (elemId !== selectedId) {

  //   }
}

function init() {
  //your code goes here on location change

  window.onload = updateGlow.bind(this);
  window.onhashchange = updateGlow.bind(this);
}

if (document.readyState == 'complete') {
  init();
} else {
  document.onreadystatechange = () => {
    if (document.readyState == 'complete') {
      init();
    }
  };
}
