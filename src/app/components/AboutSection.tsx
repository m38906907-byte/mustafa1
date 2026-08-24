'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const infoCards = [
{
  icon: 'MapPinIcon' as const,
  title: 'My Location',
  value: 'Iraq — Baghdad'
},
{
  icon: 'PhoneIcon' as const,
  title: 'My Phone Number',
  value: '+964 783 813 6460'
}];


export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="
        relative
        py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36
        px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 3xl:px-40
        overflow-hidden
      "





      aria-label="About section">

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 10% 50%, rgba(194,19,19,0.05) 0%, transparent 70%)'
        }} />


      <div className="w-full max-w-[1800px] mx-auto">
        {/* Section header */}
        <div className="reveal mb-12 md:mb-16 lg:mb-20">
          <span className="font-sans text-xs md:text-sm font-medium tracking-widest uppercase text-muted-foreground block mb-3">
            02 / About
          </span>
          <h2
            className="font-display font-black text-foreground"
            style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)', letterSpacing: '-0.03em' }}>

            About <span className="text-primary text-shadow-red">Me</span>
          </h2>
          <div className="section-divider mt-4" />
        </div>

        {/* Main grid: photo left, content right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-start">

          {/* Photo card */}
          <div
            ref={leftRef}
            className="reveal-left lg:col-span-4 xl:col-span-4">

            <div
              className="
                photo-card relative
                w-[300px] h-[420px]
                sm:w-[340px] sm:h-[480px]
                lg:w-[320px] lg:h-[460px]
                xl:w-[360px] xl:h-[520px]
                2xl:w-[400px] 2xl:h-[580px]
                3xl:w-[460px] 3xl:h-[660px]
                4xl:w-[520px] 4xl:h-[740px]
                mx-auto lg:mx-0
              "
              style={{ borderRadius: '20px', overflow: 'visible' }}>

              {/* Experience badge — top, partially clipped */}
              <div
                className="absolute -left-6 -top-5 z-10"
                style={{
                  background: '#b11e1e',
                  borderRadius: '7px',
                  padding: '10px 14px'
                }}>
                <span
                  className="font-display font-black text-foreground text-shadow-red block"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', lineHeight: '1' }}>
                  +1
                </span>
                <span className="text-foreground font-sans text-xs font-bold block mt-1">
                  Years Experience
                </span>
              </div>

              {/* Image container with overflow hidden */}
              <div className="absolute inset-0 rounded-[20px] overflow-hidden">
                <AppImage
                  src="/assets/images/Bat Man 2.jpeg"
                  alt="Mustafa - professional portrait photo"
                  fill
                  className="object-cover" />

                {/* Scrim */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(8,8,8,0.65) 100%)' }} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            ref={rightRef}
            className="reveal-right lg:col-span-8 xl:col-span-8 flex flex-col gap-8 md:gap-10">

            {/* Bio text */}
            <p
              className="text-muted-foreground font-sans leading-relaxed"
              style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.15rem)', lineHeight: '1.9' }}>

              Hi, my name is <strong className="text-foreground font-semibold">Mustafa</strong>. I am a creative designer
              specialized in publications and book design, with strong experience in crafting
              layouts for booklets, magazines, and academic materials. My passion lies in
              transforming complex ideas into clear, professional, and visually appealing
              designs that communicate effectively.
            </p>
            <p
              className="text-muted-foreground font-sans leading-relaxed"
              style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.15rem)', lineHeight: '1.9' }}>

              Alongside my design journey, I am also a web developer. I build websites using
              HTML and CSS, and I am currently advancing my skills in JavaScript to create more
              interactive and dynamic experiences. To enhance my work, I integrate
              AI-assisted programming for smarter, faster, and more efficient solutions.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {infoCards.map((card) =>
              <div key={card.title} className="location-card px-5 py-4 md:px-6 md:py-5 flex items-center gap-4">
                  <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(194,19,19,0.1)' }}>

                    <Icon name={card.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <p
                    className="font-display font-bold text-foreground"
                    style={{ fontSize: 'clamp(0.75rem, 1vw, 0.9rem)' }}>

                      {card.title}
                    </p>
                    <p
                    className="text-muted-foreground font-sans mt-1"
                    style={{ fontSize: 'clamp(0.75rem, 1vw, 0.85rem)' }}>

                      {card.value}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Download CV */}
            <div>
              <a href="/assets/images/CV.png" download aria-label="Download Mustafa's CV">
                <button className="btn-download" style={{ fontSize: 'clamp(0.65rem, 0.9vw, 0.8rem)' }}>
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}