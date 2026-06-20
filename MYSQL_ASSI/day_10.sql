#use time;
#select * from user;
#select* from post;
#select p.id , u.username , p.des from user u inner join post p on p.user_id = u.id
use cm;
#select c.customernumber, c.customername, o.ordernumber from customers c join orders o on c.customernumber = o.customernumber order by o.ordernumber;
#select c.customernumber, c.customername, o.ordernumber from customers c left join orders o on c.customernumber = o.customernumber order by o.ordernumber;
#select c.customernumber, c.customername, count(o.ordernumber)as total_order from customers c left join orders o on c.customernumber = o.customernumber 
#group by(c.customernumber);

#select ordernumber, sum(quantityOrdered* priceEach) as total_sales from cm.orderdetails group by ordernumber;

