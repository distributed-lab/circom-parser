pragma circom 2.1.6;

template Math(a, b, c) {
    var input1 = (a + b) / 2;
    var input2 = a + b / 2;

    var PRECOMPUTE_NUMBER = 2 ** c;

    signal tmp1 [a][PRECOMPUTE_NUMBER][2][b];

    var STRIDE = 8;
    var parts = a * c \ STRIDE;

    signal tmp2[a]    [2]   [b];
    signal tmp3[a]    [2][2][b];
    signal tmp4[a - 1][2][2][b];

    signal powers[parts][2 ** STRIDE][2][a];

    signal output out1[input1];
    signal output out2[input2];
}

component main = Math(6, 20, 3);
