import Image from 'next/image';
import Nav from '@/app/components/Nav';
import TeamSection from '@/app/components/TeamSection';
import CaseStudiesSection from '@/app/components/CaseStudiesSection';
import ContactForm from '@/app/components/ContactForm';
import ScrollReveal from '@/app/components/ScrollReveal';
import { services, navLinks } from '@/lib/data';

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <ScrollReveal />
      <Nav />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/diogo-fagundes-K0cW669UQH0-unsplash.jpg"
            alt="Hero background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-teal-dark/70" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-teal font-heading text-xl font-bold uppercase tracking-[0.3em] mb-6 animate-fadeIn">
            Five Play
          </p>
          <h1 className="hero-headline font-heading text-5xl md:text-7xl lg:text-8xl text-white font-black uppercase leading-none mb-8 animate-fadeUp">
            Get On Board<br />
            <span className="text-teal">With The Best</span><br />
            In Gaming &amp; Esports
          </h1>
          <p
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fadeIn"
            style={{ animationDelay: '0.2s' }}
          >
            A strategic communications consultancy that understands success will only come through
            sustained hard work, high expectations, a shared goal and teamwork.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeUp"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="#contact-us"
              className="px-8 py-4 border-2 border-white text-white font-heading font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-teal-dark transition-all duration-300"
            >
              Contact Us
            </a>
            {/* text-teal-dark on bg-teal: 6.4:1 contrast — passes WCAG AA */}
            <a
              href="#about-us"
              className="px-8 py-4 bg-teal text-teal-dark font-heading font-bold text-lg uppercase tracking-wider hover:bg-teal-light transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─── ABOUT US ─── */}
      <section id="about-us" className="bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="reveal from-left relative min-h-[500px] lg:min-h-[600px]">
            <Image
              src="/images/diogo-fagundes-K0cW669UQH0-unsplash.jpg"
              alt="Five Play office"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="reveal from-right bg-teal-dark text-white p-12 lg:p-16 flex flex-col justify-center">
            <p className="text-teal font-heading text-sm font-bold uppercase tracking-[0.3em] mb-4">
              Who We Are
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
              About Us
            </h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                Five Play is the gaming division of Five in a Boat, and we communicate the vision and
                talent of incredible developers, publishers and other games companies through
                best-in-class public relations and brand work.
              </p>
              <p>
                At Five Play, we work in close collaboration with clients to create commercially
                successful campaigns that challenge the status quo. From game launches and brand
                awareness building, to corporate communication and reputation management – Five Play
                tells compelling stories to communities, partners, potential investors and peers across
                traditional and digital channels.
              </p>
              <p>
                We have extensive experience in the industry, showcasing success from indie developers
                to AAA studios, alongside both small internal teams and global video game publishing
                organisations, and we know what it takes to deliver powerful campaigns with meaningful
                – and measurable – results.
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
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-black uppercase text-teal mb-3">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR TEAM ─── */}
      <TeamSection />

      {/* ─── CASE STUDIES ─── */}
      <CaseStudiesSection />

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
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-teal-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-8">
            <a href="/">
              <Image
                src="/images/FivePlay_WoLogo.png"
                alt="Five Play"
                width={140}
                height={87}
                className="brightness-0 invert"
              />
            </a>

            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-white/80 hover:text-teal text-sm font-semibold uppercase tracking-wide transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://www.fiveinaboat.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-teal text-sm font-semibold uppercase tracking-wide transition-colors duration-200"
              >
                Visit Five in a Boat
              </a>
            </nav>

            {/* text-white/75 on bg-teal-dark: ≈5.5:1 contrast — passes WCAG AA */}
            <p className="text-white/75 text-sm text-center">
              © Copyright Five Play {year} | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
