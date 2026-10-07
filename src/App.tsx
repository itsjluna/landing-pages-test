import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React from 'react';

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

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between items-center shadow-md sticky top-0 z-50">
      <div className="overflow-x-auto whitespace-nowrap hide-scrollbar pr-4 flex-1">
        <div className="flex gap-4 items-center inline-flex">
          <span className="font-bold hidden md:inline">Demos:</span>
          <Link to="/mariana/personal-injury" className="text-teal-300 hover:text-white transition text-sm">Mariana PI</Link>
          <Link to="/mariana/immigration" className="text-teal-300 hover:text-white transition text-sm">Mariana Imm</Link>
          <span className="text-gray-500">|</span>
          <Link to="/shev/personal-injury" className="text-blue-300 hover:text-white transition text-sm">Shev PI</Link>
          <Link to="/shev/immigration" className="text-blue-300 hover:text-white transition text-sm">Shev Imm</Link>
          <Link to="/shev/business" className="text-red-300 hover:text-white transition text-sm">Shev Bus</Link>
        </div>
      </div>
      <button 
        onClick={toggleLanguage}
        className="ml-2 flex-shrink-0 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded transition font-bold text-sm"
      >
        {i18n.language === 'en' ? 'ES' : 'EN'}
      </button>
    </nav>
  );
}

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Law Firm Landing Pages</h1>
      <p className="text-lg text-gray-600">Select a landing page from the navigation bar above.</p>
    </div>
  )
}

function App() {
  // Use VITE_SITE environment variable to conditionally render a specific site
  // This allows building standalone sites (tree-shaking the unused ones)
  const site = import.meta.env.VITE_SITE || '';

  if (site === 'mariana-pi') {
    return <><LanguageToggle /><MarianaPersonalInjury /></>;
  }
  if (site === 'mariana-imm') {
    return <><LanguageToggle /><MarianaImmigration /></>;
  }
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
        <LanguageToggle />
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
