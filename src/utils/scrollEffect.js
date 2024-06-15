// scrollEffect.js

const applyScrollEffect = () => {
    const content = document.querySelector('.wrapper');
    const scrollTrigger = 800;
  
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
  
      if (scrollY > scrollTrigger) {
        content.style.backgroundColor = 'var(--color-navbar)'; // Change this to the desired color
        content.style.transition = '0.2s ease-in-out';
      } else {
        content.style.backgroundColor = 'var(--color-navbar-scroll)'; // Change this to the initial color
        content.style.transition = '0.2s ease-in-out';
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };
  
  export default applyScrollEffect;
  