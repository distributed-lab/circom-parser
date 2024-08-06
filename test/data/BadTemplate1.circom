pragma circom 2.1.6;
pragma custom_templates;

include "babyjub.circom";

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
   signa2 in;
   signal input in2[3][p];

   component b = B(in);
   b.in <== in2[0][1];

   signal output out <== b.out
}
