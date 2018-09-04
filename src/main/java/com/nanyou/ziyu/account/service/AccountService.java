package com.nanyou.ziyu.account.service;

import java.util.List;
import java.util.Map;

import com.nanyou.ziyu.account.model.Account;

public interface AccountService {

    Account selectOne(String openid) throws Exception;

    boolean insert(Account account) throws Exception;
    
    boolean update(Account account) throws Exception;
    
}
