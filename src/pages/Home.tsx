import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  MessageSquare, 
  Code2, 
  Users, 
  Monitor, 
  Home as HomeIcon,
  ArrowRight,
  CheckCircle2,
  Star,
  BookOpen,
  Award,
  TrendingUp
} from 'lucide-react';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
        <div className="container-custom py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-brand-blue rounded-full text-sm font-medium mb-6">
                <Star size={14} fill="currentColor" />
                <span>India's Trusted Coaching Institute</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Learn Anywhere,<br />
                <span className="text-brand-blue">Grow </span>
                <span className="text-brand-orange">Everywhere</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Quality education across <strong className="text-brand-blue">K-12 academics</strong>, 
                <strong className="text-brand-orange"> English communication</strong>, and 
                <strong className="text-brand-green"> programming</strong>. 
                Choose offline classes, online learning, or home tuition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register" className="btn-primary inline-flex items-center justify-center gap-2">
                  Get Started Free
                  <ArrowRight size={18} />
                </Link>
                <Link to="/materials" className="btn-outline inline-flex items-center justify-center gap-2">
                  <BookOpen size={18} />
                  Browse Free Materials
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-brand-blue">500+</div>
                  <div className="text-sm text-gray-600 mt-1">Active Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-orange">50+</div>
                  <div className="text-sm text-gray-600 mt-1">Expert Teachers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-green">95%</div>
                  <div className="text-sm text-gray-600 mt-1">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:block">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl"></div>
                
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  {/* Department cards */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="w-12 h-12 rounded-lg bg-brand-blue flex items-center justify-center">
                        <GraduationCap className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">K-12 Academy</h3>
                        <p className="text-sm text-gray-600">Class 1 to 12 - All subjects</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
                      <div className="w-12 h-12 rounded-lg bg-brand-orange flex items-center justify-center">
                        <MessageSquare className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">English & Communication</h3>
                        <p className="text-sm text-gray-600">Spoken English, IELTS, Interview prep</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                      <div className="w-12 h-12 rounded-lg bg-brand-green flex items-center justify-center">
                        <Code2 className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Programming & Coding</h3>
                        <p className="text-sm text-gray-600">Python, Web Dev, DSA</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Join today and get</span>
                      <span className="font-bold text-brand-orange">Free Demo Class!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three Departments, One Goal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized programs designed to nurture every student's unique potential
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* K-12 Academy */}
            <div className="card group hover:border-brand-blue">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-brand-blue transition-colors">
                <GraduationCap className="text-brand-blue group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">K-12 Academy</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive coaching for Classes 1-12 across all subjects with focus on board exam excellence.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-brand-blue flex-shrink-0" />
                  Math, Science, English, SST
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-brand-blue flex-shrink-0" />
                  Board Exam Preparation
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-brand-blue flex-shrink-0" />
                  Regular Tests & Doubt Sessions
                </li>
              </ul>
              <Link to="/materials" className="text-brand-blue font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Explore Courses <ArrowRight size={16} />
              </Link>
            </div>

            {/* English Department */}
            <div className="card group hover:border-brand-orange">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-4 group-hover:bg-brand-orange transition-colors">
                <MessageSquare className="text-brand-orange group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">English & Communication</h3>
              <p className="text-gray-600 mb-4">
                Master spoken English, develop personality, and ace interviews with our communication experts.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-brand-orange flex-shrink-0" />
                  Spoken English Classes
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-brand-orange flex-shrink-0" />
                  IELTS Preparation
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-brand-orange flex-shrink-0" />
                  Interview & Personality Dev.
                </li>
              </ul>
              <Link to="/materials" className="text-brand-orange font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Explore Courses <ArrowRight size={16} />
              </Link>
            </div>

            {/* Programming Department */}
            <div className="card group hover:border-brand-green">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-4 group-hover:bg-brand-green transition-colors">
                <Code2 className="text-brand-green group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Programming & Coding</h3>
              <p className="text-gray-600 mb-4">
                Build future-ready coding skills with hands-on projects in Python, web development, and DSA.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-brand-green flex-shrink-0" />
                  Python, Java, C++
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-brand-green flex-shrink-0" />
                  Full Stack Web Development
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 size={16} className="text-brand-green flex-shrink-0" />
                  Data Structures & Algorithms
                </li>
              </ul>
              <Link to="/materials" className="text-brand-green font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Explore Courses <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Modes */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose How You Learn
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three flexible teaching modes to fit your schedule and learning style
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl gradient-blue flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Offline Classes</h3>
              <p className="text-gray-600">
                Traditional classroom learning with peer interaction and direct teacher guidance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl gradient-orange flex items-center justify-center mx-auto mb-4">
                <Monitor className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Online Classes</h3>
              <p className="text-gray-600">
                Live interactive sessions from anywhere with recorded lectures for revision.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl gradient-green flex items-center justify-center mx-auto mb-4">
                <HomeIcon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Home Tuition</h3>
              <p className="text-gray-600">
                One-on-one personal teaching at your home with customized learning pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Curious Minds?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We don't just teach, we transform learning experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Award className="text-brand-blue" size={28} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Faculty</h3>
              <p className="text-sm text-gray-600">Highly qualified and experienced teachers</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-brand-orange" size={28} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Free Study Material</h3>
              <p className="text-sm text-gray-600">Access to comprehensive resources</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-brand-green" size={28} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-sm text-gray-600">95% students achieve their goals</p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={28} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Small Batches</h3>
              <p className="text-sm text-gray-600">Personalized attention for every student</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 500+ students who are achieving their dreams with Curious Minds
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg inline-flex items-center justify-center gap-2"
            >
              Register Now
              <ArrowRight size={18} />
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-brand-blue font-semibold px-8 py-3 rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              Book Free Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
