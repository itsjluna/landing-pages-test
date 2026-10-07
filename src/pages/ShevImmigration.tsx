import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { ShevHero, ShevBanner, ShevSuccessStories, ShevBiography, ShevFAQ, ShevWhyChooseUs, ShevCTA } from '../components/ShevBlocks';
import { ShevStats, ShevPracticeAreas, ShevFloatingContact, ShevFooter } from '../components/ShevFeatures';
import { Globe, FileCheck2, Building2 } from 'lucide-react';

const ShevImmigration = () => {
  const { t } = useTranslation();
  const themeColor = 'blue';

  return (
    <div className="bg-slate-50 font-sans">
      <ShevHero 
        title={t("shev.imm.hero.title")}
        subtitle={t("shev.imm.hero.subtitle")}
        imageSrc="https://images.unsplash.com/photo-1520694478166-daaaaec95b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        primaryColor={themeColor}
      />
      <ShevStats 
        primaryColor={themeColor}
        stats={[
          { value: 5000, suffix: "+", label: t("shev.imm.stats.1.label") },
          { value: 50, suffix: "+", label: t("shev.imm.stats.2.label") },
          { value: 20, suffix: "", label: t("mariana.pi.stats.3.label") }
        ]} 
      />
      <ShevBanner 
        text={t("Schedule your appointment to evaluate your case")}
        color="#1d4ed8"
      />
      <ShevPracticeAreas 
        primaryColor={themeColor}
        areas={[
          { title: t("shev.imm.practice.1.title"), desc: t("shev.imm.practice.1.desc"), icon: Building2 },
          { title: t("shev.imm.practice.2.title"), desc: t("shev.imm.practice.2.desc"), icon: Globe },
          { title: t("shev.imm.practice.3.title"), desc: t("shev.imm.practice.3.desc"), icon: FileCheck2 }
        ]} 
      />
      <ShevWhyChooseUs 
        primaryColor={themeColor}
        points={[
          { title: t("shev.imm.why.1.title"), desc: t("shev.imm.why.1.desc") },
          { title: t("shev.imm.why.2.title"), desc: t("shev.imm.why.2.desc") },
          { title: t("shev.imm.why.3.title"), desc: t("shev.imm.why.3.desc") }
        ]}
      />
      <ShevBiography 
        name={t("shev.pi.bio.name")}
        bio={t("shev.imm.bio.text")}
        imageSrc="https://images.unsplash.com/photo-1520694478166-daaaaec95b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        primaryColor={themeColor}
      />
      <ShevSuccessStories primaryColor={themeColor} />
      <ShevFAQ 
        primaryColor={themeColor}
        questions={[
          {q: t("shev.imm.faq.1.q"), a: t("shev.imm.faq.1.a")},
          {q: t("shev.imm.faq.2.q"), a: t("shev.imm.faq.2.a")},
          {q: t("shev.imm.faq.3.q"), a: t("shev.imm.faq.3.a")}
        ]}
      />
      <ShevCTA primaryColor={themeColor} />
      <ShevFooter />
      <ShevFloatingContact primaryColor={themeColor} />
    </div>
  );
};

export default ShevImmigration;
