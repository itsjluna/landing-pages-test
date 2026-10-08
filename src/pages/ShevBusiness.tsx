import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { ShevHero, ShevBanner, ShevSuccessStories, ShevBiography, ShevFAQ, ShevWhyChooseUs, ShevCTA } from '../components/ShevBlocks';
import { ShevStats, ShevPracticeAreas, ShevFloatingContact, ShevFooter } from '../components/ShevFeatures';
import { Building2, Scale, Handshake } from 'lucide-react';

const ShevBusiness = () => {
  const { t } = useTranslation();
  const themeColor = 'blue';

  return (
    <div className="bg-slate-50 font-sans">
      <ShevHero 
        title={t("shev.biz.hero.title")}
        subtitle={t("shev.biz.hero.subtitle")}
        imageSrc="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        primaryColor={themeColor}
      />
      <ShevStats 
        primaryColor={themeColor}
        stats={[
          { value: 500, suffix: "+", label: t("shev.biz.stats.1.label") },
          { value: 1, suffix: "B+", label: t("shev.biz.stats.2.label") },
          { value: 20, suffix: "", label: t("mariana.pi.stats.3.label") }
        ]} 
      />
      <ShevBanner 
        text={t("Business Consultation Banner")}
        color="#0f172a" // slate-900
      />
      <ShevPracticeAreas 
        primaryColor={themeColor}
        areas={[
          { title: t("shev.biz.practice.1.title"), desc: t("shev.biz.practice.1.desc"), icon: Building2 },
          { title: t("shev.biz.practice.2.title"), desc: t("shev.biz.practice.2.desc"), icon: Scale },
          { title: t("shev.biz.practice.3.title"), desc: t("shev.biz.practice.3.desc"), icon: Handshake }
        ]} 
      />
      <ShevWhyChooseUs 
        primaryColor={themeColor}
        points={[
          { title: t("shev.biz.why.1.title"), desc: t("shev.biz.why.1.desc") },
          { title: t("shev.biz.why.2.title"), desc: t("shev.biz.why.2.desc") },
          { title: t("shev.biz.why.3.title"), desc: t("shev.biz.why.3.desc") }
        ]}
      />
      <ShevBiography 
          primaryColor={themeColor}
          attorneys={[
            {
              name: t("shev.pi.bio.name"),
              bio: t("shev.biz.bio.text"),
              imageSrc: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
              name: t("shev.pi.bio.name2", "Associate Attorney"),
              bio: t("shev.biz.bio.text2", "A fierce litigator representing emerging and middle-market enterprises in complex commercial disputes, M&A, and partnership agreements."),
              imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
          ]}
        />
      <ShevSuccessStories primaryColor={themeColor} videoUrls={["https://www.tiktok.com/@shev.law.group/video/7660589016797957407", "https://www.tiktok.com/@shev.law.group/video/7675825757737733406"]} />
      <ShevFAQ 
        primaryColor={themeColor}
        questions={[
          {q: t("shev.biz.faq.1.q"), a: t("shev.biz.faq.1.a")},
          {q: t("shev.biz.faq.2.q"), a: t("shev.biz.faq.2.a")},
          {q: t("shev.biz.faq.3.q"), a: t("shev.biz.faq.3.a")}
        ]}
      />
      <ShevCTA primaryColor={themeColor} />
      <ShevFooter />
      <ShevFloatingContact primaryColor={themeColor} />
    </div>
  );
};

export default ShevBusiness;
