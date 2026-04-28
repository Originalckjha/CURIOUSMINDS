import { StudyMaterial, Course } from '../types';

// Sample study materials - You can add your own PDFs in public/materials/
export const studyMaterials: StudyMaterial[] = [
  // K-12 Academy Materials
  {
    id: 'mat-001',
    title: 'Class 10 Mathematics - Algebra Basics',
    description: 'Complete guide to algebraic expressions, equations, and identities for Class 10 students.',
    department: 'k12',
    classLevel: '9-10',
    subject: 'Mathematics',
    type: 'pdf',
    fileUrl: '/materials/sample-math.pdf',
    uploadedBy: 'Mr. Sharma',
    uploadDate: '2024-08-15',
    downloads: 234,
    isFree: true
  },
  {
    id: 'mat-002',
    title: 'Class 12 Physics - Electromagnetic Induction',
    description: 'Detailed notes covering Faraday\'s laws, Lenz\'s law, and self-inductance with solved examples.',
    department: 'k12',
    classLevel: '11-12',
    subject: 'Physics',
    type: 'pdf',
    fileUrl: '/materials/sample-physics.pdf',
    uploadedBy: 'Dr. Patel',
    uploadDate: '2024-09-01',
    downloads: 189,
    isFree: true
  },
  {
    id: 'mat-003',
    title: 'Class 8 Science - Cell Structure',
    description: 'Introduction to cells, organelles, and their functions with diagrams.',
    department: 'k12',
    classLevel: '6-8',
    subject: 'Science',
    type: 'pdf',
    fileUrl: '/materials/sample-science.pdf',
    uploadedBy: 'Ms. Verma',
    uploadDate: '2024-07-20',
    downloads: 156,
    isFree: true
  },
  {
    id: 'mat-004',
    title: 'Class 5 English Grammar Workbook',
    description: 'Practice exercises on tenses, prepositions, and sentence construction.',
    department: 'k12',
    classLevel: '1-5',
    subject: 'English',
    type: 'practice',
    fileUrl: '/materials/sample-grammar.pdf',
    uploadedBy: 'Mrs. Khan',
    uploadDate: '2024-06-10',
    downloads: 312,
    isFree: true
  },

  // English & Communication Materials
  {
    id: 'mat-005',
    title: 'Spoken English - Beginner Level',
    description: 'Learn basic conversational English with daily practice exercises and audio guides.',
    department: 'english',
    subject: 'Spoken English',
    type: 'pdf',
    fileUrl: '/materials/sample-english.pdf',
    uploadedBy: 'Ms. Anjali',
    uploadDate: '2024-08-05',
    downloads: 567,
    isFree: true
  },
  {
    id: 'mat-006',
    title: 'IELTS Speaking Practice Guide',
    description: 'Sample questions, model answers, and tips for IELTS Speaking test preparation.',
    department: 'english',
    subject: 'IELTS',
    type: 'pdf',
    fileUrl: '/materials/sample-ielts.pdf',
    uploadedBy: 'Mr. David',
    uploadDate: '2024-09-10',
    downloads: 423,
    isFree: true
  },
  {
    id: 'mat-007',
    title: 'Interview Preparation Handbook',
    description: 'Common HR questions, technical interview tips, and confidence-building exercises.',
    department: 'english',
    subject: 'Interview Skills',
    type: 'document',
    fileUrl: '/materials/sample-interview.pdf',
    uploadedBy: 'Ms. Priya',
    uploadDate: '2024-08-20',
    downloads: 678,
    isFree: true
  },
  {
    id: 'mat-008',
    title: 'Public Speaking Essentials',
    description: 'Overcome stage fear, structure your speech, and engage your audience effectively.',
    department: 'english',
    subject: 'Public Speaking',
    type: 'pdf',
    fileUrl: '/materials/sample-speaking.pdf',
    uploadedBy: 'Mr. Rajesh',
    uploadDate: '2024-07-15',
    downloads: 289,
    isFree: true
  },

  // Programming & Coding Materials
  {
    id: 'mat-009',
    title: 'Python for Beginners - Complete Guide',
    description: 'Start your Python journey with variables, loops, functions, and your first project.',
    department: 'programming',
    subject: 'Python',
    type: 'pdf',
    fileUrl: '/materials/sample-python.pdf',
    uploadedBy: 'Mr. Arjun',
    uploadDate: '2024-09-05',
    downloads: 892,
    isFree: true
  },
  {
    id: 'mat-010',
    title: 'HTML & CSS Fundamentals',
    description: 'Build your first website with semantic HTML and modern CSS techniques.',
    department: 'programming',
    subject: 'Web Development',
    type: 'pdf',
    fileUrl: '/materials/sample-html.pdf',
    uploadedBy: 'Ms. Neha',
    uploadDate: '2024-08-12',
    downloads: 745,
    isFree: true
  },
  {
    id: 'mat-011',
    title: 'JavaScript ES6+ Cheatsheet',
    description: 'Quick reference for modern JavaScript features: arrow functions, destructuring, async/await.',
    department: 'programming',
    subject: 'JavaScript',
    type: 'document',
    fileUrl: '/materials/sample-js.pdf',
    uploadedBy: 'Mr. Vikram',
    uploadDate: '2024-09-15',
    downloads: 1024,
    isFree: true
  },
  {
    id: 'mat-012',
    title: 'Data Structures & Algorithms Notes',
    description: 'Arrays, linked lists, trees, sorting algorithms with code examples in C++ and Python.',
    department: 'programming',
    subject: 'DSA',
    type: 'pdf',
    fileUrl: '/materials/sample-dsa.pdf',
    uploadedBy: 'Dr. Singh',
    uploadDate: '2024-07-25',
    downloads: 1156,
    isFree: true
  }
];

