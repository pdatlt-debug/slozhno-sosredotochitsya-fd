document.addEventListener('DOMContentLoaded', () => {
const themeButtons = document.querySelectorAll('.header__theme-menu-button');

function setTheme(theme) {
  document.body.className = 'page';

  if (theme === 'light') {
    document.body.classList.add('theme_light');
  } else if (theme === 'dark') {
    document.body.classList.add('theme_dark');
  } else if (theme === 'auto') {
    document.body.classList.add('theme_auto');
  }
localStorage.setItem('theme', theme);
}

function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
    updateActiveButton(savedTheme);
  } else {
    setTheme('auto');
    updateActiveButton('auto');
  }
}

function updateActiveButton(activeTheme) {
  themeButtons.forEach((btn) => {
    btn.classList.remove('header__theme-menu-button_active');
    btn.removeAttribute('disabled');

    const buttonClass = btn.className;
    if (
      (activeTheme === 'light' && buttonClass.includes('header__theme-menu-button_type_light')) ||
      (activeTheme === 'dark' && buttonClass.includes('header__theme-menu-button_type_dark')) ||
      (activeTheme === 'auto' && buttonClass.includes('header__theme-menu-button_type_auto'))
    ) {
      btn.classList.add('header__theme-menu-button_active');
      btn.setAttribute('disabled', true);
    }
  });
}
themeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('header__theme-menu-button_type_light')) {
      setTheme('light');
    } else if (btn.classList.contains('header__theme-menu-button_type_dark')) {
      setTheme('dark');
    } else if (btn.classList.contains('header__theme-menu-button_type_auto')) {
      setTheme('auto');
    }
    updateActiveButton();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
});
});