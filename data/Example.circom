pragma circom 2.1.6;

template A(param1, param2){
   signal input b[param1][param2][5], c, d[2];
   signal input k;
   signal output c;
   c <== a*b;
}

template B(n, p){
   signal input in;
   signal input in2[3][p];
   signal out <== A(n)(in[0],in[1]);
}
