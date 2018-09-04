package com.nanyou.ziyu.account.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.nanyou.ziyu.account.model.Account;

public interface AccountMapper {

    Account selectOne(@Param(value = "openid") String openid) throws Exception;
    
    boolean insert(Account account) throws Exception;
    
    boolean update(Account account) throws Exception;
    
}