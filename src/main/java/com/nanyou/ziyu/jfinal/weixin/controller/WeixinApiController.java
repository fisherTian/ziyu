package com.nanyou.ziyu.jfinal.weixin.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.jfinal.weixin.sdk.api.*;
import com.jfinal.weixin.sdk.jfinal.ApiController;
import com.nanyou.ziyu.common.config.AppConfig;
import com.nanyou.ziyu.jfinal.weixin.model.Menu;

public class WeixinApiController extends ApiController {

    /**
     * 为WeixinConfig onLineTokenUrl处提供AccessToken
     * 
     * 此处是为了开发测试和生产环境同时使用一套appId时为开发测试环境提供AccessToken
     * 
     * 设计初衷：https://www.oschina.net/question/2702126_2237352
     */
    public void getToken() {
        String key = getPara("key");
        String json = ApiConfigKit.getAccessTokenCache().get(key);
        renderText(json);
    }
    
    /**
     * 获取公众号菜单
     */
    public void getMenu() {
        ApiResult apiResult = MenuApi.getMenu();
        if (apiResult.isSucceed())
            renderText(apiResult.getJson());
        else
            renderText(apiResult.getErrorMsg());
    }

    /**
     * 创建菜单
     */
    public void createMenu()
    {
    	List<Menu> list = new ArrayList<Menu>();
    	//第一个菜单
    	List<Menu> gsjjList = new ArrayList<Menu>(); 
    	
    	Menu guangwang = new Menu();
    	guangwang.setName("公司官网");
    	guangwang.setUrl(AppConfig.getGuangWangUrl());
    	guangwang.setType("view");
    	gsjjList.add(guangwang);
    	
    	Menu menu1 = new Menu();
		menu1.setName("公司简介");
		menu1.setSub_button(gsjjList);
		list.add(menu1);
		
		//第二个菜单
    	List<Menu> gscpList = new ArrayList<Menu>(); 
    	
    	Menu activity = new Menu();
    	activity.setName("微信活动墙");
    	activity.setUrl(AppConfig.getProductActivityUrl());
    	activity.setType("view");
    	gscpList.add(activity);
    	
    	Menu coupon = new Menu();
    	coupon.setName("泰兴有优惠");
    	coupon.setUrl(AppConfig.getProductCouponUrl());
    	coupon.setType("view");
    	gscpList.add(coupon);
    	
    	Menu xmb = new Menu();
    	xmb.setName("项目宝");
    	xmb.setUrl(AppConfig.getProductXmbUrl());
    	xmb.setType("view");
    	gscpList.add(xmb);
    	
    	Menu menu2 = new Menu();
		menu2.setName("公司产品");
		menu2.setSub_button(gscpList);
		list.add(menu2);
		
		//第三个菜单
    	List<Menu> lxwmList = new ArrayList<Menu>(); 
    	
    	Menu contact = new Menu();
    	contact.setName("商务合作");
    	contact.setUrl(AppConfig.getContactUrl());
    	contact.setType("view");
    	lxwmList.add(contact);
    	
    	Menu menu3 = new Menu();
		menu3.setName("联系我们");
		menu3.setSub_button(lxwmList);
		list.add(menu3);
    	
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("button", list);
		JSONObject jsonObject = new JSONObject(map);
		String str = JSON.toJSONString(jsonObject, SerializerFeature.DisableCircularReferenceDetect);
		System.out.println(str);
        ApiResult apiResult = MenuApi.createMenu(str);
        if (apiResult.isSucceed())
            renderText(apiResult.getJson());
        else
            renderText(apiResult.getErrorMsg());
    }

    /**
     * 获取公众号关注用户
     */
    public void getFollowers()
    {
        ApiResult apiResult = UserApi.getFollows();
        renderText(apiResult.getJson());
    }

    /**
     * 获取用户信息
     */
    public void getUserInfo()
    {
        ApiResult apiResult = UserApi.getUserInfo("ohbweuNYB_heu_buiBWZtwgi4xzU");
        renderText(apiResult.getJson());
    }

    /**
     * 发送模板消息
     */
    public void sendMsg()
    {
        String str = " {\n" +
                "           \"touser\":\"ohbweuNYB_heu_buiBWZtwgi4xzU\",\n" +
                "           \"template_id\":\"9SIa8ph1403NEM3qk3z9-go-p4kBMeh-HGepQZVdA7w\",\n" +
                "           \"url\":\"http://www.sina.com\",\n" +
                "           \"topcolor\":\"#FF0000\",\n" +
                "           \"data\":{\n" +
                "                   \"first\": {\n" +
                "                       \"value\":\"恭喜你购买成功！\",\n" +
                "                       \"color\":\"#173177\"\n" +
                "                   },\n" +
                "                   \"keyword1\":{\n" +
                "                       \"value\":\"去哪儿网发的酒店红包（1个）\",\n" +
                "                       \"color\":\"#173177\"\n" +
                "                   },\n" +
                "                   \"keyword2\":{\n" +
                "                       \"value\":\"1元\",\n" +
                "                       \"color\":\"#173177\"\n" +
                "                   },\n" +
                "                   \"remark\":{\n" +
                "                       \"value\":\"欢迎再次购买！\",\n" +
                "                       \"color\":\"#173177\"\n" +
                "                   }\n" +
                "           }\n" +
                "       }";
        ApiResult apiResult = TemplateMsgApi.send(str);
        renderText(apiResult.getJson());
    }

    /**
     * 获取参数二维码
     */
    public void getQrcode()
    {
        String str = "{\"expire_seconds\": 604800, \"action_name\": \"QR_SCENE\", \"action_info\": {\"scene\": {\"scene_id\": 123}}}";
        ApiResult apiResult = QrcodeApi.create(str);
        renderText(apiResult.getJson());

//        String str = "{\"action_name\": \"QR_LIMIT_STR_SCENE\", \"action_info\": {\"scene\": {\"scene_str\": \"123\"}}}";
//        ApiResult apiResult = QrcodeApi.create(str);
//        renderText(apiResult.getJson());
    }

    /**
     * 长链接转成短链接
     */
    public void getShorturl()
    {
        String str = "{\"action\":\"long2short\"," +
                "\"long_url\":\"http://wap.koudaitong.com/v2/showcase/goods?alias=128wi9shh&spm=h56083&redirect_count=1\"}";
        ApiResult apiResult = ShorturlApi.getShorturl(str);
        renderText(apiResult.getJson());
    }

    /**
     * 获取客服聊天记录
     */
    public void getRecord()
    {
        String str = "{\n" +
                "    \"endtime\" : 987654321,\n" +
                "    \"pageindex\" : 1,\n" +
                "    \"pagesize\" : 10,\n" +
                "    \"starttime\" : 123456789\n" +
                " }";
        ApiResult apiResult = CustomServiceApi.getRecord(str);
        renderText(apiResult.getJson());
    }

    /**
     * 获取微信服务器IP地址
     */
    public void getCallbackIp()
    {
        ApiResult apiResult = CallbackIpApi.getCallbackIp();
        renderText(apiResult.getJson());
    }
}

