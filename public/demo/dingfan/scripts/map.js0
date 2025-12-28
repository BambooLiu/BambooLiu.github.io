//创建和初始化地图函数：
function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
    addMarker();//向地图中添加marker
}

//创建地图函数：
function createMap(){
    document.getElementById('dituContent').style.height = window.innerHeight * 0.8 + 'px';
    var map = new BMap.Map('dituContent');//在百度地图容器中创建一个地图
    var point = new BMap.Point(121.438219,31.245128);//定义一个中心点坐标
    map.centerAndZoom(point,17);//设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map;//将map变量存储在全局
}

//地图事件设置函数：
function setMapEvent(){
    //map.disableDragging();//禁用地图拖拽事件
    map.disableScrollWheelZoom();//禁用地图滚轮放大缩小，默认禁用(可不写)
    map.disableDoubleClickZoom();//禁用鼠标双击放大
    map.disableKeyboard();//禁用键盘上下左右键移动地图，默认禁用(可不写)
}

//地图控件添加函数：
function addMapControl(){}

//标注点数组
var markerArr = [{title:'顶范品牌策划(上海)有限公司',content:'E-mail:&nbsp;info@ding-fan.cn<br/>电话:&nbsp;+86&nbsp;21&nbsp;6298&nbsp;6773<br/>地址:&nbsp;中国上海普陀区长寿路652号B座1楼',point:'121.438587|31.24492',isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
     ];

//创建marker
function addMarker(){
    for(var i=0;i<markerArr.length;i++){
        var json = markerArr[i];
        var p0 = json.point.split('|')[0];
        var p1 = json.point.split('|')[1];
        var point = new BMap.Point(p0,p1);
        var iconImg = createIcon(json.icon);
        var marker = new BMap.Marker(point,{icon:iconImg});
        var iw = createInfoWindow(i);
        var label = new BMap.Label(json.title,{'offset':new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
        marker.setLabel(label);
        map.addOverlay(marker);
        label.setStyle({
                    borderColor:'#808080',
                    color:'#333',
                    cursor:'pointer'
        });
        
        (function(){
            var index = i;
            var _iw = createInfoWindow(i);
            var _marker = marker;
            _marker.addEventListener('click',function(){
                this.openInfoWindow(_iw);
            });
            _iw.addEventListener('open',function(){
                _marker.getLabel().hide();
            })
            _iw.addEventListener('close',function(){
                _marker.getLabel().show();
            })
            label.addEventListener('click',function(){
                _marker.openInfoWindow(_iw);
            })
            if(!!json.isOpen){
                label.hide();
                _marker.openInfoWindow(_iw);
            }
        })()
    }
}

//创建InfoWindow
function createInfoWindow(i){
    var json = markerArr[i];
    var iw = new BMap.InfoWindow('<b class=\'iw_poi_title\' title=\'' + json.title + '\'>' + json.title + '</b><div class=\'iw_poi_content\'>'+json.content+'</div>');
    return iw;
}

//创建一个Icon
function createIcon(json){
    var icon = new BMap.Icon('http://app.baidu.com/map/images/us_mk_icon.png', new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
    return icon;
}

initMap();//创建和初始化地图

window.onresize = function(event) {
    document.getElementById('dituContent').style.height = window.innerHeight * 0.8 + 'px';
};
//# sourceMappingURL=map.js.map
