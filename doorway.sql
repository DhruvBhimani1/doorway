-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 20, 2024 at 05:52 AM
-- Server version: 8.0.30
-- PHP Version: 8.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `doorway`
--

-- --------------------------------------------------------

--
-- Table structure for table `doorway_tbl`
--

CREATE TABLE `doorway_tbl` (
  `id` int NOT NULL,
  `device_type` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `bg_color` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `strip_image` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `icon_image` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `job_title` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `first_name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `reference` varchar(100) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doorway_tbl`
--

INSERT INTO `doorway_tbl` (`id`, `device_type`, `bg_color`, `strip_image`, `icon_image`, `job_title`, `first_name`, `last_name`, `email`, `reference`) VALUES
(1, 'Apple', '#616161', 'cardimage/pexels-otra-ruta-5943844.jpg', 'cardimage/pexels-cristian-loayza-15736084.jpg', 'dsd ', 'dhruv', 'bhimani', 'dhruv22bhimani@gmail.com', 'dhruv22bhimani@gmail.com'),
(27, 'Apple', '#1ed761', 'cardimage/pexels-wendy-wei-2342400.jpg', 'cardimage/pexels-wendy-wei-2342400.jpg', 'executive trainee', 'Dhruv', 'bhimani', 'dhruvbhimani2222@gmail.com', 'dsdsdsd'),
(28, 'Apple', '#808080', 'cardimage/pexels-cristian-loayza-15736084.jpg', 'cardimage/pexels-wendy-wei-2342400.jpg', 'CEO', 'Dhruv', 'bhimani', 'dhruvbhimani2222@gmail.com', 'dsdsdsd'),
(29, 'Apple', '#6c8475', 'cardimage/pexels-otra-ruta-5943844.jpg', 'cardimage/pexels-cristian-loayza-15736084.jpg', 'CEO', 'Dhruv2', 'Bhimani', 'dhruvbhimani2222@gmail.moc', 'dsdsdsd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `doorway_tbl`
--
ALTER TABLE `doorway_tbl`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `doorway_tbl`
--
ALTER TABLE `doorway_tbl`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
