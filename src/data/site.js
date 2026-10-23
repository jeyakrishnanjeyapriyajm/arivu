export const site = {
  name: "Arivu Foundation",
  tagline: "Centre For Languages",
  tamilName: "அறிவு தமிழ் பாடசாலை",
  logo: "/brand/arivu-logo.jpeg",
  yearsTeaching: 24,

  mission:
    "To uplift the educational, economic and social status of Tamils in the United Kingdom and represent their interests within and outside the United Kingdom.",

  promise: "Trusted excellence over 24 years of teaching.",

  headOffice: {
    label: "Head Office UK",
    lines: ["243 Cross Road", "Coventry, CV6 5GP", "United Kingdom"],
  },

  phone: "07961 277728",
  phoneHref: "tel:+447961277728",
  email: "arivufoundation@outlook.com",
  whatsapp: "447961277728",

  social: {
    facebook: "https://www.facebook.com/arivufoundation",
  },
};

export function whatsappLink(
  message = "Hello Arivu Foundation, I would like to enquire about Tamil language classes.",
) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const images = {
  tamilLetter: "/images/tamil-letter-a.jpg",
  tamilWordmark: "/images/tamil-wordmark.jpg",
  bharathiyar: "/images/bharathiyar.jpg",
  thiruvalluvar: "/images/thiruvalluvar.jpg",
  sisterFlyer: "/images/chitrakalaimanram-flyer.jpg",
};

export function youtubeThumb(videoId, quality = "hqdefault") {
  return `https://i.ytimg.com/vi/${videoId}/${quality}.jpg`;
}
