document.addEventListener('DOMContentLoaded', () => {
    const modalBackdrop = document.querySelector('.backdrop');
    const openModalBtn = document.querySelector('.open-modal-btn');
    const closeModalBtn = document.querySelector('[data-modal-close]');
  
    function openModal() {
      modalBackdrop.classList.remove('is-hidden');
      modalBackdrop.classList.add('is-open');
    }
  
    function closeModal() {
      modalBackdrop.classList.remove('is-open');
      modalBackdrop.classList.add('is-hidden');
    }
  
    openModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
  
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  });
  