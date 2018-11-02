function about3() {
    for (var i = 1; i <= 100; i++) {
        var s = String(i);
        var yesOrNo = s.indexOf(3);
        if (i % 3 == 0 || yesOrNo !== -1) {
            console.log('PA');
        } else {
            console.log(i);
        }
    }
}
about3();