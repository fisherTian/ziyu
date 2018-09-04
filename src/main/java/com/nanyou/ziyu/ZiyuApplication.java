package com.nanyou.ziyu;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import com.jfinal.core.JFinalFilter;

@MapperScan("com.nanyou.ziyu.*.mapper") 
@ComponentScan(value = "com.nanyou.ziyu")
@EnableCaching
@SpringBootApplication
public class ZiyuApplication {
	
	//整合JFinal配置
	@Bean
	public FilterRegistrationBean jFinalFilterReg(){
		FilterRegistrationBean reg = new FilterRegistrationBean();
		reg.setFilter(new JFinalFilter());
		reg.addUrlPatterns("/weixin/*"); //这边的weixin 必须要跟WeixinConfig里面的一致
		//配置了公众号与小程序的账号
		reg.addInitParameter("configClass", "com.nanyou.ziyu.jfinal.weixin.controller.WeixinConfig");
		reg.setName("weixinFilter");
		reg.setOrder(Integer.MAX_VALUE);
		return reg;
	}

	public static void main(String[] args) {
		SpringApplication.run(ZiyuApplication.class, args);
	}
}
