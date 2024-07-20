const applyScrollEffect = (setLogo) => {
  const content = document.querySelector('.wrapper');
  const scrollTrigger = 100;
  const transitionStyle = '0.2s ease-in-out';
  const searchBoxInput = document.querySelector('.search-box input');

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const links = document.querySelectorAll('.wrapper .links li a');
    const icons = document.querySelectorAll('.wrapper i'); // Select all <i> tags inside the wrapper

    if (scrollY > scrollTrigger) {
      content.style.backgroundColor = 'var(--color-navbar)';
      content.style.transition = transitionStyle;
      setLogo('black');
      links.forEach(link => {
        link.style.color = 'black';
        link.style.transition = transitionStyle;
      });
      icons.forEach(icon => {
        icon.style.color = 'black';
        icon.style.transition = transitionStyle;
      });
      searchBoxInput.style.setProperty('--placeholder-color', '#333'); // Change placeholder color to dark grey
    } else {
      content.style.backgroundColor = 'var(--color-navbar-scroll)';
      content.style.transition = transitionStyle;
      setLogo('white');
      links.forEach(link => {
        link.style.color = 'white';
        link.style.transition = transitionStyle;
      });
      icons.forEach(icon => {
        icon.style.color = 'white';
        icon.style.transition = transitionStyle;
      });
      searchBoxInput.style.setProperty('--placeholder-color', '#f2f2f2'); // Reset placeholder color to initial
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

export default applyScrollEffect;
