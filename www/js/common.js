/**
 * common config
 * author:kezhi.
 * date:2014-07-01
 */


//API
var API_URl = 'http://218.247.15.103:83/ChinaInsurance/Interface/';


var storage = window.localStorage;


//获取经纬度
var longitude = null;       // 经度
var latitude = null;        // 纬度
var app = {
	initialize: function() {
		this.bindEvents();
	},
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	onDeviceReady: function() {
		app.receivedEvent('deviceready');
	},
	receivedEvent: function(id) {
		setTimeout(function(){
			getLocation(function (locationArray){
				latitude = locationArray[0];
				longitude = locationArray[1];
				storage.mylatitude = latitude;
				storage.mylongitude = longitude;
				//alert(storage.getItem('mylatitude'));
				//alert(storage.getItem('mylongitude'));
			},function (){

			});

		},100);
	}
};
app.initialize();

var mylatitude = storage.mylatitude;       // 经度
var mylongitude = storage.mylongitude;     // 纬度


/**
 * 格式化时间
 * @param format
 * @returns {*}
 */
Date.prototype.format =function(format)
{
	var o = {
		"M+" : this.getMonth()+1, //month
		"d+" : this.getDate(), //day
		"h+" : this.getHours(), //hour
		"m+" : this.getMinutes(), //minute
		"s+" : this.getSeconds() //second
	};
	if(/(y+)/.test(format)){
		format=format.replace(RegExp.$1,(this.getFullYear()+"").substr(4- RegExp.$1.length));

	}
	for(var k in o){
		if(new RegExp("("+ k +")").test(format)){
			format = format.replace(RegExp.$1,RegExp.$1.length==1? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
		}
	}
	return format;
};