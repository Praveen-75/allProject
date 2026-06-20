#use cm;
#select* from customers where country IN('USA','SPAIN','FRANCE');
#select count(country) from customers;
#select * from customers order by customerName limit 10;
#select * from customers  order by creditLimit desc;
#use hr;
#select first_name, last_name salary ,salary *2.5 from employees;
#select first_name, min(salary)from employees;
#select* from employees order by first_name limit 10,10;
#select* from employees where not state
