// Small progressive enhancements – the site works without this file.
// 1) image slider buttons  2) click-to-zoom lightbox for figures and galleries
document.querySelectorAll('[data-slider]').forEach(function (slider) {
  var track = slider.querySelector('.slider__track');
  function move(dir) {
    var max = track.scrollWidth - track.clientWidth;
    var next = track.scrollLeft + dir * track.clientWidth;
    track.scrollLeft = next > max + 5 ? 0 : next < -5 ? max : next;
  }
  slider.querySelector('[data-slider-prev]').addEventListener('click', function () { move(-1); });
  slider.querySelector('[data-slider-next]').addEventListener('click', function () { move(1); });
});

if (window.HTMLDialogElement) {
  var dialog = document.createElement('dialog');
  dialog.className = 'lightbox';
  dialog.innerHTML = '<img alt="">';
  dialog.addEventListener('click', function () { dialog.close(); });
  document.body.appendChild(dialog);
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[data-lightbox]');
    if (!link || !/\.(png|jpe?g|gif|webp|svg)$/i.test(link.getAttribute('href'))) return;
    e.preventDefault();
    dialog.querySelector('img').src = link.href;
    dialog.showModal();
  });
}
