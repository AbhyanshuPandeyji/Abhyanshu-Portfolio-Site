//these all are our predefined motions - transitions = dont get scared about it - its just applying the style by 
// accessing the object and just takin value from us in the page and putting it in here and rendering it by giving object response
// in back to the functional component

// it will be bit challenging to create something like it from the start but slowly - slowly you will learn

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

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  
    // the part of the animation is that - the first it will be in hidden and then 
    // after the values get in - it will take it and act accordinly
    // in the case it will go from hidden - to the show of the object key values
    // by default the value will be 0 in case of x and y

    // in case on - if value is provided in direction then - if left it will be present in left and it will come from there to the its actual postion of origin
    // then on show when it is coming from hidden to show - its position will be (0,0) relative the position this element is been implemented
    // then the transition is going to be applied which will defined by type of animation , delay and the duration of it
    // in here we used the shorthand property to do the transition - by giving every required value in one line
    // its transition not animation so no defining the @keyframes to define name of animation and write the animation in it -
    // you can directly write transition on the code and it will do its job in the styles
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
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

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
