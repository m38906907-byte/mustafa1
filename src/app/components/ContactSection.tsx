'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

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
      { threshold: 0.12 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio message from ${formData.name}`;
    const body = `${formData.message}\n\nReply to: ${formData.email}`;
    window.location.href = `mailto:m38906907@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="
        relative
        py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36
        px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 3xl:px-40
        overflow-hidden
      "
      aria-label="Contact section"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 90% 50%, rgba(194,19,19,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="w-full max-w-[1800px] mx-auto">
        {/* Section header */}
        <div className="reveal mb-12 md:mb-16 lg:mb-20 text-center">
          <span className="font-sans text-xs md:text-sm font-medium tracking-widest uppercase text-muted-foreground block mb-3">
            05 / Contact
          </span>
          <h2
            className="font-display font-black text-foreground"
            style={{ fontSize: 'clamp(2rem, 5vw, 6rem)', letterSpacing: '-0.04em', lineHeight: '0.9' }}
          >
            Let&apos;s Work <br />
            <span className="text-primary text-shadow-red">Together.</span>
          </h2>
          <p
            className="text-muted-foreground font-sans mt-6 mx-auto"
            style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)', maxWidth: '480px' }}
          >
            Have a project in mind? I&apos;d love to hear about it. Send me a message and I&apos;ll get back to you.
          </p>
        </div>

        {/* Grid: form + info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">

          {/* Contact form */}
          <div className="reveal-left lg:col-span-7 xl:col-span-7">
            <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
              <div className="space-y-8 md:space-y-10">

                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="YOUR_NAME"
                    className="contact-input"
                    required
                    aria-label="Your name"
                    style={{ fontSize: 'clamp(1rem, 1.5vw, 1.4rem)', fontFamily: 'var(--font-display)', fontWeight: 700 }}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="YOUR_IDENTITY@NODE.SYS"
                    className="contact-input"
                    required
                    aria-label="Your email address"
                    style={{ fontSize: 'clamp(1rem, 1.5vw, 1.4rem)', fontFamily: 'var(--font-display)', fontWeight: 700 }}
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="YOUR_MESSAGE"
                    rows={4}
                    className="contact-input resize-none"
                    required
                    aria-label="Your message"
                    style={{ fontSize: 'clamp(1rem, 1.5vw, 1.4rem)', fontFamily: 'var(--font-display)', fontWeight: 700 }}
                  />
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    className="btn-send"
                    style={{ fontSize: 'clamp(0.65rem, 0.9vw, 0.8rem)', padding: '12px 28px' }}
                    aria-label="Send message"
                  >
                    {submitted ? 'Message Sent!' : 'Send Message'}
                  </button>
                  {submitted && (
                    <span className="text-primary font-sans text-sm flex items-center gap-2">
                      <Icon name="CheckCircleIcon" size={18} className="text-primary" />
                      I&apos;ll be in touch soon.
                    </span>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* Contact info sidebar */}
          <div className="reveal-right lg:col-span-5 xl:col-span-5 flex flex-col justify-between gap-8 md:gap-10">

            {/* Social links */}
            <div>
              <h3
                className="font-display font-bold text-foreground uppercase tracking-widest mb-6"
                style={{ fontSize: 'clamp(0.7rem, 0.9vw, 0.85rem)' }}
              >
                Find Me Online
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Instagram', href: 'https://www.instagram.com/ar.ccc0', icon: 'GlobeAltIcon' as const },
                  { label: 'GitHub', href: 'https://github.com/m38906907-byte', icon: 'CodeBracketSquareIcon' as const },
                  { label: 'Telegram', href: 'https://t.me/muii9', icon: 'PaperAirplaneIcon' as const },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border-b border-border pb-4 group"
                    aria-label={`Visit Mustafa's ${social.label}`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon name={social.icon} size={20} className="text-primary" />
                      <span
                        className="font-sans font-medium text-foreground group-hover:text-primary transition-colors duration-300"
                        style={{ fontSize: 'clamp(0.85rem, 1vw, 1rem)' }}
                      >
                        {social.label}
                      </span>
                    </div>
                    <Icon name="ArrowUpRightIcon" size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div
              className="location-card p-6 md:p-8"
              style={{ background: 'rgba(194,19,19,0.05)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(194,19,19,0.15)' }}
              >
                <Icon name="ClockIcon" size={20} className="text-primary" />
              </div>
              <p
                className="font-display font-bold text-foreground mb-2"
                style={{ fontSize: 'clamp(0.85rem, 1.1vw, 1.1rem)' }}
              >
                Fast Response
              </p>
              <p
                className="text-muted-foreground font-sans"
                style={{ fontSize: 'clamp(0.8rem, 0.95vw, 0.9rem)', lineHeight: '1.7' }}
              >
                I typically respond within 24 hours.
                Based in Baghdad, Iraq (UTC+3).
              </p>
            </div>

            {/* Decorative spinning rings */}
            <div className="relative h-24 flex items-center justify-center" aria-hidden="true">
              <div className="w-20 h-20 rounded-full border border-border animate-spin-slow" />
              <div className="absolute w-12 h-12 rounded-full border border-primary/30" />
              <div className="absolute w-3 h-3 rounded-full bg-primary animate-pulse-red" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}