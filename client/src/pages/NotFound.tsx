import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="Header-content">
      <div className="row">
        <div className="col text-center mb-5">
          <Link to="/" className="text-muted">
            <h3>Uh oh, we could not find the page you were looking for!</h3>
            <p className="text-muted">Return to the Home-Page</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
