// Bitwise AND: &
// Bitwise OR: |
// Bitwise XOR: ^
// Bitwise NOT: ~
// Left shift: <<
// Right shift: >>

var a = 4;
var b =3;
var c = -4;

// --------------------------------- Bitwise AND: & ------------------------------------
console.log("--------------------------------- Bitwise AND: & ------------------------------------");
console.log("Bitwise & of " + a + " and " + b + " is " + (a&b)); // 4      &      3        => 0
//                                                               0 1 0 0         0 0 1 1    => 0 0 0 0

// // Logic behind bitwise AND &
//     1  &  1  => 1
//     1  &  0  => 0
//     0  &  1  => 0
//     0  &  0  => 0


// --------------------------------- Bitwise OR: | ------------------------------------
console.log("------------------------- Bitwise OR: | ------------------------------------");
console.log("Bitwise OR of " + a + " and " + b + " is " + (a|b)); // 4      |      3        => 7
//                                                      0 1 0 0         0 0 1 1    => 0 1 1 1
//                                                                                    8 4 2 1
// Logic behind bitwise OR |
//     1  |  1  => 1
//     1  |  0  => 1
//     0  |  1  => 1
//     0  |  0  => 0

// --------------------------------- Bitwise XOR: ^ ------------------------------------
console.log("---------------------- Bitwise XOR: ^ ---------------------------------");
console.log("Bitwise XOR of " + a + " and " + b + " is " + (a^b)); // 4      ^      3        => 7
//                                                                0 1 0 0         0 0 1 1    => 0 1 1 1
//                                                                                              8 4 2 1
// Logic behind bitwise XOR ^
//     1  ^  1  => 0
//     1  ^  0  => 1
//     0  ^  1  => 1
//     0  ^  0  => 0

// --------------------------------- Bitwise NOT: ~ ------------------------------------
console.log("------------------------- Bitwise NOT: ~ ------------------------------------");
console.log("Bitwise NOT of " + a + " is " + (~a));     // ~4  => - (4+1)  => -5
console.log("Bitwise NOT of " + c + " is " + (~c));     // ~-4  => + (-4+1) => 3

// Logic behind bitwise NOT ~
//    ~ +4 => - (4+1)  => -5
//    ~ -4 => + (-4+1) => 3

// -------------------------------- Left shift: << -------------------------------------
console.log("--------------------------------- Left shift: << ------------------------------------");
console.log("Bitwise Left shift << of " + a + " is " + (a<<1)); // 0100 << 1 => 1000 => 8
console.log("Bitwise Left shift << of " + a + " is " + (a<<2)); // 0100 << 2 => 010000 => 16


// -------------------------------- Right shift: << -------------------------------------
console.log("--------------------------------- Right shift: << ------------------------------------");
console.log("Bitwise Right shift >> of " + a + " is " + (a>>1)); // 0100 >> 1 => 0010 => 2
console.log("Bitwise Right shift >> of " + a + " is " + (a>>2)); // 0100 >> 2 => 0001 => 1
console.log("Bitwise Right right >> of " + a + " is " + (a>>3)); // 0100 >> 3 => 0000 => 0

