import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Pages
import MarianaPersonalInjury from './pages/MarianaPersonalInjury';
import MarianaImmigration from './pages/MarianaImmigration';
import ShevPersonalInjury from './pages/ShevPersonalInjury';
import ShevImmigration from './pages/ShevImmigration';
import ShevBusiness from './pages/ShevBusiness';

function Navigation() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between items-center shadow-md sticky top-0 z-50">
      <div className="overflow-x-auto whitespace-nowrap hide-scrollbar pr-4 flex-1">
        <div className="flex gap-4 items-center inline-flex">
          <span className="font-bold hidden md:inline">Demos:</span>
          <Link to="/mariana/personal-injury" className="text-purple-300 hover:text-white transition text-sm">Mariana PI</Link>
          <Link to="/mariana/immigration" className="text-purple-300 hover:text-white transition text-sm">Mariana Imm</Link>
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
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-gray-800">
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
