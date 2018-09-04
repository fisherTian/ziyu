package com.nanyou.ziyu.account.service.impl;

import java.util.List;
import java.util.Map;

import com.github.pagehelper.PageHelper;
import com.nanyou.ziyu.account.mapper.AccountMapper;
import com.nanyou.ziyu.account.model.Account;
import com.nanyou.ziyu.account.service.AccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService{

    @Autowired
    AccountMapper accountMapper;

    public Account selectOne(String openid) throws Exception {
        return accountMapper.selectOne(openid);
    }

    public boolean insert(Account account) throws Exception {
        return accountMapper.insert(account);
    }

	public boolean update(Account account) throws Exception {
		return accountMapper.update(account);
	}

}