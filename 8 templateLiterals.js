// ---------------- Template Literals -----------------------

// Template Literals, introduced in ES6, are a convenient way to work with strings in JavaScript.
// They allows you to embed expressions and multiline strings directly within backticks (`) instead of using string concatination or line breaks.

// Template Literals, are a new syntax for defining strings that provides more flexiblility and readability compared to traditional string literals.

// ----------------- JavaScript Template Literals-------------------

       //------------------- Basic Syntax ------------------

// To create a template literals, enclose the string inside backticks (`) instead of single or double quotes like this

// const name = "Supriya" ;
// const greeting = `Hello, ${name}!`;

// console.log(greeting); 

// output : Hello, Supriya!

// ----------------- Embeding Template Literals -----------------

// One of the main adantages of template literals is the ability to embed expressions direclty inside the string using ${....}. The expression inside the curly braces will be evaluated and its value will be included in the resulting string.

         // ------------- Example ------------------

// const a = 10;
// const b = 20;
// const result = `The addition of a and b is : ${a + b}`;
// console.log(result);

// output : The addition of a and b is : 30

// ----------------- Multiline Strings ------------------------

// Template literals support multiline strings without the need for concatenation or special escape characters.

// ----------------- Example ------------------------

const multiline = `
                     This is a multiline string
                     using template literals.
                     It preserves line breaks and indentation. `;

console.log(multiline);

// output :   This is a multiline string
//            using template literals.
//            It preserves line breaks and indentation. 

// Why we use JavaScript Template Literals ?

// 1) String Interpolation -->
//    Template literals allow easy string interpolation by embedding expressions within ${}.
//    This helps concatenate variables and expressions directly into the string without the need 
//    for explicit concatenation operator (+).

// 2) Readability -->
//     Template literals provide a cleaner and more readable syntax for creating strings with 
//     dynamic Content. 
//     The placeholder ${...} clearly indicate where the dynamic values will be inserted.

// 3) Multiline Strings -->
//     Template literals support multiline strings without the need for special characters or
//     concatenation, making it easier to represent strings with line breaks or complex formatting.