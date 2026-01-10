# PRODUCT REQUIREMENTS DOCUMENT (PRD)

**Furniture Website – Rebuild v1**  
**Name:** Dream Modular Furniture

---

## 0. Version & Ownership

- **Document Version:** v1.0
- **Date:** 10 Jan 2026
- **PRD Owner:** Samyak Meshram (Product & Engineering)
- **Stakeholders / Reviewers:**
  - Client (Dream Modular Furnitures)
  - Faculty / Project Guide
  - Future Developer / AI Agent

---

## 1. Executive One-Pager

### TL;DR (≤5 bullets)

- **Problem:** The existing furniture website lacks modern UX, scalability, and structured product discovery.
- **Goal:** Rebuild the entire website as a modern, fast, SEO-friendly online catalog and brand presence platform.
- **Scope:** Public website (Home, About, Products, Gallery, Contact); Admin panel excluded (future scope).
- **Success (initial):** Website live, fully navigable, responsive, and content-complete.
- **Target Launch:** To be decided (academic + client-aligned timeline).

### Plain-Language Summary

This project rebuilds the existing furniture business website into a modern web application that clearly showcases products, communicates brand credibility, and enables customers to enquire easily. The focus is on clarity, performance, and future extensibility rather than e-commerce at this stage.

---

## 2. Overview & Context

### Problem Statement (Why Now?)

The current website (dreammodularfurnitures.com) functions primarily as a static presence and does not fully support:

- Clear product categorization
- Modern UI/UX expectations
- Mobile-first responsiveness
- Scalable content management
- Future feature expansion (admin panel, AI, analytics)

As customers increasingly research furniture online before contacting vendors, an outdated or unclear website directly impacts brand trust and enquiry conversion.

### Strategic Alignment

- **Business Objective:** Strengthen brand presence and act as a digital catalog.
- **User Need:** Quickly understand offerings, view previous work, and contact the business.
- **Technical Objective:** Build a maintainable, modern full-stack application using industry-standard tools.

### Competitive / Landscape Snapshot

Competitors increasingly use:

- Image-heavy galleries
- Clear product sections
- Fast, mobile-friendly layouts

The rebuild aligns the brand with modern expectations without full e-commerce complexity.

---

## 3. Customer Insights & Evidence

### Primary Source (Direct)

Existing website structure and content: https://dreammodularfurnitures.com/

**Observed issues:**
- Dense content
- Limited visual hierarchy
- Navigation not optimized for discovery

### Secondary Source (Industry Pattern)

Furniture buyers typically:
- Browse galleries before contacting
- Compare styles visually
- Expect fast load times and mobile usability

⚠️ **Note:** No formal user interviews or analytics are available at this stage.

---

## 4. Goals & Non-Goals

### Goals

✅ Present a professional, modern brand image  
✅ Enable easy product discovery  
✅ Encourage customer enquiries  
✅ Ensure SEO-friendly and fast performance  
✅ Build a foundation for future admin & AI features

### Non-Goals (Explicit)

❌ Online payments / checkout  
❌ Inventory or order management  
❌ Admin dashboard (future scope)  
❌ Mobile app

---

## 5. Alternatives Considered

| Option | Reason Rejected |
|--------|----------------|
| Simple WordPress theme | Limited customization, weaker scalability |
| Full e-commerce build | Out of scope, unnecessary complexity |
| Static HTML site | Poor maintainability, not future-ready |

---

## 6. User Personas & Use Cases

### Primary Persona

**Prospective Customer**
- **Role:** Homeowner / Office owner
- **Goal:** Explore furniture options and contact vendor
- **Pain Point:** Unclear pricing, limited visuals, outdated UI

### Admin Persona

**Business Owner** (Future scope only)

⚠️ No formal personas validated via research.

---

## 7. Requirements

### 7.1 Functional Requirements

- **FR-1:** The system shall display a Home page with brand overview and featured products.
- **FR-2:** The system shall provide a Products page with categorized product listings.
- **FR-3:** The system shall allow users to view detailed information for each product.
- **FR-4:** The system shall display a Gallery of completed projects.
- **FR-5:** The system shall provide a Contact form for enquiries.
- **FR-6:** The system shall be fully responsive across desktop and mobile devices.

### 7.2 Non-Functional Requirements

- **Performance:** Page load < 3 seconds on standard broadband
- **SEO:** Indexable pages with metadata
- **Accessibility:** WCAG 2.1 AA baseline
- **Security:** Input validation on forms
- **Maintainability:** Modular component structure

### 7.3 Acceptance Criteria (Sample)

**FR-5 Contact Form**

```gherkin
Given a user is on the Contact page  
When the user submits valid details  
Then the enquiry is stored successfully  
And a confirmation message is shown
```

---

## 8. UX & Design Considerations

- Low-fidelity wireframes approved before development
- Clear visual hierarchy
- Large image placeholders for furniture visuals
- Keyboard-accessible navigation
- Proper contrast ratios

---

## 9. Technical Notes

### Architecture

- **Frontend:** Next.js (App Router)
- **Backend:** Next.js API Routes
- **Database & Storage:** Supabase
- **Hosting:** Vercel + Supabase Cloud

### Dependencies

- Supabase Auth (future)
- Supabase Storage (images)
- No third-party payment APIs

---

## 10. Metrics & Success Criteria

⚠️ Metrics not finalized.

**Proposed (Future):**
- Number of enquiries/month
- Page load performance
- Gallery engagement

**Ownership:** Business Owner / Developer

---

## 11. Risks & Mitigations

| Risk | Severity | Mitigation |
|------|----------|------------|
| No user research | Medium | Iterative improvements post-launch |
| Scope creep | Medium | Strict non-goals |
| Image quality | Low | Use optimized assets |

---

## 12. Rollout Plan

1. Development on staging
2. Client review
3. Content population
4. Production deployment

No feature flags required (single release).

---

## 13. Decision Log

| Decision | Date | Owner |
|----------|------|-------|
| Rebuild entire site | Jan 2026 | PM |
| Exclude admin panel | Jan 2026 | PM |

---

## 14. Success Story Narrative

> "Within weeks of launch, customers browsing the new website can clearly understand the brand's offerings, view real project images, and contact the business effortlessly, improving trust and enquiry quality."

---

## 15. Open Questions & Assumptions

### Open Questions

- Final deadline?
- Final content approval?
- Hosting credentials ownership?

### Assumptions

- Website is informational only
- Images provided by client
- English language only

---

## 16. Glossary

- **PRD:** Product Requirements Document
- **SEO:** Search Engine Optimization
- **WCAG:** Web Content Accessibility Guidelines

---

## ✅ QUALITY CHECK REPORT

| Check | Status |
|-------|--------|
| Completeness | ✅ |
| Clarity | ✅ |
| Actionability | ✅ |
| Feasibility | ✅ |
| Risks Covered | ✅ |
| Goal Alignment | ✅ |
| Assumptions Explicit | ✅ |
| Accessibility | ⚠️ (baseline only) |
| Evidence Rigor | ⚠️ (limited research) |
| No Contradictions | ✅ |

---

## 🤖 AI GAP REPORT

**Risk Level:** Medium

### Detected Gaps

- Limited quantitative data
- No validated personas
- Metrics not finalized

### Recommendations

- Add basic analytics post-launch
- Conduct 2–3 informal customer interviews
- Define enquiry success metrics
