import {makeAutoObservable} from "mobx";

export default class GuaranteeStore {
    constructor() {
        this._examination = []
        this._examinationworks = []
        this._examinationarhive =[]
        this._examinationready =[]
        this._examinationcharger =[]
        this._status = ''
        makeAutoObservable(this)
        
    }
    SetExamination(examination) {
        // this._examination = examination.sort((a, b) => a.updatedAt > b.updatedAt ? 1 : -1)
        this._examination = examination

    }
    SetExaminationWorks(examinationworks) {
        // this._examinationworks = examinationworks.sort((a, b) => a.updatedAt > b.updatedAt ? 1 : -1)
        this._examinationworks = examinationworks

    }
    SetExaminationArhive(examinationarhive) {
        this._examinationarhive = examinationarhive
        // this._examinationarhive = examinationarhive.sort((a, b) => a.updatedAt > b.updatedAt ? 1 : -1)

    }
    SetExaminationReady(examinationready) {
        // this._examinationready = examinationready.sort((a, b) => a.updatedAt > b.updatedAt ? 1 : -1)
        this._examinationready = examinationready

    }
    SetExaminationCharger(examinationcharger) {
        // this._examinationcharger = examinationcharger.sort((a, b) => a.updatedAt > b.updatedAt ? 1 : -1)
        this._examinationcharger = examinationcharger

    }

    SetStatus(status){
        this._status = status
    }

    get status() {
        return this._status
    }
    get examinationcharger() {
        return this._examinationcharger
    }
    get examinationready() {
        return this._examinationready
    }

    get examinationarhive() {
        return this._examinationarhive
    }
    
    get examinationworks() {
        return this._examinationworks
    }
    get examination() {
        return this._examination
    }

    
}