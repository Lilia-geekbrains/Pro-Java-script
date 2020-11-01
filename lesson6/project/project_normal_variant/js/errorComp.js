Vue.component('error', {
    props: [],
    data() {
        return {
            showMsg: false,
        }
    },

    methods: {
        getErrorMsg(is) {
            this.showMsg = is;
        },

        deleteErrorMsg (is) {
            this.showMsg = is;
        }
    },

    template:
    ` <div class="errorMsg" v-show="showMsg">Ошибка соединения с сервером!<button class="del-btn" @click="deleteErrorMsg(false)">&times;</button> </div>
    `
})