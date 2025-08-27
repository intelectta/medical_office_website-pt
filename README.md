# Mindful Wellness Psychology Office Website

A professional psychology office website built with Flask backend and React frontend.

## Features

- **Professional Design**: Modern, calming design suitable for a psychology practice
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Contact Form**: Functional contact form with backend API integration
- **Services Display**: Dynamic services loaded from backend API
- **Interactive FAQ**: Accordion-style frequently asked questions
- **About Section**: Professional therapist biography and credentials

## Technology Stack

### Backend (Flask)
- Python Flask web framework
- SQLAlchemy for database management
- SQLite database
- Flask-CORS for cross-origin requests
- RESTful API endpoints

### Frontend (React + Vite)
- React 18 with modern hooks
- Vite for fast development and building
- Tailwind CSS for styling
- Shadcn/ui components
- Lucide React icons
- Responsive design

## API Endpoints

- `GET /api/services` - Retrieve all available services
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve contact submissions (admin)

## Setup Instructions

### Backend Setup
1. Navigate to the project directory
2. Create and activate virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Flask server:
   ```bash
   python src/main.py
   ```

### Frontend Development
The frontend is built and served from the Flask static directory. To modify the frontend:

1. Install Node.js dependencies (if making changes):
   ```bash
   npm install
   ```
2. Make changes to frontend_src files
3. Build the frontend:
   ```bash
   npm run build
   ```
4. Copy built files to src/static/

## Deployment

The application is configured to run on any platform that supports Python Flask applications. The frontend is served as static files from the Flask application.

## Database

The application uses SQLite database with the following models:
- **User**: Basic user management
- **Contact**: Contact form submissions

## Security Features

- CORS configured for cross-origin requests
- Input validation on contact forms
- SQL injection protection via SQLAlchemy ORM

## License

This project is created for educational and professional use.

## Contact

For questions about this website, please use the contact form on the website or reach out directly.

