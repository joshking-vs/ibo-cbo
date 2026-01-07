from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.core.mail import send_mail, EmailMessage
from django.conf import settings
from core.models import Organization, Service, Team
from api.serializers import OrganizationSerializer, ServiceSerializer, TeamSerializer


class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
    pagination_class = None


class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    pagination_class = None


class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    pagination_class = None


class ContactViewSet(viewsets.ViewSet):
    # The class starts here.
    # The methods must be indented by 4 spaces.

    @action(detail=False, methods=['post'])
    def send_message(self, request):
        # Everything inside the function must be indented further
        name = request.data.get('name')
        email = request.data.get('email')
        subject = request.data.get('subject')
        message = request.data.get('message')
        
        if not all([name, email, subject, message]):
            return Response(
                {'error': 'All fields are required'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        try:
            # Create the email object
            email_message = EmailMessage(
                subject=f"New Contact Form: {subject}",
                body=f"Name: {name}\nUser Email: {email}\n\nMessage:\n{message}",
                
                # 1. SENDER: The system (Must be verified domain or onboarding@resend.dev)
                from_email='onboarding@resend.dev',
                
                # 2. RECIPIENT: You
                to=['ibocbokenya@gmail.com'],
                
                # 3. REPLY-TO: The Visitor (This makes the Reply button work!)
                reply_to=[email]
            )
            email_message.send()
            
            return Response({'success': 'Message sent successfully'})
            
        except Exception as e:
            print(f"!!!!! EMAIL ERROR DETAIL !!!!!: {str(e)}")
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )