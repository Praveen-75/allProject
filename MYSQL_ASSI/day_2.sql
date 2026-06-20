use college;
select* from student;
alter table student add column Contact varchar(10) not null;
alter table student add column Enrollment varchar(15) not null;
update student 
set Contact =6265113353 where id = 2;
update student 
set Contact =7898247973 where id = 3;
update student 
set Contact =8718028100 where id = 4;
update student 
set Contact =6206233310 where id = 5;
update student 
set Contact =8815238981 where id = 6;
update student set Enrollment ='0501CS201096' where id = 2;
update student set Enrollment ='0501CS201100' where id = 3;
update student set Enrollment ='0501CS201063' where id = 4;
update student set Enrollment ='0501CS201079' where id = 5;
update student set Enrollment ='0501CS201080' where id = 6;
alter table student drop column Contact;


use lab;
select* from users;
delete from users where id IN(2,3);
insert into users value(6,'Priti','Chatterjee','smiling_priti',658,317,16,'null');
insert into users values(2,'Sandeep','Yadav','sandeepyadav.02',153,142,9),(3,'Nitesh','Yadav','niteshyavav.02',107,185,18);
insert into users values(4 ,'Satyam','Jaiswal','satyamjaiswal142',356,291,19),( 5,'Priya','Diwaker','priya_diwaker68',314,134,7);
alter table users add column Settings varchar(70);
alter table users rename column lastname to Last_Name;
update users 
set Posts =0 where id =1;
select* from users;