let producto = parseInt (prompt("Selecciona el producto que deseas comprar 1.Buzo - 2.Remera - 3.Zapatillas"))

let seguirComprando = true
let decision
const carritos = []

const buzos = [
    {id:1, nombre:"Off White", precio:80}
]
const remeras = [
    {id:1, nombre:"North Face", precio:20}
]
const zapatillas =[
    {id:1, nombre:"Nike", precio:150}
]
for(const buzo of buzos)
for(const remera of remeras)
for(const zapatilla of zapatillas)

while (seguirComprando === true) {
    if (producto === 1){
        carritos.push(buzo)
    } else if (producto === 2){
        carritos.push(remera)
    } else if (producto === 3){
        carritos.push(zapatilla)
    } else {
        producto = parseInt(prompt("Selecciona un producto habilitado 1.Buzo - 2.Remera - 3.Zapatillas"))
        continue
    }

   decision = parseInt (prompt("Quieres seguir comprando? 1.Si - 2.No"))
   if (decision === 1){
    producto = parseInt(prompt("Selecciona el producto que deseas comprar 1.Buzo - 2.Remera - 3.Zapatillas"))
   } else {
    seguirComprando = false
   }
}

let resultadoCompra = carritos.reduce((accum, p) => {
    return accum + p.precio
}, 0)

alert(`El total de tu compra es ${resultadoCompra} dolares`)
console.log(carritos);