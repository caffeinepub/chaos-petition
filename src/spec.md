# Specification

## Summary
**Goal:** Build a public, editorial-styled petition page that displays a fixed petition letter and lets users submit and view persisted signatures (first/last name + 3-digit area code).

**Planned changes:**
- Create a petition page that renders the provided subject and full letter content as static, well-formatted text with a clickable https://www.louisvuitton.com link.
- Add a signature form with First name, Last name, and Area code inputs; validate required fields and enforce exactly 3 digits for Area code with inline English error messages.
- Implement backend persistence for signatures (firstName, lastName, areaCode, createdAt) with methods to create signatures, fetch total count, and fetch recent signatures.
- Connect the form to the backend to submit signatures, update total count and recent signatures without full page refresh, and show retryable English error states on failures.
- Apply a consistent bold, magazine-like visual theme using high-contrast neutrals (avoiding blue/purple) and responsive spacing/typography.
- Add and render a generated static banner image from `frontend/public/assets/generated` as part of the page theme.

**User-visible outcome:** Visitors can read the petition letter, sign it with their name and area code, immediately see confirmation plus an updated total signature count and a recent-signers list that persists across reloads.
