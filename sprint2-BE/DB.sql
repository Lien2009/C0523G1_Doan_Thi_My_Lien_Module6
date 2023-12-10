insert into categories (`name`,image) values 
("Món Mới","https://i.pinimg.com/564x/a1/18/31/a11831f59e254ea5d2bf4bb970f4eb56.jpg"),
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
("4 burger bò + 2 khoai tây chiên + 2 trà sữa", "Đoàn Viên", 300000, 20, 2, "https://i.pinimg.com/564x/e0/56/4e/e0564e6e6ef6f209ac328553752cff63.jpg");
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

 


