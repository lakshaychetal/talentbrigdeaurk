# TalentBridge AU — Design & Content Brief

**Purpose:** This single-source-of-truth brief equips design, development, and content partners to build the TalentBridge AU recruiting experience in Figma and seed the CMS with structured copy.

> Replace all `[BRAND]`, `[Facility Name]`, `[Location]`, and `[Salary range]` placeholders with the authentic values or live data prior to publication.

---

## Global design tokens & systems

| Token | Value | Notes |
| --- | --- | --- |
| Primary font scale | H1=48/40/32, H2=34/28/22, H3=24/20/18, Body=16/15/14 | System type; use Inter / Manrope / Sans serif families. |
| Color palette | Deep navy `#0F1724`, Warm accent `#2E9CCA`, Supportive green `#2AA66A`, Soft gray `#F6F7F9` | Designers can tweak hues to match any live brand, but keep contrast WCAG AA. |
| Spacing tokens | 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 px | Use consistent spacing increments for padding/margins. |
| Radius tokens | Inputs: 8px, Cards: 12px, Buttons: 8px | |
| Elevation | Card: `0 1px 6px rgba(0,0,0,0.08)`, Nav: `0 3px 8px rgba(0,0,0,0.06)`, Dialog: `0 5px 20px rgba(0,0,0,0.12)` | |
| Typography states | Button: 16px Bold, uppercase, +2% letter spacing | Buttons follow brand color or outlined variant. |

## Site structure (final)

1. Home
2. For Employers
   - Healthcare Hiring
   - Hospitality Hiring
   - Real Estate Hiring
3. For Job Seekers
4. Pricing
5. Resources (hiring guides, job-seeker guides, salary insights)
6. About
7. Contact / Book a Demo

## Global components & accessibility notes

### 1. Global header
- Left: brand SVG logo.
- Center/right: nav links (For Employers, For Job Seekers, Pricing, Resources).
- Right CTAs: `Post a role` (primary) and `Sign in` (secondary).
- Desktop: horizontal layout; mobile: hamburger menu toggles slide-over nav.
- Use aria-labels on menu toggle, ensure keyboard trap when slide-over is open.

### 2. Footer
- Columns: Product, Employers, Job Seekers, Resources, Legal.
- Include social icons (LinkedIn, Facebook, Instagram) with `aria-label` in links.
- Provide Accessibility statement link.

### 3. Search bar (hero)
- Large horizontal layout w/ inputs: Job title/keyword, Location (autosuggest), Industry dropdown.
- Primary action: Search (primary button style).
- Support auto-suggest dropdowns for location and role keywords.
- Active filters appear as clearable chips above or below the bar.

### 4. Job card (listing)
- Layout: left column (job title + employer), mid column (bulleted shift type, location, salary range), right column (Apply CTA + save icon).
- Hover: mild elevation, reveal quick actions (share, save, view detail) and badges (Verified employer, Urgent, Shortlist).

### 5. Candidate profile card (employer view)
- Optional photo circle (50px), name, top three skill chips, availability badge (green dot), last active timestamp, rating stars.
- Actions: Shortlist, Message, Schedule Interview buttons (small primary/secondary variations).

### 6. Job-post builder (employer form)
- Stepper: Role details → Responsibilities → Skills & checks → Shift & roster → Salary & benefits → Preview → Publish.
- Split layout: form on left, real-time preview on right (mirrors responsive job card). Include tips pulled from JD templates especially for mandatory checks.
- Ensure keyboard navigation and aria-live announcements for validation.

## Page briefs (Figma-ready specs + copy placeholders)

### 3.1 Home page
**Layout (desktop widths)**: hero (full-bleed) → trust/stats row → industry cards → how-it-works steps → industries quick links → job search sample (dynamic job cards + filters) → dual CTAs → testimonials → footer.

**Hero**
- Visual: 3-photo collage (healthcare nurse, café barista, real-estate agent in Australia). Image placeholders: "nurse aged care australia", "barista cafe australia", "real estate agent open house australia".
- Headline (H1): *Specialist hiring for Australia’s healthcare, hospitality & real-estate.*
- Subheadline (H3): *Connect with vetted, job-ready candidates — fast.*
- Components: Search bar + CTAs `Post a role` / `Find jobs`.
- Microcopy: *TalentBridge AU connects vetted local talent with employers who can’t afford to make the wrong hire — from aged-care facilities and clinics to hotels, cafés and real-estate agencies.*

