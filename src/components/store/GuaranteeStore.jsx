import {makeAutoObservable} from "mobx";

export default class GuaranteeStore {
    constructor() {
       this._examination = [
        {
            id: 1, data: 29092024, client: 'Пучков', manager: 'Туркин', product: 'Аком 62EFB', releaseDate: 30092024, result: 'КЗ'
        },
        {
            id: 1, data: 29092024, client: 'Марков', manager: 'Туркин', product: 'Аком 62 евро', releaseDate: 30092024, result: 'Обрыв'
        }
       ]
        makeAutoObservable(this)
    }

    SetExamination(examination) {
        this._examination = examination
    }
  
    get examination() {
        return this._examination
    }
    
}