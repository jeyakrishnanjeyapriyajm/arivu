export const schoolLinks = [
  { label: "Coventry", path: "/coventry", note: "Sundays" },
  { label: "Birmingham", path: "/birmingham", note: "Saturday mornings" },
  { label: "Shirley", path: "/shirley", note: "Saturday afternoons" },
];

export const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Our Schools", path: "/schools", children: schoolLinks },
  { label: "Learning", path: "/learning" },
  { label: "Teachers", path: "/teachers" },
  { label: "Events", path: "/events" },
  { label: "Contact", path: "/contact" },
];
