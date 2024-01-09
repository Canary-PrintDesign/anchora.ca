const summaries = document.querySelectorAll('summary');
const details = document.querySelectorAll('details');

for (const summary of summaries) {
  summary.addEventListener('click', (e) => {
    const currentDetail = e.target.parentNode;

    for (const detail of details) {
      if (detail !== currentDetail) {
        detail.removeAttribute('open');
      }
    }
  })
}
