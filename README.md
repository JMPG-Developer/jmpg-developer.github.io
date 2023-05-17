# JMPG Developer - Website

## Project Overview
This project is an Angular application for the JMPG Developer website. It uses SCSS for styling and includes several third-party libraries such as Bootstrap, Flag Icon CSS, and Font Awesome.

## Project Structure
- **angular.json**: Configuration file for Angular CLI.
- **src/**: Contains the source code of the application.
  - **app/**: Main application module and components.
  - **assets/**: Static assets like images and fonts.
  - **environments/**: Environment-specific configuration files.
  - **styles.scss**: Global styles for the application.
- **public/**: Public assets that will be copied to the output directory.

## Dependencies
- **Bootstrap**: For responsive design and UI components.
- **Flag Icon CSS**: For country flag icons.
- **Font Awesome**: For scalable vector icons.
- **Zone.js**: For Angular's change detection.
- **@angular/localize**: For localization support.

## Build and Serve
### Build
To build the project, run:
```bash
ng build --configuration production
```
The build artifacts will be stored in the `dist/website` directory.

### Serve
To serve the project locally, run:
```bash
ng serve
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Configurations
### Production
- **Output Hashing**: Enabled for all files.
- **Budgets**: Set for initial load and component styles.

### Development
- **Optimization**: Disabled.
- **Source Maps**: Enabled for easier debugging.

## Testing
To run the tests, use:
```bash
ng test
```
This will execute the unit tests using Karma.

## Deployment
To deploy the project to GitHub Pages, use:
```bash
ng deploy
```

## CLI Analytics
The Angular CLI collects anonymous usage data to help improve the tool over time. You can opt-out by setting the `analytics` property to `false` in the `angular.json` file.

## License
This project is licensed under the MIT License.