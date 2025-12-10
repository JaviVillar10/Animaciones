gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.to(".hero-title", { duration: 1, y: 0, opacity: 1, ease: "power3.out" })
  .to(".hero-text", { duration: 0.8, y: 0, opacity: 1, ease: "power2.out" }, "-=0.5");


gsap.to(".btn-cta", {
    scale: 1.05,
    boxShadow: "0 20px 30px rgba(37, 99, 235, 0.5)",
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});


const cards = document.querySelectorAll(".service-card");
cards.forEach((card, i) => {
    const direction = i % 2 === 0 ? 100 : -100;
    gsap.fromTo(card, 
        { opacity: 0, x: direction },
        {
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 50%",
                toggleActions: "play none none reverse"
            }
        }
    );
});


gsap.fromTo(".testimonial-card", 
    { y: 50, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#testimonials",
            start: "top 75%"
        }
    }
);

gsap.to(".main-footer", {
    scrollTrigger: { trigger: "body", start: "bottom bottom" },
    opacity: 1, y: 0, duration: 1
});


const hero = document.getElementById('hero');
const shape = document.getElementById('floating-shape');
hero.addEventListener('mousemove', (e) => {
    const x = (e.clientX - window.innerWidth / 2) * -0.05;
    const y = (e.clientY - window.innerHeight / 2) * -0.05;
    gsap.to(shape, { x: x, y: y, duration: 1, ease: "power1.out" });
});


const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        
        e.preventDefault();
        
       
        alert("¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.");
        
      
        contactForm.reset();
    });
}