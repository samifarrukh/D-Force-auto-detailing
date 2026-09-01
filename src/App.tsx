import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { LocationDetailPage } from './pages/LocationDetailPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { SERVICES, LOCATIONS } from './data/siteData';

const AppContent: React.FC = () => {
  const { currentPath } = useNavigation();

  // Normalize path (strip leading slash if needed or keep standard)
  const normalizedPath = currentPath.startsWith('/') ? currentPath : `/${currentPath}`;

  // Find matching service
  const matchedService = SERVICES.find((s) => `/${s.slug}` === normalizedPath);
  if (matchedService) {
    return <ServiceDetailPage service={matchedService} />;
  }

  // Find matching location
  const matchedLocation = LOCATIONS.find((l) => `/${l.slug}` === normalizedPath);
  if (matchedLocation) {
    return <LocationDetailPage location={matchedLocation} />;
  }

  // Route other main pages
  switch (normalizedPath) {
    case '/services':
      return <ServicesPage />;
    case '/service-areas':
      return <ServiceAreasPage />;
    case '/about':
      return <AboutPage />;
    case '/gallery':
      return <GalleryPage />;
    case '/contact':
      return <ContactPage />;
    case '/':
    default:
      return <HomePage />;
  }
};

export default function App() {
  return (
    <NavigationProvider>
      <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-[#D72229] selection:text-white font-sans antialiased">
        <Header />
        <main className="flex-1 w-full">
          <AppContent />
        </main>
        <Footer />
        <QuoteModal />
        <WhatsAppFloatingButton />
      </div>
    </NavigationProvider>
  );
}
