'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    icon: 'BookOpenIcon' as const,
    title: 'Publication Design',
    description:
      'Professional layout design for magazines, educational booklets, academic materials, and corporate publications. Clean, structured, and visually compelling.',
    tags: ['InDesign', 'Illustrator', 'Print-Ready'],
    accent: true,
  },
  {
    icon: 'CodeBracketIcon' as const,
    title: 'Web Development',
    description:
      'Building modern, responsive websites with HTML, CSS, and JavaScript. Focus on clean code, fast load times, and pixel-perfect implementation.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: false,
  },
  {
    icon: 'DevicePhoneMobileIcon' as const,
    title: 'Responsive Design',
    description:
      'Every project I deliver works flawlessly across all screen sizes — from mobile phones to 27" desktop monitors. No compromises.',
    tags: ['Mobile-First', 'Cross-Browser', 'Fluid Layouts'],
    accent: false,
  },
  {
    icon: 'SparklesIcon' as const,
    title: 'AI-Assisted Development',
    description:
      'Leveraging AI programming tools to deliver smarter, faster, and more efficient digital solutions. Modern workflows for modern results.',
    tags: ['AI Tools', 'Automation', 'Efficiency'],
    accent: false,
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="service"
      ref={sectionRef}
      className="
        relative
        py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36
        px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 3xl:px-40
        overflow-hidden
      "
      aria-label="Services section"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(194,19,19,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="w-full max-w-[1800px] mx-auto">
        {/* Section header */}
        <div className="reveal mb-12 md:mb-16 lg:mb-20">
          <div>
            <span className="font-sans text-xs md:text-sm font-medium tracking-widest uppercase text-muted-foreground block mb-3">
              03 / Services
            </span>
            <h2
              className="font-display font-black text-foreground"
              style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)', letterSpacing: '-0.03em' }}
            >
              What I <span className="text-primary text-shadow-red">Do</span>
            </h2>
            <div className="section-divider mt-4" />
          </div>
          <p
            className="text-muted-foreground font-sans max-w-sm mt-4"
            style={{ fontSize: 'clamp(0.85rem, 1vw, 1rem)' }}
          >
            A combination of design craft and technical skill, delivered with precision.
          </p>
        </div>

        {/* BENTO GRID AUDIT:
          Array has 4 cards: [Publication Design, Web Development, Responsive Design, AI-Assisted Development]
          Row 1: [col-1: Publication Design cs-1 rs-1] [col-2: Web Development cs-1 rs-1]
          Row 2: [col-1: Responsive Design cs-1 rs-1] [col-2: AI-Assisted Development cs-1 rs-1]
          Placed 4/4 ✓
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 lg:gap-7 xl:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card reveal p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-xl flex items-center justify-center mb-6 md:mb-8"
                style={{
                  background: service.accent
                    ? 'var(--primary)'
                    : 'rgba(194,19,19,0.1)',
                }}
              >
                <Icon
                  name={service.icon}
                  size={26}
                  className={service.accent ? 'text-foreground' : 'text-primary'}
                />
              </div>

              {/* Title */}
              <h3
                className="font-display font-bold text-foreground mb-3 md:mb-4"
                style={{ fontSize: 'clamp(1rem, 1.4vw, 1.5rem)', letterSpacing: '-0.02em' }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-muted-foreground font-sans leading-relaxed mb-6 md:mb-8"
                style={{ fontSize: 'clamp(0.85rem, 1vw, 1rem)', lineHeight: '1.8' }}
              >
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-border text-muted-foreground font-sans"
                    style={{ fontSize: 'clamp(0.65rem, 0.8vw, 0.75rem)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover arrow */}
              <div className="mt-6 md:mt-8 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon name="ArrowRightIcon" size={16} className="text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}