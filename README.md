# My First Angular Project - Sprint 4.01

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

## Installation and Environment Setup

The following steps were performed to initialize the project:

1. **Update Node.js**: Ensure the system is running a version compatible with the latest Angular CLI requirements (v22.22.0 or v24.13.1 minimum).
2. **Install Angular CLI**: The CLI was installed globally using the command:
   `sudo npm install -g @angular/cli@next`
3. **Project Initialization**: The project was generated using the following flags to ensure a clean, standalone structure:
   `ng new meu-primer-angular --standalone --skip-git --skip-tests`
   * Stylesheet format: CSS
   * SSR/SSG: Disabled (No)

## Running the Application

To execute the project locally, follow these commands:

1. Navigate to the project folder:
   `cd meu-primer-angular`
2. Start the development server:
   `ng serve --open`

The application will automatically open in your default browser at `http://localhost:4200`.

## Core Project Structure

The project includes several key files and directories:

* `src/app/app.component.ts`: Contains the logic for the root component.
* `src/index.html`: The main entry point for the application.
* `angular.json`: Global configuration for the Angular workspace.
* `package.json`: Manages the project's dependencies and execution scripts.
* `src/app/app.component.html`: Defines the layout of the root component.  


##### Author Irene V. Sahun - GitHub: isahun 

##### Created as part of the IT Academy Frontend BootCamp.