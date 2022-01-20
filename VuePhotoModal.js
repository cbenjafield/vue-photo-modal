import { events } from './events'
import Wrapper from './components/Wrapper'

class VuePhotoModal {
    constructor(Vue) {
        Vue.component('vue-photo-modal', Wrapper)
        this.init = true
    }

    add(image) {
        events.$emit('add', image)
    }
}

export default VuePhotoModal