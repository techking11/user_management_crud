CREATE SCHEMA `user_management_tut` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE `user_management_tut`.`users` (
  `id` INT(3) NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `phone` VARCHAR(45) NULL,
  `comment` TEXT(500) NULL,
  `status` VARCHAR(45) NULL DEFAULT 'active',
PRIMARY KEY (`id`));

INSERT INTO `user_management_tut`.`users` (`first_name`, `last_name`, `email`, `comment`) VALUES ('Tech', 'King', 'techking1132@gmail.com', 'Right !');

INSERT INTO `user_management_tut`.`users` (`first_name`, `last_name`, `email`, `phone`) VALUES ('Myo', 'Chay', 'myochay54@gmail.com', '4739253297');
INSERT INTO `user_management_tut`.`users` (`first_name`, `last_name`, `email`, `phone`) VALUES ('Mg', 'Mg', 'mgmg3332@gmail.com', '2324241434');
INSERT INTO `user_management_tut`.`users` (`first_name`, `last_name`, `email`, `phone`) VALUES ('Ma', 'Ma', 'mama223@gmail.com', '4535413453');
INSERT INTO `user_management_tut`.`users` (`first_name`, `last_name`, `email`, `phone`) VALUES ('Mu', 'Mu', 'mumu334@gmail.com', '3452354254');
INSERT INTO `user_management_tut`.`users` (`first_name`, `last_name`, `email`, `phone`) VALUES ('Daw', 'Daw', 'dawdaw455@gmail.com', '345324523');
INSERT INTO `user_management_tut`.`users` (`first_name`, `last_name`, `email`, `phone`) VALUES ('Computer', 'Lenovo', 'lenovo343@gmail.com', '15312515');
INSERT INTO `user_management_tut`.`users` (`first_name`, `last_name`, `email`, `phone`) VALUES ('Computer', 'HP', 'hp324@gmail.com', '13515125');
INSERT INTO `user_management_tut`.`users` (`first_name`, `last_name`, `email`, `phone`) VALUES ('Computer', 'Acer', 'acer4322@gmail.com', '554153155');
INSERT INTO `user_management_tut`.`users` (`first_name`, `last_name`, `email`, `phone`) VALUES ('Mar', 'Mar', 'marmar23@gmail.com', '3513512531');
INSERT INTO `user_management_tut`.`users` (`first_name`, `last_name`, `email`, `phone`) VALUES ('Par', 'Par', 'parpar324@gmail.com', '135123421');