const collapseEl = document.getElementById('first');
collapseEl.addEventListener('show.bs.collapse', function () {
  collapseEl.style.height = '0';
  // animate height to scrollHeight (simple example — consider CSS transitions)
});
collapseEl.addEventListener('hide.bs.collapse', function () {
  // animate height to 0
});
