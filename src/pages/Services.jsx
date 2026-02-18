import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Puzzle, Workflow, UsersRound, ShieldCheck, Handshake, Target } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import InsightCard from '../components/InsightCard';
import BookingButton from '../components/BookingButton';
import SkeletonImage from '../components/SkeletonImage';
import followup from '../assets/followup.png';
import advisory from '../assets/advisory.png';

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      when: 'beforeChildren',
    },
  },
};

// Accent colors
const accentColors = {
  main: '#7f1734',
  dark: '#0a2a7a',
  light: '#3d5fb8',
};

// Sample data
const capabilities = [
  {
    id: 'insurance-claims-advisory',
    label: 'How we support you',
    title: 'Insurance Claims Advisory',
    body: 'We simplify complex insurance policies and claims processes, helping you clearly understand your rights, coverage, and obligations. Our advisory ensures you make informed decisions and avoid costly mistakes during claims.',
    bullets: [
      'Policy interpretation and coverage clarification',
      'Claims procedures guidance and requirements support',
      'Coverage, exclusions, and claim entitlement advisory'
    ],
    cta: 'Learn more',
    image: advisory,
  },
  {
    id: 'claims-documentation',
    label: 'How we prepare your claim',
    title: 'Claims Documentation & Preparation',
    body: 'We ensure every claim is properly documented, verified, and professionally prepared to meet insurer requirements and strengthen claim credibility.',
    bullets: [
      'Preparation of claim forms and supporting documentation',
      'Loss documentation coordination and organization',
      'Evidence compilation, verification, and validation',
      'Professional survey and claim assessment coordination'
    ],
    cta: 'Learn more',
    image: '/assets/images/claims-documentation.png',
  },
  {
    id: 'claims-submission',
    label: 'How we manage submissions',
    title: 'Claims Submission & Follow-Up',
    body: 'We handle the submission process and actively track claim progress, ensuring consistent communication and timely updates between all parties.',
    bullets: [
      'Professional claims submission to insurers',
      'Continuous follow-up and progress monitoring',
      'Liaison between policyholders and insurance providers'
    ],
    cta: 'Learn more',
    image: followup,
  },
  {
    id: 'claims-negotiation',
    label: 'How we secure fair settlements',
    title: 'Claims Negotiation & Settlement Support',
    body: 'We provide professional guidance and representation throughout negotiations, ensuring settlement offers are fair, accurate, and aligned with policy coverage.',
    bullets: [
      'Advisory support during claims negotiations',
      'Review and evaluation of insurer assessments and offers',
      'Professional representation and settlement recommendations'
    ],
    cta: 'Learn more',
    image: '/assets/images/claims-negotiation.png',
  },
  {
    id: 'claims-management',
    label: 'How we strengthen your claims strategy',
    title: 'Claims Management & Risk Advisory',
    body: 'We help organizations manage claims efficiently while providing strategic advisory to reduce future risks and improve claims outcomes.',
    bullets: [
      'Business claims management support',
      'Loss prevention and claims risk advisory',
      'Post-loss advisory and claims improvement strategies'
    ],
    cta: 'Learn more',
    image: '/assets/images/risk-advisory.png',
  }
];

const insights = [
  {
    title: 'Transforming Data into Strategic Advantage',
    category: 'Insights',
    date: 'Nov 4, 2025',
    excerpt: 'How we build pragmatic AI roadmaps that tie every experiment back to value.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Designing Decision Rooms for Modern Leadership',
    category: 'Tips',
    date: 'Nov 2, 2025',
    excerpt: 'Dashboards alone rarely change behavior. A look at rituals that do.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Playbooks for Data-Backed Policy Design',
    category: 'Research',
    date: 'Oct 28, 2025',
    excerpt: 'Lessons from public-sector partners who move fast without cutting corners.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
];

const iconComponents = {
  Puzzle,
  Workflow,
  UsersRound,
  ShieldCheck,
  Handshake,
  Target,
};

const Services = () => {
  // Custom styles for square bullets
  const squareBulletStyles = {
    listStyleType: 'square',
    paddingLeft: '1.25rem',
    '& li::marker': {
      color: '#7f1734',
    },
  };
  return (
    <div className="min-h-screen font-montserrat bg-white text-[#1a1a1a]">
      {/* Hero Section */}
      <motion.section
        className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
        variants={staggerContainer}
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-end">
          <div className="flex-1">
            <AnimatedText>
              <p className="text-xs sm:text-sm font-light uppercase tracking-widest mb-4 sm:mb-6" style={{ color: accentColors.main }}>
                Solutions
              </p>
            </AnimatedText>
            <AnimatedText delay={0.2} split>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight tracking-tight text-[#7f1734] mb-6 sm:mb-8">
                Your partner for research-led strategy, design, and delivery.
              </h1>
            </AnimatedText>
          </div>
          <div className="flex-1 max-w-xl space-y-4 sm:space-y-6">
            <AnimatedText delay={0.2}>
              <div className="[&>span]:inline-block [&>span]:opacity-90">
                <AnimatedText split={false} delay={0.25}>
                  <p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed opacity-90">
                    We help leadership teams make confident decisions. Every
                    engagement blends rigorous research with calm, minimal
                    execution so the work feels as clear as it looks.
                  </p>
                </AnimatedText>
              </div>
            </AnimatedText>
            <div className="w-full">
              <BookingButton className="w-full" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Capabilities Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 space-y-8 sm:space-y-10 bg-white">
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-tight text-[#7f1734] mb-4">
            Simple structure, deep capability.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed opacity-90 max-w-3xl">
            We keep the interface minimal so conversations stay about your
            business. Behind the scenes, multidisciplinary teams cover the
            detail.
          </p>
        </div>
        <div className="space-y-10 sm:space-y-12">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px -5% 0px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`grid gap-6 sm:gap-8 lg:grid-cols-2 items-center pt-8 sm:pt-10 ${
                index === 0 ? 'border-t-0 pt-0' : ''
              } ${
                index % 2 === 0 ? '' : 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
              }`}
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-xl sm:text-2xl font-light text-[#7f1734]">
                    {capability.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed opacity-90">
                  {capability.body}
                </p>
                <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 pl-4 sm:pl-5" style={squareBulletStyles}>
                  {capability.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 sm:mt-6">
                  <BookingButton className="w-full" label={capability.label} />
                </div>
              </div>
              <div
                className={`relative h-64 sm:h-80 md:h-96 w-full mx-auto lg:mx-0 lg:w-[90%] overflow-hidden ${
                  index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                }`}
              >
                <div className="w-full h-48 sm:h-56 md:h-64 lg:h-80 rounded-lg overflow-hidden">
                  <SkeletonImage
                    src={capability.image}
                    alt={capability.title}
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Insights Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 space-y-8 sm:space-y-10 bg-white">
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-tight text-[#7f1734] mb-4 max-w-3xl">
            Thinking that travels from lab to boardroom.
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed opacity-90 max-w-3xl">
            Explore our latest insights and thought leadership in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
          {insights.slice(0, 2).map((item, index) => (
            <InsightCard key={index} item={item} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;