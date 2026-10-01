import React from 'react';
import { useTranslation } from 'react-i18next';
import { MarianaHero, MarianaBanner, MarianaSuccessStories, MarianaBiography, MarianaFAQ } from '../components/MarianaBlocks';
import { MarianaStats, MarianaPracticeAreas, MarianaFloatingContact, MarianaFooter, MarianaTrustBadges } from '../components/MarianaFeatures';
import { ShieldAlert, HeartHandshake, Briefcase } from 'lucide-react';

const MarianaPersonalInjury = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#0a0514]">
      <MarianaHero 
        title="Tu Abogada Mariana"
        subtitle="Defendiendo sus derechos en casos de Daños Personales. Luchamos por la compensación que merece con fuerza y empatía."
        imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      />
      <MarianaStats stats={[
        { value: 50, suffix: "M+", label: "Compensación Recuperada" },
        { value: 1000, suffix: "+", label: "Casos Ganados" },
        { value: 15, suffix: "", label: "Años de Experiencia" }
      ]} />
      <MarianaBanner 
        text={t("If we don't win, you don't pay us")}
      />
      <MarianaPracticeAreas areas={[
        { title: "Accidentes de Auto", desc: "Si fue chocado por un conductor negligente, pelearemos para que pague todos sus gastos médicos y sufrimiento.", icon: ShieldAlert },
        { title: "Accidentes de Trabajo", desc: "Sufrir una lesión en el trabajo puede dejarlo sin ingresos. Le ayudamos a obtener su compensación laboral.", icon: Briefcase },
        { title: "Resbalones y Caídas", desc: "Los dueños de propiedades deben mantener sus lugares seguros. Si cayó por negligencia, tiene derechos.", icon: HeartHandshake }
      ]} />
      <MarianaBiography 
        name="Mariana"
        bio="Mariana is a dedicated personal injury attorney serving Texas. With years of experience fighting insurance companies, she ensures her clients get the maximum compensation.\n\nShe believes in aggressive representation and compassionate client care. Her team leaves no stone unturned when investigating accidents, dealing with medical providers, and negotiating settlements."
        imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      />
      <MarianaSuccessStories />
      <MarianaFAQ 
        questions={[
          {q: "What should I do immediately after an accident?", a: "Seek medical attention immediately and document the scene if possible. Take photos, gather witness information, and then contact our office before speaking to any insurance adjusters."},
          {q: "How much is my case worth?", a: "Every case is unique. The value depends on medical bills, lost wages, and pain and suffering. We offer a free, no-obligation consultation to evaluate your specific situation and give you a realistic estimate."},
          {q: "Will my case go to trial?", a: "Most personal injury cases settle out of court, but we prepare every case as if it will go to trial. This aggressive preparation often forces insurance companies to offer better settlements."}
        ]}
      />
      <MarianaFooter />
      <MarianaFloatingContact />
    </div>
  );
};

export default MarianaPersonalInjury;
