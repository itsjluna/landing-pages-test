import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { ShevHero, ShevBanner, ShevSuccessStories, ShevBiography, ShevFAQ, ShevWhyChooseUs, ShevCTA } from '../components/ShevBlocks';
import { ShevStats, ShevPracticeAreas, ShevFloatingContact, ShevFooter } from '../components/ShevFeatures';
import { ShieldAlert, HeartHandshake, Briefcase } from 'lucide-react';

const ShevPersonalInjury = () => {
  const { t } = useTranslation();
  const themeColor = 'red'; // Using red for PI to make it aggressive and pop

  return (
    <div className="bg-slate-50 font-sans">
      <ShevHero 
        title={t("shev.pi.hero.title")}
        subtitle={t("shev.pi.hero.subtitle")}
        imageSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        primaryColor={themeColor}
      />
      <ShevStats 
        primaryColor={themeColor}
        stats={[
          { value: 150, suffix: "M+", label: t("shev.pi.stats.1.label") },
          { value: 2500, suffix: "+", label: t("shev.pi.stats.2.label") },
          { value: 99, suffix: "%", label: t("mariana.imm.stats.2.label") }
        ]} 
      />
      <ShevBanner 
        text={t("If we don't win, you don't pay us")}
        color="#dc2626"
      />
      <ShevPracticeAreas 
        primaryColor={themeColor}
        areas={[
          { title: t("shev.pi.practice.1.title"), desc: t("shev.pi.practice.1.desc"), icon: ShieldAlert },
          { title: t("shev.pi.practice.2.title"), desc: t("shev.pi.practice.2.desc"), icon: Briefcase },
          { title: t("shev.pi.practice.3.title"), desc: t("shev.pi.practice.3.desc"), icon: HeartHandshake }
        ]} 
      />
      <ShevWhyChooseUs 
        primaryColor={themeColor}
        points={[
          { title: t("shev.pi.why.1.title"), desc: t("shev.pi.why.1.desc") },
          { title: t("shev.pi.why.2.title"), desc: t("shev.pi.why.2.desc") },
          { title: t("shev.pi.why.3.title"), desc: t("shev.pi.why.3.desc") }
        ]}
      />
      <ShevBiography 
        name={t("shev.pi.bio.name")}
        bio={t("shev.pi.bio.text")}
        imageSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        primaryColor={themeColor}
      />
      <ShevSuccessStories primaryColor={themeColor} />
      <ShevFAQ 
        primaryColor={themeColor}
        questions={[
          {q: t("shev.pi.faq.1.q"), a: t("shev.pi.faq.1.a")},
          {q: t("shev.pi.faq.2.q"), a: t("shev.pi.faq.2.a")},
          {q: t("shev.pi.faq.3.q"), a: t("shev.pi.faq.3.a")}
        ]}
      />
      <ShevCTA primaryColor={themeColor} />
      <ShevFooter />
      <ShevFloatingContact primaryColor={themeColor} />
    </div>
  );
};

export default ShevPersonalInjury;
