-- CREATE TABLE users (
-- user_id SERIAL PRIMARY KEY,
-- username VARCHAR(255),
-- password VARCHAR(255),
-- first_name VARCHAR(255),
-- last_name VARCHAR(255),
-- email VARCHAR(255),
-- image_url VARCHAR(2000)
-- );

-- CREATE TABLE posts (
-- post_id SERIAL PRIMARY KEY,
-- user_id INT NOT NULL REFERENCES users (user_id) ON DELETE CASCADE,
-- post VARCHAR(3000),
-- date DATE,
-- likes INTEGER
-- );

-- CREATE TABLE comments (
-- comment_id SERIAL PRIMARY KEY,
-- post_id INT NOT NULL REFERENCES posts (post_id) ON DELETE CASCADE,
-- user_id INT NOT NULL REFERENCES users (user_id) ON DELETE CASCADE,
-- comment VARCHAR(2500)
-- );

-- INSERT INTO posts (post_id,user_id,post,date,likes)
-- VALUES(1,2,'Can someone get their goats off Hwy 19? They are blocking traffic','2023-05-29',1),
-- (2,3,'Did anyone else hear that loud bang?','2023-05-29',1),
-- (3,4,'Come see me at Trade days next weekend. I will have tons of items for sale including my one of a kind paintings.','2023-05-29',1)
-- (4,6,'Does anyone know is Brookshires sells pup cups?','2023-05-29',1),
-- (5,7,'Can someone help me find my dog? I let it out in the backyard like normal and when I came back to let her in she was gone. Please help my parents are gonna flip out!','2023-05-29',1),
-- (10,47,'I am the best talk show host ever! ','2023-05-29',1),
-- (15,10,'Quack','2023-05-29',50),
-- (29,55,'I am getting the impression that making this site was easy for you, which is incredible. I am so definitely coming to you for help with React. Brooklyn and others were having trouble figuring out how to deploy React apps to EC2, so I pointed her in your direction.','2023-06-03',0),
-- (21,27,'Here is another test post','2023-05-30',9),
-- (27,27,'Hey, this is my post, lol.','2023-06-01',2),
-- (25,6,'My owners have not been feeding me people food. Someone please come and get me. Call for help. I cannot live with them anymore.','2023-05-30',3),
-- (28,27,'New post lolz','2023-06-01',3);

-- INSERT INTO users (user_id,username,password,first_name,last_name,email,image_url)
-- VALUES (35,'username','helloworld','firstname','lastname','email@yahoo.com','https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/331728302_1325976717966169_8983255470881862840_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=cpRg3ER5zfcAX8bQ4Pu&_nc_ht=scontent-dfw5-2.xx&oh=00_AfBmCqVOYBejOWdwG_VOMpEI7jRfARzkHTqi1o55t9dRCw&oe=6475B627'),
-- (47,'getoffmystage','steeeve','Steve','Wilkos",'thesteve@yahoo.com','https://s.hdnux.com/photos/70/76/12/14934719/42/1200x0.jpg'),
-- (3,'RandyH','huh123','Randy','Hickey','whatsanemail@email.com','https://static1.personality-database.com/profile_images/44bb6bdb8bfd481fa55e2d480ff345f2.png'),
-- (4,'I<3Ranch','condiment','Bayli','Foster','email@email.com','https://drive.google.com/uc?export=download&id=1XcJJ1TDZXer3H6sHsCmP5Eym-6jKkbfn'),
-- (10,'Scovy4Lyfe','potato','Ronald','Swanson','ducklife@gmail.com','https://drive.google.com/uc?export=download&id=11c8guY_HjSZ5zrGmwVw903sddjuad3tQ'),
-- (1,'JFawstur','password','Jaclyn','Foster','jaclynfoster89@gmail.com','https://drive.google.com/uc?export=download&id=1J27QaS6QUnF8iLGr94d0KDbdXpo7OtAp'),
-- (6,'hotdog3000','foodplz','Marley','Guttenheim','ibarkatair@gmail.com','https://drive.google.com/uc?export=download&id=10VKsoemAVzy0NAhGUcxavddyPs-HMCGs'),
-- (5,'cracklebug','books','Kinsley','Shahan','dramashows@yahoo.com','https://drive.google.com/uc?export=download&id=1oBUvVRO2KDPDfpPh9LhTIRPjqViFKK7t'),
-- (7,'susssonic','likesonic','Atlas','Morpheus','sonicisstillcool@ymail.com','https://drive.google.com/uc?export=download&id=14_0A4JA5Is01m62L_wHQixsiG6e0oYDQ'),
-- (27,'asdf','asdf','fasdf','asdf','asdf','https://drive.google.com/uc?export=download&id=159flVC18yUQVWjw5ZwAHIuHZg4noL8xh'),
-- (2,'CDubs','pword','Chris','Foster','chriswf@gmail.com','https://drive.google.com/uc?export=download&id=1NPVJqXkb32JAgk9TzroP9iLG6mhatV97'),
-- (53,'CrazyChickenLady','bawkbawk','Thelma','Brahma','fuzzyfeet@chickens.com','https://drive.google.com/uc?export=download&id=12m2Lpu9-kYfVa4BjhJXVGEO4pQYiA9l_'),
-- (55,'Austin",'password','Austin','Henrie','nitsua15@gmail.com','https://images.squarespace-cdn.com/content/v1/5a2edb9480bd5ee0a2fbf7dd/1602814834277-WVAE9F1SQLX62W6GWR8G/TDYFA+COVER+ART+FINAL+1500.jpg')

-- INSERT INTO comments (comment_id,post_id,user_id,comment)
-- VALUES (1,1,1,'Those are my goats! Please do not hit my babies!'),
-- (2,1,2,'I left them in my backyard so come get them asap please'),
-- (3,1,3,'What are goats?'),
-- (4,2,5,'I think you are just imagining things again.'),
-- (5,2,7,'I heard it too!'),
-- (6,4,4,'Yes they are in the icecream section'),
-- (7,5,2,'Silly goose you should know to protect your pets before first monday rolls around.'),
-- (8,3,5,'No'),
-- (9,5,10,'This is true. They tried to take me once but I got away. This muscovy will not be taken hostage.'),
-- (31,10,2,'Steeeeve!!!!'),
-- (32,9,27,'Well this is awkward...'),
-- (33,10,27,'We love you Steve!'),
-- (34,10,47,'Aw you guys are the best!'),
-- (35,15,27,'blah blah blah'),
-- (37,21,27,'Post,post,post. We are excited! We are laughing! '),
-- (38,4,27,'Do they also sell frogs?'),
-- (39,3,27,'Do you sell any frogs?'),
-- (40,21,10,'Yay for posts working!'),
-- (41,15,6,'Do not speak raptor to me!'),
-- (42,1,6,'Here is my super awesome comment'),
-- (43,25,53,'You should search the backyard there is tons of things to eat out there. I love the worms and grass.'),
-- (44,4,53,'What about mealworms?'),
-- (47,27,27,'This is my comment lol'),
-- (48,27,27,'Another comment.'),
-- (49,28,27,'my commentzor'),
-- (50,29,55,'Just sent you a Discord message!');