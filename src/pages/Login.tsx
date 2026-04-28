import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, AlertCircle, GraduationCap, BookOpen } from 'lucide-react';
import Logo from '../components/Logo';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState<'student' | 'teacher'>('student');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      const success = await login(email, password);
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Quick login with demo accounts
  const fillDemoCredentials = (type: 'student' | 'teacher') => {
    if (type === 'student') {
      setEmail('student@curiousminds.edu');
      setPassword('student123');
    } else {
      setEmail('teacher@curiousminds.edu');
      setPassword('teacher123');
    }
    setUserType(type);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-12">
      <div className="container-custom">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-block">
              <Logo size="lg" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mt-6">Welcome Back!</h1>
            <p className="text-gray-600 mt-2">Login to access your dashboard</p>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {/* User Type Toggle */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-lg mb-6">
              <button
                type="button"
                onClick={() => setUserType('student')}
                className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
                  userType === 'student'
                    ? 'bg-white text-brand-blue shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                <GraduationCap size={18} />
                Student
              </button>
              <button
                type="button"
                onClick={() => setUserType('teacher')}
                className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
                  userType === 'teacher'
                    ? 'bg-white text-brand-orange shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                <BookOpen size={18} />
                Teacher
              </button>
            </div>

            {/* Error Alert */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg mb-4 text-sm text-red-700">
                <AlertCircle size={16} className="flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="input-field pl-10"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="input-field pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-brand-blue focus:ring-brand-blue" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-brand-blue hover:underline font-medium">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold text-white transition-all ${
                  userType === 'student'
                    ? 'bg-brand-blue hover:bg-brand-blue-dark'
                    : 'bg-brand-orange hover:bg-brand-orange-dark'
                } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Logging in...' : `Login as ${userType === 'student' ? 'Student' : 'Teacher'}`}
              </button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center mb-3">Quick Demo Login</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => fillDemoCredentials('student')}
                  className="text-xs py-2 px-3 bg-blue-50 text-brand-blue rounded-lg hover:bg-blue-100 transition-colors font-medium"
                >
                  Use Student Demo
                </button>
                <button
                  type="button"
                  onClick={() => fillDemoCredentials('teacher')}
                  className="text-xs py-2 px-3 bg-orange-50 text-brand-orange rounded-lg hover:bg-orange-100 transition-colors font-medium"
                >
                  Use Teacher Demo
                </button>
              </div>
            </div>

            {/* Sign up link */}
            <div className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-brand-blue font-semibold hover:underline">
                Sign up here
              </Link>
            </div>
          </div>

          {/* Help Text */}
          <p className="text-center text-xs text-gray-500 mt-6">
            By logging in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
