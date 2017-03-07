// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//
// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The function below is executed in the context of the inspected page.
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    //var action_url = "javascript:window.print();";
    //chrome.tabs.update(tab.id, {url: action_url});
});
//
//document.addEventListener('DOMContentLoaded', function () {
//    //var divs = document.querySelectorAll('div');
//    //for (var i = 0; i < divs.length; i++) {
//    //    divs[i].addEventListener('click', click);
//    //}
//    chrome.tabs.onCreated.addListener(function () {
//        alert(true)
//    });
//});
//if(window.location.href.indexOf('https://buy.taobao.com/auction/buy_now.jhtml')){alert('true')} else{alert('false')}

//为收货地址添加输入框
//document.addEventListener('DOMContentLoaded',function(){var divs=document.querySelectorAll('div');for(var i=0;i<divs.length;i++){divs[i].addEventListener('click',click)}});var h3s=document.getElementsByTagName('h3');var dom;var tem=null;for(var i=0;i<h3s.length;i++){if(h3s[i].innerText){dom=h3s[i]}}var text=document.createElement('input');text.setAttribute('type','text');dom.appendChild(text);var button=document.createElement('input');button.setAttribute('type','button');button.setAttribute('value','submit');dom.appendChild(button);
//当前地址
