# Generated by Django 4.1.6 on 2023-02-13 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_user_avatar_alter_user_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='description',
            field=models.TextField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='user',
            name='instragram',
            field=models.TextField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='user',
            name='website',
            field=models.TextField(blank=True, max_length=100),
        ),
    ]
