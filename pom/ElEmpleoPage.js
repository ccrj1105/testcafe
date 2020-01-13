import { t, Selector } from 'testcafe'
import xPathTocss from 'xpath-to-css'

//mapeo de los objetos dela pagina
const xpath = '//*[@id="politics_cookieCO"]/div/div[2]/a[2]'

const prueba = Selector('a').withText('Acepto')
const css = xPathTocss(xpath)
const select_type_help = Selector('select[data-title]')
const option_type_help = select_type_help.find('option')
const txt_name = Selector('[name=Name]')
const txt_numberid = Selector('[name=IdentityCard]')
const txt_email = Selector('[name=Email]')
const txt_phone = Selector('[name=PhoneNumber]')
const txt_comment = Selector('[name=Comment]')
const btn_send_message = Selector('body > div:nth-child(12) > div.row > div.col-xs-12.col-md-7.col-lg-6 > div > form > div.row > div.col-xs-12.col-sm-5.col-sm-offset-7.col-md-6.col-md-offset-6 > button')


//metodo crear pqr  para la paquina el empleo.com
export async function createPQR(name, numberId, email, phone, typeHelp, comment) {
    //linea para obtener texto de un elemento
    const texto = await Selector('h1').innerText
    await t.click(css)
    await t.typeText(txt_name, name)
    await t.typeText(txt_numberid, numberId)
    await t.typeText(txt_email, email)
    await t.typeText(txt_phone, phone)
    //linea para realizar  un assert de un texto
    await t.expect(Selector('.page-header').innerText).contains('Contáctanos: sugerencias, quejas y reclamos')
    await t.click(select_type_help).click(option_type_help.withText(typeHelp))
    await t.typeText(txt_comment, comment)
    await t.click(btn_send_message)
    //linea para tomarcapturas de pantalla
    await t.takeScreenshot({ fullPage: true })

}

export async function createPQR1(){
    
}