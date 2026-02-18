'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

const WP = 'https://www.fiveplay.com/wp-content/uploads';

const services = [
  {
    title: 'Events & Launches',
    img: `${WP}/2022/12/images4.jpeg`,
    body: 'Product launches and events are central to what we do. Delivering bespoke experiences that meet the needs of a variety of different brands, we take a personal approach to every brief. Be it a corporate party, a product launch or a round table event, we create campaigns that both tell an engaging story and that capture the hearts and minds of your audience.',
  },
  {
    title: 'Influencer Engagement',
    img: `${WP}/2022/12/web_header___amara_and_kris_492x209__false__true.jpg`,
    body: 'We believe that content is king and that advocacy is key to delivering brand engagement and trust. We have an extensive network of influencers across multiple sectors with which we have built long-term relationships. Our focus is on integrating influencer relations into a broader communications programme to build communities which drive business growth.',
  },
  {
    title: 'Brand Strategy & Messaging',
    img: `${WP}/2022/12/hanbury-st.jpg`,
    body: "A brand is what a brand does which is why our focus is on getting under the skin of a company's actions, behaviours and beliefs. Invested in creating cultures, we work closely with clients on their values and tone of voice, brand strategies and creative programmes that help to increase awareness, change or reinforce perceptions and build customer loyalty and value.",
  },
  {
    title: 'Media Relations & Storytelling',
    img: `${WP}/2022/12/East-Busway-Photo-by-PGH-Murals-800x520-1.jpg`,
    body: 'We pride ourselves on our media relationships which have been built over many years. Recognising that a one size fits all approach does not work, we craft each story individually in a way that meets the business needs of the brand, the journalist who is writing it and the person who is reading it. Every great moment starts with a great story.',
  },
  {
    title: 'Reputation Management',
    img: `${WP}/2022/12/99b2bf6b15e99d47d3b1cba.jpeg`,
    body: 'With a proven track record in protecting and enhancing the reputation of brands and business leaders, we are experts in analysing reputational needs and in building strategic programmes that deliver optimal results. Part of this includes identifying issues before they arise so that we can stay one step ahead of what is happening around us.',
  },
  {
    title: 'Media Training',
    img: `${WP}/2022/12/images4.jpeg`,
    body: 'Working with a team of experienced media experts, we offer extensive training for those who want to learn how to build their profile, effectively promote their brand or secure great coverage. In the media and influencer world, where first impressions last, we will arm you with the skills and confidence to deliver the very best result every time.',
  },
];

const team = [
  {
    name: 'Jules, CMPRCA',
    img: `${WP}/2026/02/jules_new.png`,
    bio: "With 20+ years in the industry, and as the former Global VP of Comms for both HTC and Deezer, Jules is a seasoned brand communications expert who quickly gets to the heart of what a company needs to deliver business growth. A strategic thinker with a hands on attitude, she adopts an omni-channel approach to building communications strategies and creative campaigns that deliver strong awareness and engagement. She also knows how to turn the complicated into the easy. Ultimately she wants to work for companies where she can help shape their future. Jules is currently the Chair of the Public Relations & Communications Association Council (CMPRCA).",
  },
  {
    name: 'Sarah',
    img: `${WP}/2022/11/2.png`,
    bio: "As FIAB's lead for Germany, Sarah Schindler has worked in entertainment, tech and culture for more than fifteen years as both a freelancer and a journalist. Her heart beats for good stories, convincing products and strategies that satisfy partners as well as media outlets and readers. When she is not on (business) trips, she works from Cologne, Germany, where she's always on the lookout for new ice cream inspirations, watches tons of (mostly good) movies and plays story driven video games.",
  },
  {
    name: 'Jack',
    img: `${WP}/2026/02/jack_new.png`,
    bio: 'Jack has worked in the PR and Branding space for the past nine years – focusing mostly on transformative tech and video games. In these roles, Jack has overseen product launch campaigns, crisis communications, long term strategic planning and brand building. Before that, Jack worked as a journalist for a national newspaper in the UAE and also spent a spell in the French Alps as a chef. Away from work, Jack is an avid snowboarder and cook – and is also a huge fan of video games.',
  },
  {
    name: 'Ross',
    img: `${WP}/2026/02/ross_new.png`,
    bio: 'Ross started his PR journey in the property industry, amassing four years of experience there before joining Five in a Boat, where he could follow his true passions in video games and tech. He has helped secure coverage across the video game, EV and health-tech industry in the national press. Originally from South Africa, Ross has lived in India, the Netherlands and now the UK. Outside of work, Ross is a huge sports fan – regularly attending his beloved Arsenal play in the Premier League.',
  },
];

