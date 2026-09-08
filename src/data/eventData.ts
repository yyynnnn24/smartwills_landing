export interface ProgrammeItem {
  time: string;
  title: string;
  isMilestone?: boolean;
}

export const programmeData: ProgrammeItem[] = [
  { time: '1:30 PM', title: 'Registration & Refreshment' },
  { time: '2:00 PM', title: 'Welcome Speech' },
  { time: '2:10 PM', title: 'SmartWills WasiatKu Overview & Growth Journey (2023–2026)' },
  { time: '2:30 PM', title: 'Official Launch of SmartWills WasiatKu', isMilestone: true },
  { time: '2:45 PM', title: 'Speech by Director of SmartWills WasiatKu' },
  { time: '3:00 PM', title: 'MOU Signing with Palladium Trustee Bhd', isMilestone: true },
  { time: '3:10 PM', title: 'Speech by MD of Palladium Trustee Bhd' },
  { time: '3:15 PM', title: 'MOU Signing with Legal Advice & Shariah Lawyer', isMilestone: true },
  { time: '3:30 PM', title: 'Speech by Shariah Lawyer Representative' },
  { time: '3:35 PM', title: 'SmartWills WasiatKu Portal Demonstration' },
  { time: '3:55 PM', title: 'Group Photography Session' },
  { time: '4:00 PM', title: 'End of Ceremony' },
];

export interface Speaker {
  name: string;
  initials: string;
}

export const speakersData: Speaker[] = [
  { name: 'Cik Saliza Binti Juhari', initials: 'SJ' },
  { name: 'En Norazmi Bin Samsuri', initials: 'NS' },
  { name: 'Ms Julia', initials: 'JL' },
  { name: 'Cik Mursyidatun Adilah', initials: 'MA' },
];

export interface Highlight {
  title: string;
  description: string;
  icon: 'launch' | 'signing' | 'portal' | 'photo';
}

export const highlightsData: Highlight[] = [
  {
    title: 'Official Launch',
    description: 'The official inauguration of SmartWills WasiatKu, marking a new chapter in accessible estate planning.',
    icon: 'launch',
  },
  {
    title: 'MoU Signing Ceremony',
    description: 'Formal Memorandum of Understanding signings with esteemed partners and legal representatives.',
    icon: 'signing',
  },
  {
    title: 'Portal Demonstration',
    description: 'A live walkthrough of the SmartWills WasiatKu portal and its digital estate-planning capabilities.',
    icon: 'portal',
  },
  {
    title: 'Group Photography',
    description: 'Commemorative group photography session to capture this milestone occasion.',
    icon: 'photo',
  },
];

export const venueMapUrl =
  'https://www.google.com/maps/search/?api=1&query=Tropicana+Golf+%26+Country+Resort+Petaling+Jaya+Selangor';
