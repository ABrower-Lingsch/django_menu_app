# Generated by Django 4.1.2 on 2022-10-11 21:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menuitems', '0002_rename_menuitems_menuitem'),
    ]

    operations = [
        migrations.AddField(
            model_name='menuitem',
            name='type',
            field=models.CharField(max_length=255, null=True),
        ),
    ]