# Generated by Django 3.1.4 on 2020-12-29 06:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('client_app', '0007_answermodel'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='UserModel',
            new_name='QueryModel',
        ),
    ]