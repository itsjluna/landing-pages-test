import React from 'react';
import { useTranslation } from 'react-i18next';
import { MarianaHero, MarianaBanner, MarianaSuccessStories, MarianaBiography, MarianaFAQ } from '../components/MarianaBlocks';
import { MarianaStats, MarianaPracticeAreas, MarianaFloatingContact, MarianaFooter, MarianaTrustBadges } from '../components/MarianaFeatures';
import { Globe, FileCheck2, Building2 } from 'lucide-react';

const MarianaImmigration = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#0a0514]">
      <MarianaHero 
        title="Tu Abogada Mariana"
        subtitle="Su aliada en procesos de Inmigración. Manteniendo a las familias unidas en Texas con dedicación y honestidad."
        imageSrc="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      />
      <MarianaStats stats={[
        { value: 1500, suffix: "+", label: "Familias Unidas" },
        { value: 98, suffix: "%", label: "Tasa de Éxito" },
        { value: 15, suffix: "", label: "Años de Experiencia" }
      ]} />
      <MarianaBanner 
        text={t("Schedule your appointment to evaluate your case")}
      />
      <MarianaPracticeAreas areas={[
        { title: "Peticiones Familiares", desc: "Traiga a sus seres queridos a los Estados Unidos. Le guiamos en cada paso del proceso I-130 y visas de prometido.", icon: Globe },
        { title: "Ciudadanía y Naturalización", desc: "Le preparamos para su entrevista y examen cívico para que pueda lograr el sueño americano y convertirse en ciudadano.", icon: FileCheck2 },
        { title: "Defensa de Deportación", desc: "Si enfrenta un proceso de remoción, necesita representación agresiva en la corte de inmigración inmediatamente.", icon: Building2 }
      ]} />
      <MarianaBiography 
        name="Mariana"
        bio="Mariana is passionate about helping immigrants achieve the American dream. She handles family-based petitions, naturalization, and deportation defense with profound dedication.\n\nHer mission is to navigate the complex immigration system for you, ensuring that every form is perfect and every deadline is met, so you can focus on building your life in the United States."
        imageSrc="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      />
      <MarianaSuccessStories />
      <MarianaFAQ 
        questions={[
          {q: "How long does the immigration process take?", a: "Processing times vary wildly depending on the type of visa, your home country, and current USCIS backlogs. We will provide an estimate during your consultation based on the most recent data."},
          {q: "Do I need a lawyer for my immigration case?", a: "While not strictly required by law, the immigration system is incredibly complex. A single mistake or omission can lead to years of delays or deportation. Professional representation gives you peace of mind."},
          {q: "What documents do I need for my first appointment?", a: "Bring any notices or letters from USCIS, your passport, I-94 arrival record, and any criminal records. We will give you a comprehensive checklist tailored to your case type when you schedule."}
        ]}
      />
      <MarianaFooter />
      <MarianaFloatingContact />
    </div>
  );
};

export default MarianaImmigration;
