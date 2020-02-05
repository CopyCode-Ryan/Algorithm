"use strict";
var list = new Array();
var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');
//随机生成数组
function RandomArray(num, range) {
    list.splice(0, list.length);
    for (var i = 0; i < num; i++) {
        var random = Math.round(Math.random() * range + 1);
        list.push(random);
    }
}
function InitCanvas() {
    index = 0;
    if (list.length == 0) {
        RandomArray(40, 40);
    }
    drawCanvas(list, list.length, list.length);
}
function refreshCanvas() {
    index = 0;
    RandomArray(40, 40);
    drawCanvas(list, 40, 40);
}
function clearCanvas() {
    if (ctx) {
        ctx.clearRect(0, 0, cvs.width, cvs.height);
    }
}

function copyArray(list) {
    var item = [];
    for (var i in list) {
        item[i] = list[i];
    }
    return item;
}

//绘柱状图，高亮交换位
function drawCanvas(arr, first, second) {
    clearCanvas();
    for (var i = 0; i < arr.length; i++) {
        var x = 10 + 25 * i;
        var y = arr[i] * 10;
        if (ctx) {
            ctx.beginPath();
            if (i == first)
                ctx.fillStyle = 'red';
            else if (i == second)
                ctx.fillStyle = 'red';
            else
                ctx.fillStyle = 'orange';
            ctx.fillRect(x, 480 - y - 10, 18, y);
            var width = ctx.measureText(arr[i].toString()).width;
            ctx.fillText(arr[i].toString(), x + (15 - width) / 2, 480);
            ctx.closePath();
        }
    }
}


function Sort(type, callback) {
    switch (parseInt(type)) {
        case 1:
            //冒泡排序
            BubbleSort();
            break;
        case 2:
            SelectionSort();
            break;
        case 3:
            insertSort();
            break;
    }
    setTimeout(function () {
        finish(list);
        callback();
    }, index * 100);
}

var index = 0;
function BubbleSort() {
    index = 0;
    for (var i = 0; i < list.length - 1; i++) {
        for (var j = 0; j < list.length - 1; j++) {
            if (list[j] > list[j + 1]) {
                bubbleSwap(list, j, j + 1, i);
            }
        }
    }
}

function bubbleSwap(items, firstIndex, secondIndex, k) {
    //交换数据
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
    //延时画图
    var ls = copyArray(items);
    setTimeout(function () {
        drawBubble(ls, firstIndex, secondIndex, k);
    }, index * 100);
    index++;
}

function drawBubble(arr, firstIndex, secondIndex, k) {
    clearCanvas();
    for (var i = 0; i < arr.length; i++) {
        var x = 10 + 25 * i;
        var y = arr[i] * 10;
        if (ctx) {
            ctx.beginPath();
            if (i == firstIndex || i == secondIndex)
                ctx.fillStyle = 'red';
            else if (i >= arr.length - k)
                ctx.fillStyle = 'green';
            else
                ctx.fillStyle = 'orange';
            ctx.fillRect(x, 480 - y - 10, 18, y);
            var width = ctx.measureText(arr[i].toString()).width;
            ctx.fillText(arr[i].toString(), x + (15 - width) / 2, 480);
            ctx.closePath();
        }
    }
}

//交换数据时延时画图，高亮交换位
function swap(items, firstIndex, secondIndex) {
    //交换数据
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
    //延时画图
    var ls = copyArray(items);
    setTimeout(function () {
        drawCanvas(ls, firstIndex, secondIndex);
    }, index * 100);
    index++;
}



function selectionSwap(items, selectedIndex, otherIndex) {
    if (items[selectedIndex] > items[otherIndex]) {
        var temp = items[selectedIndex];
        items[selectedIndex] = items[otherIndex];
        items[otherIndex] = temp;
    }
    //延时画图
    var ls = copyArray(items);
    setTimeout(function () {
        drawSelection(ls, selectedIndex, otherIndex);
    }, index * 100);
    index++;
}

function SelectionSort() {
    index = 0;
    for (var i = 0; i < list.length - 1; i++) {
        for (var j = i + 1; j < list.length; j++) {
            selectionSwap(list, i, j);
        }
    }
}

function drawSelection(arr, selectedIndex, otherIndex) {
    clearCanvas();
    for (var i = 0; i < arr.length; i++) {
        var x = 10 + 25 * i;
        var y = arr[i] * 10;
        if (ctx) {
            ctx.beginPath();
            if (i == selectedIndex)
                ctx.fillStyle = 'red';
            else if (i == otherIndex)
                ctx.fillStyle = 'blue';
            else if (i < selectedIndex)
                ctx.fillStyle = 'green';
            else
                ctx.fillStyle = 'orange';
            ctx.fillRect(x, 480 - y - 10, 18, y);
            var width = ctx.measureText(arr[i].toString()).width;
            ctx.fillText(arr[i].toString(), x + (15 - width) / 2, 480);
            ctx.closePath();
        }
    }
}

function finish(arr) {
    clearCanvas();
    for (var i = 0; i < arr.length; i++) {
        var x = 10 + 25 * i;
        var y = arr[i] * 10;
        if (ctx) {
            ctx.beginPath();
            ctx.fillStyle = 'green';
            ctx.fillRect(x, 480 - y - 10, 18, y);
            var width = ctx.measureText(arr[i].toString()).width;
            ctx.fillText(arr[i].toString(), x + (15 - width) / 2, 480);
            ctx.closePath();
        }
    }
}

function clearAllTimeout() {
    for (var i = 0; i < index; i++) {
        clearTimeout(i);
    }
}

function insertSort() {
    index = 0;
    for (var i = 0; i < list.length; i++) {
        var j = i - 1;
        var temp = list[i];
        var ls = copyArray(list);
        while (j > -1 && temp < list[j]) {
            list[j + 1] = list[j];
            drawSwap(ls, i, j);
            j--;
        }
        list[j + 1] = temp;
    }
}

function drawSwap(arr, i, j) {
    var ls = copyArray(arr);
    setTimeout(function () {
        drawInsert(ls, i, j);
    }, index * 100);
    index++;
}

function drawInsert(arr, selectedIndex, otherIndex) {
    clearCanvas();
    for (var i = 0; i < arr.length; i++) {
        var x = 10 + 25 * i;
        var y = arr[i] * 10;
        if (ctx) {
            ctx.beginPath();
            if (i == selectedIndex)
                ctx.fillStyle = 'red';
            else if (i == otherIndex)
                ctx.fillStyle = 'blue';
            else if (i < selectedIndex)
                ctx.fillStyle = 'green';
            else
                ctx.fillStyle = 'orange';
            ctx.fillRect(x, 480 - y - 10, 18, y);
            var width = ctx.measureText(arr[i].toString()).width;
            ctx.fillText(arr[i].toString(), x + (15 - width) / 2, 480);
            ctx.closePath();
        }
    }
}