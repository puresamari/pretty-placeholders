class PrettyPlaceholders {
    constructor (prefix = 'pretty-placeholder') {
        this.prefix = prefix;
    }
    
    get Prefix() {
        return this.prefix;
    }
    
    get Elements() {
        return document.querySelectorAll('['+this.prefix+']');
    }
    
    init() {
        let _this = this;
        Array.from(this.Elements, element => {
            let newele = document.createElement('div');
            newele.setAttribute('class', this.prefix+'-after');
            element.parentNode.insertBefore(newele, element.nextSibling);
        });
    }
}