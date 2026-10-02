import React from 'react';
import { useTranslation } from 'react-i18next';
import { MarianaHero, MarianaBanner, MarianaSuccessStories, MarianaBiography, MarianaFAQ, MarianaWhyChooseUs, MarianaCTA } from '../components/MarianaBlocks';
import { MarianaStats, MarianaPracticeAreas, MarianaFloatingContact, MarianaFooter, MarianaTrustBadges } from '../components/MarianaFeatures';
import { ShieldAlert, HeartHandshake, Briefcase } from 'lucide-react';

const MarianaPersonalInjury = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#0a0514]">
      <MarianaHero 
        title={t("mariana.pi.hero.title")}
        subtitle={t("mariana.pi.hero.subtitle")}
        imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      />
      <MarianaStats stats={[
        { value: 50, suffix: "M+", label: t("mariana.pi.stats.1.label") },
        { value: 1000, suffix: "+", label: t("mariana.pi.stats.2.label") },
        { value: 15, suffix: "", label: t("mariana.pi.stats.3.label") }
      ]} />
      <MarianaBanner 
        text={t("If we don't win, you don't pay us")}
      />
      <MarianaPracticeAreas areas={[
        { title: t("mariana.pi.practice.1.title"), desc: t("mariana.pi.practice.1.desc"), icon: ShieldAlert },
        { title: t("mariana.pi.practice.2.title"), desc: t("mariana.pi.practice.2.desc"), icon: Briefcase },
        { title: t("mariana.pi.practice.3.title"), desc: t("mariana.pi.practice.3.desc"), icon: HeartHandshake }
      ]} />
      <MarianaWhyChooseUs points={[
        { title: t("mariana.pi.why.1.title"), desc: t("mariana.pi.why.1.desc") },
        { title: t("mariana.pi.why.2.title"), desc: t("mariana.pi.why.2.desc") },
        { title: t("mariana.pi.why.3.title"), desc: t("mariana.pi.why.3.desc") }
      ]} />
      <MarianaBiography 
        name={t("mariana.pi.bio.name")}
        bio={t("mariana.pi.bio.text")}
        imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      />
      <MarianaSuccessStories />
      <MarianaFAQ 
        questions={[
          {q: t("mariana.pi.faq.1.q"), a: t("mariana.pi.faq.1.a")},
          {q: t("mariana.pi.faq.2.q"), a: t("mariana.pi.faq.2.a")},
          {q: t("mariana.pi.faq.3.q"), a: t("mariana.pi.faq.3.a")}
        ]}
      />
      <MarianaCTA />
      <MarianaFooter />
      <MarianaFloatingContact />
    </div>
  );
};

export default MarianaPersonalInjury;
