import { Assign } from './reducerUtilityFunction'
import * as ACTION from '../Actions'


const fetchDataStructure = {
	shoplist: [],
	shopDetail: {},
	qrcodeUrl: '',
	shopPerm: [],
	industrydata: [],
	areadata: [],
	shopAccountdata: {},
	billlistdata: {transactionLists:[]},
	todaytotal: {},
	billDetail: {},
	allTotaldata: {},
	dayTotaldata: {},
	chartData: {coordinateList: []}
}

const FetchReducer = (state = fetchDataStructure, action) => {
	switch(action.type){
		case ACTION.GET_SHOP_LIST_SUCCESS:
			return Assign(state, { shoplist: action.data })
		case ACTION.GET_SHOP_DETAIL_SUCCESS:
			return Assign(state, { shopDetail: action.data })
		case ACTION.GET_PAYSRCRET_SUCCESS:
			return Assign(state, { qrcodeUrl: action.data })
		case ACTION.GET_SHOPPERM_SUCCESS:
			return Assign(state, { shopPerm: action.data })
		case ACTION.GET_INDUSTRY_SUCCESS:
			return Assign(state, { industrydata: action.data })
		case ACTION.GET_AREA_SUCCESS:
			return Assign(state, { areadata: action.data })
		case ACTION.GET_ACCOUNT_DETAIL_SUCCESS:
			return Assign(state, { shopAccountdata: action.data })
		case ACTION.GET_BILLLIST_SUCCESS:
			return Assign(state, { billlistdata: action.data })
		case ACTION.GET_TODAYTOTAL_SUCCESS:
			return Assign(state, { todaytotal: action.data })
		case ACTION.GET_BILLDETAIL_SUCCESS:
			return Assign(state, { billDetail: action.data })
		case ACTION.GET_ALLTOTAL_SUCCESS:
			return Assign(state, { allTotaldata: action.data })
		case ACTION.GET_CHARTDATA_SUCCESS:
			return Assign(state, { chartData: action.data })
		case ACTION.GET_DAYTOTAL_SUCCESS:
			return Assign(state, { dayTotaldata: action.data })
		default:
			return state
	}
}

export default FetchReducer