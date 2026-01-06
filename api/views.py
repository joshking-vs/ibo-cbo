from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.core.mail import send_mail
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
    @action(detail=False, methods=['post'])
    def send_message(self, request):
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
            send_mail(
                subject=f"New Contact Form: {subject}",
                message=f"From: {name}\nEmail: {email}\n\n{message}",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=['ibocbokenya@gmail.com'],
                fail_silently=False,
            )
            return Response({'success': 'Message sent successfully'})
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )