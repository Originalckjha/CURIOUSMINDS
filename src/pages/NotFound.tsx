import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 animate-fade-in">
      <div className="container-custom text-center">
        <div className="max-w-md mx-auto">
          {/* 404 Visual */}
          <div className="relative inline-block mb-8">
            <div className="text-9xl font-bold bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent">
              404
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center animate-pulse">
              <Search className="text-white" size={20} />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="btn-primary inline-flex items-center justify-center gap-2">
              <Home size={18} />
              Go to Home
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="btn-outline inline-flex items-center justify-center gap-2"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Or try one of these popular pages:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/materials" className="text-sm text-brand-blue hover:underline">
                Free Materials
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/about" className="text-sm text-brand-blue hover:underline">
                About Us
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/contact" className="text-sm text-brand-blue hover:underline">
                Contact
              </Link>
              <span className="text-gray-300">•</span>
              <Link to="/login" className="text-sm text-brand-blue hover:underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
