# Generated by Django 3.1.4 on 2021-01-04 10:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('client_app', '0009_auto_20201229_1855'),
    ]

    operations = [
        migrations.RenameField(
            model_name='querymodel',
            old_name='username',
            new_name='ellaborate',
        ),
    ]