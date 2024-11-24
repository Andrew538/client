import {makeAutoObservable} from "mobx";

export default class GuaranteeStore {
    constructor() {
       this._examination = []
       this._examinationworks = []

       this._status = ''
        makeAutoObservable(this)
    }

    SetExamination(examination) {
        this._examination = examination.sort((a, b) => a.id > b.id ? 1 : -1)
    }
    SetExaminationWorks(examinationworks) {
        this._examinationworks = examinationworks.sort((a, b) => a.id > b.id ? 1 : -1)

    }

    SetStatus(status){
        this._status = status
    }

    get status() {
        return this._status
    }
    
    get examinationworks() {
        return this._examinationworks
    }
    get examination() {
        return this._examination
    }

    
}