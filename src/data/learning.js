import { BookOpenText, GraduationCap, Languages, Sparkles } from "lucide-react";

export const pillars = [
  {
    id: "language",
    icon: Languages,
    color: "crimson",
    title: "Spoken Tamil",
    tamil: "பேச்சுத் தமிழ்",
    description:
      "Everyday conversation, vocabulary and pronunciation so children can speak Tamil confidently at home and in the community.",
  },
  {
    id: "literacy",
    icon: BookOpenText,
    color: "saffron",
    title: "Reading & Writing",
    tamil: "வாசிப்பும் எழுத்தும்",
    description:
      "From உயிர் and மெய் letters to full sentences — a well-structured syllabus builds literacy step by step, supported by worksheets.",
  },
  {
    id: "culture",
    icon: Sparkles,
    color: "vermilion",
    title: "Culture & Heritage",
    tamil: "பண்பாடு",
    description:
      "Festivals such as Pongal, Tamil speech and drama, literature and the arts — language learnt alongside the culture it carries.",
  },
  {
    id: "exams",
    icon: GraduationCap,
    color: "leaf",
    title: "Cambridge O & A Level",
    tamil: "தேர்வுத் தயாரிப்பு",
    description:
      "Students are prepared for Cambridge Assessment International Education Tamil qualifications at O Level and A Level.",
  },
];

export const promises = [
  {
    title: "Well-structured syllabus",
    text: "A well-accepted Tamil education syllabus followed at every Arivu school.",
  },
  {
    title: "Trained, DBS-checked teachers",
    text: "All our teachers are properly trained and hold DBS clearance certificates.",
  },
  {
    title: "Recognised qualifications",
    text: "Preparation for Cambridge International O Level and A Level Tamil.",
  },
  {
    title: "Community & culture",
    text: "Festivals, performances and events that bring families together.",
  },
];

export const resources = [
  {
    id: "tamil-worksheet",
    title: "Tamil Worksheet — அ",
    type: "PDF",
    size: "1 MB",
    description: "Practise Tamil letters at home with our printable worksheet.",
    file: "/downloads/tamil-worksheet.pdf",
  },
];
