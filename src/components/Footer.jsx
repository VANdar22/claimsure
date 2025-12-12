import React from 'react';
import { ACCENT } from '@/constants/colors';

const Footer = () => {
  const footerData = {
    branding: {
      text: "Obuase Complex JHS",
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: {
        base: "1.25rem",
        md: "1.5rem"
      },
      letterSpacing: "0.05em",
      marginBottom: {
        base: "0.75rem",
        md: "1rem"
      }
    },
    nav: {
      links: [
        { label: "CONTACT", url: "/contact" },
        { label: "PRIVACY POLICY", url: "/privacy-policy" },
        { label: "CONSENT PREFERENCES", url: "/consent-preferences" }
      ],
      style: {
        fontFamily: "sans-serif",
        fontSize: {
          base: "0.7rem",
          sm: "0.8rem"
        },
        fontWeight: 300,
        letterSpacing: "0.12em",
        color: "#333"
      },
      linksSpacing: {
        base: "0.5rem",
        sm: "1rem"
      },
      marginBottom: {
        base: "0.75rem",
        md: "1rem"
      }
    },
    socials: {
      items: [
        { platform: "instagram", url: "https://instagram.com" },
        { platform: "tiktok", url: "https://tiktok.com" }
      ],
      gap: {
        base: "1rem",
        md: "1.25rem"
      },
      iconSize: {
        base: "1rem",
        md: "1.2rem"
      },
      marginBottom: {
        base: "1rem",
        md: "1.25rem"
      }
    },
    copyright: {
      text: "All rights reserved - Copyright © 2025",
      fontSize: {
        base: "0.65rem",
        sm: "0.75rem"
      },
      fontWeight: 300,
      letterSpacing: "0.06em",
      fontFamily: "'Montserrat Alternates', sans-serif",
      color: ACCENT
    }
  };

  const SocialLink = ({ platform, url }) => {
    const platformNames = {
      instagram: 'INSTAGRAM',
      tiktok: 'TIKTOK'
    };

    return (
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:opacity-70 transition-opacity duration-200 uppercase tracking-wider"
        style={footerData.nav.style}
      >
        {platformNames[platform]}
      </a>
    );
  };

  // Helper function to get responsive value
  const getResponsiveValue = (value, breakpoint = 'base') => {
    if (typeof value === 'object') {
      return value[breakpoint] || value.base || value;
    }
    return value;
  };

  return (
    <footer className="bg-gradient-to-b from-white to-blue-100 py-8 md:py-12">
      <div 
        className="mx-auto px-4 sm:px-6 py-4 md:py-6 text-center"
        style={{
          maxWidth: "1200px"
        }}
      >
        {/* Branding */}
        <div 
          className="mb-6 md:mb-10"
          style={{
            fontFamily: footerData.branding.fontFamily,
            fontWeight: footerData.branding.fontWeight,
            fontSize: getResponsiveValue(footerData.branding.fontSize, 'md'),
            letterSpacing: footerData.branding.letterSpacing,
            marginBottom: getResponsiveValue(footerData.branding.marginBottom, 'md'),
            color: ACCENT
          }}
        >
          {footerData.branding.text}
        </div>

        {/* Navigation */}
        <nav 
          className="mb-6 md:mb-10"
          style={{
            marginBottom: getResponsiveValue(footerData.nav.marginBottom, 'md')
          }}
        >
          <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            {footerData.nav.links.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.url} 
                  className="hover:opacity-70 transition-opacity duration-200"
                  style={footerData.nav.style}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <div 
          className="flex justify-center mb-10"
          style={{
            gap: footerData.socials.gap,
            marginBottom: footerData.socials.marginBottom
          }}
        >
          {footerData.socials.items.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity duration-200"
              style={{
                fontSize: '0.9rem',
                letterSpacing: '0.12em'
              }}
            >
              <SocialLink platform={social.platform} url={social.url} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div 
          className="mt-4 pt-4 border-t border-gray-400"
        >
          <div className="space-y-2 text-gray-700">
            <p 
              className="px-2"
              style={{
                fontSize: getResponsiveValue(footerData.copyright.fontSize, 'sm'),
                fontWeight: footerData.copyright.fontWeight,
                letterSpacing: footerData.copyright.letterSpacing,
                fontFamily: footerData.copyright.fontFamily,
                color: '#0E38B1',
                lineHeight: '1.4'
              }}
            >
              {footerData.copyright.text}
            </p>
            <p className="text-xs font-montserrat-alt text-[#0E38B1]/60  ">
              Designed by{' '}
              <a 
                href="https://2v2studios.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#0E38B1] hover:underline"
                style={{ 
                  fontFamily: '"Flexing", sans-serif',
                  fontWeight: 600,
                  fontSize: '1.2rem',
                  letterSpacing: '0.5px'
                }}
              >
                VANtech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
