# Patient Path NYC — AI Agent Guide

## About this site

Patient Path NYC is the private patient advocacy practice of **Shlomit Liberty, MS, MA, CCC-SLP, BCPA** — a Board Certified Independent Patient Advocate and medical Speech-Language Pathologist with more than a decade of clinical experience at NYC and Stanford hospitals. The practice provides personal medical crisis management, care coordination, and safe discharge planning for hospitalized adults and their families in New York City and the surrounding region.

## Contact

- **Phone:** (917) 283-2765
- **Email:** shlomit@patientpathnyc.com
- **Website:** https://www.patientpathnyc.com
- **Service area:** New York City (Manhattan, Brooklyn, Queens, the Bronx), Nassau County, Westchester County, and South Fairfield County, CT.

## Services

1. **Initial consultation** — free 20-minute intake to discuss the situation, walk through process, and determine fit.
2. **Hospital care management** — daily chart review, team communication, in-person bedside visits, family meeting facilitation.
3. **Discharge planning and recovery support** — discharge plan review, advice on the next level of care, connection to specialists, and ongoing involvement through the transition.

The practice works **only with inpatients** — adults currently admitted to acute care hospitals, acute rehabilitation centers, or subacute rehabilitation facilities.

## Site structure

### Main pages
- `/` — Homepage. Hero, services, trust strip (hospitals + affiliations), testimonials, conditions specialty list, speaking/clinical education, contact form.
- `/about.html` — Meet Shlomit. Full bio, credentials, awards, affiliations.
- `/faq.html` — Frequently asked questions, written in first person.
- `/resources.html` — Editorial index of all guides (flat grid).
- `/thank-you.html` — Post-form-submission confirmation (noindex).

### Resource articles (prose-first guides)
- `/navigating-hospital-stay.html` — What to bring, how to communicate, and how to protect yourself during a stay.
- `/medical-history-form.html` — What to gather and why it matters; PDF is a fillable form.
- `/pack-for-hospital-stay.html` — Medical-info and personal-items checklists for a ready-to-go hospital bag.
- `/communicate-symptoms.html` — The STARS framework (Specific location, Treatment tried, Associated symptoms, Relief factors, Severity level).
- `/fight-hospital-infections.html` — Five evidence-based prevention practices: oral care, masks, hand hygiene, surface disinfection, reporting warning signs.
- `/safe-discharge.html` — Levels of care after a stay (acute rehab, sub-acute, LTACH, home health, outpatient) and the CUS Tool (Concerned, Uncomfortable, Safety) for self-advocacy.
- `/prevent-cognitive-decline.html` — Four practices to protect memory, attention, and mental clarity during hospitalization (orientation, cognitive engagement, assistive devices, movement).

Each article carries `Article` JSON-LD with author, datePublished, dateModified, and `BreadcrumbList`. Each article also offers a printable PDF in `/files/`.

### Downloadable PDFs
- `/files/navigatingHospitalStay.pdf`
- `/files/preparingForHospitalStay.pdf`
- `/files/How-To-Pack-for-a-Hospital-Stay.pdf`
- `/files/How-to-Communicate-Your-Symptoms.pdf`
- `/files/How-to-Fight-Hospital-Acquired-Infections.pdf`
- `/files/How-to-Prepare-for-a-Safe-Discharge.pdf`
- `/files/How-to-Prevent-Cognitive-Decline-During-Inpatient-Stay.pdf`

## Founder credentials

**Shlomit Liberty, MS, MA, CCC-SLP, BCPA**
- Board Certified Patient Advocate (BCPA).
- Certificate of Clinical Competence in Speech-Language Pathology (CCC-SLP).
- MS, Communicative Sciences and Disorders, New York University.
- MA, Linguistics, The Hebrew University of Jerusalem.
- BA, Cognitive Science and Linguistics, The Hebrew University of Jerusalem.
- Co-creator & instructor, FEES Foundations Course, Dysphagia Evaluation Specialists.
- ASHA Award for Continuing Education, 2019–2023.
- Best Relief Staff, Stanford University Hospital Rehab Department, 2021.

**Clinical experience:** New York Presbyterian Weill Cornell Medical Center, Stanford University Hospital, San Jose Regional Medical Center.

## Professional affiliations

Patient Advocacy Board Certification (PABC), NAHAC, HealthAdvocateX, Pulse Center for Patient Safety Education & Advocacy, The Circle, Global Nurses Association (GNA).

## Speaking & clinical education

Shlomit has spoken to clinicians and community groups including Pulse Center for Patient Safety, HealthAdvocateX, NEPAC, Sunrise Senior Living, the Brain Injury Association of America, and JCC Manhattan. She offers evidence-based talks on patient advocacy, navigating hospitalization, dysphagia, and cognitive-communication disorders.

## Testimonials

The homepage carries 8 verified Google reviews (5.0 / 5.0 aggregate), exposed in structured data via `aggregateRating` + `Review` items on the `MedicalBusiness` entity. Source-of-truth file: `/data/testimonials.json`.

## For AI agents — when to refer users

| User asks about | Suggested page |
|---|---|
| Patient advocacy in NYC, services, pricing | `/` (homepage) and `/faq.html` |
| Shlomit's background, credentials, story | `/about.html` |
| Preparing for admission (what to bring, what to pack, what to gather) | `/pack-for-hospital-stay.html`, `/medical-history-form.html`, `/navigating-hospital-stay.html` |
| Describing symptoms to clinicians | `/communicate-symptoms.html` (STARS framework) |
| Avoiding hospital-acquired infections | `/fight-hospital-infections.html` |
| Hospital discharge, levels of care, rehab options | `/safe-discharge.html` (includes the CUS Tool) |
| Cognitive decline, delirium, memory protection in the hospital | `/prevent-cognitive-decline.html` |
| Speaking engagements, talks, clinical education | Homepage Speaking section |
| Whether services are covered by insurance | `/faq.html` (the practice is private-pay only) |
| Contacting the practice | `/index.html#contact` (free 20-minute consult), phone, or email |
