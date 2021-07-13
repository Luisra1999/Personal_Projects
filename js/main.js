function factura(){
    var d = new Date();
    var nfac = 0;
    var nombrec = document.getElementById('nombre_cliente').value;
    var ceduc = document.getElementById('id_cliente').value;
    var tlfc = document.getElementById('telefonoc').value;
    var direc = document.getElementById('direccionc').value;
    var producto;
    var cantidadp = new Number();
    var a = 0;
    var cantidad=0, precio = [],i = 0, suma = 0, total = 0, iva=0, subtotal=0, pago=0;
    nfac = Math.floor(Math.random()*999999999);
    document.write('<strong> Numero de factura: </strong>' + nfac + '<br/>');
    document.write('<strong> Fecha: </strong>');
    document.write(d.getDate());
    document.write('/');
    document.write(d.getMonth());
    document.write('/');
    document.write(d.getFullYear());
    document.write(' ');
    document.write(d.getHours());
    document.write(':');
    document.write(d.getMinutes());
    document.write(':');
    document.write(d.getSeconds()+'</br>');
    pago = (prompt('Digite forma de pago. (Tarjeta o efectivo.)'));
    document.write('<strong>Forma de pago: </strong>'+pago);
    document.write('<h2>-----------Datos del cliente-----------</h2>');
    document.write('<strong>Nombre del cliente: </strong>'+nombrec+'<br/>');
    document.write('<strong>Cedula del cliente: </strong>'+ceduc+ '</br>');
    document.write('<strong>Telefono del cliente: </strong/>'+tlfc+ '</br>');
    document.write('<strong/>Direccion del cliente: </strong>'+direc);
    document.write('<h2>----------Productos a llevar------------</h2>');



    while(i==a){
        producto = prompt('Ingrese producto. ');
        cantidadp = prompt('Ingrese cantidad de '+producto+'.')
        precio[i] = parseFloat(prompt('Ingrese precio del producto'));
        let totalLinea = cantidadp * precio[i];
        let line =`<strong>Producto: </strong>${producto} <strong>Cantidad: </strong>${cantidadp} <strong>Precio: </strong>${precio} <strong>Total Linea: </strong>${totalLinea}`
        //document.write('<strong>Producto: </strong>'+producto+'</br>');
        //document.write('<strong>Cantidad: </strong>'+cantidadp+'</br>');
        //document.write('<strong>Precio: </strong>'+precio+'</br>');
        document.write(line);
        document.write('</br>');
        a = prompt('Para continuar la factura ingrese: "0" y para terminar marque cualquier numero');

       // suma = suma+precio[i];
        //subtotal = cantidadp*suma;
        subtotal+=totalLinea;
        iva = subtotal*0.16;
        total = subtotal + iva; 

    }

    document.write('<h2>-----------------------------------------------</h2>');
    document.write('<br><h3>SUBTOTAL: '+subtotal+'<br></h3>');
    document.write('<br><h3>IVA: '+iva+'<br></h3>');
    document.write('<br><h2><strong>Total a pagar '+total+'</strong></h2><br>');
    document.write('<button onclick= window.print()> Imprimir </button>');

}
factura();