const showModal = (e) => {
  document.getElementById('js-modal').classList.add('show');
  document.getElementById('js-modal-close').addEventListener('click', (e) => {
    document.getElementById('js-modal').classList.remove('show');
  });
};

export { showModal };
