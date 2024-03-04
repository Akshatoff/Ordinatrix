const home = document.getElementById("home");
const dandabanda = document.getElementById("danda-banda");
const heading = document.getElementById("heading");
const info = document.getElementById("info");
const pyrologo = document.getElementById("pyrologo");
const headingabout = document.getElementById("heading-about");
const infoabout = document.getElementById("aboutinfo");
const aboutbtn = document.getElementById("events");


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

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#events-page",
        start: "-5% right", // Start the animation when 80% of the element is visible in the viewport
        end: "200% center", // End the animation when 20% of the element is still visible in the viewport
        scrub: true
    }
});

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

    function Animateabout(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.to("#heading-about", {opacity: 1, duration: 1, delay: 0.5});
                gsap.to('#aboutinfo', { opacity: 1, duration: 1, delay: 0.7 });
                gsap.to('#events', { opacity: 1, duration: 1, delay: 0.9 });
                observer.unobserve(entry.target);
            }
        });
    }

    const aboutheadingobserver = new IntersectionObserver(Animateabout, {
        root: null,
        threshold: 0.9
    });

    aboutheadingobserver.observe(headingabout)
    aboutheadingobserver.observe(infoabout)
    aboutheadingobserver.observe(aboutbtn)

});

tl.to('#danda-banda', {
    x: 750,
    y: 580,
  
});
tl2.to("#danda-banda", {
    x: 10,
    y: 1580,
    width: "-5rem",
    height: "-5rem"
})


//Smooth Scroll
const lenis = new Lenis();



lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
