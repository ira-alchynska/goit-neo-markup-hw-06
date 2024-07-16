document.addEventListener('DOMContentLoaded', () => {
  const contactModalBackdrop = document.querySelector('.backdrop[data-modal]');
  const contactModal = document.querySelector('#contact-modal');
  const menuModal = document.querySelector('#menu-modal');

  const openContactModalBtn = document.querySelector('.hero-button.open-modal-btn');
  const closeContactModalBtn = contactModal.querySelector('[data-modal-close]');

  const openMenuModalBtn = document.querySelector('.header-menu-btn');
  const closeMenuModalBtn = document.querySelector('[data-modal-close-header]');

  function toggleContactModal() {
    if (contactModalBackdrop && contactModal) {
      console.log('Toggling contact modal');
      contactModalBackdrop.classList.toggle('is-hidden');
      contactModalBackdrop.classList.toggle('is-open');
      contactModal.classList.toggle('is-hidden');
      contactModal.classList.toggle('is-open');
    }
  }

  function toggleMenuModal() {
    if (menuModal) {
      console.log('Toggling menu modal');
      menuModal.classList.toggle('is-hidden');
      menuModal.classList.toggle('is-open');
    } else {
      console.log('Menu modal not found');
    }
  }

  if (openContactModalBtn) {
    openContactModalBtn.addEventListener('click', toggleContactModal);
  }

  if (closeContactModalBtn) {
    closeContactModalBtn.addEventListener('click', toggleContactModal);
  }

  if (openMenuModalBtn) {
    console.log('Adding event listener to open menu modal button');
    openMenuModalBtn.addEventListener('click', toggleMenuModal);
  } else {
    console.log('Open menu modal button not found');
  }

  if (closeMenuModalBtn) {
    console.log('Adding event listener to close menu modal button');
    closeMenuModalBtn.addEventListener('click', toggleMenuModal);
  } else {
    console.log('Close menu modal button not found');
  }

  if (contactModalBackdrop) {
    contactModalBackdrop.addEventListener('click', (e) => {
      if (e.target === contactModalBackdrop) {
        toggleContactModal();
      }
    });
  }

  if (menuModal) {
    menuModal.addEventListener('click', (e) => {
      if (e.target === menuModal) {
        toggleMenuModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (contactModalBackdrop && contactModalBackdrop.classList.contains('is-open')) {
        toggleContactModal();
      }
      if (menuModal && menuModal.classList.contains('is-open')) {
        toggleMenuModal();
      }
    }
  });
});
