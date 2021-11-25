(() => {
  const refs = {
    switchDropdownBtn: document.querySelector('[data-dropdown-switch]'),
    dropdown: document.querySelector('[data-dropdown]'),
  };

  refs.switchDropdownBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.dropdown.classList.toggle('is-hidden');
  }
})();
