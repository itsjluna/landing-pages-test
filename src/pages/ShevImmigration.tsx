import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShevHero, ShevBanner, ShevSuccessStories, ShevBiography, ShevFAQ } from '../components/ShevBlocks';
import { ShevStats, ShevPracticeAreas, ShevFloatingContact, ShevFooter } from '../components/ShevFeatures';
import { Globe, FileCheck2, Building2 } from 'lucide-react';

const ShevImmigration = () => {
  const { t } = useTranslation();
  const themeColor = 'blue';

  return (
    <div className="bg-slate-50 font-sans">
      <ShevHero 
        title="Global Mobility."
        subtitle="Expert Immigration Attorneys. Guiding businesses and families through complex U.S. immigration laws."
        imageSrc="https://images.unsplash.com/photo-1520694478166-daaaaec95b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        primaryColor={themeColor}
      />
      <ShevStats 
        primaryColor={themeColor}
        stats={[
          { value: 5000, suffix: "+", label: "Visas Approved" },
          { value: 50, suffix: "+", label: "Countries Represented" },
          { value: 20, suffix: "", label: "Years Experience" }
        ]} 
      />
      <ShevBanner 
        text={t("Schedule your appointment to evaluate your case")}
        color="#1d4ed8"
      />
      <ShevPracticeAreas 
        primaryColor={themeColor}
        areas={[
          { title: "Corporate Immigration", desc: "Securing H-1B, L-1, and O-1 visas for top global talent and multinational corporations.", icon: Building2 },
          { title: "Family Petitions", desc: "Navigating complex family-based immigration, adjustment of status, and consular processing.", icon: Globe },
          { title: "Deportation Defense", desc: "Aggressive representation in immigration court to protect your right to stay in the U.S.", icon: FileCheck2 }
        ]} 
      />
      <ShevBiography 
        name="The Shev Legal Team"
        bio="Our immigration department handles both employment-based visas for multinational corporations and complex family petitions.\n\nWe provide strategic, results-driven immigration counsel, ensuring compliance and success in a rapidly changing legal landscape."
        imageSrc="https://images.unsplash.com/photo-1520694478166-daaaaec95b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        primaryColor={themeColor}
      />
      <ShevSuccessStories primaryColor={themeColor} />
      <ShevFAQ 
        primaryColor={themeColor}
        questions={[
          {q: "Can you help my business hire foreign workers?", a: "Yes, we specialize in H-1B, L-1, O-1, and employment-based green cards (EB-1, EB-2, EB-3) for companies of all sizes."},
          {q: "How can I sponsor my spouse?", a: "We guide you through the entire family-based petition process, whether your spouse is in the U.S. (Adjustment of Status) or abroad (Consular Processing)."},
          {q: "What is an E-2 Visa?", a: "The E-2 Treaty Investor visa allows nationals of certain countries to direct and develop a U.S. business they have invested in. We can evaluate your eligibility."}
        ]}
      />
      <ShevFooter />
      <ShevFloatingContact primaryColor={themeColor} />
    </div>
  );
};

export default ShevImmigration;
