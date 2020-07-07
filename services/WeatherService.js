import {LinkNavigationService} from './LinkNavigationService'
import { $$ } from 'protractor';
import {WeatherComponent} from '../components/WeatherComponent'
let weatherComponent;
let CTemp,FTemp;
export class WeatherService extends LinkNavigationService{
    constructor(){
        super();
        weatherComponent = new WeatherComponent()
        
    }

    enterCityAndVerify(city){
        $$('input#searchBox').sendKeys(city)
        let cityIcon
        if(weatherComponent.checkDefaultCity(city)){
            console.log("Already Present")
        }
        else{
        weatherComponent.selectCityfromlist(city)
        cityIcon = weatherComponent.verifyCityIsPresent(city)
        CTemp = cityIcon.$$('.temperatureContainer').$$('.tempRedText').getText()
        FTemp = cityIcon.$$('.temperatureContainer').$$('.tempWhiteText').getText()
        }
          console.log("Temp ",CTemp)
        console.log("Temp ",FTemp)
    }

}