// Sample courses offered
export const courses: Course[] = [
  // K-12 Courses
  {
    id: 'course-001',
    name: 'Foundation Course (Class 1-5)',
    department: 'k12',
    description: 'Build strong fundamentals in Math, Science, English, and Social Studies.',
    duration: '1 Year',
    mode: ['offline', 'home-tuition'],
    fee: 25000,
    instructor: 'Multiple Faculty'
  },
  {
    id: 'course-002',
    name: 'Middle School Excellence (Class 6-8)',
    department: 'k12',
    description: 'Comprehensive coverage of all subjects with focus on conceptual clarity.',
    duration: '1 Year',
    mode: ['offline', 'online', 'home-tuition'],
    fee: 35000,
    instructor: 'Subject Experts'
  },
  {
    id: 'course-003',
    name: 'Board Exam Preparation (Class 9-10)',
    department: 'k12',
    description: 'Intensive preparation for board exams with regular tests and doubt sessions.',
    duration: '1 Year',
    mode: ['offline', 'online', 'home-tuition'],
    fee: 45000,
    instructor: 'Senior Faculty'
  },
  {
    id: 'course-004',
    name: 'Senior Secondary (Class 11-12)',
    department: 'k12',
    description: 'Specialized coaching for Science, Commerce, and Humanities streams.',
    duration: '1 Year',
    mode: ['offline', 'online'],
    fee: 55000,
    instructor: 'PhD Faculty'
  },

  // English & Communication Courses
  {
    id: 'course-005',
    name: 'Spoken English - Basic to Advanced',
    department: 'english',
    description: 'Master conversational English from beginner to fluent speaker.',
    duration: '6 Months',
    mode: ['offline', 'online', 'home-tuition'],
    fee: 12000,
    instructor: 'Ms. Anjali Sharma'
  },
  {
    id: 'course-006',
    name: 'IELTS Preparation Course',
    department: 'english',
    description: 'Achieve your target band score with structured training and mock tests.',
    duration: '3 Months',
    mode: ['offline', 'online'],
    fee: 18000,
    instructor: 'Certified IELTS Trainer'
  },
  {
    id: 'course-007',
    name: 'Personality Development & Interview Skills',
    department: 'english',
    description: 'Boost confidence, improve communication, and ace interviews.',
    duration: '3 Months',
    mode: ['offline', 'online'],
    fee: 15000,
    instructor: 'Industry Experts'
  },

  // Programming Courses
  {
    id: 'course-008',
    name: 'Python Programming - Beginner to Advanced',
    department: 'programming',
    description: 'Learn Python with hands-on projects and real-world applications.',
    duration: '4 Months',
    mode: ['offline', 'online'],
    fee: 20000,
    instructor: 'Mr. Arjun Mehta'
  },
  {
    id: 'course-009',
    name: 'Full Stack Web Development',
    department: 'programming',
    description: 'Build modern websites with HTML, CSS, JavaScript, React, and Node.js.',
    duration: '6 Months',
    mode: ['offline', 'online'],
    fee: 35000,
    instructor: 'Senior Developer'
  },
  {
    id: 'course-010',
    name: 'Data Structures & Algorithms',
    department: 'programming',
    description: 'Master DSA for coding interviews at top tech companies.',
    duration: '4 Months',
    mode: ['offline', 'online'],
    fee: 25000,
    instructor: 'Dr. Singh'
  }
];
