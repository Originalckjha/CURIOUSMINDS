import { Link } from 'react-router-dom';
import {
  Target,
  Heart,
  Lightbulb,
  Users,
  Award,
  TrendingUp,
  GraduationCap,
  MessageSquare,
  Code2,
  ArrowRight
} from 'lucide-react';

const values = [
  { icon: Target,   title: 'Excellence',  description: 'We strive for the highest standards in education and student outcomes.',                     iconBg: 'bg-blue-100',   iconText: 'text-brand-blue'   },
  { icon: Heart,    title: 'Care',        description: 'Every student matters. We provide personalized attention to all learners.',                   iconBg: 'bg-orange-100', iconText: 'text-brand-orange' },
  { icon: Lightbulb,title: 'Innovation',  description: 'Modern teaching methods combined with technology for effective learning.',                    iconBg: 'bg-green-100',  iconText: 'text-brand-green'  },
  { icon: Users,    title: 'Community',   description: 'Building a supportive learning community for students and teachers.',                         iconBg: 'bg-purple-100', iconText: 'text-purple-600'   },
];

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-brand-blue">Curious</span>{' '}
              <span className="text-brand-orange">Minds</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are an educational institute dedicated to nurturing curious minds and
              building bright futures. Our three-department approach ensures comprehensive
              development of every student.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-blue-100 text-brand-blue rounded-full text-sm font-medium mb-4">
                Our Story
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Empowering Education Since Day One
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Curious Minds was founded with a simple mission: make quality education
                accessible to every student, regardless of their background or learning style.
                What started as a small coaching center has grown into a comprehensive
                educational institute with three specialized departments.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Today, we serve hundreds of students across academic subjects, language
                training, and programming courses. Our offline classes, online programs,
                and home tuition services ensure that every student finds their perfect
                learning environment.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Get In Touch
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <div className="text-3xl font-bold text-brand-blue mb-1">500+</div>
                  <div className="text-sm text-gray-700">Active Students</div>
                </div>
                <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                  <div className="text-3xl font-bold text-brand-orange mb-1">50+</div>
                  <div className="text-sm text-gray-700">Expert Teachers</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                  <div className="text-3xl font-bold text-brand-green mb-1">95%</div>
                  <div className="text-sm text-gray-700">Success Rate</div>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                  <div className="text-3xl font-bold text-purple-600 mb-1">10+</div>
                  <div className="text-sm text-gray-700">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <Target className="text-brand-blue" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, high-quality education that empowers every student
                to reach their full potential through innovative teaching methods,
                personalized attention, and comprehensive support across academics,
                communication skills, and technology.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                <Lightbulb className="text-brand-orange" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading educational institute that transforms curious minds
                into confident, skilled, and future-ready individuals who excel in
                academics, communicate effectively, and contribute meaningfully to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="text-center p-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${value.iconBg}`}>
                  <value.icon className={value.iconText} size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three Departments, Endless Possibilities
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border-l-4 border-brand-blue">
              <GraduationCap className="text-brand-blue mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">K-12 Academy</h3>
              <p className="text-gray-600 text-sm">
                From foundation to board exams, comprehensive support for Classes 1-12
                across all subjects with experienced teachers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border-l-4 border-brand-orange">
              <MessageSquare className="text-brand-orange mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">English & Communication</h3>
              <p className="text-gray-600 text-sm">
                Master spoken English, prepare for IELTS, and develop the communication
                skills needed for career success.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border-l-4 border-brand-green">
              <Code2 className="text-brand-green mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Programming & Coding</h3>
              <p className="text-gray-600 text-sm">
                Future-ready skills in Python, web development, and DSA with hands-on
                projects and industry-relevant curriculum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-blue mb-2">500+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-orange mb-2">50+</div>
              <div className="text-gray-600">Expert Teachers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-green mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Curious Minds?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <Award className="text-brand-blue mx-auto mb-3" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">Expert Faculty</h3>
              <p className="text-sm text-gray-600">Highly qualified and experienced teachers dedicated to student success.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <TrendingUp className="text-brand-orange mx-auto mb-3" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-sm text-gray-600">95% of our students achieve their academic and career goals.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <Users className="text-brand-green mx-auto mb-3" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">Small Batches</h3>
              <p className="text-sm text-gray-600">Personalized attention with small batch sizes for every student.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
        <div className="container-custom text-center">
          <Award className="mx-auto mb-4" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Learning Family Today
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step toward a brighter future with Curious Minds
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
              className="border-2 border-white text-white hover:bg-white hover:text-brand-blue font-semibold px-8 py-3 rounded-lg transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
