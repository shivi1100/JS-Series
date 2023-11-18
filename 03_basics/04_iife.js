// Immediately Invoked Function Expression

(function chai() {
    //named IIFE
    console.log(`DB connected`);
})();

( (name) => {
    //un-named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )("shivi")

