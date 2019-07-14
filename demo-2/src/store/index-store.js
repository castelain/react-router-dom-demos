import { observable, action, computed } from 'mobx';

class IndexStore {
    @observable isLogin = false;

    @computed
    get getIsLogin() {
        return this.isLogin;
    }

    @action
    changeLoginStatus() {
        this.isLogin = !this.isLogin;
    }
    
}

const store = new IndexStore();

export default store;