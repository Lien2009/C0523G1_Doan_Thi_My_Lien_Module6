insert into categories (`name`) values ("Món Mới"),("Combo Nhóm"),("Combo 1 Người"),("Gà Rán"),("Hamburger"),("Nước uống"),("Thức ĂN Nhẹ"),("Cơm - Mì Ý");
insert into roles (`name`) values ("ADMIN"),("USER");
insert into users (user_name, `password`) 
values ("liendtm","123456"),
("hanhntm","123456"),
("quynp","123456");
insert into user_role (role_id, user_id) 
values (1,1),(1,2),(2,3);
insert into customers (address, birthday, email, `name`, phone, user_id)
values 
("1 Lê Duẩn", "2000-01-01","mylien@gmail.com","Mỹ Liên","0705995801",1),
("10 Lê Độ", "2001-01-01","myhanh@gmail.com","Mỹ Hạnh","0705995800",2),
("20 Bạch Đằng", "1998-01-01","quy@gmail.com","Phúc Qúy","0712345678",3);
insert into products (`description`, feedback_point, `name`,price,quantity,category_id, image)
values
("4 burger bò + 3 bánh khoai tây + 2 khoai tây chiên + 1 gà không xương + 1 gà cánh", 5, "Đông Vui", 350000, 20, 2, "https://i.pinimg.com/736x/a6/57/ce/a657ce8a148ceb7d5e7f9ac7006cf558.jpg"),
("4 burger bò + 2 khoai tây chiên", 5, "Hội Bạn", 250000, 20, 2, "https://i.pinimg.com/564x/ee/bf/dc/eebfdcc19b85d14e5cf65a7c716cba9b.jpg"),
("4 burger bò + 2 khoai tây chiên + 2 trà sữa", 5, "Đoàn Viên", 300000, 20, 2, "https://i.pinimg.com/564x/e0/56/4e/e0564e6e6ef6f209ac328553752cff63.jpg");
insert into orders (address, `name`, order_date, payment_status, phone, shipping_fees, total_price, user_id)
values
("1 Lê Duẩn", "Mỹ Liên", "2023-11-10 10:00:00", 0, "0705995801",0,350000,1),
("10 Lê Độ", "Mỹ Hạnh", "2023-11-10 00:00:00", 0, "0705995800",0,250000,2);
insert into order_detail (quantity, order_id, product_id)
values
(1,1,1),
(2,1,2);

 


