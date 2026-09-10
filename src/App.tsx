import { Hero } from '@/components/Hero';
import { ProgrammeTimeline } from '@/components/ProgrammeTimeline';
import { EventHighlights } from '@/components/EventHighlights';
import { Venue } from '@/components/Venue';
import { Footer } from '@/components/Footer';
import { ExclusiveExperience } from './components/ExclusiveExperience';
import { SmartWillsCTA } from './components/SmartWillsCTA';

function App() {
  return (
    <div className="min-h-screen bg-[#003C32] text-[#F8F3E8]">
      <Hero />
      <EventHighlights />
      <ExclusiveExperience />
      <ProgrammeTimeline />
      <Venue />
      <SmartWillsCTA />
      <Footer />
    </div>
  );
}

export default App;
