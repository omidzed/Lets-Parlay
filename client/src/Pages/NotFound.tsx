import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="Header-content">
      <div className="row">
        <div className="col text-center mb-5">
          <Link to="/" className="text-muted">
            <p className="text-white text-center text-lg md:text-2xl mx-16 mt-20 md:mt-40">
              We could not find the page you were looking for, please click here
              to return to the Home-Page!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
