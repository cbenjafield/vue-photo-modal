import VuePhotoModal from './VuePhotoModal'

export default {
    install(Vue) {
        if (this.installed) return

        this.installed = true

        const photoModal = new VuePhotoModal(Vue)

        Vue.prototype.$photoModal = photoModal
        Vue.prototype['photoModal'] = photoModal
    }
}