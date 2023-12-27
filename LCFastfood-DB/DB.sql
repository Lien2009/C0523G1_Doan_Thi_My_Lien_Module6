create database lcfastfood;
use lcfastfood;

create table roles(
id int primary key auto_increment,
name varchar(255),
is_deleted boolean default 0
);
create table users(
id int primary key auto_increment,
user_name varchar(255),
`password` varchar(255),
is_deleted boolean default 0
);
create table user_role(
id int primary key auto_increment,
role_id int,
user_id int,
foreign key(role_id) references roles(id),
foreign key(user_id) references users(id)
);
create table customers(
id int primary key auto_increment,
address varchar(255),
birhday varchar(255),
email varchar(255),
`name` varchar(255),
`phone` varchar(255),
user_id int,
foreign key(user_id) references users(id),
is_deleted boolean default 0
);
create table categories(
id int primary key auto_increment,
`name` varchar(255),
`image` longtext,
is_deleted boolean default 0
);
create table products(
id int primary key auto_increment,
`name` varchar(255),
`image` longtext,
`description` longtext,
price int,
quantity int,
category_id int,
foreign key(category_id) references categories(id),
is_deleted boolean default 0
);
create table cart(
id int primary key auto_increment,
quantity int,
product_id int,
user_id int,
foreign key(product_id) references products(id),
foreign key(user_id) references users(id)
);
create table orders(
id int primary key auto_increment,
`name` varchar(255),
`address` varchar(255),
order_date datetime,
payment_status int,
phone int,
total_price int,
user_id int,
foreign key(user_id) references users(id),
is_deleted boolean default 0
);
create table order_detail(
id int primary key auto_increment,
feedback_status int,
price int,
quantity int,
order_id int,
product_id int,
foreign key(order_id) references orders(id),
foreign key(product_id) references products(id),
is_deleted boolean default 0
);


