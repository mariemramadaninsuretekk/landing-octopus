// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Toggle video mute/unmute on voice icon click
const voiceToggle = document.getElementById('voice-toggle');
const heroVideo = document.getElementById('hero-video');
const volumeOnIcon = document.getElementById('volume-on-icon');
const volumeOffIcon = document.getElementById('volume-off-icon');

if (voiceToggle && heroVideo) {
    voiceToggle.addEventListener('click', function() {
        if (heroVideo.muted) {
            // Unmute the video - show volume-high icon (sound is on)
            heroVideo.muted = false;
            volumeOffIcon.style.display = 'none';
            volumeOnIcon.style.display = 'inline-block';
        } else {
            // Mute the video - show volume-xmark icon (sound is muted)
            heroVideo.muted = true;
            volumeOnIcon.style.display = 'none';
            volumeOffIcon.style.display = 'inline-block';
        }
    });
}

// Professional Work Experience Animations
const experienceSection = document.querySelector('.experience-section');
if (experienceSection) {
    // Animate title
    gsap.fromTo('.experience-title',
        {
            opacity: 0,
            y: -30
        },
        {
            scrollTrigger: {
                trigger: '.experience-section',
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
        }
    );

    // Sync testimonials with timeline items
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    // Animate timeline line and reveal content
    const timelineContainer = document.querySelector('.timeline-container');
    const timelineLine = document.querySelector('.timeline-line');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineContainer && timelineLine && timelineItems.length > 0) {
        // Set initial line height to 0
        gsap.set(timelineLine, { height: 0 });
        
        // Calculate timeline height and animate the line
        const animateTimelineLine = () => {
            const lastItem = timelineItems[timelineItems.length - 1];
            const timelineHeight = lastItem.offsetTop + lastItem.offsetHeight;
            
            // Animate the line drawing as you scroll
            ScrollTrigger.create({
                trigger: timelineContainer,
                start: 'top 80%',
                end: () => `+=${timelineHeight}`,
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    gsap.set(timelineLine, { height: timelineHeight * progress });
                }
            });
        };
        
        // Initialize after a short delay to ensure layout is calculated
        setTimeout(animateTimelineLine, 200);
        
        // Animate each timeline item as line reaches it
        timelineItems.forEach((item, index) => {
            const marker = item.querySelector('.timeline-marker');
            const jobTitle = item.querySelector('.job-title');
            const jobDates = item.querySelector('.job-dates');
            const responsibilities = item.querySelectorAll('.responsibilities-list li');
            
            // Get corresponding testimonial card
            const testimonialCard = testimonialCards[index];
            
            // Reveal marker when scrolling to this item
            if (marker) {
                gsap.fromTo(marker,
                    { opacity: 0, scale: 0 },
                    {
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        },
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        ease: 'back.out(1.7)',
                        onComplete: function() {
                            marker.classList.add('visible');
                        }
                    }
                );
            }
            
            // Reveal timeline item content
            gsap.fromTo(item,
                { opacity: 0, y: 30 },
                {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    onComplete: function() {
                        item.classList.add('visible');
                    }
                }
            );
            
            // Sync testimonial card with timeline item
            if (testimonialCard) {
                gsap.fromTo(testimonialCard,
                    { opacity: 0, x: -30 },
                    {
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        },
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        onComplete: function() {
                            testimonialCard.classList.add('visible');
                        }
                    }
                );
            }
            
            // Animate content elements
            if (jobTitle) {
                gsap.fromTo(jobTitle,
                    { opacity: 0, x: 20 },
                    {
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        },
                        opacity: 1,
                        x: 0,
                        duration: 0.6,
                        delay: 0.2
                    }
                );
            }
            
            if (jobDates) {
                gsap.fromTo(jobDates,
                    { opacity: 0, x: 20 },
                    {
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        },
                        opacity: 1,
                        x: 0,
                        duration: 0.6,
                        delay: 0.3
                    }
                );
            }
            
            if (responsibilities.length > 0) {
                gsap.fromTo(responsibilities,
                    { opacity: 0, x: 20 },
                    {
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        },
                        opacity: 1,
                        x: 0,
                        duration: 0.5,
                        delay: 0.4,
                        stagger: 0.1
                    }
                );
            }
        });
    }

    // Animate stars in testimonials
    const stars = document.querySelectorAll('.stars i');
    stars.forEach((star, index) => {
        gsap.from(star, {
            scrollTrigger: {
                trigger: star.closest('.testimonial-card'),
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            scale: 0,
            rotation: 180,
            duration: 0.4,
            delay: index * 0.05,
            ease: 'back.out(1.7)'
        });
    });
}

AOS.init({
    duration:  1500,
    once: true,
    easing: 'ease-in-out',
    delay: 100,
    offset: 100 
});