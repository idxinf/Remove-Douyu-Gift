// ==UserScript==
// @name            Remove Douyu Gift - 隐藏斗鱼礼物栏
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
// @icon            https://www.douyu.com/favicon.ico
// @grant           GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`:root {
    --toolbar-height: 32px;
}

html body [class^=stream__] {
    bottom: var(--toolbar-height);
}

html body [class^=interactive__] {
    height: var(--toolbar-height);
    background-image: none;
    background-color: #000;
}

.PlayerToolbar {
    height: var(--toolbar-height);
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
