from flask import Blueprint, jsonify

services_bp = Blueprint('services', __name__)

@services_bp.route('/services', methods=['GET'])
def get_services():
    """Get all available services"""
    services = [
        {
            'id': 1,
            'title': 'Individual Therapy',
            'description': 'One-on-one sessions to address personal challenges, mental health concerns, and personal growth.',
            'duration': '50 minutes',
            'price': '$120 per session'
        },
        {
            'id': 2,
            'title': 'Couples Therapy',
            'description': 'Relationship counseling to improve communication, resolve conflicts, and strengthen bonds.',
            'duration': '60 minutes',
            'price': '$150 per session'
        },
        {
            'id': 3,
            'title': 'Family Therapy',
            'description': 'Family-focused sessions to address family dynamics, communication issues, and behavioral concerns.',
            'duration': '60 minutes',
            'price': '$160 per session'
        },
        {
            'id': 4,
            'title': 'Group Therapy',
            'description': 'Small group sessions focusing on specific topics like anxiety, depression, or life transitions.',
            'duration': '90 minutes',
            'price': '$60 per session'
        },
        {
            'id': 5,
            'title': 'Cognitive Behavioral Therapy (CBT)',
            'description': 'Evidence-based approach focusing on changing negative thought patterns and behaviors.',
            'duration': '50 minutes',
            'price': '$120 per session'
        },
        {
            'id': 6,
            'title': 'Mindfulness-Based Therapy',
            'description': 'Incorporating mindfulness techniques to reduce stress, anxiety, and improve emotional regulation.',
            'duration': '50 minutes',
            'price': '$120 per session'
        }
    ]
    
    return jsonify(services)

@services_bp.route('/services/<int:service_id>', methods=['GET'])
def get_service(service_id):
    """Get a specific service by ID"""
    services = [
        {
            'id': 1,
            'title': 'Individual Therapy',
            'description': 'One-on-one sessions to address personal challenges, mental health concerns, and personal growth.',
            'duration': '50 minutes',
            'price': '$120 per session',
            'details': 'Individual therapy provides a safe, confidential space to explore your thoughts, feelings, and behaviors. We work together to identify patterns, develop coping strategies, and achieve your personal goals.'
        },
        {
            'id': 2,
            'title': 'Couples Therapy',
            'description': 'Relationship counseling to improve communication, resolve conflicts, and strengthen bonds.',
            'duration': '60 minutes',
            'price': '$150 per session',
            'details': 'Couples therapy helps partners improve their relationship by enhancing communication skills, resolving conflicts constructively, and rebuilding trust and intimacy.'
        },
        {
            'id': 3,
            'title': 'Family Therapy',
            'description': 'Family-focused sessions to address family dynamics, communication issues, and behavioral concerns.',
            'duration': '60 minutes',
            'price': '$160 per session',
            'details': 'Family therapy addresses the complex dynamics within family systems, helping members communicate more effectively and resolve conflicts that affect the entire family unit.'
        },
        {
            'id': 4,
            'title': 'Group Therapy',
            'description': 'Small group sessions focusing on specific topics like anxiety, depression, or life transitions.',
            'duration': '90 minutes',
            'price': '$60 per session',
            'details': 'Group therapy provides peer support and shared learning experiences. Participants benefit from hearing others\' perspectives and knowing they are not alone in their struggles.'
        },
        {
            'id': 5,
            'title': 'Cognitive Behavioral Therapy (CBT)',
            'description': 'Evidence-based approach focusing on changing negative thought patterns and behaviors.',
            'duration': '50 minutes',
            'price': '$120 per session',
            'details': 'CBT is a structured, goal-oriented therapy that helps identify and change negative thought patterns and behaviors that contribute to emotional distress and mental health issues.'
        },
        {
            'id': 6,
            'title': 'Mindfulness-Based Therapy',
            'description': 'Incorporating mindfulness techniques to reduce stress, anxiety, and improve emotional regulation.',
            'duration': '50 minutes',
            'price': '$120 per session',
            'details': 'Mindfulness-based therapy combines traditional therapeutic approaches with mindfulness practices to help you develop greater awareness, acceptance, and emotional regulation skills.'
        }
    ]
    
    service = next((s for s in services if s['id'] == service_id), None)
    if service:
        return jsonify(service)
    else:
        return jsonify({'error': 'Service not found'}), 404

