# My First Angular Project - Sprint 4.01 and 4.02

This repository contains the first Angular application developed as part of the Sprint 4 curriculum. The focus of this activity was to set up a modern development environment and initialize a basic Angular project using the Command Line Interface (CLI).

## Objectives

* Configure the Angular development environment.
* Create a new Angular application using the Angular CLI.
* Understand the basic file structure of an Angular project.
* Execute the application and verify it in a local browser.

## Prerequisites

To run this project, ensure you have the following versions (or higher) installed on your system:

* Node.js: v24.14.0
* npm: 10.x.x or higher
* Angular CLI: @next


## Part 1: Installation and Environment Setup

The following steps were performed to initialize the project:

1. **Update Node.js**: Ensure the system is running a version compatible with the latest Angular CLI requirements (v22.22.0 or v24.13.1 minimum).
2. **Install Angular CLI**: The CLI was installed globally using the command:
   `sudo npm install -g @angular/cli@next`
3. **Project Initialization**: The project was generated using the following flags to ensure a clean, standalone structure:
   `ng new meu-primer-angular --standalone --skip-git --skip-tests`
   * Stylesheet format: CSS
   * SSR/SSG: Disabled (No)  

## Part 2: Root Component and Signals

In this phase, the root component was modified to explore Angular's reactivity model using the new Signals API.

### Implementation Details
The standard variable-based title was replaced with a **Signal** to understand how Angular tracks state changes efficiently without direct DOM manipulation.

* **Logic (app.ts)**: 
  Imported `signal` from `@angular/core` and declared the title property as a Signal. A method `changeTitle()` was implemented using the `.set()` instruction to trigger UI updates.
* **Template (app.html)**: 
  Utilized interpolation with the getter syntax `{{ title() }}` to subscribe the view to the Signal's value.
* **Event Binding**: 
  Used the `(click)` directive to link a button to the logic, demonstrating the unidirectional data flow.

### Key Concepts Learned
* **Data Binding**: Understanding how data flows from the TypeScript class to the HTML template.
* **Reactivity with Signals**: Learning that Signals notify Angular exactly which part of the UI needs to be updated when the state changes.
* **Component Selector**: Recognizing `<app-root>` in `index.html` as the entry point where the Angular application is injected into the DOM.

## Project Structure (Modern CLI)

The project follows a streamlined file naming convention:
* `src/app/app.ts`: The root component logic (formerly app.component.ts).
* `src/app/app.html`: The root component template (formerly app.component.html).
* `src/app/app.css`: The root component styles (formerly app.component.css).
* `src/index.html`: The main HTML file containing the `<app-root>` selector.

## How to Run the Project

1. Navigate to the project directory:
   `cd meu-primer-angular`
2. Start the development server:
   `ng serve --open`

The application will be served at `http://localhost:4200/`.
---


##### Author Irene V. Sahun - GitHub: isahun 

##### Created as part of the IT Academy Frontend BootCamp.