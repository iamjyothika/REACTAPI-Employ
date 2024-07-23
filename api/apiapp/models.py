from django.db import models

# Create your models here.


# Create your models here.
class Employeemodel(models.Model):
    emp_id=models.AutoField(primary_key=True)
    emp_name=models.CharField(max_length=20)
    emp_phone=models.CharField(max_length=20)
    emp_place=models.CharField(max_length=25)
    emp_image=models.ImageField(upload_to='images',null=True)

    def __str__(self):
        return self.emp_name
