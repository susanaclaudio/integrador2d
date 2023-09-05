alert("Bienvenidos al Chifa Madam Tusan, esta es su cuenta ");
var presupuesto=parseInt(prompt("¿Cuánto tiene de presupuesto?"));
var entrada=parseInt(prompt("¿Cuánto cuesta la entrada?"));
var principal=parseInt(prompt("¿Cuánto cuesta el plato principal?"));
var postre=parseInt(prompt("¿Cuánto cuesta el postre?"));
var total=entrada+principal+postre;
var igv=(total*18/100)+total;

console.log("La entrada cuesta",entrada);
console.log("El plato principal cuesta",principal);
console.log("El postre  cuesta",postre);
console.log("La cuenta total cuesta",total);
console.log("El total con IGV sale",igv);
console.log("Madam Tusan agradece su visita, vuelva pronto");
console.log("Tu vuelto es de:", (presupuesto-igv))