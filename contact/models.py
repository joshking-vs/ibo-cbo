from django.db import models

class Organization(models.Model):
    name = models.CharField(max_length=200)
    mission = models.TextField()
    vision = models.TextField()
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    address = models.TextField()
    
    class Meta:
        verbose_name_plural = "Organization"
    
    def __str__(self):
        return self.name

class Service(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon = models.CharField(max_length=50)  # Bootstrap icon name
    
    def __str__(self):
        return self.title

class Team(models.Model):
    name = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    bio = models.TextField()
    image = models.ImageField(upload_to='team/')
    
    def __str__(self):
        return self.name