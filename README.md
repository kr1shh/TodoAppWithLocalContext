
# Todo App

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Components](#components)
  - [App](#app)
  - [TodoForm](#todoform)
  - [TodoItem](#todoitem)
- [Context](#context)
- [Local Storage](#local-storage)
- [Toast Notifications](#toast-notifications)
- [Contributing](#contributing)
- [License](#license)

## Overview

This is a simple and efficient Todo application built with React. It allows users to add, update, delete, and mark tasks as complete. The application also saves todos to local storage, ensuring that they persist even after a page refresh.

## Features

- Add new todos
- Edit existing todos
- Delete todos
- Mark todos as complete/incomplete
- Persist todos using local storage
- Toast notifications for feedback on actions

## Technologies Used

- React
- Tailwind CSS
- React Context API
- Local Storage
- `react-hot-toast` for notifications

## Getting Started

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

1. Start the development server:
   ```sh
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost`.

## Components

### App

The main component that sets up the context provider and renders the TodoForm and TodoItem components. It handles the state for todos and provides functions to add, update, delete, and toggle the completion status of todos.

### TodoForm

A form component that allows users to add new todos. It consists of an input field and a submit button. The input value is managed by a local state, and upon submission, the new todo is added to the list and a success toast is shown.

### TodoItem

A component that displays each individual todo. It includes a checkbox to mark the todo as complete, an input field for editing the todo, and buttons for saving changes or deleting the todo. The component uses local state to manage the edit mode and the updated todo text.

## Context

The app uses React Context API to manage the state of todos and provide the add, update, delete, and toggle functions to the components that need them. The `TodoProvider` wraps the main `App` component to provide the necessary context.

## Local Storage

The app uses local storage to persist todos. On initial load, it retrieves todos from local storage, and it updates local storage whenever the todos state changes.

## Toast Notifications

The app uses `react-hot-toast` for toast notifications to provide feedback to the user when they add, update, delete, or mark a todo as complete.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.
