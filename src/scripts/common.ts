// DOMContentLoadedの代わりにloadイベントを使用
window.addEventListener('load', () => {
  initializeAll();
});

async function initializeAll() {
  console.log('hay');
}
