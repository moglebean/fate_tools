Build a single-page, client-side interactive HTML app (no server).

All content editable in-page using reliable form controls; looks like a professional sheet.

Save/Load characters to/from JSON files; also autosave to localStorage, Reset, and Save As.

Images: accept URL (http/https/file) or Base64 data URI; default image embedded in HTML. If JSON has no image, use default.

PDF export via a JS library (e.g., html2pdf/jsPDF) with a one-click “Export to PDF” button and print-perfect CSS.

Markdown export using a fixed template, omit images, include all key sections in a clean, readable format.

Provide a JSON Schema (Draft-07) for character files, including a "schemaVersion" (we’ll set "1.0.0"), with flexible counts; schema includes max numbers for skill pyramid tiers, stress boxes, and checkbox states.

Key fields included: Name, High Concept, Trouble, Skill Pyramid, Aspects, Stunts, Refresh, Stress (checkboxes), Consequences (checkboxes + text), Character Image link/preview.

Skill management: Start with Fate Core skill list in a dropdown, but allow custom skills and add/remove skills; no strict pyramid enforcement.

Stress tracks: Physical & Mental; configurable box counts (defaults provided), each box checkable and persisted.

Consequences: Mild/Moderate/Severe with checkbox + text; allow add/remove extra consequence slots; no auto-reduction logic.

Stunts: unlimited (no hard cap); add/remove; Refresh is manual (no auto-adjust).

Aspects: add/remove as needed (beyond High Concept & Trouble).

UI actions: buttons for Add/Remove (skills, stress boxes, consequences, stunts, aspects), Autosave status indicator, Reset, Import JSON, Export JSON, Export PDF, Export Markdown.

Styling: polished, Fate-inspired visual design with consistent headings, tables, badges; tasteful use of logos/marks as allowed (non-commercial use); professional typography and spacing.

Theme: Light/Dark mode toggle (persisted); accessible contrast and readable fonts.

Mobile responsive layout with touch-friendly controls; desktop layout optimized for printing and PDF export.

PWA support: installable app with offline caching of core assets and last-opened character.

Dice roller: Fate dice (4dF) with graphic display for each die (+ / – / blank) and numeric total; quick-roll button and optional note/label.

Data model flexibility: UI and schema support variable counts (pyramid tiers, stress boxes, consequences), plus state of all checkboxes.

Default assets: embedded default character image and neutral Fate-style iconography; external images allowed via URL.

Accessibility: labeled controls, keyboard navigation, ARIA where appropriate.

Print CSS: clean single- or two-page output with headers/footers suppressed, colors adapted to print, and page-break control.