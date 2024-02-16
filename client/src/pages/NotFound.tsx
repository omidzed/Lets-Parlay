import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="Header-content">
      <div className="row">
        <div className="col text-center mb-5">
          <Link to="/" className="text-muted">
            <p className="text-white text-sm md:text-3xl mx-16 mt-20 md:mt-40">
              Uh oh, we could not find the page you were looking for! Click here
              to return to the Home-Page
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
