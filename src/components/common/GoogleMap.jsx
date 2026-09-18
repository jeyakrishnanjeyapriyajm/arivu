export default function GoogleMap({ address }) {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    address,
  )}&output=embed`;

  return (
    <iframe
      src={mapUrl}
      title={`Map showing ${address}`}
      className="h-full min-h-[320px] w-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
