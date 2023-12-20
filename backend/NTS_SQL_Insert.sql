CREATE DATABASE  IF NOT EXISTS `nts` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `nts`;

--
-- Table structure for table `documents`
--

DROP TABLE IF EXISTS `documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documents` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `data` varchar(10000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documents`
--

LOCK TABLES `documents` WRITE;
/*!40000 ALTER TABLE `documents` DISABLE KEYS */;
INSERT INTO `documents` VALUES (1,'Mitt dokument','Ett eget dokument','<h2>Det fanns en g&aring;ng en liten h&auml;st som hette Kalle</h2>\n<p>Han hade det bra p&aring; de<span style=\"color: rgb(0, 0, 0);\">n stor<span style=\"background-color: rgb(255, 255, 255);\">a gr&ouml;na </span>&auml;ngen d&auml;r han sprang fritt.</span></p>'),(2,'Ett annat dokument','Ett dokument med lite tankar','<h4 style=\"text-align: left;\"><span style=\"font-family: \'comic sans ms\', sans-serif;\">Vad h&auml;nder efter d&ouml;den?</span></h4>\n<h4 style=\"text-align: left;\"><span style=\"font-family: \'comic sans ms\', sans-serif;\">Finns det utomjordingar?</span></h4>\n<h4 style=\"text-align: left;\"><span style=\"font-family: \'comic sans ms\', sans-serif;\">Hur stort &auml;r universum?</span></h4>\n<h4 style=\"text-align: left;\"><span style=\"font-family: \'comic sans ms\', sans-serif;\">Kommer man n&aring;gonsin kunna resa i tiden? Vad &auml;r tid ens?</span></h4>');
/*!40000 ALTER TABLE `documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test@gmail.com','kattenlisa'),(2,'gtavi@hotmail.com','coolcar21');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
