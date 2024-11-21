pragma circom 2.1.6;

template C(p1, p2){
   signal input in1;
   signal input in2[3][p1[1][0][0][0][0][0][0] * p2[0][0][0]];

   signal output out <== in1 * in2[0][0] * p2[0][1][0];
}

component main {public [in1]} = C([[[[[[[10]]]]]], [[[[[[20]]]]]]], [[[30], [40]]]);
