import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._allUser = []
        this._isAuth = false
        this._users = {}
        this._role = ''
        this._email = ''
        this._surname = ''
        this._id = +''
        makeAutoObservable(this)
    }
    setID(id) {
        this._id = id 
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
    setAllUser(allUser) {
        this._allUser = allUser
    }
    setSurname(surname) {
        this._surname = surname
    }
     
    get id() {
        return this._id
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

    get surname() {
        return this._surname
    }
}