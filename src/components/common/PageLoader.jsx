import "../../index.css";
import logo from "../../assets/arivu-logo.jpeg";

export default function PageLoader() {
  return (
    <div className="page-loader">
      <div className="loader-content">
        <div className="loader-logo">
          <img src={logo} alt="Tamil Logo" />
        </div>

        <div className="loader-bars" aria-hidden="true">
          <span className="loader-bar bar-1" />
          <span className="loader-bar bar-2" />
          <span className="loader-bar bar-3" />
          <span className="loader-bar bar-4" />
          <span className="loader-bar bar-5" />
          <span className="loader-bar bar-6" />
        </div>

        <p className="loader-message">தமிழ்</p>

        <div className="loader-progress">
          <span />
        </div>

        <p className="loader-caption">Loading your experience...</p>
      </div>
    </div>
  );
}
