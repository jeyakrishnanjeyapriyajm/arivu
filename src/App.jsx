import { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import PageLoader from "./components/common/PageLoader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <PageLoader />}

      <AppRoutes />
    </>
  );
}
