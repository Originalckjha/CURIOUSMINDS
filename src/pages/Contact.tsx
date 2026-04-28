import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'k12',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, send this to your backend or email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: 'k12',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the 
            channels below or fill out the contact form.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8 relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Phone className="text-brand-blue" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+91XXXXXXXXXX" className="text-brand-blue hover:underline">
                +91 XXXX XXXXXX
              </a>
              <p className="text-sm text-gray-500 mt-2">Mon-Sat, 9 AM - 7 PM</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-brand-orange" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:info@curiousminds.edu" className="text-brand-orange hover:underline">
                info@curiousminds.edu
              </a>
              <p className="text-sm text-gray-500 mt-2">We reply within 24 hours</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-brand-green" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-brand-green">
                Your Institute Address<br />
                City, State - PIN
              </p>
              <p className="text-sm text-gray-500 mt-2">Open 6 days a week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="inline-block px-4 py-1 bg-blue-100 text-brand-blue rounded-full text-sm font-medium mb-3">
                Send a Message
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Drop Us a Line
              </h2>
              <p className="text-gray-600 mb-6">
                Whether you're a student looking for courses or a parent with questions, 
                we'd love to hear from you.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle2 className="text-brand-green mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXX XXXXXX"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Interested In
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="k12">K-12 Academy</option>
                      <option value="english">English & Communication</option>
                      <option value="programming">Programming & Coding</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      className="input-field resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full inline-flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-6">
              {/* Office Hours */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-brand-blue" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-700">Saturday</span>
                    <span className="font-medium">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-700">Sunday</span>
                    <span className="font-medium text-red-600">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick FAQs */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="text-brand-orange" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">Quick Questions</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Do you offer free demo classes?</h4>
                    <p className="text-sm text-gray-600">Yes! Book a free 30-minute demo for any course.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Are study materials free?</h4>
                    <p className="text-sm text-gray-600">All basic study materials are free for registered students.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Do you provide home tuition?</h4>
                    <p className="text-sm text-gray-600">Yes, we offer home tuition across all departments.</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-brand-green to-brand-green-dark rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Quick WhatsApp Chat</h3>
                <p className="text-sm text-green-100 mb-4">
                  Get instant responses to your queries on WhatsApp
                </p>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brand-green font-semibold px-6 py-2.5 rounded-lg inline-flex items-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
