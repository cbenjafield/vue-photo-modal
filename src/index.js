import VuePhotoModal from './VuePhotoModal'

export default {
    install(Vue) {
        if (this.installed) return

        this.installed = true

        const VuePhotoModal = new VuePhotoModal(Vue)

        Vue.prototype.$photoModal = VuePhotoModal
        Vue.prototype['photoModal'] = VuePhotoModal
    }
}