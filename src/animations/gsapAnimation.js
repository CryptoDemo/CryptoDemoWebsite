import { gsap } from 'gsap';

import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

export const rotateOrbitAnimation = (element, path, rotationValue, duration) => {
  gsap.to(element, {
    duration: duration,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    motionPath: {
      path: path,
      curviness: 1.5,
    },
    rotation: rotationValue,
  });
};

export const fadeAnimation = (element1, element2) => {
  gsap.fromTo([element1, element2],
    {
      opacity: 0.25,
      stagger: 5
    },
    {
      duration: 8,
      opacity: 1,
      repeat: -1,
      yoyo: true,
      ease: "back.inOut",
      stagger: 5,
      rotation: 270
    }
  );
};

export const zoomAnimation = (element, initialScale, finalScale, duration) => {
  gsap.to(element, {
    scale: initialScale,
    duration: duration,
    ease: "slow(0.7,0.7,false)",
    onComplete: () => {
      gsap.to(element, {
        yoyo: true,
        repeat: -1,
        scale: finalScale,
        duration: duration,
        ease: "slow(0.7,0.7,false)",
      });
    }
  });
};

export const stackAnimation = (image1, image2) => {

  const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

  timeline
    .to(image1, {
      scale: 1.07,
      zIndex: 1001, // Bring it forward
      duration: 2,
      ease: 'power1.out',
    })
    .to(image1, {
      scale: 1,
      zIndex: 0,
      duration: 2,
      ease: 'power1.in',
    })
    .to(image2, {
      scale: 1.1,
      zIndex: 1001,
      duration: 2,
      ease: 'power1.out',
    })
    .to(image2, {
      scale: 1,
      zIndex: 0,
      duration: 2,
      ease: 'power1.in',
    });
};

export const simultaneousAnimation = (element, fromAxis, axisValue1, finalDuration, delaying) => {
  const timeline = gsap.timeline({ repeat: -1 });

  timeline.fromTo(element, {
    [fromAxis]: axisValue1,
    duration: 1,
    ease: "power2.out",
    opacity: 0,
  }, {
    [fromAxis]: 0,
    duration: 5,
    ease: "power2.out",
    opacity: 1,
    scale: 1.05
  })
  .to(element,{
    y: 50, 
    duration: finalDuration,
    opacity: 0,
    ease: "power2.in",
    delay: delaying
  })
}

export const scrollImageUpDown = (element) => {
  const timeline = gsap.timeline({ repeat: -1 }); // Infinite loop

  timeline.to(element, {
    y: -1120, // Move up
    duration: 8, // Time for movement
    ease: "circ.inOut",
  })
    // Pause while staying up
    .to(element, {
      duration: 1.5, // Pause duration

    })
    // Bounce back to the original position
    .to(element, {
      y: -1, // Return to normal
      duration: 8, // Time to return
      ease: "circ.inOut",
    })
    // Pause at the normal position
    .to(element, {
      duration: 2.5, // Pause duration

    });
};


export const swapAnimationUpDown = (card1i, card1ii, neutral) => {
  gsap.to(card1i, {
    duration: 1.5,
    opacity: 0,
    y: 100,
    ease: 'power2.in',
    onComplete: () => {
      card1i.classList.remove('card1i');
      // Move `card1i` back smoothly to its original position
      gsap.fromTo(
        card1i,
        { opacity: 0, y: -100 },
        {
          duration: 1.5,
          opacity: 1,
          y: 0,
          ease: 'power3.out',
        }
      );
    },
  });

  // Animate `card1ii` out to the top
  gsap.to(card1ii, {
    duration: 1.5,
    opacity: 0,
    y: -100,
    ease: 'power2.in',
    onComplete: () => {
      card1ii.classList.remove('card1ii');
      // Move `card1ii` back smoothly to its original position
      gsap.fromTo(
        card1ii,
        { opacity: 0, y: 100 },
        {
          duration: 1.5,
          opacity: 1,
          y: 0,
          ease: 'power3.out',
        }
      );
    },
  });

  // Animate neutral into `card1ii` from the bottom
  gsap.fromTo(
    neutral,
    { opacity: 0, y: 100 },
    {
      duration: 1.5,
      opacity: 1,
      y: 0,
      ease: 'bounce.out',
      onStart: () => neutral.classList.add('card1ii'),
    }
  );

  // Animate `card1ii` into `card1i` from the top
  gsap.fromTo(
    card1ii,
    { opacity: 0, y: -100 },
    {
      duration: 1.5,
      opacity: 1,
      y: 0,
      ease: 'bounce.out',
      onStart: () => card1ii.classList.add('card1i'),
    }
  );
}

export const staggerImg = (element) => {
  const tl = gsap.timeline({ repeat: -1 }); // Repeat infinitely with no delay

  tl.fromTo(
    element,
    { scale: 0 }, // Start scale
    {
      scale: 1, // End scale
      duration: 5,
      stagger: 0.5,
      ease: 'power2.out',
    }
  ).to(
    element,
    {
      scale: 0, // Return to start scale
      duration: 2,
      stagger: -0.5, // Reverse order
      ease: 'power2.in',
    }
  );

}