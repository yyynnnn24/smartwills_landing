import { Hero } from '@/components/Hero';
import { AboutEvent } from '@/components/AboutEvent';
import { ProgrammeTimeline } from '@/components/ProgrammeTimeline';
import { Speakers } from '@/components/Speakers';
import { EventHighlights } from '@/components/EventHighlights';
import { Venue } from '@/components/Venue';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-cream-50">
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
