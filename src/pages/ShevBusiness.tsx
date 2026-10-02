import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShevHero, ShevBanner, ShevSuccessStories, ShevBiography, ShevFAQ, ShevWhyChooseUs, ShevCTA } from '../components/ShevBlocks';
import { ShevStats, ShevPracticeAreas, ShevFloatingContact, ShevFooter } from '../components/ShevFeatures';
import { Building2, Scale, Handshake } from 'lucide-react';

const ShevBusiness = () => {
  const { t } = useTranslation();
  const themeColor = 'blue';

  return (
    <div className="bg-slate-50 font-sans">
      <ShevHero 
        title="Corporate Counsel."
        subtitle="Corporate & Business Law. Protecting your enterprise, minimizing risk, and facilitating growth."
        imageSrc="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        primaryColor={themeColor}
      />
      <ShevStats 
        primaryColor={themeColor}
        stats={[
          { value: 500, suffix: "+", label: "Businesses Formed" },
          { value: 1, suffix: "B+", label: "Deals Negotiated" },
          { value: 20, suffix: "", label: "Years Experience" }
        ]} 
      />
      <ShevBanner 
        text={t("Business Consultation Banner")}
        color="#0f172a" // slate-900
      />
      <ShevPracticeAreas 
        primaryColor={themeColor}
        areas={[
          { title: "Entity Formation", desc: "Strategic structuring for LLCs, Corporations, and Partnerships to maximize protection and tax benefits.", icon: Building2 },
          { title: "Commercial Litigation", desc: "Aggressive representation in breach of contract, partnership disputes, and business torts.", icon: Scale },
          { title: "M&A Transactions", desc: "Expert counsel for mergers, acquisitions, and major corporate restructuring.", icon: Handshake }
        ]} 
      />
      <ShevWhyChooseUs 
        primaryColor={themeColor}
        points={[
          { title: "Outside General Counsel", desc: "We act as your dedicated legal department, providing proactive advice to prevent issues before they become expensive lawsuits." },
          { title: "Deal Makers, Not Breakers", desc: "We facilitate your business growth by drafting watertight contracts that protect you while getting the deal done." },
          { title: "High-Stakes Litigation", desc: "When disputes arise, we bring elite trial experience to defend your enterprise aggressively in state and federal courts." }
        ]}
      />
      <ShevBiography 
        name="The Shev Legal Team"
        bio="Our business attorneys act as outside general counsel for mid-market and emerging companies across Texas.\n\nFrom formation and contracts to M&A and commercial litigation, we deliver sophisticated legal solutions that drive business success."
        imageSrc="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        primaryColor={themeColor}
      />
      <ShevSuccessStories primaryColor={themeColor} />
      <ShevFAQ 
        primaryColor={themeColor}
        questions={[
          {q: "Should I form an LLC or a Corporation?", a: "It depends on your liability needs, tax strategy, and funding goals. We consult with you to choose the optimal entity structure for your specific business."},
          {q: "Do you handle contract drafting and review?", a: "Yes, we draft, review, and negotiate all types of commercial agreements, including employment contracts, NDAs, vendor agreements, and commercial leases."},
          {q: "Can you help resolve a dispute with my business partner?", a: "We handle partnership disputes and breach of fiduciary duty claims, aiming for efficient resolution but prepared for aggressive litigation if necessary."}
        ]}
      />
      <ShevCTA primaryColor={themeColor} />
      <ShevFooter />
      <ShevFloatingContact primaryColor={themeColor} />
    </div>
  );
};

export default ShevBusiness;
