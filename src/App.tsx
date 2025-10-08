import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { Training } from './components/Training';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AnimatedSection } from './components/AnimatedSection';

export function App() {
  // Update URL on scroll for SPA navigation
  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id === 'hero') history.replaceState(null, '', '/home');
            else history.replaceState(null, '', `/${id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KEY LANKA SOLUTIONS (PVT) LTD",
    "url": "https://keylankasolutions.lk",
    "logo": "https://keylankasolutions.lk/images/logo.png",
    "sameAs": [
      "https://www.facebook.com/YourPage",
      "https://www.linkedin.com/company/YourPage"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+94 70 331 1333",
      "contactType": "Customer Service",
      "areaServed": "LK",
      "availableLanguage": "English"
    }
  };

  return (
    <HelmetProvider>
      <div className="font-sans antialiased overflow-x-hidden">
        <Helmet>
          {/* Basic SEO */}
          <title>KEY LANKA SOLUTIONS (PVT) LTD | Professional Security Services</title>
          <meta
            name="description"
            content="KEY LANKA SOLUTIONS (PVT) LTD provides professional, reliable, and modern security services across Sri Lanka. Corporate, residential, and VIP security solutions."
          />
          <meta
            name="keywords"
            content="Key Lanka Solutions, Security Services Sri Lanka, Professional Security, Corporate Security, Residential Security, VIP Security, Fire Safety"
          />
          <meta name="author" content="KEY LANKA SOLUTIONS (PVT) LTD" />
          <link rel="canonical" href="https://keylankasolutions.lk/" />

          {/* Open Graph / Facebook / LinkedIn */}
          <meta property="og:title" content="KEY LANKA SOLUTIONS (PVT) LTD | Professional Security Services" />
          <meta property="og:description" content="Professional and trusted security solutions for your business, home, and VIP protection." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://keylankasolutions.lk/" />
          <meta property="og:image" content="https://keylankasolutions.lk/images/og-image.jpg" />
          <meta property="og:site_name" content="KEY LANKA SOLUTIONS" />

          {/* Twitter Cards */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="KEY LANKA SOLUTIONS (PVT) LTD | Professional Security Services" />
          <meta name="twitter:description" content="Professional and trusted security solutions for your business, home, and VIP protection." />
          <meta name="twitter:image" content="https://keylankasolutions.lk/images/og-image.jpg" />
          <meta name="twitter:site" content="@YourTwitterHandle" />
          <meta name="twitter:creator" content="@YourTwitterHandle" />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />

          {/* JSON-LD Structured Data */}
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>

        <Navbar />

        <main>
          <section id="hero">
            <AnimatedSection><Hero /></AnimatedSection>
          </section>

          <section id="benefits">
            <AnimatedSection><Benefits /></AnimatedSection>
          </section>

          <section id="services">
            <AnimatedSection><Services /></AnimatedSection>
          </section>

        
          <section id="training">
            <AnimatedSection><Training /></AnimatedSection>
          </section>

          <section id="team">
            <AnimatedSection><Team /></AnimatedSection>
          </section>

          <section id="contact">
            <AnimatedSection><Contact /></AnimatedSection>
          </section>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}
