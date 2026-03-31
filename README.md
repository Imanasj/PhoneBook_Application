# Phone Book Application

Simple client-side phone book app with add/delete functionality using HTML, CSS, JavaScript, and Bootstrap.

## Project files=
- `Index.html` - main layout and UI container
- `style.css` - custom styles
- `script.js` - app behavior (contacts list, add, delete, counter)

## Features
- Display a contact list with name and phone number.
- Add new contacts with form validation.
- Delete contacts.
- Live contact count and empty state message.
- Uses Font Awesome icons and Bootstrap for styling.

## Run locally
1. Open project folder:
   ```bash
   cd "c:\\Users\\User\\Downloads\\PhoneBook_Appplication"
   ```
2. Open `Index.html` in your browser (double-click or right-click -> Open with ...).
3. Optionally use Live Server extension for Dev (VS Code):
   - Install Live Server
   - Right click on `Index.html` -> "Open with Live Server"

##  Usage
1. Type name in the first field.
2. Type phone number in the second field.
3. Click **Add Contact**.
4. Click trash icon (Delete) to remove.

##  Improve suggestions
- Add localStorage so contacts persist after refresh.
- Add input validation for phone format.
- Add edit contact support and search filter.

##  Git setup (optional)
1. Initialize local repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Create GitHub repo and push:
   ```bash
   git remote add origin https://github.com/<yourname>/<repo>.git
   git branch -M main
   git push -u origin main
   ```

##  Note
In `script.js`, `contacts` is currently declared as `const` but operation `contacts = contacts.filter(...)` reassigns it. Change it to `let contacts = [...]` to avoid runtime errors. 
