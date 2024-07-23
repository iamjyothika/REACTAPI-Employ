from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Employeemodel
from .serializers import EmployeeSerializer
from rest_framework import status

# Create your views here.
@api_view(['GET'])
def list(request):
    emp=Employeemodel.objects.all()
    emp_obj=EmployeeSerializer(emp,many=True)
    return Response(emp_obj.data)
@api_view(['GET'])
def get(request,id):
    try:
        emp = Employeemodel.objects.get(emp_id=id)
        emp_obj = EmployeeSerializer(emp, many=False)
        return Response(emp_obj.data,status=status.HTTP_200_OK)
    except Employeemodel.DoesNotExist:
        return Response({'error:emp not found'},status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def add(request):
    print(request.data)
    emp_obj=EmployeeSerializer(data=request.data)
    if emp_obj.is_valid():
        emp_obj.save()
        return Response(emp_obj.data,status=status.HTTP_201_CREATED)


@api_view(['PUT'])
def update(request,id):
    try:
        emp = Employeemodel.objects.get(emp_id=id)
        emp_obj = EmployeeSerializer(instance=emp, data=request.data,partial=True)
        if emp_obj.is_valid():
            emp_obj.save()
            return Response(emp_obj.data, status=status.HTTP_200_OK)
        return Response(emp_obj.errors, status=status.HTTP_400_BAD_REQUEST)
    except Employeemodel.DoesNotExist:
        return Response({'error:Not found'},status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
def delete(request,id):
    try:
        emp=Employeemodel.objects.get(emp_id=id)
        emp.delete()
        return Response({'message:emp deleted succesfully'},status=status.HTTP_204_NO_CONTENT)
    except Employeemodel.DoesNotExist:
        return Response({'error:Not found'}, status=status.HTTP_404_NOT_FOUND)





