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
        ease: "power1.out",
        onComplete: () => {
            gsap.to(element, {
                yoyo: true,
                repeat: -1,
                scale: finalScale,
                duration: duration,
                ease: "power1.in"
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

export const horizontalSlideInAnimation = (element, axisValue1, axisValue2, axisValue3, initialDuration, secondDuration, finalDuration, scaleValue) => {
    const timeline = gsap.timeline({ repeat: -1 }); // repeat: -1 means infinite loop
  
    timeline
      .from(element, {
        x: axisValue1, // Slide in from the left
        duration: initialDuration, // Animation duration
        ease: "power2.out",
         opacity: 0,
      })
      .to(element, {
        x: axisValue2, // Stay in place
        duration: secondDuration, // Time to stay
        ease: "elastic.out(1, 0.5)",
        scale:scaleValue
      })
      .to(element, {
        x: axisValue3, // Move out to the right
        duration: finalDuration, // Animation duration
        ease: "power2.in",
         opacity: 0,
      })
      .to(element, {
        x: axisValue1, // Return to start position (immediate comeback)
        duration: 0, // Instant transition
         opacity: 0,
      });
  };


export const verticalSlideInAnimation = (element, axisValue1, axisValue2, axisValue3, initialDuration, secondDuration, finalDuration, scaleValue) => {
    const timeline = gsap.timeline({ repeat: -1 }); // repeat: -1 means infinite loop
  
    timeline
      .from(element, {
        y: axisValue1, // Slide in from the left
        duration: initialDuration, // Animation duration
        ease: "power2.out",
        opacity: 0,
      })
      .to(element, {
        y: axisValue2, // Stay in place
        duration: secondDuration, // Time to stay
        ease: "elastic.out(1, 0.5)",
        scale:scaleValue
      })
      .to(element, {
        y: axisValue3, // Move out to the right
        duration: finalDuration, // Animation duration
        opacity: 0,
        ease: "power2.in",
      })
      .to(element, {
        y: axisValue1, // Return to start position (immediate comeback)
        duration: 0, // Instant transition
        opacity: 0,
      });
  };

  export const scrollImageUpDown = (element) => {
    const timeline = gsap.timeline({ repeat: -1 }); // Infinite loop

  timeline
    .to(element, {
      y: -200, // Scroll up (negative Y-axis)
      duration: 5, // Time to scroll up and shrink
      ease: "power2.out",
    })
    .to(element, {
      duration: 4, // Pause while staying small
      ease: "elastic.out(2, 2)",
    })
    .to(element, {
      y: 0, // Return to normal position
      duration: 5, // Time to return to normal
      ease: "elastic.out(2, 2)",
    })
    .to(element, {
      duration: 6, // Pause at normal position
    });
  };