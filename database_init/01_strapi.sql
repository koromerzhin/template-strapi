CREATE DATABASE IF NOT EXISTS `strapi_bdd`;
CREATE USER IF NOT EXISTS 'strapi'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON `strapi_bdd`.* TO 'strapi'@'%';