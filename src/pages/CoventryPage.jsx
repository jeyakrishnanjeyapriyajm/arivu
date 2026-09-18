import LocationPageTemplate from "../components/locations/LocationPageTemplate";
import { locations } from "../data/locations";
import { siteImages } from "../data/siteImages";

export default function CoventryPage() {
  const location = locations.find((item) => item.id === "coventry");

  return (
    <LocationPageTemplate
      location={location}
      image={siteImages.locations.coventry}
    />
  );
}
