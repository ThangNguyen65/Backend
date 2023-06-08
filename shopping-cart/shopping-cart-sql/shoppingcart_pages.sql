CREATE TABLE `pages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `slug` varchar(45) NOT NULL,
  `content` text NOT NULL,
  `sorting` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `pages` VALUES (1,'Home','home','<h2><strong>Home Page</strong></h2><p>Home Page Text</p>',0),(19,'About Us','about-us','About Us',1),(20,'Services','services','<p>Services</p>',2),(21,'Disclaimer','disclaimer','<p><strong>Disclaimer Page</strong></p>',100);
