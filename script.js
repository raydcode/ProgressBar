window.onload = () => load();

function load() {
  const progress = document.querySelector('.progress');
  let level = 0;
  const timeInterval = setInterval(fill, 20);

  function fill() {
    if (level >= 100) {
      clearInterval(timeInterval);
      const status = document.querySelector('.status');
      status.textContent = 'Completed !!';
    } else {
      level++;
      progress.style.width = `${level}%`;
      progress.innerHTML = `${level}%`;
    }
  }
}
