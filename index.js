"use strict";
var UiItem = (function () {
    function UiItem() {
        this.onClick = function () { };
    }
    UiItem.prototype.setBackgroundSize = function (size) {
        this.backgroundSize = size;
    };
    UiItem.prototype.getBackgroundSize = function () {
        return this.backgroundSize;
    };
    UiItem.prototype.setTitle = function (title) {
        this.title = title;
    };
    UiItem.prototype.setSubTitle = function (sub) {
        this.subTitle = sub;
    };
    UiItem.prototype.getSubTitle = function () {
        return this.subTitle;
    };
    UiItem.prototype.setImgUrl = function (url) {
        this.imgUrl = url;
    };
    UiItem.prototype.getTitle = function () {
        return this.title;
    };
    UiItem.prototype.getImgUrl = function () {
        return this.imgUrl;
    };
    UiItem.prototype.setUserData = function (d) {
        this.userData = d;
    };
    UiItem.prototype.getUserData = function () {
        return this.userData;
    };
    UiItem.prototype.setOnClick = function (f) {
        this.onClick = f;
    };
    return UiItem;
}());
exports.UiItem = UiItem;
