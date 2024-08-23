pragma circom 2.1.6;

include "../node_modules/circomlib/circuits/poseidon.circom";
include "../node_modules/circomlib/circuits/comparators.circom";
include "../merkleTree/merkleTree.circom";

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

template A(p1, p2){
   signal input in1;
   signal input in2[3][p1];

   component b = B(in1);
   b.in <== in2[0][1];

   signal output out <== b.out;
}

component main {public [in1]} = A([10, 20], [30, 40]);