**Trust row**
- Icons + stats: e.g., `72% roles filled < 21 days`, `X+ candidates`, `Industry-specialist recruiters`.

**Who we help (3 cards)**
- Healthcare, Hospitality, Real Estate.
- Each card: icon + 1-line descriptor + CTA (view roles or talk to expert).

**How it works (4 steps)**
Numbered steps with compact illustrations: (1) Tell us your shift/skill needs, (2) We match & screen, (3) Interview-ready candidates, (4) Hire & onboard.

**Industries quick links**
- Tiles for Healthcare, Hospitality, Real Estate linking to respective briefs.

**Job search sample**
- Show live job cards (title + employer + location + salary) and filters (shift, location, industry). Provide sample empty states (see Copy section) for behavioural states.

**Dual CTAs**
- Employers: `Post a role` subheading emphasising compliance & screening.
- Job Seekers: `Create your profile` subheading emphasising one profile, multiple opportunities.

**Testimonials**
- Carousel or cards with logos, quotes.

**Footer CTA**
- `Book a demo` button + “15-minute calendar link placeholder”.

### 3.2 For Employers page
**Hero**
- Headline: *Hire qualified staff, not just applications.*
- Subheadline: *Industry-specific screening, compliance & rosters built for Australian employers.*
- CTA: `Book a demo` (primary).

**Problem section**: copy about unqualified applicants and long time-to-hire; include stat (e.g., `Average time-to-hire: 42 days` placeholder).

**Solution pillars**
- Three vertical cards: Ad builder, Candidate reach, Screening tools (each with icon). Describe how each reduces friction.

**Features grid (6 items)**
- Job templates, Saved candidate pools, Interview scheduling, Compliance checklists (AHPRA, WWCC, RSA/RSG, police checks, NDIS), Reporting dashboards, ATS integration.

**Pricing teaser**
- Three columns (Start, Growth, Scale) showing quick feature checkboxes + CTA `See pricing`.

**Testimonials + partner logos**
- Include logos from clinics/hotels/agencies, 3 testimonial quotes.

**FAQ accordion**
- Use expand/collapse pattern for billing, hiring process, compliance.

### 3.3 Industry pages (Healthcare / Hospitality / Real Estate)
**Hero**
- Industry-specific image + headline emphasising specialisation.
- Image placeholders: Healthcare = "aged care nurse", "clinic reception australia"; Hospitality = "restaurant kitchen chef australia", "hotel reception australia"; Real Estate = "real estate agent open house australia", "property manager office".

**Who we serve**
- Bullet list (e.g., aged-care providers, clinics, hospitals; hotels, cafés, pubs; agencies, developers, property managers).

**Roles we specialise in**
- Two-column list of role links tied to JD templates (e.g., Registered Nurse, Chef, Sales Agent). Each role includes note: “Template ready to populate the Job Post Builder”.

**Compliance checklist**
- Industry-specific mandatory checks: AHPRA, WWCC, RSA/RSG, police check, NDIS worker screening, state licences. Include microcopy instructing digital upload fields.

**Example job-ad preview**
- Toggle view showing finalised copy from Job Description templates (Sections: Title, About us, Responsibilities, Skills, Checks, Benefits, How to apply). Provide copy snippet (see Section 7) so devs can mirror layout.

**CTAs**
- `Post a [industry] role` (primary) + `Talk to our [industry] expert` (secondary).

### 3.4 For Job Seekers page
**Hero**
- Headline: *One profile. Multiple opportunities.*
- Subheadline: *Create your profile and apply with one click.*
- CTA: `Create your profile` (primary).

**Steps to get started**
1. Create profile.
2. Set availability (casual, full-time, part-time).
3. Get matched & apply.
- Include progress indicator (e.g., profile completion bar) and badges (e.g., Verified checks) to show candidate status.

**Featured jobs carousel**
- Localised to user location; include job cards with location chips. Provide empty state text: *We couldn’t find any roles that match these filters. Try removing the availability or widening the location.*

**Candidate resources**
- Cards for resume templates, interview tips, salary insights.
- Microcopy for form guidance (e.g., “Tell us about your roster needs. Upload AHPRA/RSA/WWCC if applicable.”).

**CTA**
- `Upload your resume` button for quick application.

### 3.5 Pricing page
**Hero**
- Straightforward copy with two CTAs: `Pay-per-role` and `Subscribe for unlimited roles`.
- Provide small tagline referencing Australian payroll (super + penalty rates).

