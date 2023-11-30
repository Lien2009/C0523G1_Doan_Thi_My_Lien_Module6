create database cs_sprint2;
use cs_sprint2;
create table `roles`(
id int primary key auto_increment,
`name` varchar(255),
is_deleted boolean default 0
);
create table users(
id int primary key auto_increment,
`name` varchar(255),
brithday date,
email varchar(255),
phone varchar(20),
user_name varchar(255),
`password` varchar(255),
role_id int,
is_deleted boolean default 0,
foreign key (role_id) references roles(id)
);
create table categories(
id int primary key auto_increment,
`name` varchar(255),
is_deleted boolean default 0
);
create table products(
id int primary key auto_increment,
`name` varchar(255),
price int,
image longtext,
`description` longtext,
quantity int,
category_id int,
is_deleted boolean default 0,
foreign key (category_id) references categories(id)
);
create table carts(
id int primary key auto_increment,
user_id int,
is_deleted boolean default 0,
foreign key (user_id) references users(id)
);
create table cart_details(
id int primary key auto_increment,
quantity int,
product_id int,
cart_id int,
is_deleted boolean default 0,
foreign key (cart_id) references carts(id),
foreign key (product_id) references products(id)
);
create table orders(
id int primary key auto_increment,
ord_date datetime,
address varbinary(255),
phone varchar(20),
receiver_name varchar(255),
total_price int,
cart_id int,
is_deleted boolean default 0,
foreign key (cart_id) references carts(id)
);
create table payments(
id int primary key auto_increment,
pay_date datetime,
method varchar(255),
cart_id int,
is_deleted boolean default 0,
foreign key (cart_id) references carts(id)
);
create table messages(
id int primary key auto_increment,
content longtext,
mess_date datetime,
user_id int,
admin_id int,
is_deleted boolean default 0,
foreign key (user_id) references users(id),
foreign key (admin_id) references users(id)
)
