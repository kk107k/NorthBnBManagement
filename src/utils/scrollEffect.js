const applyScrollEffect = () => {
  const content = document.querySelector('.wrapper');
  const scrollTrigger = 100;
  
  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const links = document.querySelectorAll('.content .links li a'); // Select all <a> tags inside .wrapper

    if (scrollY > scrollTrigger) {
      content.style.backgroundColor = 'var(--color-navbar)'; // Change this to the desired color
      content.style.transition = '0.2s ease-in-out';
      links.forEach(link => {
        link.style.color = 'black'; // Change link color to white
        link.style.transition = '0.2s ease-in-out';
      });
    } else {
      content.style.backgroundColor = 'var(--color-navbar-scroll)'; // Change this to the initial color
      content.style.transition = '0.2s ease-in-out';
      links.forEach(link => {
        link.style.color = 'white'; // Reset link color to initial
        link.style.transition = '0.2s ease-in-out';
      });
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

export default applyScrollEffect;
