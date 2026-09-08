import { Hero } from '@/components/Hero';
import { AboutEvent } from '@/components/AboutEvent';
import { ProgrammeTimeline } from '@/components/ProgrammeTimeline';
import { Speakers } from '@/components/Speakers';
import { EventHighlights } from '@/components/EventHighlights';
import { Venue } from '@/components/Venue';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-cream-50" style={{ background: 'radial-gradient(circle at 15% 12%, rgba(16,72,54,0.28), transparent 30%), radial-gradient(circle at 85% 78%, rgba(191,128,31,0.05), transparent 24%), #023936' }}>
      <Hero />
      <AboutEvent />
      <ProgrammeTimeline />
      <Speakers />
      <EventHighlights />
      <Venue />
      <Footer />
    </div>
  );
}

export default App;
