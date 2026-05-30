# Notes Manager

A simple and interactive note-taking application built with Vanilla JavaScript. This project allows users to create, display, and delete notes while persisting data locally using the browser's Local Storage API.

## Overview

The Notes Manager application provides a lightweight solution for managing personal notes without requiring a database or backend server.

Users can:

- Create notes instantly
- View all saved notes
- Delete notes individually
- Store notes permanently in Local Storage
- Automatically recover notes after refreshing or reopening the page

---

## Features

### Note Management

- Add new notes
- Display saved notes
- Delete notes individually

### Data Persistence

- Save notes in Local Storage
- Automatically load notes on startup
- ⚡ Maintain data between browser sessions

### User Experience

- Clean and simple interface
- Dynamic content rendering
- Input validation
- Automatic focus reset after adding notes

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- DOM Manipulation
- Local Storage API

---

## Project Structure

```text
project/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Application Interface

### Main Components

#### Header Section

Displays the application title and description.

```html
<h2>Lista de Notas</h2>
<p>
Write a note and click "Add". You can remove notes using
their corresponding delete button.
</p>
```

#### Input Area

Allows users to write new notes.

```html
<input
  type="text"
  id="inputNota"
  placeholder="Write your note here..."
>
```

#### Add Button

Triggers the note creation process.

```html
<button id="btnAgregar">Agregar</button>
```

#### Notes List

Displays all saved notes dynamically.

```html
<ul id="listaNotas"></ul>
```

---

## How It Works

### Initial Load

When the application starts:

1. The browser checks Local Storage.
2. Previously saved notes are retrieved.
3. Notes are rendered automatically.

```javascript
window.addEventListener("DOMContentLoaded", () => {
    const notasGuardadas = localStorage.getItem("notas");

    if (notasGuardadas) {
        notas = JSON.parse(notasGuardadas);
        renderizarNotas();
    }
});
```

---

### Adding a Note

When the user clicks **Add**:

1. Input text is validated.
2. The note is added to the array.
3. Local Storage is updated.
4. The interface refreshes automatically.

Example:

```javascript
notas.push(textoInput);

actualizarLocalStorage();

renderizarNotas();
```

---

### Deleting a Note

When the user clicks **Delete**:

1. The note is removed from the DOM.
2. The note is removed from the array.
3. Local Storage is updated.
4. Changes are reflected immediately.

Example:

```javascript
notas.splice(index, 1);

actualizarLocalStorage();
```

---

## Local Storage Integration

### Save Notes

```javascript
localStorage.setItem(
    "notas",
    JSON.stringify(notas)
);
```

### Load Notes

```javascript
const notasGuardadas =
    localStorage.getItem("notas");
```

### Example Stored Data

```json
[
  "Study JavaScript",
  "Finish homework",
  "Buy groceries"
]
```

---

## Main Functions

### `renderizarNotas()`

Creates and displays all notes dynamically inside the `<ul>` element.

### `actualizarLocalStorage()`

Saves the current notes array into Local Storage.

### `DOMContentLoaded`

Loads saved notes when the application starts.

---

## Input Validation

The application prevents users from adding empty notes.

Example:

```javascript
if (textoInput === "") {
    alert(
        "Please enter a note before adding it."
    );
    return;
}
```

---

## Application Workflow

```text
User Opens Application
          ↓
Load Notes From Local Storage
          ↓
Render Notes
          ↓
User Adds New Note
          ↓
Update Notes Array
          ↓
Save To Local Storage
          ↓
Render Updated Notes
          ↓
User Deletes Note
          ↓
Update Array
          ↓
Save Changes
          ↓
Render Updated Notes
```

---

## Learning Objectives

This project demonstrates practical knowledge of:

- JavaScript Fundamentals
- Arrays and Data Management
- DOM Manipulation
- Event Handling
- Local Storage API
- Dynamic UI Rendering
- Form Validation
- Browser Persistence

---

## Possible Improvements

Potential future enhancements:

- Edit notes
- Search functionality
- Categories and tags
- Favorite notes
- Dark mode
- Mobile responsiveness
- Export notes
- Cloud synchronization

---

## How to Run

### Option 1: Open Directly

Open the `index.html` file in your preferred browser.

### Option 2: VS Code Live Server

Install the Live Server extension and run:

```text
Right Click → Open with Live Server
```

---

## User Interface

The application contains:

- A title section
- A note input field
- An add button
- A dynamically updated notes list
- Individual delete buttons for each note

---

## Author
Sayder Careno