const caseStudies = [
  {
    name: 'No More Robots',
    img: `${WP}/2026/02/no-more-robots-logo.png`,
    excerpt:
      "No More Robots engaged Five Play to strategise and execute a reputational growth campaign to showcase founder Mike Rose's thought leadership credentials. To date, we have secured strong regional coverage that has allowed us to secure national pieces – including with Tech Radar and The Yorkshire Post.",
    href: 'https://www.fiveplay.com/no-more-robots/',
  },
  {
    name: 'Lockwood Publishing',
    img: `${WP}/2022/12/lkwd.jpg`,
    excerpt:
      'Lockwood Publishing engaged Five Play as its B2B and B2C agency on a retainer basis to support the company with brand awareness and media relations across multiple campaigns.',
    href: 'https://www.fiveplay.com/lockwood-publishing/',
  },
  {
    name: 'Go Mate',
    img: `${WP}/2022/12/mate.jpg`,
    excerpt:
      "Five Play was engaged by Go Mate on the run up to the launch of its all-natural energy drink product – building brand awareness and driving consumer and trade media coverage.",
    href: 'https://www.fiveplay.com/go-mate/',
  },
  {
    name: 'Arctic7',
    img: `${WP}/2022/12/arctic7.jpg`,
    excerpt:
      'Arctic7 engaged Five Play as its B2B and B2C agency on a retainer basis to support multiple activity streams including brand awareness, product launches and corporate communications.',
    href: 'https://www.fiveplay.com/arctic7/',
  },
  {
    name: 'Antstream Arcade',
    img: `${WP}/2022/11/antstream-arcade.jpg`,
    excerpt:
      'Antstream originally engaged Five in a Boat as its B2B communications agency with a view to raising the profile of the world's largest streaming service for retro games.',
    href: 'https://www.fiveplay.com/antstream-arcade/',
  },
  {
    name: 'Challengermode',
    img: `${WP}/2022/11/challengermode.jpg`,
    excerpt:
      'Swedish esports brand Challengermode originally engaged us to publicise its $12 million Series A investment round, leading to sustained brand growth across key markets.',
    href: 'https://www.fiveplay.com/challengermode/',
  },
  {
    name: 'Jagex',
    img: `${WP}/2022/11/X-jagex-1.jpg`,
    excerpt:
      "We were originally contracted by Jagex to support with media training and messaging for the launch of its third major IP – a relationship that expanded into full-service PR.",
    href: 'https://www.fiveplay.com/jagex/',
  },
  {
    name: 'JXP Partners',
    img: `${WP}/2026/02/jagex-partners-logo-248x300.png`,
    excerpt:
      "We launched the JXP proposition as a unique alternative for third party publishing groups within video games. Five Play generated coverage in key games titles, increased social engagement and secured speaking spots – culminating in the signing of three new development partners.",
    href: 'https://www.fiveplay.com/jxp-partners/',
  },
];

