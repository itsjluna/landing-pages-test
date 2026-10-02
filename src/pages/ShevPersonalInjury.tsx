import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShevHero, ShevBanner, ShevSuccessStories, ShevBiography, ShevFAQ, ShevWhyChooseUs, ShevCTA } from '../components/ShevBlocks';
import { ShevStats, ShevPracticeAreas, ShevFloatingContact, ShevFooter } from '../components/ShevFeatures';
import { ShieldAlert, HeartHandshake, Briefcase } from 'lucide-react';

const ShevPersonalInjury = () => {
  const { t } = useTranslation();
  const themeColor = 'red'; // Using red for PI to make it aggressive and pop

  return (
    <div className="bg-slate-50 font-sans">
      <ShevHero 
        title="Demand Justice."
        subtitle="Relentless representation for Personal Injury victims in Texas. We demand justice and maximum compensation."
        imageSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        primaryColor={themeColor}
      />
      <ShevStats 
        primaryColor={themeColor}
        stats={[
          { value: 150, suffix: "M+", label: "Total Recovered" },
          { value: 2500, suffix: "+", label: "Cases Won" },
          { value: 99, suffix: "%", label: "Success Rate" }
        ]} 
      />
      <ShevBanner 
        text={t("If we don't win, you don't pay us")}
        color="#dc2626"
      />
      <ShevPracticeAreas 
        primaryColor={themeColor}
        areas={[
          { title: "Auto Accidents", desc: "Aggressive litigation against insurance companies for catastrophic car and truck accidents.", icon: ShieldAlert },
          { title: "Workplace Injury", desc: "Holding negligent employers and third parties accountable for severe workplace injuries.", icon: Briefcase },
          { title: "Premises Liability", desc: "Securing maximum compensation for slip and fall accidents and negligent security.", icon: HeartHandshake }
        ]} 
      />
      <ShevWhyChooseUs 
        primaryColor={themeColor}
        points={[
          { title: "We Don't Settle for Less", desc: "Insurance companies know we are willing and ready to go to trial if they refuse to pay what your case is truly worth." },
          { title: "Elite Legal Strategy", desc: "We utilize cutting-edge technology, expert witnesses, and aggressive discovery to build airtight cases." },
          { title: "No Fee Guarantee", desc: "We finance your entire litigation. You pay absolutely nothing out of pocket unless we secure a verdict or settlement in your favor." }
        ]}
      />
      <ShevBiography 
        name="The Shev Legal Team"
        bio="Shev Law Group is a premier litigation firm in Texas. Our team of aggressive trial lawyers has recovered millions for injury victims.\n\nWe combine elite legal strategy with aggressive courtroom tactics. We do not settle for less than what our clients deserve."
        imageSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        primaryColor={themeColor}
      />
      <ShevSuccessStories primaryColor={themeColor} />
      <ShevFAQ 
        primaryColor={themeColor}
        questions={[
          {q: "What is a contingency fee?", a: "It means we only get paid if we win your case. Our fee is a percentage of the settlement or verdict, so you pay nothing out of pocket."},
          {q: "How long do I have to file a claim?", a: "In Texas, the statute of limitations for personal injury is generally two years from the date of the accident. Do not wait to seek counsel."},
          {q: "What if I was partially at fault?", a: "Texas follows modified comparative negligence. You can still recover damages as long as you were not more than 50% at fault."}
        ]}
      />
      <ShevCTA primaryColor={themeColor} />
      <ShevFooter />
      <ShevFloatingContact primaryColor={themeColor} />
    </div>
  );
};

export default ShevPersonalInjury;
