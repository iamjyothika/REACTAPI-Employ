from rest_framework import serializers
from .models import Employeemodel
class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Employeemodel
        fields="__all__"