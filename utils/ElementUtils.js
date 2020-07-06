export class ElementUtils{
    constructor(){

    }

    static selectElementFromList(element, matchStr){
        let list = $$(element).click();
        return list.$$('li').filter(function (elem, index) {
            return elem.getText().then(function (text) {
              return text.includes(matchStr);
            });
          })
    }
}