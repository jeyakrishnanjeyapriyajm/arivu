// Video IDs are each teacher's introduction on YouTube ("Our Tamil Teachers | எமது தமிழ் ஆசிரியர்கள்").
export const teachers = [
  {
    id: "shanthini",
    name: "Mrs Shanthini Rajeswaran",
    role: "Head Teacher",
    note: "Former Education Department Zonal Head",
    schools: ["All schools"],
    videoId: "Q0bSZ5EawRM",
    description:
      "A very well-experienced Tamil educator who brings years of leadership in education to the Arivu syllabus and teaching team.",
  },
  {
    id: "nirosha",
    name: "Mrs Nirosha Suthagar",
    role: "Tamil Teacher",
    note: "Our first teacher — with us from day one",
    schools: ["Arivu Tamil School"],
    videoId: "uwSboDf--0s",
    description:
      "The very first Tamil teacher to join Arivu Foundation, part of the school community since its earliest days.",
  },
  {
    id: "kuyiline",
    name: "Mrs Kuyiline Thivaharan",
    role: "Tamil Teacher",
    note: "Teaching across all three schools",
    schools: ["Coventry", "Birmingham", "Shirley"],
    videoId: "eV4MASxx1PE",
    description:
      "Supports Tamil learners in Coventry, Birmingham and Shirley, helping children build confidence in speaking, reading and writing.",
  },
  {
    id: "isiaipiriya",
    name: "Mrs Isiaipiriya Jeyamohan",
    role: "Tamil Teacher",
    note: "Coventry Tamil School",
    schools: ["Coventry"],
    videoId: "rQpPTXZgIeI",
    description:
      "Teaches Tamil at our Coventry school, nurturing a love of the language through structured, engaging lessons.",
  },
  {
    id: "balini",
    name: "Mrs Balini Niranjan",
    role: "Tamil Teacher",
    note: "Shirley Tamil School",
    schools: ["Shirley"],
    videoId: "ZwPCuVCw2tM",
    description:
      "Teaches Tamil at our Shirley school, guiding students through the syllabus with care and encouragement.",
  },
  {
    id: "januha",
    name: "Mrs Januha Vithagan",
    role: "Tamil Teacher",
    note: "Birmingham Tamil School",
    schools: ["Birmingham"],
    videoId: "ztRovd9i-jI",
    description:
      "Teaches Tamil at our Birmingham school, helping a growing community of learners connect with their language and heritage.",
  },
];

export function initialsOf(name) {
  return name
    .replace(/^(Mrs|Mr|Ms|Miss|Dr)\.?\s+/i, "")
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}
