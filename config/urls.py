from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from api.views import OrganizationViewSet, ServiceViewSet, TeamViewSet, ContactViewSet

router = DefaultRouter()
router.register(r'organization', OrganizationViewSet, basename='organization')
router.register(r'services', ServiceViewSet, basename='services')
router.register(r'team', TeamViewSet, basename='team')
router.register(r'contact', ContactViewSet, basename='contact')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

# Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)