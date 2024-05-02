
-- Database: `doorway`
-- --------------------------------------------------------


CREATE TABLE `doorway_tbl` (
  `id` int(100) NOT NULL,
  `device_type` varchar(50) NOT NULL,
  `bg_color` varchar(50) NOT NULL,
  `strip_image` varchar(100) NOT NULL,
  `icon_image` varchar(100) NOT NULL,
  `job_title` varchar(50) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `reference` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

