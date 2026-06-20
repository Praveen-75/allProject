#use hr;
#select sum(salary) and avg(salary) from employees;
#select min(salary) from employees;
#select max(salary) from employees;
#select* from employees order by last_name regexp '$3';
#use time ;
#create table user(id int primary key auto_increment , username varchar(50));
#insert into user values(default,'Praveen02'),(default,'Nitesh'),(default,'Sandeep');
#create table post(id int primary key auto_increment, user_id int , des varchar(255),foreign key (user_id) references user (id));
#insert into post values(default,1,'bade'),(default,1,'life is love'),(default,2,'kuch bhi');
use time;
#select u.id , u.username, p.id as post , p.des
#from post p join user u on p.user_id = u.id;
#select * from post ;
#select* from user;