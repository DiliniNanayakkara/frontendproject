-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/

-- Host: 127.0.0.1:3306
-- Generation Time: Jul 13, 2021 at 12:22 PM
-- Server version: 8.0.19
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `delart`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_staff`
--

DROP TABLE IF EXISTS `admin_staff`;
CREATE TABLE IF NOT EXISTS `admin_staff` (
  `admin_id` int NOT NULL AUTO_INCREMENT,
  `admin_NIC` varchar(100) DEFAULT NULL,
  `admin_pwd` varchar(100) DEFAULT NULL,
  `admin_username` varchar(100) DEFAULT NULL,
  `admin_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `artist`
--

DROP TABLE IF EXISTS `artist`;
CREATE TABLE IF NOT EXISTS `artist` (
  `artist_id` int NOT NULL AUTO_INCREMENT,

  `artist_name` varchar(100) NOT NULL,
  `artist_description` varchar(255) NOT NULL,
  `artist_username` varchar(50) NOT NULL,
  `artist_password` varchar(10) NOT NULL,
  `artist_email` varchar(50) NOT NULL,
  PRIMARY KEY (`artist_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8mb4_general_ci

-- --------------------------------------------------------

--
-- Table structure for table `artworks`
--

DROP TABLE IF EXISTS `artworks`;
CREATE TABLE IF NOT EXISTS `artworks` (
  `artwork_id` int NOT NULL AUTO_INCREMENT,
  `artwork_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `artwork_description` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `artwork_price` double DEFAULT NULL,
  `artwork_image` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `artwork_category` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `artwork_quantity` int DEFAULT NULL,
  `artist_id` int DEFAULT NULL,
  PRIMARY KEY (`artwork_id`),
  KEY `artist_id` (`artist_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8mb4_general_ci;;

--
-- Dumping data for table `artworks`
--

INSERT INTO `artworks` (`artwork_id`, `artwork_name`, `artwork_description`, `artwork_price`, `artwork_image`, `artwork_category`, `artwork_quantity`, `artist_id`) VALUES
(2, 'artwork1', 'painted by me', 3500, NULL, 'historical', 20, NULL),
(5, 'artwork3', 'drew by me', 5000, NULL, 'historical', 15, NULL),
(6, 'artwork4', 'Historical art by me', 3200, NULL, 'historical', 22, NULL),
(8, 'artwork5', 'drew by me', 5000, NULL, 'painting', 12, NULL),
(10, 'artwork4', 'Historical art by me', 6000, NULL, 'portrait', 50, NULL),
(11, 'artwork4', 'Historical art by me', 2250, NULL, 'portrait', 42, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `art_tool`
--

DROP TABLE IF EXISTS `art_tool`;
CREATE TABLE IF NOT EXISTS `art_tool` (
  `tool_id` int NOT NULL AUTO_INCREMENT,
  `tool_name` varchar(100) DEFAULT NULL,
  `tool_price` float(10,2) DEFAULT NULL,
  `tool_category` varchar(100) DEFAULT NULL,
  `tool_quantity` int DEFAULT NULL,
  PRIMARY KEY (`tool_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE IF NOT EXISTS `cart` (
  `cart_id` int NOT NULL AUTO_INCREMENT,
  `artwork_id` int DEFAULT NULL,
  `tool_id` int DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `artwork_id` (`artwork_id`),
  KEY `tool_id` (`tool_id`,`customer_id`),
  KEY `customer_id` (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `customer_id` int NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(100) DEFAULT NULL,
  `customer_email` varchar(100) DEFAULT NULL,
  `customer_username` varchar(100) DEFAULT NULL,
  `customer_password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customized_artist`
--

DROP TABLE IF EXISTS `customized_artist`;
CREATE TABLE IF NOT EXISTS `customized_artist` (
  `customized_artist_id` int NOT NULL AUTO_INCREMENT,
  `artist_id` int DEFAULT NULL,
  `artwork_size` int DEFAULT NULL,
  `cus_artwork_price` float(10,2) DEFAULT NULL,
  `frame_price` float(10,2) DEFAULT NULL,
  `additional_face_price` float(10,2) DEFAULT NULL,
  PRIMARY KEY (`customized_artist_id`),
  KEY `artist_id` (`artist_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customized_artwork`
--

DROP TABLE IF EXISTS `customized_artwork`;
CREATE TABLE IF NOT EXISTS `customized_artwork` (
  `cus_artwork_id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int DEFAULT NULL,
  `cus_image` varchar(50) DEFAULT NULL,
  `cus_artwork_size` int DEFAULT NULL,
  `cus_frame_size` int DEFAULT NULL,
  PRIMARY KEY (`cus_artwork_id`),
  KEY `customer_id` (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `exhibition`
--

DROP TABLE IF EXISTS `exhibition`;
CREATE TABLE IF NOT EXISTS `exhibition` (
  `exhibition_id` int NOT NULL AUTO_INCREMENT,
  `artist_id` int DEFAULT NULL,
  `ticket_price` float(10,2) DEFAULT NULL,
  `exhibition_date` date DEFAULT NULL,
  `issued_tickets` int DEFAULT NULL,
  PRIMARY KEY (`exhibition_id`),
  KEY `artist_id` (`artist_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `exhibition_visitor`
--

DROP TABLE IF EXISTS `exhibition_visitor`;
CREATE TABLE IF NOT EXISTS `exhibition_visitor` (
  `exh_visitor_id` int NOT NULL AUTO_INCREMENT,
  `exhibition_id` int DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `ticket_id` int DEFAULT NULL,
  `ticket_validity` tinyint(1) DEFAULT NULL,
  `visitor_username` varchar(50) DEFAULT NULL,
  `visitor_pwd` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`exh_visitor_id`),
  KEY `exhibition_id` (`exhibition_id`,`customer_id`),
  KEY `customer_id` (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
CREATE TABLE IF NOT EXISTS `order` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `cart_id` int DEFAULT NULL,
  `total_price` float(10,2) DEFAULT NULL,
  `order_status` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `cart_id` (`cart_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(100) DEFAULT NULL,
  `user_pwd` varchar(100) DEFAULT NULL,
  `user_role` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `artworks`
--
ALTER TABLE `artworks`
  ADD CONSTRAINT `artworks_ibfk_1` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`artist_id`);

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`artwork_id`) REFERENCES `artworks` (`artwork_id`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`),
  ADD CONSTRAINT `cart_ibfk_3` FOREIGN KEY (`tool_id`) REFERENCES `art_tool` (`tool_id`);

--
-- Constraints for table `customized_artist`
--
ALTER TABLE `customized_artist`
  ADD CONSTRAINT `customized_artist_ibfk_1` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`artist_id`);

--
-- Constraints for table `customized_artwork`
--
ALTER TABLE `customized_artwork`
  ADD CONSTRAINT `customized_artwork_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`);

--
-- Constraints for table `exhibition`
--
ALTER TABLE `exhibition`
  ADD CONSTRAINT `exhibition_ibfk_1` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`artist_id`);

--
-- Constraints for table `exhibition_visitor`
--
ALTER TABLE `exhibition_visitor`
  ADD CONSTRAINT `exhibition_visitor_ibfk_1` FOREIGN KEY (`exhibition_id`) REFERENCES `exhibition` (`exhibition_id`),
  ADD CONSTRAINT `exhibition_visitor_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`);

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`cart_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
