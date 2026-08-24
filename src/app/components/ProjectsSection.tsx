'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const projects = [
{
  number: '01',
  category: 'Publication Design',
  title: 'Design Books With Sparrow',
  description:
  'A comprehensive educational booklet designed for the Sparrow team, combining structured layouts with engaging visual hierarchy for student learning materials.',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_16647e395-1765368744119.png',
  alt: 'Open educational booklet on dark desk, professional layout design, clean white pages with structured typography',
  tags: ['InDesign', 'Print Design', 'Education']
},
{
  number: '02',
  category: 'Web Development',
  title: 'Personal Portfolio Website',
  description:
  'A fully responsive personal portfolio built with HTML, CSS, and JavaScript. Cyberpunk-inspired dark aesthetic with smooth animations and modern interactions.',
  image: 'https://images.unsplash.com/photo-1653387667286-c56c72a2e262',
  alt: 'Dark laptop screen showing code editor with red highlighted syntax, dim atmospheric desk setup, low-key lighting',
  tags: ['HTML', 'CSS', 'JavaScript']
},
{
  number: '03',
  category: 'Magazine Layout',
  title: 'Academic Research Magazine',
  description:
  'Multi-page academic magazine with complex grid layouts, typography hierarchy, and infographic integration for an Iraqi educational institution.',
  image: 'https://images.unsplash.com/photo-1568226624015-07b7ff9fa46a',
  alt: 'Stack of academic magazines on dark surface, professional print design, moody low-key studio lighting',
  tags: ['Magazine', 'Typography', 'Layout']
},
{
  number: '04',
  category: 'Web Development',
  title: 'Responsive Business Site',
  description:
  'A clean, responsive business website with mobile-first design, optimized for all screen sizes from mobile to 27" monitors.',
  image: 'https://images.unsplash.com/photo-1594238543503-3a92f31d0fd4',
  alt: 'Multiple device screens showing responsive website, dark moody background, professional product photography lighting',
  tags: ['Responsive', 'UI Design', 'Performance']
}];


export default function ProjectsSection() {
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

    const elements = sectionRef?.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer?.observe(el));

    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="
        relative
        py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36
        px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 3xl:px-40
        overflow-hidden
      "





      aria-label="Projects section">

      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />
      <div className="w-full max-w-[1800px] mx-auto">
        {/* Section header */}
        <div className="reveal mb-12 md:mb-16 lg:mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="font-sans text-xs md:text-sm font-medium tracking-widest uppercase text-muted-foreground block mb-3">
              04 / Work
            </span>
            <h2
              className="font-display font-black text-foreground"
              style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)', letterSpacing: '-0.03em' }}>

              Selected <span className="text-primary text-shadow-red">Projects</span>
            </h2>
            <div className="section-divider mt-4" />
          </div>
          <Icon name="ArrowDownRightIcon" size={32} className="text-muted-foreground" />
        </div>

        {/* Projects list */}
        <div>
          {projects?.map((project, index) =>
          <div
            key={project?.title}
            className="project-row reveal group border-t border-border"
            style={{ transitionDelay: `${index * 0.08}s` }}>

              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[200px] md:min-h-[220px] xl:min-h-[260px] 2xl:min-h-[300px]">
                <div className="md:col-span-5 xl:col-span-4 p-6 md:p-8 lg:p-10 xl:p-12 border-r border-border flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-sans text-muted-foreground" style={{ fontSize: 'clamp(0.7rem, 0.9vw, 0.8rem)' }}>
                    {project?.number}
                    </span>
                    <div className="h-px w-6 bg-border" />
                    <span className="font-display font-bold text-foreground uppercase tracking-wider" style={{ fontSize: 'clamp(0.65rem, 0.8vw, 0.75rem)' }}>
                    {project?.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-foreground mb-3 md:mb-4 transition-transform duration-500 group-hover:translate-x-2" style={{ fontSize: 'clamp(1.1rem, 2vw, 2rem)', letterSpacing: '-0.02em' }}>
                  {project?.title}
                  </h3>

                  <p className="text-muted-foreground font-sans leading-relaxed mb-4 md:mb-5" style={{ fontSize: 'clamp(0.8rem, 0.95vw, 0.95rem)', maxWidth: '420px', lineHeight: '1.7' }}>
                  {project?.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                  {project?.tags?.map((tag) =>
                    <span key={tag} className="px-2 py-0.5 border border-border rounded text-muted-foreground font-sans" style={{ fontSize: 'clamp(0.6rem, 0.75vw, 0.7rem)' }}>
                      {tag}
                    </span>
                  )}
                  </div>
                </div>

                <div className="hidden md:block md:col-span-7 xl:col-span-8 relative overflow-hidden bg-muted">
                  <AppImage src={project?.image} alt={project?.alt} fill className="object-cover project-image" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* View all CTA */}
        <div className="reveal flex justify-center mt-12 md:mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-border rounded-full px-8 py-4 font-sans text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-all duration-300"
            aria-label="Get in touch to discuss more projects">

            Get In Touch
            <Icon name="ArrowRightIcon" size={16} className="text-current" />
          </a>
        </div>
      </div>
    </section>);

}