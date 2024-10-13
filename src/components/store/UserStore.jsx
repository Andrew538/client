import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._users = {}
        this._role = ''
        // console.log(this)
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(users) {
        this._users = users
    }
    setRole(role) {
        this._role = role
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._users
    }

    get role() {
        return this._role
    }
}