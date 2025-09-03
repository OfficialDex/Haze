# HAZE BOT Website

## Overview

HAZE BOT is a multipurpose Discord bot website built with Flask. The project serves as a promotional and informational website for a Discord bot, featuring a modern dark theme with red accents. The website showcases the bot's capabilities, provides information about features, and includes links for adding the bot to Discord servers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend uses a traditional server-side rendered approach with Flask's Jinja2 templating engine. The architecture follows a clean separation of concerns:

- **Template Structure**: Uses a base template (`base.html`) with template inheritance for consistent layout and styling across pages
- **Single Page Design**: The main content is served through `index.html` with section-based navigation using URL parameters
- **Responsive Design**: Built with Bootstrap 5 for mobile-first responsive layouts
- **Static Assets**: CSS and JavaScript files are organized in the `static/` directory following Flask conventions

### Backend Architecture

The backend is built with Flask using a minimal, lightweight approach:

- **Flask Application**: Simple Flask app with route handlers for different sections (home, features, about, support)
- **Session Management**: Basic session configuration with environment-based secret key handling
- **Route Structure**: RESTful URL patterns with dedicated routes for each major section
- **Development Configuration**: Debug mode enabled for development with configurable host and port settings

### Styling and UI Framework

The design system emphasizes a dark theme with red accents:

- **CSS Variables**: Custom CSS properties for consistent theming and easy maintenance
- **Gradient Backgrounds**: Uses CSS gradients for sophisticated visual effects
- **Custom Logo**: SVG-based logo with gradient fills for scalability
- **Bootstrap Integration**: Leverages Bootstrap 5 for grid system and components while maintaining custom styling

### JavaScript Functionality

Client-side functionality focuses on user experience enhancements:

- **Smooth Scrolling**: Implemented for internal page navigation
- **Navbar Effects**: Dynamic styling based on scroll position
- **Progressive Enhancement**: JavaScript enhances the experience but doesn't break core functionality

## External Dependencies

### Frontend Libraries
- **Bootstrap 5.3.0**: CSS framework for responsive design and UI components
- **Font Awesome 6.4.0**: Icon library for consistent iconography throughout the site

### Backend Framework
- **Flask**: Python web framework for serving the application
- **Jinja2**: Template engine (included with Flask) for server-side rendering

### Development Tools
- **Python Environment**: Requires Python runtime for Flask application execution
- **Static File Serving**: Flask's built-in static file serving for CSS, JS, and asset delivery

The architecture prioritizes simplicity and maintainability while providing a professional presentation for the Discord bot. The design allows for easy content updates and feature additions without complex build processes.