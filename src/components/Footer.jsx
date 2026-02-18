import React from "react";
import logo from "@/assets/logo.png";
import footerBg from "@/assets/footerbg.png";

const Footer = () => {
  const footerData = {
    branding: {
      text: "Claim Sure helps clients manage insurance claims easily and achieve fair, timely settlements. We use expert knowledge and structured guidance to support individuals and businesses throughout the entire claims process.",
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: {
        base: "1rem",
        md: "1.2rem",
      },
      letterSpacing: "0.02em",
      textAlign: "left",
      marginBottom: {
        base: "1rem",
        md: "1.5rem",
      },
    },
    sections: [
      {
        title: "HELPFUL LINKS",
        links: [
          { label: "Home", url: "/" },
          { label: "Services", url: "/services" },
          { label: "About Us", url: "/about" },
          { label: "Contact", url: "/contact" }
          ,
        ],
        titleStyle: {
          fontSize: {
            base: "1rem",
            md: "1.1rem"
          },
          fontWeight: 400,
          letterSpacing: "0.02em",
          marginBottom: "1rem"
        },
        linkStyle: {
          fontSize: {
            base: "0.9rem",
            md: "1rem"
          },
          letterSpacing: "0.02em"
        }
      },
      {
        title: "CONTACT",
        links: [
          { label: "Email: info@claimsureconsult.com", url: "mailto:info@claimsureconsult.com" },
          { label: "Phone: (233) 544929794", url: "tel:+233 544 929 794" },
          { label: "Address: Kumasi, Ghana", url: "#" },
          { label: "LinkedIn: @claimsure", url: "https://linkedin.com/claimsure" },


        ],
        titleStyle: {
          fontSize: {
            base: "1rem",
            md: "1.1rem"
          },
          fontWeight: 400,
          letterSpacing: "0.02em",
          marginBottom: "1rem"
        },
        linkStyle: {
          fontSize: {
            base: "0.9rem",
            md: "1rem"
          },
          letterSpacing: "0.02em"
        }
      },
    ],
    nav: {
      style: {
        fontFamily: "sans-serif",
        fontSize: {
          base: "0.8rem",
          sm: "0.9rem",
        },
        fontWeight: 300,
        letterSpacing: "0.05em",
        color: "#fff",
      },
      linksSpacing: {
        base: "0.75rem",
        sm: "1rem",
      },
      marginBottom: {
        base: "1rem",
        md: "1.5rem",
      },
    },

    copyright: {
      text: "All rights reserved - Copyright © 2025",
      fontSize: {
        base: "0.65rem",
        sm: "0.75rem",
      },
      fontWeight: 300,
      letterSpacing: "0.06em",
      fontFamily: "'Montserrat Alternates', sans-serif",
      color: '#7f1734',
    },
  };

  // Helper function to get responsive value
  const getResponsiveValue = (value, breakpoint = "base") => {
    if (typeof value === "object") {
      return value[breakpoint] || value.base || value;
    }
    return value;
  };

  return (
    <footer 
      className="relative text-white font-montserrat flex flex-col min-h-0 overflow-hidden"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="py-8 md:py-12 flex-grow relative z-10">
        <div className="mx-auto px-4 sm:px-6 py-4 md:py-6 text-center" style={{ maxWidth: "1200px" }}>
        {/* Branding */}
        <div
          className="mb-6 md:mb-10 text-left"
          style={{
            fontFamily: footerData.branding.fontFamily,
            fontWeight: footerData.branding.fontWeight,
            fontSize: getResponsiveValue(footerData.branding.fontSize, "md"),
            letterSpacing: footerData.branding.letterSpacing,
            textAlign: footerData.branding.textAlign,
            marginBottom: getResponsiveValue(
              footerData.branding.marginBottom,
              "md"
            ),
            color: "white",
            maxWidth: "800px",
            marginLeft: 0,
            marginRight: "auto"
          }}
        >
          {footerData.branding.text}
        </div>

        {/* Sections */}
        <div className="flex flex-col md:flex-row -mx-1 md:-mx-2 mb-6 gap-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-3/4">
            {footerData.sections.map((section, sectionIndex) => (
              <div key={`section-${section.title.toLowerCase().replaceAll(/\s+/g, '-')}-${sectionIndex}`} className="text-center md:text-left px-1 md:px-2">
              <h3 
                className="text-white"
                style={{
                  fontSize: getResponsiveValue(section.titleStyle?.fontSize, 'md'),
                  fontWeight: section.titleStyle?.fontWeight || 500,
                  letterSpacing: section.titleStyle?.letterSpacing || '0.02em',
                  marginBottom: section.titleStyle?.marginBottom || '1rem',
                  textAlign: 'left'
                }}
              >
                {section.title}
              </h3>
              <ul className="space-y-2 text-left">
                {section.links.map((link) => (
                  <li key={`${section.title.toLowerCase().replaceAll(/\s+/g, '-')}-${link.label.toLowerCase().replaceAll(/\s+/g, '-')}`}>
                    <a
                      href={link.url}
                      className="hover:text-[#7f1734] transition-colors duration-200 text-white/80"
                      style={{
                        fontSize: getResponsiveValue(section.linkStyle?.fontSize, 'md'),
                        letterSpacing: section.linkStyle?.letterSpacing || '0.02em',
                        display: 'block',
                        textAlign: 'left'
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
          <div className="flex items-center justify-center md:justify-end mt-4 md:mt-0 w-full md:w-1/4">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
            />
          </div>
        </div>
      </div>
      </div>
      {/* Legal Links and Copyright */}
      <div className="bg-white border-t border-gray-100 py-3 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6">
              <a href="/terms" className="text-sm text-gray-600 hover:text-[#7f1734] transition-colors whitespace-nowrap">Terms of Service</a>
              <a href="/privacy" className="text-sm text-gray-600 hover:text-[#7f1734] transition-colors whitespace-nowrap">Privacy Policy</a>
              <a href="/cookies" className="text-sm text-gray-600 hover:text-[#7f1734] transition-colors whitespace-nowrap">Cookie Preferences</a>
              <p 
                className="text-sm text-gray-600 whitespace-nowrap"
                style={{
                  fontWeight: footerData.copyright.fontWeight,
                  letterSpacing: footerData.copyright.letterSpacing,
                  fontFamily: "Montserrat",
                }}
              >
                {footerData.copyright.text}
              </p>
            </div>
            
            {/* CLAIMSURE text - hidden on mobile, visible on desktop */}
            <div className="hidden md:block">
              <span className="text-8xl lg:text-9xl font-bold tracking-tight text-[#7f1734]/50 select-none whitespace-nowrap">
                CLAIMSURE
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
