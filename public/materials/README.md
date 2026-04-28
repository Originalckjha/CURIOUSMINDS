# Study Materials Folder

Place your PDF study materials in this folder. They will be accessible from the website's Materials page.

## How to Add New Materials

1. Drop your PDF files into this folder (e.g., `class10-math-notes.pdf`)
2. Edit `/src/data/materials.ts` to add an entry referencing your file:

```typescript
{
  id: 'mat-013',
  title: 'Class 10 Math Notes',
  description: 'Complete notes for Class 10 Mathematics',
  department: 'k12',
  classLevel: '9-10',
  subject: 'Mathematics',
  type: 'pdf',
  fileUrl: '/materials/class10-math-notes.pdf', // <- Reference your file
  uploadedBy: 'Teacher Name',
  uploadDate: '2024-10-30',
  downloads: 0,
  isFree: true
}
```

## File Naming Convention

Use lowercase with hyphens for spaces:
- ✅ `class10-physics-electromagnetic.pdf`
- ✅ `python-beginner-guide.pdf`
- ❌ `Class 10 Physics.pdf` (avoid spaces)
- ❌ `MATH_NOTES.PDF` (avoid uppercase)

## Recommended Folder Structure

You can organize materials by department:
```
materials/
├── k12/
│   ├── class1-5/
│   ├── class6-8/
│   ├── class9-10/
│   └── class11-12/
├── english/
└── programming/
```

Just remember to update the `fileUrl` in materials.ts accordingly!
