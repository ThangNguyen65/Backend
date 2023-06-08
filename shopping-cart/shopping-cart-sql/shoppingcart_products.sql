CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `slug` varchar(45) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(45) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `category_id` int NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `category_id_fk` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `products` VALUES (1,'Apple','apple','Apple Apple','apples.jpg',1.99,2,'2023-01-18 14:08:39','2023-01-18 14:08:39'),(2,'Banana','banana','Banana Banana','grapes.jpg',2.19,2,'2023-01-18 14:20:36','2023-01-18 17:47:17'),(6,'Water melon','water-melon','Water melon','kiwi.jpg',2.98,2,'2023-01-19 05:32:54','2023-01-19 05:33:10'),(7,'Black Shirt','black-shirt','Black Shirt','black shirt.jpg',1.99,4,'2023-01-19 05:49:42','2023-01-19 05:49:42'),(8,'Blue Shirt','blue-shirt','Blue Shirt','blue shirt.jpg',0.99,4,'2023-01-19 05:50:24','2023-01-19 05:50:24'),(11,'Grape Fruit','grape-fruit','Grape Fruit','grapefruit.jpg',2.99,2,'2023-01-19 06:31:34','2023-01-19 06:31:34'),(12,'Yellow Shirt','yellow-shirt','<p><i><strong>White Shirt</strong></i></p>','yellow shirt.jpg',1.99,4,'2023-01-22 06:07:36','2023-01-22 06:09:18');
