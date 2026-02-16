# Portfolio Project Technical Documentation

This document provides a comprehensive technical overview of the Portfolio application. It is designed to assist in project discussions during technical interviews.

## 1. Project Overview
A dynamic, responsive personal portfolio website built using the Flask web framework. The application uses a decoupled data architecture where content is managed via a central Python configuration, ensuring ease of maintenance and scalability.

## 2. Technology Stack
- **Backend:** Python 3, Flask (Web Server Gateway Interface)
- **Frontend:** HTML5, CSS3, Jinja2 Templating Engine
- **Web Server:** Gunicorn (Green Unicorn) for production deployment
- **Animations:** AOS (Animate On Scroll) library
- **Icons:** FontAwesome 5

## 3. Architecture & Design Patterns
- **Template Inheritance:** Uses a `base.html` structure to maintain common elements (Header, Footer, Navigation) across pages, reducing code redundancy.
- **Model-View-Controller (Simplified):** 
    - **Model (`data.py`):** Acts as the single source of truth for all portfolio content.
    - **View (`templates/`):** Jinja2 templates that render data dynamically based on the model.
    - **Controller (`app.py`):** Handles routing and data passing from the model to the view.
- **Responsive Design:** Implemented using CSS Flexbox, Grid, and Media Queries to ensure compatibility across mobile, tablet, and desktop devices.
- **Custom CSS Variables:** Utilized for easy theme management (Light/Dark mode) through a centralized `:root` configuration.

## 4. Tools & Workflow
- **Development Environment:** VS Code / AI-Powered Coding Environment
- **Version Control:** Git & GitHub for source code management and collaboration.
- **Terminal:** Git Bash (MINGW64) for CLI operations.
- **Cloud Infrastructure:** Render.com for automated CI/CD (Continuous Integration / Continuous Deployment).

## 5. Deployment Methodology
1.  **Preparation:** Configured `requirements.txt` for dependency management and `Procfile` for the production start command (`gunicorn app:app`).
2.  **Versioning:** Initialized Git repository, configured remotes, and utilized `git push` patterns for code updates.
3.  **CI/CD Pipeline:** Connected GitHub repository to Render. 
    - **Build Command:** `pip install -r requirements.txt`
    - **Start Command:** `gunicorn app:app`
    - **Automated Deploy:** Every push to the `main` branch triggers an automated build and deployment on Render.

## 6. Key Learnings & Skillset
- Full-stack web development with Python/Flask.
- Cloud deployment and infrastructure management.
- Dynamic data rendering with templating engines.
- Frontend optimization and responsive styling.
