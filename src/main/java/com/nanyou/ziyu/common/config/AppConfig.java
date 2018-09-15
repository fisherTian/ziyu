package com.nanyou.ziyu.common.config;

import java.util.Properties;

public class AppConfig {

	private static final String DOMAIN_NAME = "DOMAIN.NAME";
	
	private static final String GUANWANG_URL = "GUANWANG.URL";
	
	private static final String PRODUCT_ACTIVITY_URL = "PRODUCT.ACTIVITY.URL";
	
	private static final String PRODUCT_XMB_URL = "PRODUCT.XMB.URL";
	
	private static final String PRODUCT_COUPON_URL = "PRODUCT.COUPON.URL";
	
	private static final String CONTACT_URL = "CONTACT.URL";

    private static Properties p = new Properties();

    static {
        try {
            p.load(AppConfig.class.getResourceAsStream("/appconfig.properties"));
        } catch (Exception e) {
        }
    }

    
    public static String getDomainName() {
        return p.getProperty(DOMAIN_NAME);
    }
    
    public static String getGuangWangUrl() {
        return p.getProperty(GUANWANG_URL);
    }
    
    public static String getProductActivityUrl() {
        return p.getProperty(PRODUCT_ACTIVITY_URL);
    }
    
    public static String getProductCouponUrl() {
        return p.getProperty(DOMAIN_NAME)+p.getProperty(PRODUCT_COUPON_URL);
    }
    
    public static String getProductXmbUrl() {
        return p.getProperty(DOMAIN_NAME)+p.getProperty(PRODUCT_XMB_URL);
    }
    
    public static String getContactUrl() {
        return p.getProperty(DOMAIN_NAME)+p.getProperty(CONTACT_URL);
    }
    
}
