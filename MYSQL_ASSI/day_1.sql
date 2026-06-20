 #create database college;
 use college;
 select* from student;
 UPDATE student
 SET name = 'PRITI',
 sem = 3,
 email = 'priti123@gmail.com',
 city = 'BHOPAL',
 score = 18
 where id = 5;
 update student 
 set city = 'INDORE'
 where id = 1;
# insert into student value(6,'PRIYA',3,'pri234ya@2345','BHOPAL',19);
 select* from student where score = 19;
 select* from student where not score = 19;
 select* from student where not city IN('BHOPAL');
# set sql_safe_updates = 0;