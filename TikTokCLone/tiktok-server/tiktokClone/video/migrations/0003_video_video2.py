# Generated by Django 4.1.6 on 2023-02-16 20:21

import cloudinary.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('video', '0002_alter_video_video'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='video2',
            field=cloudinary.models.CloudinaryField(blank=True, max_length=255, null=True, verbose_name='video'),
        ),
    ]