const navLinks = [
  { label: 'About Us', href: '#about-us' },
  { label: 'What We Do', href: '#we-do' },
  { label: 'Our Team', href: '#our-team' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Contact Us', href: '#contact-us' },
];

export default function Home() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState<number | null>(null);
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  // Nav scroll
  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .stagger');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = modal !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modal]);

  // Close modal on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setModal(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (res.ok) {
        setFormState('sent');
        form.reset();
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  }, []);

  return (
    <>
      {/* ─── NAVIGATION ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          navScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <Image
              src={`${WP}/2022/11/FivePlay_Logo-1024x633.png`}
              alt="Five Play"
              width={120}
              height={74}
              className={`transition-all duration-300 ${navScrolled ? '' : 'brightness-0 invert'}`}
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 hover:text-teal ${
                  navScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://www.fiveinaboat.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2.5 bg-teal text-white text-sm font-bold uppercase tracking-wide rounded hover:bg-teal-light transition-colors duration-200"
            >
              Visit Five in a Boat
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 ${navScrolled ? 'text-gray-800' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-teal-dark px-6 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-white font-semibold uppercase tracking-wide text-sm py-1 border-b border-white/10"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://www.fiveinaboat.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center px-5 py-2.5 bg-teal text-white text-sm font-bold uppercase tracking-wide rounded"
            >
              Visit Five in a Boat
            </a>
          </div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={`${WP}/2022/11/diogo-fagundes-K0cW669UQH0-unsplash.jpg`}
            alt="Hero background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-teal-dark/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-teal font-heading text-xl font-bold uppercase tracking-[0.3em] mb-6 animate-fadeIn">
            Five Play
          </p>
          <h1 className="hero-headline font-heading text-5xl md:text-7xl lg:text-8xl text-white font-black uppercase leading-none mb-8 animate-fadeUp">
            Get On Board<br />
            <span className="text-teal">With The Best</span><br />
            In Gaming &amp; Esports
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            A strategic communications consultancy that understands success will only come through sustained hard work, high expectations, a shared goal and teamwork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeUp" style={{ animationDelay: '0.4s' }}>
            <a
              href="#contact-us"
              className="px-8 py-4 border-2 border-white text-white font-heading font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-teal-dark transition-all duration-300"
            >
              Contact Us
            </a>
            <a
              href="#about-us"
              className="px-8 py-4 bg-teal text-white font-heading font-bold text-lg uppercase tracking-wider hover:bg-teal-light transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─── ABOUT US ─── */}
      <section id="about-us" className="bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="reveal from-left relative min-h-[500px] lg:min-h-[600px]">
            <Image
              src={`${WP}/2022/11/diogo-fagundes-K0cW669UQH0-unsplash.jpg`}
              alt="Bad Made Beautiful"
              fill
              className="object-cover"
            />
          </div>

          {/* Dark card */}
          <div className="reveal from-right bg-teal-dark text-white p-12 lg:p-16 flex flex-col justify-center">
            <p className="text-teal font-heading text-sm font-bold uppercase tracking-[0.3em] mb-4">
              Who We Are
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
              About Us
            </h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                Five Play is the gaming division of Five in a Boat, and we communicate the vision and talent of incredible developers, publishers and other games companies through best-in-class public relations and brand work.
              </p>
              <p>
                At Five Play, we work in close collaboration with clients to create commercially successful campaigns that challenge the status quo. From game launches and brand awareness building, to corporate communication and reputation management – Five Play tells compelling stories to communities, partners, potential investors and peers across traditional and digital channels.
              </p>
              <p>
                We have extensive experience in the industry, showcasing success from indie developers to AAA studios, alongside both small internal teams and global video game publishing organisations, and we know what it takes to deliver powerful campaigns with meaningful – and measurable – results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section id="we-do" className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center mb-16">
            <p className="text-teal font-heading text-sm font-bold uppercase tracking-[0.3em] mb-3">
              Our Expertise
            </p>
            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase text-teal-dark">
              What We Do
            </h2>
          </div>

          <div className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="service-card bg-white rounded-lg overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-black uppercase text-teal mb-3">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR TEAM ─── */}
      <section id="our-team" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center mb-16">
            <p className="text-teal font-heading text-sm font-bold uppercase tracking-[0.3em] mb-3">
              The Crew
            </p>
            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase text-teal">
              Our Team
            </h2>
          </div>

          {/* Jules – featured */}
          <div className="reveal flex justify-center mb-16">
            <div
              className="team-card text-center w-64 md:w-80"
              onClick={() => setModal(0)}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl mb-4 aspect-square">
                <Image
                  src={team[0].img}
                  alt={team[0].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-teal/0 hover:bg-teal/10 transition-colors duration-300 flex items-end justify-center pb-6 opacity-0 hover:opacity-100">
                  <span className="text-white font-heading font-bold text-sm uppercase tracking-wider bg-teal px-4 py-2 rounded">
                    Read Bio
                  </span>
                </div>
              </div>
              <h3 className="font-heading text-2xl font-black uppercase text-teal-dark">{team[0].name}</h3>
            </div>
          </div>

          {/* Sarah, Jack, Ross */}
          <div className="stagger grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.slice(1).map((member, i) => (
              <div
                key={member.name}
                className="team-card text-center"
                onClick={() => setModal(i + 1)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg mb-4 aspect-square">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-heading font-bold text-sm uppercase tracking-wider bg-teal px-4 py-2 rounded">
                      Read Bio
                    </span>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-black uppercase text-teal-dark">{member.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES ─── */}
      <section id="case-studies" className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center mb-6">
            <p className="text-teal font-heading text-sm font-bold uppercase tracking-[0.3em] mb-3">
              Our Work
            </p>
            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase text-teal-dark">
              Case Studies
            </h2>
          </div>
          <div className="reveal text-center mb-16">
            <p className="text-gray-600 max-w-2xl mx-auto">
              A strategic games and esports consultancy that understands success will only come through sustained hard work, high expectations, a shared goal and teamwork.
            </p>
          </div>

          <div className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="case-card bg-white rounded-lg overflow-hidden block group"
              >
                <div className="relative h-36 flex items-center justify-center bg-white p-6 overflow-hidden">
                  <Image
                    src={c.img}
                    alt={c.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6 border-t border-gray-100">
                  <h3 className="font-heading text-lg font-black uppercase text-teal-dark mb-2 group-hover:text-teal transition-colors">
                    {c.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{c.excerpt}</p>
                  <span className="text-teal text-sm font-semibold group-hover:underline">
                    Read More →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact-us" className="bg-white py-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="reveal text-center mb-12">
            <p className="text-teal font-heading text-sm font-bold uppercase tracking-[0.3em] mb-3">
              Get In Touch
            </p>
            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase text-teal-dark">
              Contact Us
            </h2>
          </div>

          <div className="reveal">
            <div className="bg-surface rounded-2xl p-8 md:p-12 shadow-sm">
              {formState === 'sent' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl font-black uppercase text-teal-dark mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thanks for reaching out. We'll be in touch shortly.</p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-6 text-teal font-semibold underline text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />

                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email *"
                      className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone No."
                      className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Message"
                      className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 resize-none transition-all duration-200"
                    />
                  </div>
                  {formState === 'error' && (
                    <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                  )}
                  <button
                    type="submit"
                    disabled={formState === 'sending'}
                    className="w-full py-4 bg-teal-dark text-white font-heading font-bold text-lg uppercase tracking-wider rounded-lg hover:bg-teal transition-colors duration-300 disabled:opacity-60"
                  >
                    {formState === 'sending' ? 'Sending…' : 'Send'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-teal-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <a href="/">
              <Image
                src={`${WP}/2022/11/FivePlay_WoLogo-1024x633.png`}
                alt="Five Play"
                width={140}
                height={87}
                className="brightness-0 invert"
              />
            </a>

            {/* Nav */}
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-white/70 hover:text-teal text-sm font-semibold uppercase tracking-wide transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://www.fiveinaboat.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-teal text-sm font-semibold uppercase tracking-wide transition-colors duration-200"
              >
                Visit Five in a Boat
              </a>
            </nav>

            {/* Copyright */}
            <p className="text-white/50 text-sm text-center">
              © Copyright Five Play 2026 | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      {/* ─── TEAM MODALS ─── */}
      {modal !== null && (
        <div
          className="modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setModal(null); }}
        >
          <div className="modal-content">
            <div className="relative h-72 md:h-96">
              <Image
                src={team[modal].img}
                alt={team[modal].name}
                fill
                className="object-cover object-top"
              />
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <h3 className="font-heading text-2xl font-black uppercase text-teal-dark mb-4">
                {team[modal].name}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">
                {team[modal].bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
