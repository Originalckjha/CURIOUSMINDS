import { Link } from 'react-router-dom';
import {
  BookOpen,
  Download,
  Clock,
  Award,
  TrendingUp,
  Calendar,
  FileText,
  ChevronRight,
  GraduationCap,
  MessageSquare,
  Code2,
  Users,
  Upload,
  BookMarked
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { studyMaterials } from '../data/materials';

const deptStyles = {
  k12:         { badge: 'bg-blue-100 text-brand-blue',    matIcon: 'bg-blue-100',   matText: 'text-brand-blue'   },
  english:     { badge: 'bg-orange-100 text-brand-orange', matIcon: 'bg-orange-100', matText: 'text-brand-orange' },
  programming: { badge: 'bg-green-100 text-brand-green',  matIcon: 'bg-green-100',  matText: 'text-brand-green'  },
} as const;

const statStyles = {
  blue:   { iconBg: 'bg-blue-100',   iconText: 'text-brand-blue'   },
  orange: { iconBg: 'bg-orange-100', iconText: 'text-brand-orange' },
  green:  { iconBg: 'bg-green-100',  iconText: 'text-brand-green'  },
  purple: { iconBg: 'bg-purple-100', iconText: 'text-purple-600'   },
} as const;

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) return null;

  const relevantMaterials = user.department
    ? studyMaterials.filter(m => m.department === user.department).slice(0, 3)
    : studyMaterials.slice(0, 3);

  const departmentInfo = {
    k12:         { name: 'K-12 Academy',            icon: GraduationCap },
    english:     { name: 'English & Communication', icon: MessageSquare  },
    programming: { name: 'Programming & Coding',    icon: Code2           },
  } as const;

  const userDept = user.department ? departmentInfo[user.department] : null;
  const userDeptStyle = user.department ? deptStyles[user.department] : null;

  const studentStats = [
    { label: 'Materials Downloaded', value: '24',      icon: Download,   color: 'blue'   as const },
    { label: 'Hours Studied',         value: '48',      icon: Clock,      color: 'orange' as const },
    { label: 'Achievements',          value: '8',       icon: Award,      color: 'green'  as const },
    { label: 'Current Streak',        value: '12 days', icon: TrendingUp, color: 'purple' as const },
  ];

  const teacherStats = [
    { label: 'Active Students',    value: '45',   icon: Users,    color: 'blue'   as const },
    { label: 'Materials Uploaded', value: '32',   icon: Upload,   color: 'orange' as const },
    { label: 'Classes This Week',  value: '18',   icon: Calendar, color: 'green'  as const },
    { label: 'Total Downloads',    value: '1.2k', icon: Download, color: 'purple' as const },
  ];

  const stats = user.role === 'teacher' ? teacherStats : studentStats;

  return (
    <div className="bg-gray-50 min-h-screen py-8 animate-fade-in">
      <div className="container-custom">
        {/* Welcome Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Welcome back, {user.name.split(' ')[0]}! 👋
              </h1>
              <p className="text-gray-600 mt-1">
                {user.role === 'teacher'
                  ? "Here's an overview of your classes and students."
                  : 'Continue your learning journey today.'}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${userDeptStyle?.badge ?? 'bg-blue-100 text-brand-blue'}`}>
                {userDept && <userDept.icon size={16} />}
                <span>{userDept?.name ?? 'Curious Minds Member'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, idx) => {
            const s = statStyles[stat.color];
            return (
              <div key={idx} className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${s.iconBg}`}>
                    <stat.icon className={s.iconText} size={20} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Materials */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    {user.role === 'teacher' ? 'Your Recent Uploads' : 'Recommended Materials'}
                  </h2>
                  <p className="text-sm text-gray-600 mt-0.5">
                    {user.role === 'teacher' ? 'Materials you have uploaded' : 'Based on your department'}
                  </p>
                </div>
                <Link
                  to="/materials"
                  className="text-sm text-brand-blue font-medium hover:underline flex items-center gap-1"
                >
                  View All <ChevronRight size={16} />
                </Link>
              </div>
              <div className="divide-y divide-gray-100">
                {relevantMaterials.map((material) => {
                  const ms = deptStyles[material.department];
                  return (
                    <div key={material.id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${ms.matIcon}`}>
                          <FileText className={ms.matText} size={20} />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h3 className="font-semibold text-gray-900 mb-1">{material.title}</h3>
                          <p className="text-sm text-gray-600 mb-2 line-clamp-2">{material.description}</p>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <BookMarked size={12} />
                              {material.subject}
                            </span>
                            <span className="flex items-center gap-1">
                              <Download size={12} />
                              {material.downloads} downloads
                            </span>
                            <span>{material.uploadDate}</span>
                          </div>
                        </div>
                        <a
                          href={material.fileUrl}
                          download
                          className="flex-shrink-0 p-2 text-brand-blue hover:bg-blue-50 rounded-lg transition-colors"
                          aria-label="Download"
                        >
                          <Download size={18} />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Today's Schedule</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-brand-blue">
                  <div className="text-center min-w-[60px]">
                    <div className="text-sm font-bold text-brand-blue">10:00</div>
                    <div className="text-xs text-gray-600">AM</div>
                  </div>
                  <div className="flex-grow">
                    <div className="font-semibold text-gray-900">Mathematics</div>
                    <div className="text-sm text-gray-600">Algebra & Geometry • Room 203</div>
                  </div>
                  <span className="text-xs px-2 py-1 bg-brand-blue text-white rounded-full">Offline</span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg border-l-4 border-brand-orange">
                  <div className="text-center min-w-[60px]">
                    <div className="text-sm font-bold text-brand-orange">2:00</div>
                    <div className="text-xs text-gray-600">PM</div>
                  </div>
                  <div className="flex-grow">
                    <div className="font-semibold text-gray-900">English Speaking</div>
                    <div className="text-sm text-gray-600">Conversation Practice • Online</div>
                  </div>
                  <span className="text-xs px-2 py-1 bg-brand-orange text-white rounded-full">Online</span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-brand-green">
                  <div className="text-center min-w-[60px]">
                    <div className="text-sm font-bold text-brand-green">5:00</div>
                    <div className="text-xs text-gray-600">PM</div>
                  </div>
                  <div className="flex-grow">
                    <div className="font-semibold text-gray-900">Python Programming</div>
                    <div className="text-sm text-gray-600">Functions & Modules • Lab 1</div>
                  </div>
                  <span className="text-xs px-2 py-1 bg-brand-green text-white rounded-full">Offline</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-blue to-brand-blue-dark flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <h3 className="font-bold text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
                <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xs text-gray-500">Role</div>
                    <div className="text-sm font-semibold text-gray-900 capitalize">{user.role}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Joined</div>
                    <div className="text-sm font-semibold text-gray-900">{user.joinedDate}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Link to="/materials" className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors group">
                  <div className="flex items-center gap-3">
                    <BookOpen size={18} className="text-brand-blue" />
                    <span className="text-sm font-medium">Browse Materials</span>
                  </div>
                  <ChevronRight size={16} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                </Link>

                {user.role === 'teacher' && (
                  <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors group">
                    <div className="flex items-center gap-3">
                      <Upload size={18} className="text-brand-orange" />
                      <span className="text-sm font-medium">Upload Material</span>
                    </div>
                    <ChevronRight size={16} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}

                <Link to="/contact" className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors group">
                  <div className="flex items-center gap-3">
                    <MessageSquare size={18} className="text-brand-green" />
                    <span className="text-sm font-medium">Contact Support</span>
                  </div>
                  <ChevronRight size={16} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Announcement */}
            <div className="bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">📢 New Batch Alert!</h3>
              <p className="text-sm text-white/90 mb-4">
                Python Programming batch starts on November 1st. Limited seats available.
              </p>
              <button className="bg-white text-brand-orange font-semibold text-sm px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
