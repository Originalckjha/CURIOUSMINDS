// User roles in the system
export type UserRole = 'student' | 'teacher' | 'admin';

// Departments offered by the institute
export type Department = 'k12' | 'english' | 'programming';

// Class levels for K-12
export type ClassLevel = '1-5' | '6-8' | '9-10' | '11-12';

// Teaching modes available
export type TeachingMode = 'offline' | 'online' | 'home-tuition';

// User data structure
export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // In production, this should be hashed!
  role: UserRole;
  department?: Department;
  classLevel?: ClassLevel;
  joinedDate: string;
  avatar?: string;
}

// Study material structure
export interface StudyMaterial {
  id: string;
  title: string;
  description: string;
  department: Department;
  classLevel?: ClassLevel;
  subject: string;
  type: 'pdf' | 'video' | 'document' | 'practice';
  fileUrl: string;
  uploadedBy: string;
  uploadDate: string;
  downloads: number;
  isFree: boolean;
}

// Course structure
export interface Course {
  id: string;
  name: string;
  department: Department;
  description: string;
  duration: string;
  mode: TeachingMode[];
  fee: number;
  instructor: string;
}

// Auth context type
export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Omit<User, 'id' | 'joinedDate'>) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}
