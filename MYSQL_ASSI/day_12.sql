-- use lab;
-- select* from users;
-- use college;
-- select* from student;
-- use cm;
-- select* from customers;
-- use dummy;
-- select* from customers;
-- use hr;
-- select* from employees; 
-- use lab;
-- select* from users;
-- create database library;-- 
use library;
select* from issued_books;
select* from books;
CREATE TABLE `books` (
`bid` int(11) NOT NULL AUTO_INCREMENT,
`book_isbn` varchar(40) NOT NULL,
`book_name` varchar(50) NOT NULL,
`book_publisher` varchar(50) NOT NULL,
`book_edition` varchar(50) NOT NULL,
`book_genre` varchar(20) NOT NULL,
`book_price` int(11) NOT NULL,
`book_pages` int(11) NOT NULL,
PRIMARY KEY (`bid`)
);
select* from issued_books;
CREATE TABLE `issued_books` (
`IID` int(11) NOT NULL AUTO_INCREMENT,
`UID` int(11) NOT NULL,
`BID` int(11) NOT NULL,
`ISSUED_DATE` varchar(20) NOT NULL,
`PERIOD` int(11) NOT NULL,
PRIMARY KEY (`IID`),
KEY `UID` (`UID`),
KEY `BID` (`BID`),
CONSTRAINT `issued_books_ibfk_2` FOREIGN KEY (`BID`) REFERENCES `books` (`bid`),
CONSTRAINT `issued_books_ibfk_1` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`)
);
select* from returned_books;
CREATE TABLE `returned_books` (
`rid` int(11) NOT NULL AUTO_INCREMENT,
`bid` int(11) NOT NULL,
`uid` int(11) NOT NULL,
`return_date` varchar(50) NOT NULL,
`fine` int(11) NOT NULL DEFAULT '0',
PRIMARY KEY (`rid`),
KEY `uid` (`uid`),
KEY `bid` (`bid`),
CONSTRAINT `returned_books_ibfk_2` FOREIGN KEY (`bid`) REFERENCES `books` (`bid`),
CONSTRAINT `returned_books_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`UID`)
);
CREATE TABLE `users` (
`UID` int(11) NOT NULL AUTO_INCREMENT,
`USERNAME` varchar(30) NOT NULL,
`PASSWORD` varchar(30) NOT NULL,
`USER_TYPE` int(11) NOT NULL,
PRIMARY KEY (`UID`)
);
select* from users;
delete from users where UID = 5;
use library;
insert users value(default,"Praveen","12345",1);
-- INSERT INTO USERS(USERNAME,PASSWORD,USER_TYPE) VALUES ("admin","admin",1)
