let producto = parseInt (prompt("Selecciona el producto que deseas comprar 1.Buzo - 2.Remera - 3.Zapatillas"))
let totalCompra = 0 
let seguirComprando = true
let decision

while (seguirComprando === true) {
    if (producto === 1){
        totalCompra = totalCompra + 100
    } else if (producto === 2){
        totalCompra = totalCompra + 70
    } else if (producto === 3){
        totalCompra = totalCompra + 350
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
alert(`El total de tu compra es ${totalCompra} dolares`)
