use cm;
#select* from customers where customerName regexp 'd$';
#select* from customers where creditLimit between 100000 and 2000000;
#select* from customers where customername  regexp '^a[us]'; 
#select count(distinct country) from customers;
#select min (craditlimit)from customers;
#select name, salary from employees order by salary limit 1;