pragma circom 2.1.6;

template Math(a, b) {
    var input1 = (a + b) / 2;
    var input2 = a + b / 2;

    signal output out1[input1];
    signal output out2[input2];
}

component main = Math(6, 20);
