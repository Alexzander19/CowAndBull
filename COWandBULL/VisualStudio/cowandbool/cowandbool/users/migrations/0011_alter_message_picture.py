# Generated by Django 5.1.4 on 2025-04-01 01:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0010_alter_message_picture'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='picture',
            field=models.ImageField(blank=True, default='', null=True, upload_to='static/img'),
        ),
    ]
