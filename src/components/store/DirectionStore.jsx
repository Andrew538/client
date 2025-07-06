import { makeAutoObservable } from "mobx";

export default class DirectionStore {
  constructor() {
    this._direction = [];
    this._alldirection = [];
    this._allcity = [];

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


  get direction() {
    return this._direction;
  }

  get alldirection() {
    return this._alldirection
  }

  
  get allcity() {
    return this._allcity
  }
}
