
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
        
        // Header slide-in animation
        gsap.to("#header", {
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            onComplete: function() {
                // Animate logo
                gsap.to(".logo", {
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out"
                });
                
                // Animate navigation items with stagger
                gsap.to("nav a", {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.6,
                    ease: "power3.out"
                });
                
                // Animate hamburger
                gsap.to(".hamburger", {
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out"
                });
            }
        });
        
        // Hero section animations
        const heroTl = gsap.timeline();
        heroTl.to(".hero-content", {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.3
        })
        .to(".planets", {
            opacity: 1,
            duration: 1.5,
            ease: "power3.out"
        }, "-=0.8")
        .to(".hero p", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.5")
        .to(".cta-button", {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.8)"
        }, "-=0.5");
        
        // Button continuous pulse effect
        gsap.to(".cta-button", {
            scale: 1.05,
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "power1.inOut",
            delay: 2
        });
        
        // Stats section scroll animation
        gsap.utils.toArray('.stat-item').forEach((stat, index) => {
            gsap.fromTo(stat, {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: stat,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                delay: index * 0.1
            });
        });
        
        // Features section scroll animation
        gsap.utils.toArray('.feature-card').forEach((card, index) => {
            gsap.fromTo(card, {
                opacity: 0,
                y: 50
            }, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                delay: index * 0.15
            });
        });
        
        // Testimonials section scroll animation
        gsap.fromTo(".testimonials", {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".testimonials",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none none"
            }
        });
        
        // Footer social icons animation
        gsap.utils.toArray('.social-icons a').forEach((icon, index) => {
            gsap.fromTo(icon, {
                opacity: 0,
                y: 20
            }, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "footer",
                    start: "top 90%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                delay: index * 0.1
            });
        });
        
        // Hamburger menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('nav ul');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });