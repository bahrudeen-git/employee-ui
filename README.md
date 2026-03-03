# Employee Management UI

This is an Angular-based employee management system featuring a clean UI built with Tailwind CSS. It includes lazy-loaded modules for **home**, **login**, and **dashboard** pages, and demonstrates basic authentication flow.

The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Development server

Install dependencies and start the development server:

```bash
npm install
npm install -D tailwindcss postcss autoprefixer # if not already done
npm run start
```

Then navigate to `http://localhost:4200/`. The application will automatically reload on changes.

The home page is accessible at `/`, login at `/login` (use **admin/admin**), and the protected dashboard at `/dashboard`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
