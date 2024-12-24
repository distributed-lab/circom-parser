pragma circom 2.1.6;

template EllipticCurveAdd(CHUNK_SIZE, CHUNK_NUMBER, A, B, P) {
    signal input in1[2][CHUNK_NUMBER];
    signal input in2[2][CHUNK_NUMBER];
    signal input dummy;

    signal output out[2][CHUNK_NUMBER];
}

component main = EllipticCurveAdd(64, 4, [0, 0, 0, 0], [7, 0, 0, 0],[18446744069414583343, 18446744073709551615, 18446744073709551615, 18446744073709551615]);
