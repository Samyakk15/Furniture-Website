AI RULES & PROJECT CONSTITUTION

Project: Furniture Website (Dream Modular Furnitures – Rebuild v1)

Purpose:
This document defines non-negotiable technical decisions, coding standards, and constraints for all AI-assisted development on this project.
It exists to prevent regressions, architectural drift, and accidental breaking changes.

1. 📦 TECH STACK (NON-NEGOTIABLE)
Core Stack

Framework: Next.js (App Router)

Language: TypeScript (strict mode)

Styling: Tailwind CSS

Backend: Next.js API Routes

Database & Auth: Supabase

Hosting: Vercel (Frontend), Supabase Cloud (Backend)

⛔️ DO NOT

Replace Next.js with another framework

Convert to Pages Router

Use JavaScript instead of TypeScript

Introduce another backend (Firebase, Express, etc.)

2. 🧱 PROJECT STRUCTURE (STRICT)

AI must respect and extend, not restructure.

src/
├── app/
│   ├── (public)/
│   ├── (admin)/            // future scope only
│   ├── api/
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   ├── ui/
│   ├── products/
│   ├── gallery/
│   └── forms/
│
├── lib/
│   ├── supabase/
│   ├── validators/
│   └── utils.ts
│
├── store/
├── hooks/
├── types/
└── public/


⛔️ DO NOT

Move files across folders without explanation

Flatten the structure

Create duplicate component directories

3. 🧠 ARCHITECTURAL PRINCIPLES
Separation of Concerns

Pages: layout & data composition only

Components: reusable UI logic

lib/: external services, helpers, clients

api/: server-side logic only

⛔️ DO NOT

Put database logic inside UI components

Call Supabase directly from client pages without abstraction

Mix UI and business logic in the same file

4. ✍️ CODING STANDARDS (MANDATORY)
TypeScript Rules

All components must be typed

No any

Prefer explicit interfaces in /types

React Rules

Functional components only

Use Server Components by default

Use "use client" only when required

Example
interface Product {
  id: string
  name: string
  category: string
}


⛔️ DO NOT

Ignore TypeScript errors

Silence errors with as any

Use inline anonymous types everywhere

5. 🧩 COMPONENT RULES
UI Components (components/ui)

Must be pure & reusable

No business logic

No Supabase calls

Page Components

Compose sections

Fetch data

Pass props down

⛔️ DO NOT

Hardcode content that should come from data

Duplicate UI components instead of reusing

6. 🎨 DESIGN & UI STYLE

This is NOT a design-heavy project.

Design Rules

Low-to-medium visual complexity

Clean layout

Image-first sections

Neutral colors

Accessibility-first

⛔️ DO NOT

Add flashy animations without purpose

Introduce heavy UI libraries

Over-style components

7. 🧪 DATA & DATABASE RULES (CRITICAL)
Supabase Rules

Database schema is authoritative

Tables: products, categories, enquiries, gallery

⛔️ DO NOT

Change table structure without migration

Rename columns casually

Hardcode database IDs

⛔️ ABSOLUTE RULE

Never modify authentication or database schema unless explicitly instructed.

8. 🔐 AUTHENTICATION (LOCKED)

Supabase Auth is reserved for future admin panel

Public site is unauthenticated

⛔️ DO NOT

Add login/signup flows

Add auth guards

Modify auth providers

9. 🌐 API ROUTES RULES

All mutations go through /api

Validate inputs using Zod

Return consistent JSON responses

Example:

{ success: true, data: ... }


⛔️ DO NOT

Expose database keys

Skip validation

Perform writes from client-side directly

10. 🧪 ERROR HANDLING & LOGGING

Handle empty states

Handle loading states

Fail gracefully

⛔️ DO NOT

Console.log sensitive data

Ignore failed API responses

11. 🚫 EXPLICIT “DO NOT” LIST (READ CAREFULLY)

⛔️ Don’t make changes without understanding impacted files
⛔️ Don’t refactor architecture without permission
⛔️ Don’t modify authentication system
⛔️ Don’t change database schema without migrations
⛔️ Don’t introduce new libraries without justification
⛔️ Don’t override previous decisions

12. 🧭 WORKFLOW EXPECTATIONS FOR AI

Before making changes, AI must:

Explain what it plans to change

Identify affected files

Justify the change

Ask for confirmation if destructive

13. 📈 FUTURE SCOPE (AWARENESS ONLY)

Allowed later, not now:

Admin dashboard

Analytics

AI recommendations

WhatsApp chatbot

⛔️ DO NOT IMPLEMENT FUTURE SCOPE WITHOUT EXPLICIT REQUEST

14. 📝 DOCUMENT MAINTENANCE

This file is a living document.

Update when:

Architecture decisions change

New patterns emerge

Mistakes are discovered

If conflict arises, this document wins.

15. 📌 FINAL DIRECTIVE TO AI AGENTS

Optimize for clarity, maintainability, and alignment, not cleverness.
When uncertain — ask, don’t assume.