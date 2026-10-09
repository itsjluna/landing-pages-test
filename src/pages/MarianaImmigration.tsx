import React from 'react';
import { useTranslation } from 'react-i18next';
import { MarianaHero, MarianaBanner, MarianaSuccessStories, MarianaBiography, MarianaFAQ, MarianaWhyChooseUs, MarianaCTA } from '../components/MarianaBlocks';
import { MarianaStats, MarianaPracticeAreas, MarianaFloatingContact, MarianaFooter, MarianaTrustBadges } from '../components/MarianaFeatures';
import { Globe, FileCheck2, Building2 } from 'lucide-react';

const MarianaImmigration = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-950">
      <MarianaHero 
        title={t("mariana.imm.hero.title")}
        subtitle={t("mariana.imm.hero.subtitle")}
        imageSrc="/images/mariana/imm/hero.png"
      />
      <MarianaStats stats={[
        { value: 1500, suffix: "+", label: t("mariana.imm.stats.1.label") },
        { value: 98, suffix: "%", label: t("mariana.imm.stats.2.label") },
        { value: 15, suffix: "", label: t("mariana.pi.stats.3.label") }
      ]} />
      <MarianaBanner 
        text={t("Schedule your appointment to evaluate your case")}
      />
      <MarianaPracticeAreas areas={[
        { title: t("mariana.imm.practice.1.title"), desc: t("mariana.imm.practice.1.desc"), icon: Globe },
        { title: t("mariana.imm.practice.2.title"), desc: t("mariana.imm.practice.2.desc"), icon: FileCheck2 },
        { title: t("mariana.imm.practice.3.title"), desc: t("mariana.imm.practice.3.desc"), icon: Building2 }
      ]} />
      <MarianaWhyChooseUs points={[
        { title: t("mariana.imm.why.1.title"), desc: t("mariana.imm.why.1.desc") },
        { title: t("mariana.imm.why.2.title"), desc: t("mariana.imm.why.2.desc") },
        { title: t("mariana.imm.why.3.title"), desc: t("mariana.imm.why.3.desc") }
      ]} />
      <MarianaBiography 
        name={t("mariana.pi.bio.name")}
        bio={t("mariana.imm.bio.text")}
        imageSrc="/images/mariana/imm/bio.png"
      />
      <MarianaSuccessStories videoUrls={[
        "https://www.tiktok.com/@tuabogadamariana/video/7691304427679960334",
        "https://www.tiktok.com/@tuabogadamariana/video/7694036840344489247"
      ]} />
      <MarianaFAQ 
        questions={[
          {q: t("mariana.imm.faq.1.q"), a: t("mariana.imm.faq.1.a")},
          {q: t("mariana.imm.faq.2.q"), a: t("mariana.imm.faq.2.a")},
          {q: t("mariana.imm.faq.3.q"), a: t("mariana.imm.faq.3.a")}
        ]}
      />
      <MarianaCTA />
      <MarianaFooter />
      <MarianaFloatingContact />
    </div>
  );
};

export default MarianaImmigration;



