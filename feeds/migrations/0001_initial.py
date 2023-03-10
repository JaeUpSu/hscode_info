# Generated by Django 4.1.5 on 2023-02-21 09:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Feed",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=30)),
                ("subtitle", models.CharField(max_length=30)),
                ("contents", models.TextField(max_length=400)),
                ("info", models.CharField(max_length=60)),
                ("img", models.URLField(blank=True)),
            ],
        ),
    ]
