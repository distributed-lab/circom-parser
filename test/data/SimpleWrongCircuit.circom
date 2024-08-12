pragma circom 2.1.6;

include "../node_modules/circomlib/circuits/poseidon.circom";
include "../node_modules/circomlib/circuits/comparators.circom";
include "../merkleTree/merkleTree.circom";

include "@circomlib/circuits/comparators.circom";

include "comparators.circom";


component main = A([12, [1, 3, 3]], 123, 5123, 5 ll 4);