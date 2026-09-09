import logo1 from '@/assets/logo1.png';
import logo2 from '@/assets/logo2.png';
import logo3 from '@/assets/logo3.jpg';
import logo4 from '@/assets/logo4.jpg';

export interface ProgrammeItem {
  time: string;
  title: string;
  description?: string;
}

export const programmeData: ProgrammeItem[] = [
  { time: '5:30 PM', title: 'Registration & Photo Booth' },
  { time: '6:55 PM', title: 'Greeting Video by Lawyers' },
  { time: '7:00 PM', title: 'Welcome Speech by MC Nick' },
  { time: '7:05 PM', title: 'Dinner Served' },
  { time: '7:35 PM', title: '10th Anniversary Appreciation & Souvenir Presentation (Part 1)' },
  { time: '7:45 PM', title: 'Openining Lighting Show - 10-year Journey Video Presentation' },
  { time: '7:50 PM', title: 'Welcome Speech by Founder - Dylan Ng' },
  { time: '8:00 PM', title: 'Signing MOU For SmartWills Malaysia & Palladium Trustee Bhd', },
  { time: '8:15 PM', title: 'Speech by Julia from Palladium Trustee Bhd' },
  { time: '8:25 PM', title: 'SmartWills Anniversary MV',},
  { time: '8:35 PM', title: '10th Anniversary Appreciation & Souvenir Presentation (Part 2)' },
  { time: '8:45 PM', title: 'Cake Cutting Ceremony' },
  { time: '9:00 PM', title: 'CSPM Launching Ceremony' },
  { time: '9:10 PM', title: 'Presentation CSPM' },
  { time: '9:30 PM', title: 'Closing by MC Nick',},
  { time: '9:35 PM', title: 'Thank You Sponsorship & Closing with Networking' },
];

export interface Partner {
  name: string;
  logo: string;
}

export const partnersData: Partner[] = [
  {
    name: 'SMILE28',
    logo: logo1,
  },
  {
    name: 'ReGen Hospital',
    logo: logo2,
  },
  {
    name: 'SMART INTELLIGENCE EDU',
    logo: logo3,
  },
  {
    name: 'ROYCEMD',
    logo: logo4,
  },
];


export const venueMapUrl =
  'https://www.google.com/maps/search/?api=1&query=Tropicana+Golf+%26+Country+Resort+Petaling+Jaya+Selangor';
