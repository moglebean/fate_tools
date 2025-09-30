# Fate Core Character Sheet Requirements

## Introduction
This project delivers a modern, browser-based character sheet tailored for Fate Core campaigns. It focuses on providing players and game masters with a responsive, immersive interface that keeps key narrative and mechanical details at their fingertips. By remaining entirely client-side, the experience stays quick, portable, and easy to host or share.

Beyond basic data entry, the sheet handles multi-character management, rich exports, and offline resilience so it can serve equally well at the table, on the road, or within virtual play spaces. Automation such as autosave, dice rolling, and structured exports reduces administrative friction and lets players stay in the story.

Visual design, accessibility, and device adaptability were prioritized to align with the cinematic tone of Fate. Every panel is tuned for clarity on desktop, tablet, and mobile, while print and PDF outputs preserve layout fidelity. The result is a polished, dependable tool that respects both Fate’s mechanics and its narrative heart.

## Requirements
1. The application shall operate as a single-page, client-side web app without requiring server-side processing.
2. The application shall load and function while offline by caching core assets through a Progressive Web App service worker.
3. The application shall allow users to edit all character sheet fields directly on the page using form controls.
4. The application shall automatically persist the active character bundle to browser localStorage after user edits.
5. The application shall display an autosave status indicator that reflects whether the current state is saved.
6. The application shall allow users to create, duplicate, select, and delete character records within a local roster.
7. The application shall export the current character bundle to a downloadable, human-readable JSON file.
8. The application shall import a JSON character bundle from a user-selected file and replace the current roster with the imported content.
9. The application shall export the active character sheet to a PDF file using html2pdf with print-optimized styling.
10. The application shall export the active character sheet to Markdown text using the defined template.
11. The application shall provide a downloadable JSON Schema file describing the character data format with schemaVersion set to 1.1.0.
12. The application shall display and allow editing of the character’s name, high concept, trouble, description, and background fields.
13. The application shall allow users to add, edit, reorder, and remove additional aspects beyond the core identity fields.
14. The application shall allow users to manage skills by selecting from the Fate Core list, adding custom skills, and assigning ratings.
15. The application shall allow users to configure skill level groupings that summarize the current skill pyramid.
16. The application shall allow users to manage stunts and extras through add, edit, and remove controls without imposing a quantity limit.
17. The application shall display and allow editing of refresh and fate point values for the active character.
18. The application shall provide configurable physical and mental stress tracks with checkbox indicators for each box.
19. The application shall provide configurable consequence slots for Mild, Moderate, Severe, and optional additional severities.
20. The application shall allow users to set a character image via URL or file upload and fall back to the default image when none is supplied.
21. The application shall include a Fate dice roller that rolls four Fate dice, displays individual die results, and presents the total with flavor text.
22. The application shall provide a theme toggle that switches between light and dark modes and persists the selected theme.
23. The application shall render responsively across desktop and mobile viewports and provide print-specific styling for hardcopy use.
24. The application shall expose accessible labels and keyboard-focusable controls for all primary interactions.


## Enhancements

1. Add drag-and-drop sorting for skills, stunts, and extras to quickly reprioritize items.
2. Add AI auto character generation
3. Add import/export compatibility with Fate SRD JSON or Foundry modules.
4. Provide printable compact layout focused on essentials for table play.
5. Offer undo/redo history for recent edits to avoid accidental changes.
6. Integrate optional cloud backup/restore via browser storage providers (Dropbox, Google Drive).