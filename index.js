//Obtener año en curso
const fecha = new Date();
const añoActual = fecha.getFullYear();
console.log('Año actual: ' + añoActual);

const acceder = confirm('Bienvenido a tu gestor de consultas para compras.  Para consultar da click en "Aceptar/OK"');

alert('IMPORTANTE:  introducir datos SIN PUNTOS NI COMAS, solo números, ejmp: 2010, 230000, 175000');

if (acceder === true) {
    //Año en que se otorgó el crédito
    const añoCredito = Number(prompt('Año del crédito:'));
    //Valor de la operación (no el número en rojo)
    const valorOperacion = Number(prompt('Valor de la operacion:'));
    //Deuda a la fecha 
    const deuda = Number(prompt('Monto de la deuda:'));
    //Diferencia de años multiplicado por la plusvalía correspondiente
    const años = (añoActual - añoCredito) * 0.05;
    console.log('Diferencia de años con plusvalía: ' + años);
    //Monto a restar con la deuda
    const montos = (años * valorOperacion) + valorOperacion;
    console.log('Monto a restar con la deuda: ' + montos);
    //Diferencia a tomar en cuenta
    const diferencia = montos - deuda;
    document.writeln('La diferencia para optar al programa es de: $' + diferencia + '<br>' + 'Año: ' + añoCredito + '<br>' + 'Deuda: $' + deuda + '<br>' + 'Valor operación: $' + valorOperacion  + '<br><br>');
    console.log('Diferencia a tomar en cuenta: ' + diferencia);

    if ( diferencia >= 170000 ) {
        document.writeln('Le comentamos que checando sus datos SÍ puede acceder a nuestro plan.<br><br>En este caso uno de nuestros asesores estará comunicándose con Ud. durante la semana. Le pido para confirmar ¿si se le puede llamar a este número y si prefiere alguna hora en específico?<br><br>Esperamos por su respuesta.');
    }   else if ( valorOperacion > deuda && diferencia < 170000) {
        document.writeln('Checando en nuestro sistema por ahora no puede optar por alguno de nuestros programas.  En ese caso le sugerimos que nos escriba nuevamente en 6 meses para checar sus datos.  Le recordamos que debe pagar mensualmente, y además le recomendamos pagar un poco más extra al capital para que no solo pague los intereses.');
    }   else if ( diferencia < 170000 ) {
        document.writeln('Al día de hoy tiene una deuda pendiente de $'+ deuda + ', la cual es una deuda alta, tomando consideración en el año '+ añoCredito +' su crédito le fue otorgado por $'+ valorOperacion +'. <br><br>Esto quiere decir que al día de hoy no ha disminuido casi su deuda, sino al contrario ha aumentado. Le recomendamos que además de ir al corriente con sus pagos mensuales trate de realizar pagos extras al capital, ya que las mensualidades sólo cubren los intereses del crédito y no estaría abonando nada para bajar en capital de su deuda.<br><br>Por esta razón lamentamos no poder ayudarle a la devolución del inmueble ya que uno de los requisitos de nuestra empresa es que la deuda no sobrepase al monto inicial por el que fue asignado el crédito.<br><br>Con gusto podemos darle algunas opciones que podrían servirle de ayuda. Si desea conocerlas hágalo saber.<br><br>');
    }
} else {
    confirm('Si deseas revisar un caso, da click en F5.')
};