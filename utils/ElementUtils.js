
export class ElementUtils{
    constructor(){

    }

    static selectElementFromList(element, matchStr){
        return element.$$('li').filter(elem => {
            return elem.getText().then(text =>{
              return text.includes(matchStr)
            })
          }).first()
    }

}