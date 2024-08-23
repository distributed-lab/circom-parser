pragma circom 2.1.6;

include "../merkleTree/merkleTree.circom";

template B(N){
   signal input in;
   signal output out;
   out <== N - in;
}

template C(p1, p2){
   signal input in1;
   signal input in2[3][p1];

   component b = B(in1);
   b.in <== in2[0][1];

   signal output out <== b.out;
}

component main {public [in1]} = C([10, 20], [30, 40]);
component main {public [in1]} = B(5);