**Plans grid**
- Columns for `Start`, `Growth`, `Scale` with bullet features and monthly/annual pricing placeholders; include `Contact us for enterprise` row.

**Feature comparison table**
- Rows for job templates, compliance checks, reporting, ATS integrations, candidate pools, support hours.

**FAQ**
- Include question/answer pairs on billing cycle, rollover credits, hiring guarantees.

### 3.6 Resources & Blog
**Layout**
- Hero with filter controls (By industry, By topic). Include CTA `Subscribe to insights`.
- Filterable article list (cards with category tag + icon). Seed articles:
  - "How to write a high-converting RN JD"
  - "How to reduce hospitality no-shows"
  - "Salary ranges by state for RN/Chef/Sales Agent"

**Downloadables**
- Provide download links for checklists, salary worksheets.

### 3.7 About + Contact
**About**
- Mission statement, values, short bios for founders, press/partner logos.
- Include `Book a demo` CTA.

**Contact**
- Short contact form (name/email/organisation/query), calendar booking link, email, phone, social links.
- Microcopy: *Expect a reply in 1 business day* (or remove if not guaranteed). Add map placeholder for location if desired.

---

## Copy snippets & microcopy (ready to paste)

- **Primary CTAs:** `Post a role`, `Create your profile`, `Book a demo`, `Find jobs`, `Upload your resume`, `See pricing`, `Talk to our [industry] expert`.
- **Hero microcopy (Home):** *TalentBridge AU connects vetted local talent with employers who can’t afford to make the wrong hire — from aged-care facilities and clinics to hotels, cafés and real-estate agencies.*
- **Empty states:**
  - **Jobs:** *We couldn’t find any roles that match these filters. Try removing the availability or widening the location.*
  - **Candidates:** *No matches yet — create a quick ad to notify local candidates.*
- **Buttons:** Small primary `Shortlist`, Small secondary `Message`, Danger/confirmation `Confirm & Send Offer`.
- **Form guidance:** *Tell us about your roster needs. Add shift availability & weekends. Upload AHPRA/RSA/WWCC if applicable.*

---

## Imagery & asset sourcing

- **Sources:** Unsplash, Pexels (initial stock). Later replace with bespoke client photography.
- **Hero keywords (Healthy living):** "aged care nurse australia", "nurse clinic australia", "clinic receptionist".
- **Hospitality hero keywords:** "barista cafe australia", "restaurant kitchen chef australia", "hotel reception".
- **Real estate hero keywords:** "real estate agent open house australia", "property manager australia".
- **Icons:** Use Lucide or Feather icon sets to keep consistent.

Provide moodboard links / references for designers to replicate once brand assets are ready.

---

## Accessibility & localisation

- Language: Australian English (e.g., centre, labour, casual). Use local terms like award, lump sum, super.
- WCAG AA compliance: ensure contrast ratios, keyboard focus states, aria-hidden attributes for icons, aria-labels for buttons and menus.
- Ensure dynamic components (search autosuggest, accordions, job builder) announce status via `aria-live`.
- Include fields/documentation for compliance checks: AHPRA, Working With Children Check (WWCC), RSA/RSG, police check, NDIS worker screening, real-estate licences.
- Provide alt text guidelines for photography (e.g., "Aged care nurse supporting a resident in [Facility Name]").

---

## Ready-to-use Job Description templates

### 7.1 Registered Nurse – Aged Care (Full-time / Part-time)
**Title:** Registered Nurse – Aged Care
**Location:** [Suburb], [State]
**Employment type:** Full-time / Part-time / Casual
**Salary range:** [$65,000 – $95,000] p.a. (or hourly equivalent) + super + penalty rates where applicable

**About us**
[Facility/Employer name] provides person-centred aged-care services and supports the wellbeing of our residents. We are seeking a compassionate Registered Nurse to join our clinical team and lead the delivery of safe, evidence-based care.

**Key responsibilities**
- Assess, plan and provide clinical nursing care to residents.
- Administer medications, monitor outcomes and manage medication charts.
- Lead and mentor care staff during shifts, including AINs/PCAs.
- Complete clinical documentation, incident reporting and handovers.
- Participate in quality improvement and accreditation activities.
- Liaise with GPs, allied health professionals and families.

**Skills & experience**
- Current AHPRA registration as a Registered Nurse.
- Recent experience in aged-care or similar clinical setting (minimum 12 months preferred).
- Strong clinical assessment, medication management and wound-care skills.
- Excellent communication and leadership abilities.
- Empathy and a person-centred approach.

