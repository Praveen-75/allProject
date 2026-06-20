#use hr;
#select  first_name, salary from hr.employees where salary = (select min(salary)from hr.employees);
#use cm;
#select customername, country,
#case 
#when country = 'INDIA' then 'IN'
#when country = 'use' then 'u'
#else 'some text'
#end from customers;
#alter table post modify column location int;
