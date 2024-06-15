export const navVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        delay: 0.2,
      },
    },
  };
  
  export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };
    
    export const slideIn = (direction, type, delay, duration) => {
      return {
        hidden: {
          x: direction === "left" ? "-120%" : direction === "right" ? "120%" : 0,
          y: direction === "up" ? "120%" : direction === "down" ? "120%" : 0,
        },
        show: {
          x: 0,
          y: 0,
          transition: {
            type: type,
            delay: delay,
            duration: duration,
            ease: "easeOut",
          },
        },
      };
    };
    
    export const staggerContainer = (staggerChildren, delayChildren) => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren,
          delayChildren,
        },
      },
    });
    