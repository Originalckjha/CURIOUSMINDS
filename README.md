# 🎓 Curious Minds Educational Institute Website

A modern, fully responsive educational institute website built with **React + TypeScript + Vite + Tailwind CSS**. Features student/teacher login system, free study materials, and complete brand identity for a multi-department coaching center.

![Tech Stack](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-cyan) ![Vite](https://img.shields.io/badge/Vite-5.3-purple)

## ✨ Features

### 🏛️ Three Departments
- **K-12 Academy** (Blue theme) - Classes 1-12 across all subjects
- **English & Communication** (Orange theme) - Spoken English, IELTS, Interview prep
- **Programming & Coding** (Green theme) - Python, Web Dev, DSA

### 📚 Three Teaching Modes
- Offline Classes
- Online Classes
- Home Tuition

### 🔐 Authentication System
- Separate login for **Students** and **Teachers**
- User registration with department selection
- Class level selection for K-12 students
- Protected routes for dashboard
- LocalStorage-based auth (easy to upgrade to backend)

### 📖 Study Materials
- 12+ sample materials across all departments
- Search functionality
- Filter by department
- Download support
- Material analytics (downloads, upload date)

### 🎨 Pages Included
- **Home** - Hero, departments, teaching modes, CTA
- **Login/Register** - With role-based authentication
- **Dashboard** - Personalized for students/teachers
- **Materials** - Search, filter, and download study resources
- **About** - Mission, vision, values, story
- **Contact** - Form, contact info, FAQ
- **404** - Custom not-found page

## 🚀 Quick Start

### Prerequisites
Make sure you have these installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

### Installation Steps

1. **Clone or Download this repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/curious-minds-institute.git
   cd curious-minds-institute
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will download all required packages (~200MB).

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The website will open at `http://localhost:3000`

4. **Build for production** (when ready to deploy)
   ```bash
   npm run build
   ```
   Production files will be in the `dist/` folder.

## 🔑 Demo Credentials

Use these credentials to test the login system:

### Student Account
- **Email:** `student@curiousminds.edu`
- **Password:** `student123`

### Teacher Account
- **Email:** `teacher@curiousminds.edu`
- **Password:** `teacher123`

### Admin Account
- **Email:** `admin@curiousminds.edu`
- **Password:** `admin123`

> 💡 **Tip:** On the login page, click "Use Student Demo" or "Use Teacher Demo" to auto-fill credentials.

## 📁 Project Structure

```
curious-minds-institute/
├── public/
│   ├── favicon.svg              # Brand favicon
│   └── materials/               # Place your PDF files here
├── src/
│   ├── components/
│   │   ├── Footer.tsx           # Footer with contact info
│   │   ├── Logo.tsx             # Reusable logo component
│   │   ├── Navbar.tsx           # Navigation with auth state
│   │   └── ProtectedRoute.tsx   # Route protection wrapper
│   ├── context/
│   │   └── AuthContext.tsx      # Authentication context
│   ├── data/
│   │   └── materials.ts         # Sample study materials data
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Materials.tsx
│   │   ├── NotFound.tsx
│   │   └── Register.tsx
│   ├── types/
│   │   └── index.ts             # TypeScript type definitions
│   ├── App.tsx                  # Main app with routing
│   ├── index.css                # Global styles & Tailwind
│   └── main.tsx                 # Entry point
├── index.html
├── package.json
├── tailwind.config.js           # Brand colors configured
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Brand Colors

The website uses a carefully designed color palette:

| Color | Hex | Usage |
|-------|-----|-------|
| Trust Blue | `#2563EB` | Primary brand, K-12 Academy |
| Curiosity Orange | `#F97316` | Accent, English Department |
| Tech Green | `#10B981` | Success, Programming Department |
| Neutral Gray | `#64748B` | Text, borders |

## 📤 Uploading to GitHub

### Step 1: Create a GitHub Account (if you don't have one)
Sign up at [github.com](https://github.com)

### Step 2: Install Git on your computer
Download from [git-scm.com](https://git-scm.com/)

### Step 3: Configure Git (one-time setup)
```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### Step 4: Create a new repository on GitHub
1. Click the **"+"** icon → **"New repository"**
2. Name it: `curious-minds-institute`
3. Don't initialize with README (we already have one)
4. Click **"Create repository"**

### Step 5: Upload your project
Open terminal in your project folder and run:

```bash
# Initialize Git
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: Curious Minds Institute website"

# Connect to GitHub (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/curious-minds-institute.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 6: Future Updates
Whenever you make changes:
```bash
git add .
git commit -m "Description of your changes"
git push
```

## 🌐 Deploying Your Website (Free Hosting)

### Option 1: Vercel (Recommended - Easiest)
1. Visit [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Import Project"**
4. Select your repository
5. Click **"Deploy"** - Done! ✨

### Option 2: Netlify
1. Visit [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click **"Add new site" → "Import an existing project"**
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click **"Deploy"**

### Option 3: GitHub Pages
1. Run `npm run build`
2. Push the `dist` folder to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 🛠️ Customization Guide

### Change Institute Name
Edit these files:
- `src/components/Logo.tsx` - Change "Curious Minds" text
- `index.html` - Change `<title>`
- `package.json` - Change `name`
- `README.md` - Update accordingly

### Update Contact Information
Edit `src/components/Footer.tsx` and `src/pages/Contact.tsx`:
- Phone numbers
- Email addresses
- Physical address
- Social media links

### Add Your Own Study Materials
1. Place PDF files in `public/materials/` folder
2. Edit `src/data/materials.ts` to add new entries:
```typescript
{
  id: 'mat-013',
  title: 'Your Material Title',
  description: 'Description here',
  department: 'k12', // or 'english' or 'programming'
  classLevel: '9-10',
  subject: 'Mathematics',
  type: 'pdf',
  fileUrl: '/materials/your-file.pdf',
  uploadedBy: 'Teacher Name',
  uploadDate: '2024-10-30',
  downloads: 0,
  isFree: true
}
```

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  brand: {
    blue: '#YOUR_BLUE_HEX',
    orange: '#YOUR_ORANGE_HEX',
    green: '#YOUR_GREEN_HEX',
  }
}
```

### Add New Pages
1. Create new file in `src/pages/YourPage.tsx`
2. Import and add route in `src/App.tsx`:
```tsx
import YourPage from './pages/YourPage';
// ...
<Route path="/your-page" element={<YourPage />} />
```

## 🔐 Production Security Notes

⚠️ **Important:** This is a frontend-only project with localStorage-based authentication. For production use, you should:

1. **Add a real backend** (Node.js, Python, etc.)
2. **Hash passwords** using bcrypt or similar
3. **Use JWT tokens** for authentication
4. **Add HTTPS** (automatic with Vercel/Netlify)
5. **Implement rate limiting** for login attempts
6. **Add email verification**
7. **Use a proper database** (PostgreSQL, MongoDB)

### Recommended Backend Options
- **Firebase** (easiest, free tier available)
- **Supabase** (open-source Firebase alternative)
- **Node.js + Express + MongoDB**
- **Next.js** (full-stack React framework)

## 🐛 Troubleshooting

### "npm install" fails
- Make sure Node.js is v18 or higher: `node --version`
- Try clearing cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then run `npm install` again

### "Port 3000 is already in use"
Change the port in `vite.config.ts`:
```ts
server: { port: 3001 }
```

### Login not working
- Check browser console for errors
- Clear localStorage: `localStorage.clear()` in console
- Make sure you're using the correct demo credentials

### Build errors
- Run `npm run lint` to check for TypeScript errors
- Make sure all imports are correct

## 📚 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

## 📝 License

This project is open source and available for educational use.

## 🤝 Support

For questions or support:
- 📧 Email: info@curiousminds.edu
- 📞 Phone: +91 XXXX XXXXXX
- 💬 WhatsApp: +91 XXXX XXXXXX

---

**Built with ❤️ for Curious Minds Educational Institute**

🎯 *Learn Anywhere, Grow Everywhere*
