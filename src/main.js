import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'
import { Provider } from 'react-redux'

import store from './redux/store'

import './assets/style/main.less'

import Page from './page.jsx'
import Home from './pages/home.jsx'
import ContentContainer from './pages/homeComponents/contentContainer.jsx'
import WithdrawRecord from './pages/homeComponents/withdrawRecord.jsx'
import Withdraw from './pages/homeComponents/withdraw.jsx'
import ShopPermission from './pages/shop/shopPermission.jsx'
import ShopAccount from './pages/shop/shopAccount.jsx'
import MyShop from './pages/shop/myShop.jsx'
import Bill from './pages/bills/bill.jsx'
import SecureSetting from './pages/accountManage/secureSetting.jsx'
import ResetPass from './pages/accountManage/resetpassword.jsx'
import BaseMessage from './pages/accountManage/baseMessage.jsx'
import Card from './pages/accountManage/card.jsx'
import MessageSetting from './pages/accountManage/messageSetting.jsx'
import Mybank from './pages/accountManage/mybank.jsx'
import ToBManage from './pages/toBill/toBManage.jsx'
import Chart from './pages/chart/chart.jsx'
import Login from './pages/login/login.jsx'
import ForgetPassword from './pages/login/forget.jsx'
import ForgetNext from './pages/login/forgetnext.jsx'
import RegistAccount from './pages/login/regist.jsx'

//----店铺账号

import SAccountHome from './pages/ShopPages/sAccountHome.jsx'
import SABill from './pages/ShopPages/sAbill.jsx'
import SAChart from './pages/ShopPages/sAchart.jsx'
import SACard from './pages/ShopPages/sAcard.jsx'
import SAcashManager from './pages/ShopPages/cashierManage.jsx'

//----店铺账号

import CAShop from './pages/CashierPages/myshop.jsx'
import CAQrcode from './pages/CashierPages/myQrcode.jsx'


const handleLogin = (next, replace, cb) => {
	if(!localStorage.getItem('token') && next.location.pathname != '/login' && next.location.pathname != '/forget' && next.location.pathname != '/forgetnext' && next.location.pathname != '/regist'){
		replace('/login')
	}
	cb()
}

const routeConfig = (
	<Route path = {'/'} breadcrumbName='赞赞' component = {Page} onEnter={handleLogin}>
		<IndexRedirect to="/home"/>
		<Route path = {'login'} breadcrumbName='登录' component = {Login}/>
		<Route path = {'forget'} breadcrumbName='忘记密码' component = {ForgetPassword}/>
		<Route path = {'forgetnext'} breadcrumbName='忘记密码' component = {ForgetNext}/>
		<Route path = {'regist'} breadcrumbName='用户注册' component = {RegistAccount}/>
		<Route path = {'home'} breadcrumbName='首页' component = {Home}>
			// <IndexRedirect to="/home/contentContainer"/>
			<Route path = {'contentContainer'} breadcrumbName='动态' component = {ContentContainer}/>
			<Route path = {'withdrawRecord'} breadcrumbName='提现记录' component = {WithdrawRecord}/>
			<Route path = {'withdraw'} breadcrumbName='提现' component = {Withdraw}/>
			<Route path = {'shopPermission'} breadcrumbName='店铺权限' component = {ShopPermission}/>
			<Route path = {'shopAccount'} breadcrumbName='店铺账号' component = {ShopAccount}/>
			<Route path = {'myShop'} breadcrumbName='我的店铺' component = {MyShop}/>
			<Route path = {'bill'} breadcrumbName='账单' component = {Bill}/>
			<Route path = {'secureSetting'} breadcrumbName='安全设置' component = {SecureSetting}/>
			<Route path = {'resetPass'} breadcrumbName='重置登录密码' component = {ResetPass}/>
			<Route path = {'baseMessage'} breadcrumbName='基本信息' component = {BaseMessage}/>
			<Route path = {'card'} breadcrumbName='卡包' component = {Card}/>
			<Route path = {'messageSetting'} breadcrumbName='消息提醒' component = {MessageSetting}/>
			<Route path = {'tobill'} breadcrumbName='对账' component = {ToBManage}/>
			<Route path = {'chart'} breadcrumbName='报表' component = {Chart}/>
			<Route path = {'mybank'} breadcrumbName='我的银行卡' component = {Mybank}/>

			<Route path = {'sAccountHome'} breadcrumbName='动态' component = {SAccountHome}/>
			<Route path = {'sAbill'} breadcrumbName='账单' component = {SABill}/>
			<Route path = {'sAchart'} breadcrumbName='报表' component = {SAChart}/>
			<Route path = {'sAcard'} breadcrumbName='卡包' component = {SACard}/>
			<Route path = {'sAcashManager'} breadcrumbName='收银员管理' component = {SAcashManager}/>

			<Route path = {'cAshop'} breadcrumbName='店铺' component = {CAShop}/>
			<Route path = {'cAqrcode'} breadcrumbName='我的二维码' component = {CAQrcode}/>
		</Route>
	</Route>
)

ReactDom.render(
	<Provider store = { store }>
		<Router history = {hashHistory}>
            {routeConfig}
		</Router>
	</Provider>,
    document.getElementById('root')
)