**Checks & mandatory requirements**
- Current National Police Check (within [X] years).
- Working With Children Check (if applicable).
- Current CPR/First Aid certificate.
- Evidence of vaccinations (as per facility policy).

**What we offer**
- Competitive pay including penalty rates and salary packaging options.
- Stable rosters and supportive clinical leadership.
- Ongoing training and professional development.

**How to apply**
Click Apply and upload your resume and AHPRA registration details. Shortlisted candidates will be contacted for an initial video interview.

### 7.2 Chef – Head Chef / Cook (Hospitality)
**Title:** Head Chef / Chef de Partie / Cook
**Location:** [Suburb], [State]
**Employment type:** Full-time / Part-time / Casual
**Salary range:** [$55,000 – $85,000] p.a. (or hourly equivalent) + super + penalty rates where applicable

**About us**
[Employer name] is a busy [café/restaurant/hotel] known for delivering high-quality food and a great guest experience. We’re looking for a skilled chef to join our kitchen team and help maintain consistency, quality and speed during service.

**Key responsibilities**
- Prepare and cook menu items to quality and presentation standards.
- Maintain food hygiene and safe food handling practices (FSC/food safety certificates).
- Manage stock control, portioning and minimising waste.
- Supervise junior kitchen staff and assist in training.
- Collaborate with management on menu changes and specials.

**Skills & experience**
- Proven experience in a similar kitchen role (2+ years preferred for senior positions).
- Certificate III in Commercial Cookery (desirable) or demonstrable experience.
- Current Responsible Service of Alcohol (RSA) where applicable.
- Strong time-management and team-working skills.

**Checks & mandatory requirements**
- Current National Police Check (if requested).
- Food safety training certificate (as required by state).
- Work rights in Australia.

**What we offer**
- Competitive hourly rates with penalty loading for weekends/evenings.
- Staff meals, uniform and training support.
- Opportunity to progress to senior kitchen roles.

**How to apply**
Click Apply and upload your resume with at least two references from recent hospitality roles.

### 7.3 Residential Sales Agent (Real Estate)
**Title:** Residential Sales Agent / Sales Consultant
**Location:** [Suburb], [State]
**Employment type:** Full-time / Part-time
**Salary range:** Commission-based + base ($50,000 – $100,000 + comms) — adapt to local market

**About us**
[Agency name] is a local real-estate agency specialising in [residential/commercial] property. We pride ourselves on excellent client service and market knowledge.

**Key responsibilities**
- Manage listings from on-boarding to settlement.
- Conduct property appraisals, open homes and private inspections.
- Build relationships with buyers, sellers and property managers.
- Negotiate sale terms and assist with contract preparation.
- Maintain CRM records and sales pipeline.

**Skills & experience**
- Current real-estate licence (state-based) or working towards it.
- Strong negotiation and interpersonal skills.
- Proven sales experience, preferably in residential property.
- Driver’s licence and reliable transport.

**Checks & mandatory requirements**
- National Police Check (if requested).
- Valid licence / registration as required by state authority.

**What we offer**
- Competitive commission structure and growth opportunities.
- Marketing support and CRM tools.
- Flexible working and team-based culture.

**How to apply**
Click Apply and upload your resume and a short cover letter detailing recent sales experience.

---

## CMS content mapping

| Page | Key fields to populate | Notes |
| --- | --- | --- |
| Home | Hero headline/sub, hero image, stats, industry card titles & descriptions, CTA links | Provide live stats and real image keywords. |
| For Employers | Hero headline/sub, problem stat copy, 3 pillar titles/descriptions, features list, pricing teaser, testimonials (3) | Include CTA/repeat the `Book a demo`. |
| Industry | Hero copy + image, compliance checklist, roles list with JD links, example job ad copy | Each industry page uses same template with dynamic copy. |
| Job post builder | Title, location, job type, salary, short description, responsibilities, skills (must-have/nice-to-have), checks/requirements, benefits, how to apply, attachments | Suggest using markdown-friendly bullets for CMS entry. |

## Next steps (optional deliverables)
Feel free to request any of the following once this brief is accepted:
- Convert these briefs into a Figma file (frames + component library).
- Generate 20+ additional JD templates across healthcare, hospitality, and real estate.
- Produce the first 5 SEO resource articles (e.g., "How to write a high-converting RN JD").
- Curate an image moodboard (Unsplash links + captions) for the designers.
