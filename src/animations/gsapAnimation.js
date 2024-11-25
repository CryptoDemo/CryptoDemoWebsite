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