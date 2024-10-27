import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._allUser = []
        this._isAuth = false
        this._users = {}
        this._role = ''
        this._email = ''
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
    setEmail(email) {
        this._email = email
    }
    SetAllUser(allUser) {
        this._allUser = allUser
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

    get email() {
        return this._email
    }
    get allUser() {
        return this._allUser
    }
}