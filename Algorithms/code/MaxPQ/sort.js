function sort(a) {
    let N = a.length;

    for (let k = N/2; k >=1; k--) {
        sink(a, k, N);
    }

    while (N > 1) {
        exch(a ,1, N--);
        sink(a, 1, N);
    }

}
