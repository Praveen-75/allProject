#SELECT TIMESTAMP '2021-08-09 13:57:40';
#use hr;
#select employee_id ,first_name , last_name from employees 
#where employee_id IN( select distinct 110 from employees);
#select * from employees;
#use cm;
#select customerName , creditLimit from customers;
#select customerName, creditLimit
#from customers
#where creditLimit <
#(select CreditLimit
#from customers
#where city = 'nyc') order by CreditLimit;
#select* from customers;
#use cm;
#select country,count(country) from customers where  country IN('');
#select* from customers;
#select* from customers order by country desc