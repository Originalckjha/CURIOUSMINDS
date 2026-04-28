import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType } from '../types';

// Demo users for testing - In production, this should come from a backend API
const DEMO_USERS: User[] = [
  {
    id: '1',
    name: 'Demo Student',
    email: 'student@curiousminds.edu',
    password: 'student123',
    role: 'student',
    department: 'k12',
    classLevel: '9-10',
    joinedDate: '2024-01-15'
  },
  {
    id: '2',
    name: 'Demo Teacher',
    email: 'teacher@curiousminds.edu',
    password: 'teacher123',
    role: 'teacher',
    department: 'programming',
    joinedDate: '2023-06-01'
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@curiousminds.edu',
    password: 'admin123',
    role: 'admin',
    joinedDate: '2023-01-01'
  }
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize: Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('curious_minds_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('curious_minds_user');
      }
    }

    // Initialize demo users in localStorage if not present
    const storedUsers = localStorage.getItem('curious_minds_users');
    if (!storedUsers) {
      localStorage.setItem('curious_minds_users', JSON.stringify(DEMO_USERS));
    }

    setIsLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const storedUsers = localStorage.getItem('curious_minds_users');
      const users: User[] = storedUsers ? JSON.parse(storedUsers) : DEMO_USERS;

      const foundUser = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
      );

      if (foundUser) {
        setUser(foundUser);
        localStorage.setItem('curious_minds_user', JSON.stringify(foundUser));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  // Register function
  const register = async (userData: Omit<User, 'id' | 'joinedDate'>): Promise<boolean> => {
    try {
      const storedUsers = localStorage.getItem('curious_minds_users');
      const users: User[] = storedUsers ? JSON.parse(storedUsers) : DEMO_USERS;

      // Check if user already exists
      const existingUser = users.find(
        (u) => u.email.toLowerCase() === userData.email.toLowerCase()
      );

      if (existingUser) {
        return false;
      }

      // Create new user
      const newUser: User = {
        ...userData,
        id: Date.now().toString(),
        joinedDate: new Date().toISOString().split('T')[0]
      };

      users.push(newUser);
      localStorage.setItem('curious_minds_users', JSON.stringify(users));

      // Auto login after registration
      setUser(newUser);
      localStorage.setItem('curious_minds_user', JSON.stringify(newUser));

      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('curious_minds_user');
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
