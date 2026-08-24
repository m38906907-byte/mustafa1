'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const stats = [
{ value: '+4', label: 'Projects Completed' },
{ value: '+1', label: 'Years Experience' },
{ value: '+20', label: 'Happy Clients' }];


export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const card = document.getElementById('hero-photo-card');
      if (card) {
        card.style.transform = `translateY(${scrollY * 0.04}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="
        relative min-h-screen flex items-center
        pt-28 md:pt-32 lg:pt-36 xl:pt-40 2xl:pt-44 3xl:pt-52
        pb-16 md:pb-20 lg:pb-24
        px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 3xl:px-40
        overflow-hidden
      "






      aria-label="Hero section">

      {/* Background ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(194,19,19,0.06) 0%, transparent 70%)'
        }} />

      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 40% 40% at 20% 60%, rgba(194,19,19,0.04) 0%, transparent 70%)'
        }} />

      <div className="w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-8 xl:gap-12 2xl:gap-16">

          {/* ─── LEFT: Text Content ─── */}
          <div className="flex-1 animate-slide-in-left">

            {/* Welcome line */}
            <p className="font-display text-foreground text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium mb-2 md:mb-3 tracking-widest uppercase">
              Welcome
            </p>

            {/* Main headline */}
            <div className="overflow-hidden mb-4 md:mb-6">
              <h2
                className="font-display font-black text-primary text-shadow-red leading-tight"
                style={{
                  fontSize: 'clamp(1.6rem, 3.5vw, 4.5rem)',
                  letterSpacing: '-0.02em',
                  animation: 'textReveal 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both'
                }}>

                Hello, I&apos;m Mustafa
              </h2>
            </div>

            {/* Role tags */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
              {['Web Developer', 'Publication Designer', 'UI/UX']?.map((tag) =>
              <span
                key={tag}
                className="px-3 py-1 border border-border rounded-full text-xs md:text-sm font-sans text-muted-foreground"
                style={{ backdropFilter: 'blur(8px)' }}>

                  {tag}
                </span>
              )}
            </div>

            {/* Description */}
            <p
              className="text-muted-foreground font-sans leading-relaxed mb-8 md:mb-10 lg:mb-12"
              style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1.1rem)', maxWidth: '560px', lineHeight: '1.8' }}>

              I am a designer specialized in magazines and educational booklets,
              working with the Sparrow team, as well as an up-and-coming web developer.
              With strong knowledge of HTML and CSS, I am currently advancing my skills
              in JavaScript to create modern, responsive, and dynamic websites.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-10 lg:mb-12">
              {stats?.map((stat) =>
              <div
                key={stat?.label}
                className="skill-card px-5 py-4 md:px-6 md:py-5 min-w-[120px] md:min-w-[140px] xl:min-w-[160px] 2xl:min-w-[180px]">

                  <span
                  className="font-display font-black text-primary text-shadow-red block"
                  style={{ fontSize: 'clamp(2rem, 3vw, 3.5rem)', lineHeight: '1' }}>

                    {stat?.value}
                  </span>
                  <span className="text-muted-foreground font-sans mt-1 block" style={{ fontSize: 'clamp(0.65rem, 0.9vw, 0.8rem)' }}>
                    {stat?.label}
                  </span>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 md:gap-5">
              <a
                href="/assets/images/CV.png"
                download
                aria-label="Download CV"
                className="btn-download"
                style={{ fontSize: 'clamp(0.65rem, 0.9vw, 0.8rem)' }}>

                Download CV
              </a>
              <a
                href="https://www.instagram.com/ar.ccc0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Mustafa on Instagram">

                <button
                  className="btn-send"
                  style={{ fontSize: 'clamp(0.65rem, 0.9vw, 0.8rem)' }}>

                  Send to me
                </button>
              </a>
            </div>
          </div>

          {/* ─── RIGHT: Photo Card ─── */}
          <div
            id="hero-photo-card"
            className="
              animate-slide-in-right
              flex-shrink-0
              photo-card
              relative
              w-[300px] h-[420px]
              sm:w-[340px] sm:h-[480px]
              lg:w-[320px] lg:h-[460px]
              xl:w-[360px] xl:h-[520px]
              2xl:w-[400px] 2xl:h-[580px]
              3xl:w-[460px] 3xl:h-[660px]
              4xl:w-[520px] 4xl:h-[740px]
              mx-auto lg:mx-0
            ">














            {/* Profile image */}
            <div className="absolute inset-3 rounded-[16px] overflow-hidden z-0">
<AppImage
src="/assets/images/Bat Insta My Pic.jpeg"
                alt="Young man in dark setting, professional portrait, dark moody background with low-key lighting"
                fill
                className="object-cover"
                priority />

              {/* Overlay scrim */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(8,8,8,0.7) 100%)' }} />

            </div>

            {/* Responsive badge */}
            <div
              className="info-badge absolute -left-8 top-12 px-3 py-2 flex items-center gap-2 z-10 shadow-red-glow">

              <Icon name="DevicePhoneMobileIcon" size={20} className="text-primary" />
              <span className="text-foreground font-display text-xs font-bold">Responsive</span>
            </div>

            {/* Clean Code badge */}
            <div
              className="info-badge absolute left-4 bottom-12 px-3 py-2 flex items-center gap-2 z-10 shadow-red-glow">

              <Icon name="CodeBracketIcon" size={20} className="text-primary" />
              <span className="text-foreground font-display text-xs font-bold">Clean Code</span>
            </div>

            {/* Decorative spinning ring */}
            <div
              className="absolute -right-5 -top-5 w-16 h-16 md:w-20 md:h-20 rounded-full border border-primary/20 animate-spin-slow"
              aria-hidden="true" />

            <div
              className="absolute -right-2 -top-2 w-8 h-8 md:w-10 md:h-10 rounded-full border border-primary/40"
              aria-hidden="true" />

          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40" aria-hidden="true">
        <span className="font-display text-[10px] tracking-widest uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent animate-pulse" />
      </div>
    </section>);

}