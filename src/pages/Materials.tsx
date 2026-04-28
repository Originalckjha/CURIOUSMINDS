import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  Download,
  FileText,
  GraduationCap,
  MessageSquare,
  Code2,
  Lock,
  BookMarked,
  Filter,
  X
} from 'lucide-react';
import { studyMaterials } from '../data/materials';
import { Department } from '../types';
import { useAuth } from '../context/AuthContext';

const deptStyles = {
  k12: {
    bar:      'bg-brand-blue',
    iconBg:   'bg-blue-100',
    iconText: 'text-brand-blue',
    badge:    'text-brand-blue bg-blue-100',
    download: 'text-brand-blue',
  },
  english: {
    bar:      'bg-brand-orange',
    iconBg:   'bg-orange-100',
    iconText: 'text-brand-orange',
    badge:    'text-brand-orange bg-orange-100',
    download: 'text-brand-orange',
  },
  programming: {
    bar:      'bg-brand-green',
    iconBg:   'bg-green-100',
    iconText: 'text-brand-green',
    badge:    'text-brand-green bg-green-100',
    download: 'text-brand-green',
  },
} as const;

type FilterKey = Department | 'all';

interface FilterOption {
  key: FilterKey;
  name: string;
  icon: React.ElementType;
  selectedBg: string;
  selectedBorder: string;
  selectedIconText: string;
  selectedBadge: string;
}

const filterOptions: FilterOption[] = [
  { key: 'all',         name: 'All Departments',         icon: BookMarked,    selectedBg: 'bg-gray-50',   selectedBorder: 'border-gray-400',     selectedIconText: 'text-gray-700',     selectedBadge: 'bg-gray-100 text-gray-700'       },
  { key: 'k12',         name: 'K-12 Academy',            icon: GraduationCap, selectedBg: 'bg-blue-50',   selectedBorder: 'border-brand-blue',   selectedIconText: 'text-brand-blue',   selectedBadge: 'bg-blue-100 text-brand-blue'     },
  { key: 'english',     name: 'English & Communication', icon: MessageSquare, selectedBg: 'bg-orange-50', selectedBorder: 'border-brand-orange', selectedIconText: 'text-brand-orange', selectedBadge: 'bg-orange-100 text-brand-orange' },
  { key: 'programming', name: 'Programming & Coding',    icon: Code2,         selectedBg: 'bg-green-50',  selectedBorder: 'border-brand-green',  selectedIconText: 'text-brand-green',  selectedBadge: 'bg-green-100 text-brand-green'   },
];

const departmentLabels: Record<Department, string> = {
  k12:         'K-12 Academy',
  english:     'English & Communication',
  programming: 'Programming & Coding',
};

const Materials = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<FilterKey>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredMaterials = useMemo(() => {
    return studyMaterials.filter((material) => {
      const matchesSearch =
        material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        material.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        material.subject.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment =
        selectedDepartment === 'all' || material.department === selectedDepartment;
      return matchesSearch && matchesDepartment;
    });
  }, [searchTerm, selectedDepartment]);

  const departmentCounts: Record<FilterKey, number> = {
    all:         studyMaterials.length,
    k12:         studyMaterials.filter(m => m.department === 'k12').length,
    english:     studyMaterials.filter(m => m.department === 'english').length,
    programming: studyMaterials.filter(m => m.department === 'programming').length,
  };

  const handleDownload = (e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault();
      navigate('/login');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 animate-fade-in">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Free Study Materials
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access comprehensive learning resources across all our departments.
            Download PDFs, practice papers, and study guides.
          </p>

          {!isAuthenticated && (
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-lg text-sm text-orange-800">
              <Lock size={14} />
              <span>
                <Link to="/login" className="font-semibold hover:underline">Login</Link>
                {' '}or{' '}
                <Link to="/register" className="font-semibold hover:underline">Register</Link>
                {' '}to download materials
              </span>
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6 border border-gray-100">
          <div className="flex gap-3">
            <div className="flex-grow relative">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search materials by title, subject, or topic..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`md:hidden px-4 py-3 rounded-lg border transition-colors ${
                showFilters
                  ? 'bg-brand-blue text-white border-brand-blue'
                  : 'bg-white text-gray-700 border-gray-200'
              }`}
            >
              <Filter size={20} />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filter Sidebar */}
          <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 lg:sticky lg:top-24">
              <h2 className="font-bold text-gray-900 mb-4">Departments</h2>
              <div className="space-y-2">
                {filterOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = selectedDepartment === opt.key;
                  return (
                    <button
                      key={opt.key}
                      onClick={() => setSelectedDepartment(opt.key)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all border-2 ${
                        isSelected
                          ? `${opt.selectedBg} ${opt.selectedBorder}`
                          : 'border-transparent hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          size={18}
                          className={isSelected ? opt.selectedIconText : 'text-gray-500'}
                        />
                        <span className={`text-sm font-medium ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                          {opt.name}
                        </span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        isSelected ? opt.selectedBadge : 'bg-gray-100 text-gray-600'
                      }`}>
                        {departmentCounts[opt.key]}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-brand-blue text-sm mb-2">💡 Did You Know?</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  All our study materials are created by experienced faculty and updated regularly.
                  New materials are added every week!
                </p>
              </div>
            </div>
          </div>

          {/* Materials Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredMaterials.length}</span> materials
              </p>
            </div>

            {filteredMaterials.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-sm p-12 text-center border border-gray-100">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Search size={28} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No materials found</h3>
                <p className="text-gray-600">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {filteredMaterials.map((material) => {
                  const ds = deptStyles[material.department];
                  return (
                    <div
                      key={material.id}
                      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
                    >
                      <div className={`h-2 ${ds.bar}`}></div>
                      <div className="p-5">
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${ds.iconBg}`}>
                            <FileText className={ds.iconText} size={20} />
                          </div>
                          <div className="flex-grow min-w-0">
                            <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded mb-1 ${ds.badge}`}>
                              {departmentLabels[material.department]}
                            </span>
                            <h3 className="font-semibold text-gray-900 leading-tight">
                              {material.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                          {material.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
                          <span className="flex items-center gap-1">
                            <BookMarked size={12} />
                            {material.subject}
                          </span>
                          <span className="flex items-center gap-1">
                            <Download size={12} />
                            {material.downloads}
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <div className="text-xs text-gray-500">By {material.uploadedBy}</div>
                          <a
                            href={material.fileUrl}
                            download
                            className={`inline-flex items-center gap-1.5 text-sm font-medium hover:underline ${ds.download}`}
                            onClick={handleDownload}
                          >
                            <Download size={14} />
                            {isAuthenticated ? 'Download' : 'Login to Download'}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materials;
