import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { getCalApi } from "@calcom/embed-react";
import '../../src/styles/calendar.css';

export default function BookingButton({ className = "", label = "Let's talk about your project" }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      if (buttonRef.current) {
        cal('ui', {
          theme: 'light',
          cssVarsPerTheme: {
            light: {
              'cal-brand': '#7f1734',
              'cal-brand-emphasis': '#5e0f25',
              'cal-brand-hover': '#5e0f25',
              'cal-brand-text': '#ffffff',
              'cal-brand-accent': '#7f1734',
            },
          },
          hideEventTypeDetails: false,
          layout: 'month_view',
          ui: {
            theme: 'light',
            styles: {
              modal: {
                content: {
                  padding: '0 !important',
                  margin: '0 !important',
                  border: 'none !important',
                  borderRadius: '0 !important',
                  width: '100% !important',
                  maxWidth: '1000px !important',
                  height: '90vh !important',
                  overflow: 'hidden !important',
                },
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.5) !important',
                  zIndex: '9999 !important',
                },
              },
            },
          },
        });
      }
    })();
  }, []);

  return (
    <div className={className}>
      <div className="bg-gray-50 p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 w-full">
        <div className="flex items-center justify-between">
          <span className="text-sm sm:text-base font-light text-gray-700">
            {label}
          </span>
          <button
            ref={buttonRef}
            data-cal-link="armah-20985615-g9ipuz"
            data-cal-config='{
              "layout": "month_view",
              "ui": {
                "theme": "light",
                "styles": {
                  "modal": {
                    "content": {
                      "padding": "0 !important",
                      "margin": "0 !important",
                      "border": "none !important",
                      "borderRadius": "0 !important",
                      "width": "100% !important",
                      "maxWidth": "1000px !important",
                      "height": "90vh !important",
                      "overflow": "hidden !important"
                    },
                    "overlay": {
                      "backgroundColor": "rgba(0, 0, 0, 0.5) !important"
                    }
                  }
                }
              }
            }'
            className="flex-shrink-0 ml-3 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white text-[#7f1734] border-2 border-[#7f1734] rounded-xl font-medium hover:bg-[#7f1734] hover:text-white transition-colors duration-300 text-xl sm:text-2xl"
            aria-label="Book a consultation"
          >
            <span className="md:hidden">→</span>
            <span className="hidden md:inline">🡥</span>
          </button>
        </div>
      </div>
    </div>
  );
}

BookingButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string
};

// Set default props
BookingButton.defaultProps = {
  className: ""
};
