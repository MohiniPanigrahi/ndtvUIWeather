import { $$, browser } from "protractor";

export class WeatherComponent {
    constructor() {

    }

    selectCityfromlist(city) {
        browser.sleep(2000)
        $('#messages').$$('label').filter(elem => {
            return elem.getAttribute('for').then(text => {
                return text.includes(city)
            })
        }).$$('input').click()
    }
    checkDefaultCity(city){
       return $('#messages').$$('.defaultChecked').filter(elem => {
            return elem.getAttribute("id").then(text => {
                return text.includes(city)
            })
        })
    }
    verifyCityIsPresent(city) {
        //  let cityIcon = $$('leaflet-marker-icon')
       return $$('leaflet-marker-icon').filter(elem => {
                 elem.getAttribute("title").then(text => {
                    text.includes(city)
                })
        }).click()
    }
        
}