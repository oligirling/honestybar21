CREATE DATABASE IF NOT EXISTS honesty character set UTF8mb4 collate utf8mb4_bin;
use honesty;

CREATE TABLE IF NOT EXISTS `consumption` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `person` int(11) DEFAULT NULL,
    `created_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `people` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `barcode` char(50) DEFAULT NULL,
    `first_name` char(50) DEFAULT NULL,
    `last_name` char(50) DEFAULT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `people` (`id`, `barcode`, `first_name`, `last_name`)
VALUES
(1,'0jamespattison0','James','Pattison'),
(2,'0antonialston00','Antoni','Alston'),
(3,'0oliverlynch000','Oliver','Lynch'),
(4,'0elenapetrova00','Elena','Petrova'),
(5,'0jessicabracey0','Jessica','Bracey'),
(6,'0tomsteavenson0','Tom','Steavenson'),
(7,'0lukepowell0000','Luke','Powell'),
(8,'0jordanjunge000','Jordan','Junge'),
(9,'0member00000000','Layla','Webb'),
(10,'0jordanwells000','Jordan','Wells'),
(11,'0leanacatty0000','Leana','Catty'),
(12,'0afaanashiq0000','Afaan','Ashiq'),
(13,'0bush0000000000','Alexandra','Bush'),
(14,'0beccakatherine','Becca','Katherine'),
(15,'0happy000000000','Jamie','Hopkins'),
(16,'0georgeday00000','George','Day'),
(17,'0callewis000000','Cal','Lewis'),
(18,'0nathanthomas00','Nathan','Thomas'),
(19,'0sambedford0000','Sam','Bedford'),
(20,'0cocowolf000000','Coco','Wolf'),
(21,'0peterdudbridge','Peter','Dudbridge'),
(22,'0gregjoiner0000','Greg','Joiner'),
(23,'0ashleydelport0','Ashley','Delport'),
(24,'0jessiemold0000','Jessie','Mold'),
(25,'0tessanelson000','Tessa','Nelson'),
(26,'0megansquire000','Megan','Squire'),
(27,'0martinpaunov00','Marty','Paunov'),
(28,'0danielcurpen00','Daniel','Curpen'),
(29,'0oligirling0000','Oli','Girling'),
(30,'0russryan000000','Russ','Ryan'),
(31,'0sarahpeters000','Sarah','Peters'),
(32,'chantalwilliams','Chantal','Williams'),
(33,'0paulbacskin000','Paul','Bacskin'),
(34,'0donpepe0000000','Don','Pepe'),
(35,'0saulgoodman000','Saul','Goodman')
ON DUPLICATE KEY UPDATE id=id+1;

