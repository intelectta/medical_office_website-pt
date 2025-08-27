from flask import Blueprint, jsonify, request
from src.models.contact import Contact, db

contact_bp = Blueprint('contact', __name__)

@contact_bp.route('/contact', methods=['POST'])
def submit_contact():
    """Handle contact form submissions"""
    data = request.json
    
    # Validate required fields
    required_fields = ['name', 'email', 'message']
    for field in required_fields:
        if not data.get(field):
            return jsonify({'error': f'{field} is required'}), 400
    
    contact = Contact(
        name=data['name'],
        email=data['email'],
        phone=data.get('phone', ''),
        message=data['message']
    )
    
    db.session.add(contact)
    db.session.commit()
    
    return jsonify({
        'message': 'Contact form submitted successfully',
        'id': contact.id
    }), 201

@contact_bp.route('/contact', methods=['GET'])
def get_contacts():
    """Get all contact submissions (for admin use)"""
    contacts = Contact.query.order_by(Contact.created_at.desc()).all()
    return jsonify([contact.to_dict() for contact in contacts])

@contact_bp.route('/contact/<int:contact_id>', methods=['GET'])
def get_contact(contact_id):
    """Get a specific contact submission"""
    contact = Contact.query.get_or_404(contact_id)
    return jsonify(contact.to_dict())

