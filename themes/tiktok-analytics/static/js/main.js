/* main.js — C站 跳動e成效
   漢堡選單 toggle（純 vanilla JS、無 framework、無 @keyframes）
   Gate 9：RWD 漢堡選單實動（375 / 768 / 1440）*/
(function () {
  'use strict';
  var btn = document.getElementById('hamburger-btn');
  var nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    var isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    btn.setAttribute('aria-label', isOpen ? '開啟選單' : '關閉選單');
    btn.classList.toggle('is-open', !isOpen);
    if (isOpen) {
      nav.setAttribute('hidden', '');
    } else {
      nav.removeAttribute('hidden');
    }
  });
}());
