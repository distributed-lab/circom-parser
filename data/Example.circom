pragma circom 2.1.6;
pragma custom_templates;

// include "babyjub.circom";

template A(param1, param2){
   signal input b[param1][param2 * 2][5], c, d[2];
   signal input a;
   signal output f;
   f <== a + d[0];
}

template B(N){
   signal input in;
   signal output out;
   out <== N - in;
}

template C(n1, n2){
   signal input in;
   signal input in2[3][n1];

   component b = B(in);
   b.in <== in2[0][1];

   signal output out <== b.out;
}

template D(p1, p2, p3){
    signal input in;
}

function b(a, a2) {
    var arr = [2, 4, 3 / a2];
    var b = (3-1)**3;
    var c = a * arr[2];
    var d = arr[1];
    var v1, v2, v3;

    v1 = a ** 2;
    v1--;

    v2++;

    c += b * 5;

    return c;
}

function nbits(a) {
    var n = 1;
    var r = 0;
    return n == r;
}

component main {public [in]} = D(3 ** (2 * 10 - 10 - 7), [7*10, 34, 4>>2], !(4 < 3));
