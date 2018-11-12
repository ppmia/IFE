//将数组按从小到大小进行排序后在console中输出
var arr = [43, 54, 4, -4, 84, 100, 58, 27, 140];
arr.sort(function(a,b) {
    return a - b;
});
console.log(arr);

//将数组按从大到小进行排序后在console中输出
var arr = [43, 54, 4, -4, 84, 100, 58, 27, 140];
arr.sort(function(a,b) {
    return b - a;
});
console.log(arr);

//将数组按字母顺序a-z进行排序，在console中输出
var arr = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
arr.sort(function(a,b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    } else {
        return 0;
    }
});
console.log(arr);

//将数组按字母顺序z-a进行排序，在console中输出
var arr = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
arr.sort(function(a,b) {
    if (a < b) {
        return 1;
    }
    if (a > b) {
        return -1;
    } else {
        return 0;
    }
});
console.log(arr);

//将二维数组按照每个元素中第二个数从大到小的顺序进行排序输出
var arr = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
arr.sort(function(a,b) {
        return b[1] - a[1];
});
console.log(arr);

//将数组分别按元素对象的value值从小到大进行排序后输出
var arr = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];
arr.sort(function(a,b) {
    return a.value - b.value;
})
console.log(arr);