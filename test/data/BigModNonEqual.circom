pragma circom 2.1.8;

template BigModNonEqual(CHUNK_SIZE, CHUNK_NUMBER_BASE, CHUNK_NUMBER_MODULUS){
    var CHUNK_NUMBER_DIV = CHUNK_NUMBER_BASE - CHUNK_NUMBER_MODULUS + 1;

    var SOME_RANDOM = -CHUNK_NUMBER_BASE + 10;

    signal input base[CHUNK_NUMBER_BASE];
    signal input modulus[CHUNK_NUMBER_MODULUS];
    signal input dummy;

    signal output div[CHUNK_NUMBER_DIV];
    signal output mod[CHUNK_NUMBER_MODULUS];
    signal output another[SOME_RANDOM];
}

component main = BigModNonEqual(64, 6, 4);
