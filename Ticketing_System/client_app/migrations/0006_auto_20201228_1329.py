# Generated by Django 3.1.4 on 2020-12-28 07:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client_app', '0005_usermodel_registeredat'),
    ]

    operations = [
        migrations.RenameField(
            model_name='usermodel',
            old_name='registeredat',
            new_name='timestamp',
        ),
        migrations.AddField(
            model_name='usermodel',
            name='updated',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
