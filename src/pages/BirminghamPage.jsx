import LocationPageTemplate from "../components/locations/LocationPageTemplate";
import { locations } from "../data/locations";
import { siteImages } from "../data/siteImages";

export default function BirminghamPage() {
  const location = locations.find((item) => item.id === "birmingham");

  return (
    <LocationPageTemplate
      location={location}
      image={siteImages.locations.birmingham}
    />
  );
}
