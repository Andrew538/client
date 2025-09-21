import { makeAutoObservable } from "mobx";

export default class DirectionStore {
  constructor() {
    this._direction = [];
    this._alldirection = [];
    this._allcity = [];
    this._ready = [];
    this._arhivedelivery = [];
    this._totalweghtnewofcity = ''
    this._totalweghtnewofdirections = ''
    this._totalweghtused = ''

 
    makeAutoObservable(this);
  }

  SetDirection(direction) {
    this._direction = direction;
  }

  SetAllDirection(alldirection) {
    // this._alldirection = alldirection.sort((a, b) => a.region.toLowerCase() > b.region.toLowerCase() ? 1 : -1);
    this._alldirection = alldirection
  }

  SetAllCity(allcity) {
    // this._allcity = allcity.sort((a, b) => a.city.toLowerCase() > b.city.toLowerCase() ? 1 : -1);
    this._allcity = allcity
  }

  SetReady(ready) {
    this._ready = ready
  }

  SetArhiveDelivery(arhivedelivery) {
    this._arhivedelivery = arhivedelivery
  }

   SetTotalWeghtNewOfCity (totalweghtnewofcity) {
    this._totalweghtnewofcity = totalweghtnewofcity
  }

  get direction() {
    return this._direction;
  }

  get alldirection() {
    return this._alldirection
  }

  
  get allcity() {
    return this._allcity
  }

  get ready() {
    return this._ready
  }
  get arhivedelivery() {
    return this._arhivedelivery
  }

   get totalweghtnewofcity() {
    return this._totalweghtnewofcity
  }
}
