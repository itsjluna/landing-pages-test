import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';

// Pages
import MarianaPersonalInjury from './pages/MarianaPersonalInjury';
import MarianaImmigration from './pages/MarianaImmigration';
import ShevPersonalInjury from './pages/ShevPersonalInjury';
import ShevImmigration from './pages/ShevImmigration';
import ShevBusiness from './pages/ShevBusiness';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  return (
    <div className="absolute top-4 right-4 z-[100]">
      <button 
        onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}
        className="px-4 py-2 bg-black/40 hover:bg-black/60 text-white backdrop-blur-md rounded-full shadow-lg border border-white/20 transition-all font-bold text-sm"
      >
        {i18n.language === 'en' ? 'ESPAÑOL' : 'ENGLISH'}
      </button>
    </div>
  );
};

function Navigation() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const isMariana = location.pathname.startsWith('/mariana');

  useEffect(() => {
    if (isMariana && i18n.language !== 'es') {
      i18n.changeLanguage('es');
    }
  }, [isMariana, i18n]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between items-center shadow-md sticky top-0 z-50">
      <div className="overflow-x-auto whitespace-nowrap hide-scrollbar pr-4 flex-1">
        <div className="flex gap-4 items-center inline-flex">
          <span className="font-bold hidden md:inline text-gray-400">Demos:</span>
          <Link to="/mariana/personal-injury" className="text-rose-400 hover:text-white transition text-sm font-medium">Mariana PI</Link>
          <Link to="/mariana/immigration" className="text-emerald-400 hover:text-white transition text-sm font-medium">Mariana Imm</Link>
          <span className="text-gray-600">|</span>
          <Link to="/shev/personal-injury" className="text-red-400 hover:text-white transition text-sm font-medium">Shev PI (Red)</Link>
          <Link to="/shev/immigration" className="text-blue-400 hover:text-white transition text-sm font-medium">Shev Imm (Blue)</Link>
          <Link to="/shev/business" className="text-slate-300 hover:text-white transition text-sm font-medium">Shev Bus (Navy)</Link>
        </div>
      </div>
      {isMariana ? (
        <span className="ml-2 flex-shrink-0 px-3 py-1.5 bg-rose-950/80 text-rose-300 border border-rose-500/30 rounded text-xs font-bold tracking-wider uppercase">
          Español
        </span>
      ) : (
        <button 
          onClick={toggleLanguage}
          className="ml-2 flex-shrink-0 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded transition font-bold text-sm"
        >
          {i18n.language === 'en' ? 'ES' : 'EN'}
        </button>
      )}
    </nav>
  );
}

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 font-serif">Law Firm Landing Pages</h1>
      <p className="text-lg text-gray-600 max-w-xl">
        Select a landing page from the navigation bar above to view the custom branded experiences for Mariana and SHEV Law Group.
      </p>
    </div>
  );
}

function App() {
  // Use VITE_SITE environment variable to conditionally render a specific site
  // This allows building standalone sites (tree-shaking the unused ones)
  const site = import.meta.env.VITE_SITE || '';

  // Mariana sites are 100% Spanish with no language switcher
  if (site === 'mariana-pi') {
    return <MarianaPersonalInjury />;
  }
  if (site === 'mariana-imm') {
    return <MarianaImmigration />;
  }

  // SHEV sites are bilingual with language switcher
  if (site === 'shev-pi') {
    return <><LanguageToggle /><ShevPersonalInjury /></>;
  }
  if (site === 'shev-imm') {
    return <><LanguageToggle /><ShevImmigration /></>;
  }
  if (site === 'shev-biz') {
    return <><LanguageToggle /><ShevBusiness /></>;
  }

  if (site === 'shev-group') {
    return (
      <Router>
        <LanguageToggle />
        <Routes>
          <Route path="/personal-injury" element={<ShevPersonalInjury />} />
          <Route path="/immigration" element={<ShevImmigration />} />
          <Route path="/business" element={<ShevBusiness />} />
          <Route path="*" element={<ShevPersonalInjury />} />
        </Routes>
      </Router>
    );
  }

  if (site === 'mariana-group') {
    return (
      <Router>
        <Routes>
          <Route path="/personal-injury" element={<MarianaPersonalInjury />} />
          <Route path="/immigration" element={<MarianaImmigration />} />
          <Route path="*" element={<MarianaPersonalInjury />} />
        </Routes>
      </Router>
    );
  }

  // Fallback to the demo router
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-gray-800 relative">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mariana/personal-injury" element={<MarianaPersonalInjury />} />
            <Route path="/mariana/immigration" element={<MarianaImmigration />} />
            <Route path="/shev/personal-injury" element={<ShevPersonalInjury />} />
            <Route path="/shev/immigration" element={<ShevImmigration />} />
            <Route path="/shev/business" element={<ShevBusiness />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