insert into categories (`name`,image) values 
("Món Bán Chạy","https://i.pinimg.com/564x/a1/18/31/a11831f59e254ea5d2bf4bb970f4eb56.jpg"),
("Combo Nhóm","https://i.pinimg.com/564x/00/f4/c6/00f4c60d0fe32c4865328b56c1539c1f.jpg"),
("Combo 1 Người","https://i.pinimg.com/564x/b8/e1/0b/b8e10be36c13c5c535a119451ef5ccb0.jpg"),
("Gà Rán","https://i.pinimg.com/564x/85/ea/8d/85ea8db41e649d03366989d59b3029df.jpg"),
("Hamburger","https://i.pinimg.com/564x/f6/78/b9/f678b90a2130ed3824894bea34eff167.jpg"),
("Nước Uống - Kem","https://i.pinimg.com/564x/b1/de/5b/b1de5bb1f125419d3cfe91c07a59f35d.jpg"),
("Thức ĂN Nhẹ","https://i.pinimg.com/564x/6f/a2/10/6fa210182439001a09ad40a95e5bbe6e.jpg"),
("Cơm - Mì Ý","https://i.pinimg.com/564x/3e/25/76/3e25765d00d7b9a97403b9ac34ac4da2.jpg");
insert into roles (`name`) values ("ADMIN"),("USER");
insert into users (user_name, `password`) 
values ("liendtm","$2a$10$x6LfETPWZFvz6iZ6.R73PurqJxU81mvnzDadmIHLAby0wPj9KSXzW"),
("hanhntm","$2a$10$x6LfETPWZFvz6iZ6.R73PurqJxU81mvnzDadmIHLAby0wPj9KSXzW"),
("quynp","$2a$10$x6LfETPWZFvz6iZ6.R73PurqJxU81mvnzDadmIHLAby0wPj9KSXzW");
insert into user_role (role_id, user_id) 
values (1,1),(1,2),(2,3);
insert into customers (address, birthday, email, `name`, phone, user_id)
values 
("1 Lê Duẩn", "2000-01-01","mylien@gmail.com","Mỹ Liên","0705995801",1),
("10 Lê Độ", "2001-01-01","myhanh@gmail.com","Mỹ Hạnh","0705995800",2),
("20 Bạch Đằng", "1998-01-01","quy@gmail.com","Phúc Qúy","0712345678",3);
insert into products (`description`, `name`,price,quantity,category_id, image)
values
("2 burger gà + 2 khoai tây chiên + 1 gà không xương + 2 coca", "Nhộn Nhịp", 380000, 20, 2, "https://i.pinimg.com/564x/f6/61/6d/f6616d6605cc78fbe4e343cbce70d73f.jpg"),
("8 burger bò + 5 khoai tây chiên + 2 gà không xương", "Xôm Tụ", 500000, 20, 2, "https://i.pinimg.com/564x/67/22/69/672269495411989d755b7659c36ca93e.jpg"),
("8 burger bò + 5 khoai tây chiên + 2 gà không xương", "Xôm Tụ", 500000, 20, 2, "https://i.pinimg.com/564x/67/22/69/672269495411989d755b7659c36ca93e.jpg"),
("8 burger bò + 5 khoai tây chiên + 2 gà không xương", "Xôm Tụ", 500000, 20, 2, "https://i.pinimg.com/564x/67/22/69/672269495411989d755b7659c36ca93e.jpg"),
("8 burger bò + 5 khoai tây chiên + 2 gà không xương", "Xôm Tụ", 500000, 20, 2, "https://i.pinimg.com/564x/67/22/69/672269495411989d755b7659c36ca93e.jpg"),
("8 burger bò + 5 khoai tây chiên + 2 gà không xương", "Xôm Tụ", 500000, 20, 2, "https://i.pinimg.com/564x/67/22/69/672269495411989d755b7659c36ca93e.jpg"),
("1 burger gà + 4 khoai tây chiên + 6 cánh gà", "Vui Nhộn", 280000, 20, 2, "https://i.pinimg.com/564x/82/8b/52/828b52ef8a703d012f02cc77c2983a68.jpg"),
("4 burger bò + 3 bánh khoai tây + 2 khoai tây chiên + 1 gà không xương + 1 gà cánh", "Đông Vui", 350000, 20, 2, "https://i.pinimg.com/736x/a6/57/ce/a657ce8a148ceb7d5e7f9ac7006cf558.jpg"),
("4 burger bò + 2 khoai tây chiên", "Hội Bạn", 250000, 20, 2, "https://i.pinimg.com/564x/ee/bf/dc/eebfdcc19b85d14e5cf65a7c716cba9b.jpg"),
("4 burger bò + 2 khoai tây chiên + 2 trà sữa", "Đoàn Viên", 300000, 20, 2, "https://i.pinimg.com/564x/e0/56/4e/e0564e6e6ef6f209ac328553752cff63.jpg"),
("1 burger gà + 1 khoai tây chiên + 1 coca", "Lẻ Loi", 900000, 20, 3, "https://i.pinimg.com/564x/df/0b/65/df0b65e961fe40d4ce03d62ca736a08b.jpg"),
("1 burger bò + 1 khoai tây chiên + 1 coca", "Một Mình", 80000, 20, 3, "https://i.pinimg.com/564x/6a/a1/50/6aa150ac5418a136fa9fd4a455f4c47b.jpg"),
("1 burger cá + 1 khoai tây chiên + 1 coca + 1 Kem", "Ờ lon", 95000, 20, 3, "https://i.pinimg.com/564x/34/8a/52/348a52ccdd7bfedbb708c6d6542ef96b.jpg"),
("1 burger bò + 1 cá chiên + 1 coca ", "Cô Đơn", 100000, 20, 3, "https://i.pinimg.com/564x/8f/ec/74/8fec7465938176b47324c80423e71a56.jpg"),
("3 cánh gà cay + 1 khoai tây chiên ", "Mình Tui", 120000, 20, 3, "https://i.pinimg.com/564x/f6/19/ee/f619ee7b6fc200e9184e159c8638a57d.jpg"),
("2 miếng gà sốt chanh dây giòn rụm", "Gà Sốt Chanh", 60000, 20, 4, "https://i.pinimg.com/564x/09/36/af/0936afdf0a4a62776c5e3cf845133117.jpg"),
("4 miếng gà không xương không cay", "Gà Không Xương", 100000, 20, 4, "https://i.pinimg.com/564x/86/17/60/8617609ec5ab66200bd3b94ef860f667.jpg"),
("4 miếng gà sốt đậu", "Gà Sốt Đậu", 120000, 20, 4, "https://i.pinimg.com/564x/71/04/c9/7104c9c10246850149dd636369a6a748.jpg"),
("4 miếng gà không xương sốt phomai", "Gà Không Xương Sốt Phomai", 90000, 20, 4, "https://i.pinimg.com/564x/b0/95/f3/b095f340d94495fee8af91a66e067311.jpg");
insert into feedbacks(`point`, product_id)
values (5,1),(5,2);
insert into orders (address, `name`, order_date, payment_status, phone, total_price, user_id)
values
("1 Lê Duẩn", "Mỹ Liên", "2023-11-10 10:00:00", 0, "0705995801",850000,1),
("10 Lê Độ", "Mỹ Hạnh", "2023-11-10 00:00:00", 0, "0705995800",250000,2);
insert into order_detail (quantity, order_id, product_id)
values
(1,1,1),
(2,1,2);
insert into cart (quantity, user_id, product_id)
values
(1,1,1),
(2,1,2);

 


