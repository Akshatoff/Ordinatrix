const home = document.getElementById("home");
const dandabanda = document.getElementById("danda-banda");
const heading = document.getElementById("heading");
const info = document.getElementById("info");
const pyrologo = document.getElementById("pyrologo");

gsap.set("#pyrologo", {
    width: "5rem",
    height: "5rem"
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#danda-banda",
        start: "-5% left",
        end: "200% center",
        scrub: true,
        markers: false
    }
});

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#pyrologo",
        width: "5rem",
        start: "-5% left",
        end: "200% center",
        scrub: true,
        markers: false
    }}); // Define the timeline without scrollTrigger initially

// let tl2 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".text",
//         start: "bottom 80%", // Start the animation when 80% of the element is visible in the viewport
//         end: "bottom 20%", // End the animation when 20% of the element is still visible in the viewport
//         scrub: true
//     }
// });

window.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        gsap.from(home, {
            duration: 1,
            opacity: 0,
            x: -1000,
            ease: "power4.out"
        });
    }, 10);

    setTimeout(() => {
        gsap.from(dandabanda, {
            duration: 5,
            opacity: 0,
            x: -1000,
            ease: "power4.out"
        });
    }, 100);
    setTimeout(() => {
        gsap.from(heading, {
            duration: 3,
            opacity: 0,
            y: -1000,
            ease: "power4.out"
        });
    }, 100);
    setTimeout(() => {
        gsap.from(info, {
            duration: 4,
            opacity: 0,
            x: 500,
            ease: "power4.out"
        });
    }, 100);
    setTimeout(() => {
        gsap.from(info, {
            duration: 1,
            opacity: 1,
            x: 0,
            ease: "power4.out"
        });
    }, 10);
});

tl.to('#danda-banda', {
    x: 750,
    y: 580,
  
});


//Smooth Scroll
const lenis = new Lenis();



lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
