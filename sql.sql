-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.5-10.0.14-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  8.3.0.4694
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 zhiwo 的数据库结构
DROP DATABASE IF EXISTS `zhiwo`;
CREATE DATABASE IF NOT EXISTS `zhiwo` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `zhiwo`;


-- 导出  表 zhiwo.goodslist 结构
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE IF NOT EXISTS `goodslist` (
  `guid` int(11) NOT NULL AUTO_INCREMENT,
  `imgS` varchar(100) NOT NULL DEFAULT '0',
  `imgL` varchar(100) NOT NULL DEFAULT '0',
  `name` varchar(100) NOT NULL DEFAULT '0',
  `intro` varchar(100) NOT NULL DEFAULT '0',
  `original` varchar(100) NOT NULL DEFAULT '0',
  `discount` varchar(100) NOT NULL DEFAULT '0',
  `buyer` varchar(100) NOT NULL DEFAULT '0',
  `comment` varchar(100) NOT NULL DEFAULT '0',
  `timer` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`guid`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8 COMMENT='商品列表';

-- 正在导出表  zhiwo.goodslist 的数据：~54 rows (大约)
DELETE FROM `goodslist`;
/*!40000 ALTER TABLE `goodslist` DISABLE KEYS */;
INSERT INTO `goodslist` (`guid`, `imgS`, `imgL`, `name`, `intro`, `original`, `discount`, `buyer`, `comment`, `timer`) VALUES
	(1, '../img/goods01.jpg', '../img/goodsL01.jpg', '雅诗兰黛红石榴鲜养焕亮精华露4ml*2', '雅诗兰黛红石榴鲜养焕亮精华露4ml*2，时刻保持鲜活红润好气色。', '174', '2.8', '603', '23', '2'),
	(2, '../img/goods02.jpg', '../img/goodsL02.jpg', '雅诗兰黛肌初赋活原生液150ml', '【清仓价】雅诗兰黛肌初赋活原生液150ml（专柜），尽现原生年轻', '760', '7.5', '243', '30', '3'),
	(3, '../img/goods03.jpg', '../img/goodsL03.jpg', '可莱丝茶树洁面170ml', '可莱丝茶树洁面170ml，让皮肤变的更加干净！', '120', '4.1', '383', '15', '4'),
	(4, '../img/goods04.jpg', '../img/goodsL04.jpg', '娇韵诗温和清洁乳（绿吸盘）干性400ml', '娇韵诗温和清洁乳（绿吸盘）干性400ml，肌肤洁净舒适柔嫩有光泽', '480', '3.9', '12', '23', '2'),
	(5, '../img/goods05.jpg', '../img/goodsL05.jpg', '兰蔻精准臻白精华乳30ml', '【清仓价】兰蔻精准臻白精华乳30ml，纯净透澈光采由内透现！', '830', '7.2', '253', '30', '3'),
	(6, '../img/goods06.jpg', '../img/goodsL06.jpg', '可泰防雾霾双密封口罩（美国进口）', '可泰防雾霾双密封口罩（美国进口），抗击雾霾利器！', '180', '4.4', '248', '15', '4'),
	(7, '../img/goods07.jpg', '../img/goodsL07.jpg', 'MG美即牛奶嫩滑润颜面膜25g*10', 'MG美即牛奶嫩滑润颜面膜25g*10，肌肤犹如白皙的奶油！', '100', '6.9', '922', '23', '2'),
	(8, '../img/goods08.jpg', '../img/goodsL08.jpg', '兰蔻眼部卸妆液30ml', '兰蔻眼部卸妆液30ml，轻松卸妆，美丽不打折！', '99', '2.9', '48', '30', '3'),
	(9, '../img/goods09.jpg', '../img/goodsL09.jpg', '雅诗兰黛晶透沁白淡斑精粹水200ml（', '雅诗兰黛晶透沁白淡斑精粹水200ml（专柜），沁白、匀净、剔透！', '520', '7.9', '24', '15', '4'),
	(10, '../img/goods01.jpg', '../img/goodsL01.jpg', '雅诗兰黛红石榴鲜养焕亮精华露4ml*2', '雅诗兰黛红石榴鲜养焕亮精华露4ml*2，时刻保持鲜活红润好气色。', '174', '2.8', '603', '23', '2'),
	(11, '../img/goods02.jpg', '../img/goodsL02.jpg', '雅诗兰黛肌初赋活原生液150ml', '【清仓价】雅诗兰黛肌初赋活原生液150ml（专柜），尽现原生年轻', '760', '7.5', '243', '30', '3'),
	(12, '../img/goods03.jpg', '../img/goodsL03.jpg', '可莱丝茶树洁面170ml', '可莱丝茶树洁面170ml，让皮肤变的更加干净！', '120', '4.1', '383', '15', '4'),
	(13, '../img/goods04.jpg', '../img/goodsL04.jpg', '娇韵诗温和清洁乳（绿吸盘）干性400ml', '娇韵诗温和清洁乳（绿吸盘）干性400ml，肌肤洁净舒适柔嫩有光泽', '480', '3.9', '12', '23', '2'),
	(14, '../img/goods05.jpg', '../img/goodsL05.jpg', '兰蔻精准臻白精华乳30ml', '【清仓价】兰蔻精准臻白精华乳30ml，纯净透澈光采由内透现！', '830', '7.2', '253', '30', '3'),
	(15, '../img/goods06.jpg', '../img/goodsL06.jpg', '可泰防雾霾双密封口罩（美国进口）', '可泰防雾霾双密封口罩（美国进口），抗击雾霾利器！', '180', '4.4', '248', '15', '4'),
	(16, '../img/goods07.jpg', '../img/goodsL07.jpg', 'MG美即牛奶嫩滑润颜面膜25g*10', 'MG美即牛奶嫩滑润颜面膜25g*10，肌肤犹如白皙的奶油！', '100', '6.9', '922', '23', '2'),
	(17, '../img/goods08.jpg', '../img/goodsL08.jpg', '兰蔻眼部卸妆液30ml', '兰蔻眼部卸妆液30ml，轻松卸妆，美丽不打折！', '99', '2.9', '48', '30', '3'),
	(18, '../img/goods09.jpg', '../img/goodsL09.jpg', '雅诗兰黛晶透沁白淡斑精粹水200ml（', '雅诗兰黛晶透沁白淡斑精粹水200ml（专柜），沁白、匀净、剔透！', '520', '7.9', '24', '15', '4'),
	(19, '../img/goods01.jpg', '../img/goodsL01.jpg', '雅诗兰黛红石榴鲜养焕亮精华露4ml*2', '雅诗兰黛红石榴鲜养焕亮精华露4ml*2，时刻保持鲜活红润好气色。', '174', '2.8', '603', '23', '2'),
	(20, '../img/goods02.jpg', '../img/goodsL02.jpg', '雅诗兰黛肌初赋活原生液150ml', '【清仓价】雅诗兰黛肌初赋活原生液150ml（专柜），尽现原生年轻', '760', '7.5', '243', '30', '3'),
	(21, '../img/goods03.jpg', '../img/goodsL03.jpg', '可莱丝茶树洁面170ml', '可莱丝茶树洁面170ml，让皮肤变的更加干净！', '120', '4.1', '383', '15', '4'),
	(22, '../img/goods04.jpg', '../img/goodsL04.jpg', '娇韵诗温和清洁乳（绿吸盘）干性400ml', '娇韵诗温和清洁乳（绿吸盘）干性400ml，肌肤洁净舒适柔嫩有光泽', '480', '3.9', '12', '23', '2'),
	(23, '../img/goods05.jpg', '../img/goodsL05.jpg', '兰蔻精准臻白精华乳30ml', '【清仓价】兰蔻精准臻白精华乳30ml，纯净透澈光采由内透现！', '830', '7.2', '253', '30', '3'),
	(24, '../img/goods06.jpg', '../img/goodsL06.jpg', '可泰防雾霾双密封口罩（美国进口）', '可泰防雾霾双密封口罩（美国进口），抗击雾霾利器！', '180', '4.4', '248', '15', '4'),
	(25, '../img/goods07.jpg', '../img/goodsL07.jpg', 'MG美即牛奶嫩滑润颜面膜25g*10', 'MG美即牛奶嫩滑润颜面膜25g*10，肌肤犹如白皙的奶油！', '100', '6.9', '922', '23', '2'),
	(26, '../img/goods08.jpg', '../img/goodsL08.jpg', '兰蔻眼部卸妆液30ml', '兰蔻眼部卸妆液30ml，轻松卸妆，美丽不打折！', '99', '2.9', '48', '30', '3'),
	(27, '../img/goods09.jpg', '../img/goodsL09.jpg', '雅诗兰黛晶透沁白淡斑精粹水200ml（', '雅诗兰黛晶透沁白淡斑精粹水200ml（专柜），沁白、匀净、剔透！', '520', '7.9', '24', '15', '4'),
	(28, '../img/goods01.jpg', '../img/goodsL01.jpg', '雅诗兰黛红石榴鲜养焕亮精华露4ml*2', '雅诗兰黛红石榴鲜养焕亮精华露4ml*2，时刻保持鲜活红润好气色。', '174', '2.8', '603', '23', '2'),
	(29, '../img/goods02.jpg', '../img/goodsL02.jpg', '雅诗兰黛肌初赋活原生液150ml', '【清仓价】雅诗兰黛肌初赋活原生液150ml（专柜），尽现原生年轻', '760', '7.5', '243', '30', '3'),
	(30, '../img/goods03.jpg', '../img/goodsL03.jpg', '可莱丝茶树洁面170ml', '可莱丝茶树洁面170ml，让皮肤变的更加干净！', '120', '4.1', '383', '15', '4'),
	(31, '../img/goods04.jpg', '../img/goodsL04.jpg', '娇韵诗温和清洁乳（绿吸盘）干性400ml', '娇韵诗温和清洁乳（绿吸盘）干性400ml，肌肤洁净舒适柔嫩有光泽', '480', '3.9', '12', '23', '2'),
	(32, '../img/goods05.jpg', '../img/goodsL05.jpg', '兰蔻精准臻白精华乳30ml', '【清仓价】兰蔻精准臻白精华乳30ml，纯净透澈光采由内透现！', '830', '7.2', '253', '30', '3'),
	(33, '../img/goods06.jpg', '../img/goodsL06.jpg', '可泰防雾霾双密封口罩（美国进口）', '可泰防雾霾双密封口罩（美国进口），抗击雾霾利器！', '180', '4.4', '248', '15', '4'),
	(34, '../img/goods07.jpg', '../img/goodsL07.jpg', 'MG美即牛奶嫩滑润颜面膜25g*10', 'MG美即牛奶嫩滑润颜面膜25g*10，肌肤犹如白皙的奶油！', '100', '6.9', '922', '23', '2'),
	(35, '../img/goods08.jpg', '../img/goodsL08.jpg', '兰蔻眼部卸妆液30ml', '兰蔻眼部卸妆液30ml，轻松卸妆，美丽不打折！', '99', '2.9', '48', '30', '3'),
	(36, '../img/goods09.jpg', '../img/goodsL09.jpg', '雅诗兰黛晶透沁白淡斑精粹水200ml（', '雅诗兰黛晶透沁白淡斑精粹水200ml（专柜），沁白、匀净、剔透！', '520', '7.9', '24', '15', '4'),
	(37, '../img/goods01.jpg', '../img/goodsL01.jpg', '雅诗兰黛红石榴鲜养焕亮精华露4ml*2', '雅诗兰黛红石榴鲜养焕亮精华露4ml*2，时刻保持鲜活红润好气色。', '174', '2.8', '603', '23', '2'),
	(38, '../img/goods02.jpg', '../img/goodsL02.jpg', '雅诗兰黛肌初赋活原生液150ml', '【清仓价】雅诗兰黛肌初赋活原生液150ml（专柜），尽现原生年轻', '760', '7.5', '243', '30', '3'),
	(39, '../img/goods03.jpg', '../img/goodsL03.jpg', '可莱丝茶树洁面170ml', '可莱丝茶树洁面170ml，让皮肤变的更加干净！', '120', '4.1', '383', '15', '4'),
	(40, '../img/goods04.jpg', '../img/goodsL04.jpg', '娇韵诗温和清洁乳（绿吸盘）干性400ml', '娇韵诗温和清洁乳（绿吸盘）干性400ml，肌肤洁净舒适柔嫩有光泽', '480', '3.9', '12', '23', '2'),
	(41, '../img/goods05.jpg', '../img/goodsL05.jpg', '兰蔻精准臻白精华乳30ml', '【清仓价】兰蔻精准臻白精华乳30ml，纯净透澈光采由内透现！', '830', '7.2', '253', '30', '3'),
	(42, '../img/goods06.jpg', '../img/goodsL06.jpg', '可泰防雾霾双密封口罩（美国进口）', '可泰防雾霾双密封口罩（美国进口），抗击雾霾利器！', '180', '4.4', '248', '15', '4'),
	(43, '../img/goods07.jpg', '../img/goodsL07.jpg', 'MG美即牛奶嫩滑润颜面膜25g*10', 'MG美即牛奶嫩滑润颜面膜25g*10，肌肤犹如白皙的奶油！', '100', '6.9', '922', '23', '2'),
	(44, '../img/goods08.jpg', '../img/goodsL08.jpg', '兰蔻眼部卸妆液30ml', '兰蔻眼部卸妆液30ml，轻松卸妆，美丽不打折！', '99', '2.9', '48', '30', '3'),
	(45, '../img/goods09.jpg', '../img/goodsL09.jpg', '雅诗兰黛晶透沁白淡斑精粹水200ml（', '雅诗兰黛晶透沁白淡斑精粹水200ml（专柜），沁白、匀净、剔透！', '520', '7.9', '24', '15', '4'),
	(46, '../img/goods01.jpg', '../img/goodsL01.jpg', '雅诗兰黛红石榴鲜养焕亮精华露4ml*2', '雅诗兰黛红石榴鲜养焕亮精华露4ml*2，时刻保持鲜活红润好气色。', '174', '2.8', '603', '23', '2'),
	(47, '../img/goods02.jpg', '../img/goodsL02.jpg', '雅诗兰黛肌初赋活原生液150ml', '【清仓价】雅诗兰黛肌初赋活原生液150ml（专柜），尽现原生年轻', '760', '7.5', '243', '30', '3'),
	(48, '../img/goods03.jpg', '../img/goodsL03.jpg', '可莱丝茶树洁面170ml', '可莱丝茶树洁面170ml，让皮肤变的更加干净！', '120', '4.1', '383', '15', '4'),
	(49, '../img/goods04.jpg', '../img/goodsL04.jpg', '娇韵诗温和清洁乳（绿吸盘）干性400ml', '娇韵诗温和清洁乳（绿吸盘）干性400ml，肌肤洁净舒适柔嫩有光泽', '480', '3.9', '12', '23', '2'),
	(50, '../img/goods05.jpg', '../img/goodsL05.jpg', '兰蔻精准臻白精华乳30ml', '【清仓价】兰蔻精准臻白精华乳30ml，纯净透澈光采由内透现！', '830', '7.2', '253', '30', '3'),
	(51, '../img/goods06.jpg', '../img/goodsL06.jpg', '可泰防雾霾双密封口罩（美国进口）', '可泰防雾霾双密封口罩（美国进口），抗击雾霾利器！', '180', '4.4', '248', '15', '4'),
	(52, '../img/goods07.jpg', '../img/goodsL07.jpg', 'MG美即牛奶嫩滑润颜面膜25g*10', 'MG美即牛奶嫩滑润颜面膜25g*10，肌肤犹如白皙的奶油！', '100', '6.9', '922', '23', '2'),
	(53, '../img/goods08.jpg', '../img/goodsL08.jpg', '兰蔻眼部卸妆液30ml', '兰蔻眼部卸妆液30ml，轻松卸妆，美丽不打折！', '99', '2.9', '48', '30', '3'),
	(54, '../img/goods09.jpg', '../img/goodsL09.jpg', '雅诗兰黛晶透沁白淡斑精粹水200ml（', '雅诗兰黛晶透沁白淡斑精粹水200ml（专柜），沁白、匀净、剔透！', '520', '7.9', '24', '15', '4');
/*!40000 ALTER TABLE `goodslist` ENABLE KEYS */;


-- 导出  表 zhiwo.register 结构
DROP TABLE IF EXISTS `register`;
CREATE TABLE IF NOT EXISTS `register` (
  `phone` varchar(11) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='注册用户';

-- 正在导出表  zhiwo.register 的数据：~4 rows (大约)
DELETE FROM `register`;
/*!40000 ALTER TABLE `register` DISABLE KEYS */;
INSERT INTO `register` (`phone`, `password`) VALUES
	('13600352551', '123456'),
	('13600352550', '123456'),
	('13600352552', '123456'),
	('13600352559', '123456');
/*!40000 ALTER TABLE `register` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
