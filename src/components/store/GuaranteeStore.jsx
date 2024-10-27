import {makeAutoObservable} from "mobx";

export default class GuaranteeStore {
    constructor() {
       this._examination = []
        makeAutoObservable(this)
    }

    SetExamination(examination) {
        this._examination = examination
    }
    
    get examination() {
        return this._examination
    }
    
}