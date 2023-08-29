drop database if exists teitan_db;
create database teitan_db default character set utf8 collate utf8_general_ci;
grant all on teitan_db.* to 'administrator'@'localhost' identified by 'a1d2m3i4n5';
use teitan_db;


create table quiz_tbl(
    quiz_id int auto_increment primary key,
    title varchar(200) not null,
    problem varchar(200) not null,
    choices1 varchar(200) not null,
    choices2 varchar(200) not null,
    choices3 varchar(200) not null,
    choices4 varchar(200) not null,
    right_answer int not null,
    commentary varchar(200) not null,
    url varchar(200)
);

create table typing_tbl (
    typing_id int auto_increment primary key,
    sentence varchar(200) not null,
    sentence2 varchar(200) not null
);

create table ranking_tbl (
    ranking_id int auto_increment primary key,
    name varchar(200) not null,
    sucore int not null
);

