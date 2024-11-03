# React + Vite

# To-Do List App

This is a simple and responsive To-Do List application built with ReactJS. It helps users manage their daily tasks by allowing them to add, mark as complete, and delete items. This project showcases fundamental skills in React, including component-based architecture, state management, and event handling.

## Features

- **Add Tasks**: Easily add new tasks by typing in the input box and hitting the submit button.
- **Mark Tasks as Complete**: Click on a task to mark it as complete, giving a visual cue to differentiate completed tasks.
- **Delete Tasks**: Remove tasks that are no longer needed with a single click.
- **Responsive Design**: The app is responsive and works seamlessly across different screen sizes, from mobile.
- ReactJS: For building the user interface with a component-based approach.
- CSS: For styling the application, ensuring a clean, modern, and responsive design.
- JavaScript: For handling the app’s functionality and interactions.

## Project Structure
components/: Contains reusable components, such as the Task component for displaying each task.
App.js: The main component that manages the state and handles functionality for the to-do list.
styles/: Holds CSS or SASS files used to style the application.

## How It Works
The app keeps track of tasks in the state, with each task represented as an object containing an id, text, and completed status. Key features include:

Adding Tasks: Tasks are added to the state when the user submits the form, and the task list dynamically updates.
Marking as Complete: Clicking on a task toggles its completed status, allowing users to check off finished tasks.
Deleting Tasks: A delete button next to each task allows users to remove tasks they no longer need.

## Future Improvements
Persist Tasks: Add local storage to save tasks so they remain after a page reload.
Filter Options: Implement filters to show all tasks, only completed tasks, or only active tasks.
Editing Tasks: Allow users to edit tasks in case they make a mistake or need to update a task.
