export function slideInFromLeft(delay) {
  return {
    hidden: { x: -1000, opacity: 1 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 2,
      },
    },
  };
}

export function slideInFromRight(delay) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 2,
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 2,
    },
  },
};
