// import  para utilizar las funciones del archivo ElEmpleo.page
import { createPQR } from '../pom/ElEmpleoPage'


/* el test que invoca el metodo createPQR del archivo ElEmpleo.page
fixture es el nombre del escenario
test('ejemplo el empleo.com' es el nombre del caso de prueba

*/
fixture`hola mundo testcafe`
    .page('https://www.elempleo.com/co/contactenos-quejas-reclamos')
test('ejemplo el empleo.com', async t => {
    await createPQR('prueba testcafe', '1025117879', 'prueba@gmail.com', '3258778945', 'Mi hoja de vida', 'se hizo la prueba')

})