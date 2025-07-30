# Web Development Project 7 - Crewmates App

Submitted by: **Xavier Cabrera**

This web app is a minimalist Among Us–themed crewmate manager where users can create crewmates with attributes, view a summary of their crew, and click into detail pages. It uses Supabase for database integration and React Router for navigation.

Time spent: **~6-8 hours** (setup, layout, Supabase debugging)

---

## Required Features

The following **required** functionality is currently **partially implemented**:

- [x] **The web app contains a page that features a create form to add a new crewmate**
  - [x] Users can name the crewmate
  - [x] Users can set the crewmate’s attributes by clicking on one of several values
- [x] **The web app includes a summary page of all the user’s added crewmates**
  - [x] The summary is on the home page
  - [x] The summary is sorted by creation date (newest first)
- [ ] **A previously created crewmate can be updated from the summary page**
  - [ ] No edit buttons implemented yet
  - [ ] No update form UI
- [ ] **A previously created crewmate can be deleted from the crewmate list**
  - [ ] No delete function implemented
- [x] **Each crewmate has a direct, unique URL link to a detail page**
  - [x] Clicking a crewmate in the summary takes you to a unique detail page
  - [ ] Edit button not yet added from detail view

---

## Optional / Stretch Features

The following **optional** features are not yet implemented:

- [ ] Crewmate category restricts attribute selection (e.g. only certain roles can have certain attributes)
- [ ] Summary page displays statistics about crew (e.g. % with "Strong")
- [ ] Success metric or custom crew performance UI

---

## Additional Features

- [x] Fully centered, responsive layout with dark Among Us–style theme
- [x] Supabase used as backend
- [x] React Router integration with working dynamic URLs
- [ ] Error handling / feedback for failed creates (partially logged to console only)

---

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://i.imgur.com/hwFRut0.gif' title='Video Walkthrough' alt='Video Walkthrough' />

---

## Notes

This was a rushed attempt and doesn't implement everything yet. Supabase is set up and reading/writing works. However, edit and delete functions were not completed. Routing is in place but needs polishing. Styling is mostly done.

Main struggles:
- Debugging why Supabase wasn't inserting (it was a data shape problem)
- Centering content and layout polish
- Not enough time to build out edit/delete/update routes

---

## License

