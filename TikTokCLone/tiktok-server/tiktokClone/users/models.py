from django.contrib.auth.models import AbstractUser
from django.db import models
import os

def get_file_path(instance, filename):
   ext = filename.split('.')[-1]
   filename = "%s.%s" % (instance.id, ext)
   return os.path.join('avatar/', filename)

class User(AbstractUser):
   email = models.EmailField(unique=True)
   avatar = models.ImageField(upload_to=get_file_path, blank=True)
   description = models.TextField(blank=True,max_length=100)
   website = models.TextField(blank=True,max_length=100)
   instragram = models.TextField(blank=True,max_length=100)
   


