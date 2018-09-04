/*微信账号信息*/
drop table if exists account;
CREATE TABLE `account` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,  /*id*/
  `openid` varchar(32)  NOT NULL unique,   /*微信唯一码--微信公众号---用户的标识，对当前微信公众号唯一*/
  `unionid` varchar(32)  DEFAULT NULL,     /*微信唯一码--只有在用户将微信公众号绑定到微信开放平台帐号后，才会出现该字段*/
  `nickname` varchar(32)  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL, /*昵称*/
  `portrait` varchar(300) DEFAULT NULL,   /*头像url*/
  `sex` varchar(4) DEFAULT 0, /*性别*/
  `city` varchar(20) DEFAULT NULL, /*城市*/
  `province` varchar(20) DEFAULT NULL, /*省份*/
  `country` varchar(20) DEFAULT NULL,  /*国家*/
  `login_time` datetime DEFAULT NULL,   /*登录时间*/
  `create_time` datetime DEFAULT NULL,   /*创建时间*/
  `follow` int(1) DEFAULT 0,/*是否关注公众号*/
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;


