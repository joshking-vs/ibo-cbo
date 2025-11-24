from django.contrib import admin
from .models import Organization, Service, Team


@admin.register(Organization)
class OrganizationAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone')
    fields = ('name', 'mission', 'vision', 'phone', 'email', 'address')


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'order')
    list_editable = ('order',)
    fields = ('title', 'description', 'icon', 'order')
    ordering = ('order',)


@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('name', 'position')
    fields = ('name', 'position', 'bio', 'image')
    search_fields = ('name', 'position')