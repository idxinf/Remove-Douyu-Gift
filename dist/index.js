// ==UserScript==
// @name            emove Douyu Gift - 隐藏斗鱼礼物栏
// @namespace       https://github.com/idxinf/Remove-Douyu-Gift
// @version         1.0.0
// @description     隐藏斗鱼礼物栏，保留和美化工具栏
// @author          idxinf
// @match			*://*.douyu.com/0*
// @match			*://*.douyu.com/1*
// @match			*://*.douyu.com/2*
// @match			*://*.douyu.com/3*
// @match			*://*.douyu.com/4*
// @match			*://*.douyu.com/5*
// @match			*://*.douyu.com/6*
// @match			*://*.douyu.com/7*
// @match			*://*.douyu.com/8*
// @match			*://*.douyu.com/9*
// @match			*://*.douyu.com/beta/*
// @icon            https://www.douyu.com/favicon.ico
// @grant           GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`html body [class^=stream__] {
    bottom: 32px;
}

html body [class^=interactive__] {
    height: 32px;
    background-image: none;
    background-color: #000;
}

.PlayerToolbar {
    height: 32px;
}

.PlayerToolbar-ContentRow, .ToolbarGiftArea-container {
    height: 0;
}

#js-toolbar-interact, .ToolbarGiftArea-giftShowList, .ToolbarGiftArea-arrowMoreEnter {
    display: none;
}

.InteractABAd-valueInfo--item span {
    color: #fff !important;
}
`);
})();
