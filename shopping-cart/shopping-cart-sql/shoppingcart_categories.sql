CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `slug` varchar(45) NOT NULL,
  `sorting` int NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `categories` VALUES (2,'Fruits','fruits',1),(4,'T-shirt','t-shirt',100),(5,'Electronics','electronics',100);
