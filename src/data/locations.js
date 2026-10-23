function directionsTo(address) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
}

export const locations = [
  {
    id: "coventry",
    name: "Coventry",
    title: "Coventry Tamil School",
    tamilName: "கொவென்ட்ரி தமிழ் பாடசாலை",
    venue: "Lyng Hall School",
    address: "Lyng Hall School, Blackberry Lane, Coventry, CV2 3JS",
    day: "Sunday",
    hours: "9:30 AM – 2:30 PM",
    accent: "crimson",
    badge: "Our first school",
    description:
      "Coventry is where Arivu Foundation began. Our first school brings children and families together every Sunday for structured Tamil language learning and cultural life.",
    highlights: [
      "Our founding school and home of the Head Office",
      "Coventry — UK City of Culture 2021",
      "Classes every Sunday in term time",
    ],
  },
  {
    id: "birmingham",
    name: "Birmingham",
    title: "Birmingham Tamil School",
    tamilName: "பர்மிங்ஹாம் தமிழ் பாடசாலை",
    venue: "West Bromwich Collegiate Academy",
    address: "West Bromwich Collegiate Academy, Kelvin Way, West Bromwich, B70 7LE",
    day: "Saturday",
    hours: "9:00 AM – 1:00 PM",
    accent: "saffron",
    badge: "Opened January 2024",
    description:
      "Opened in January 2024 following huge demand from parents, our Birmingham school brings the Arivu syllabus to families across West Bromwich and the wider Birmingham area.",
    highlights: [
      "Opening ceremony held on 20 January 2024",
      "Fine arts classes with our sister school Chitrakalaimanram",
      "Saturday morning classes",
    ],
  },
  {
    id: "shirley",
    name: "Shirley",
    title: "Shirley Tamil School",
    tamilName: "ஷேர்லி தமிழ் பாடசாலை",
    venue: "Light Hall School",
    address: "Light Hall School, Hathaway Road, Shirley, Solihull, B90 2PZ",
    day: "Saturday",
    hours: "2:00 PM – 6:00 PM",
    accent: "leaf",
    badge: "Solihull families",
    description:
      "Our Shirley school serves families across Solihull with Saturday afternoon classes, connecting children with Tamil language, heritage and friends.",
    highlights: [
      "Convenient Saturday afternoon sessions",
      "Same structured syllabus as every Arivu school",
      "Fine arts classes nearby with Chitrakalaimanram",
    ],
  },
].map((location) => ({
  ...location,
  path: `/${location.id}`,
  directions: directionsTo(location.address),
}));

export function getLocation(id) {
  return locations.find((location) => location.id === id);
}
