import LocationPageTemplate from "../components/locations/LocationPageTemplate";
import { locations } from "../data/locations";
import { siteImages } from "../data/siteImages";

export default function ShirleyPage() {
  const location = locations.find((item) => item.id === "shirley");

  return (
    <LocationPageTemplate
      location={location}
      image={siteImages.locations.shirley}
    />
  );
}
