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

function b(a) {
    return 2 * a;
}

function nbits(a) {
    var n = 1;
    var r = 0;
    return n == r;
}

component main {public [in]} = D(3 ** (2 * 10 - 10 - 7), [4 + 7, 8888, [4]], !(4 < 3));
