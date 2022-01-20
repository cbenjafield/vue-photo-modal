<template>
    <div>
        <transition-group
            enter-active-class="transition duration-200 ease-out"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
            class="fixed inset-0 bg-black opacity-50"
        >
            <modal v-for="image in images" :key="image.uuid" :image="image" :close="() => close(image.uuid)" />
        </transition-group>
    </div>
</template>
<script>
import { events } from '../events'
import { v4 as uuidv4 } from 'uuid'
import Modal from './Modal'

export default {
    name: 'VuePhotoModal',
    components: {
        Modal
    },
    data() {
        return {
            images: []
        }
    },
    created() {
        events.$on('add', this.add)
        events.$on('close', this.close)
    },
    methods: {
        clearImages() {
            this.images = []
        },

        // Clear out all the previous images and
        // add the new one to the modal.
        add(image) {
            this.clearImages()
            image.uuid = uuidv4()
            this.images.push(image)
        },

        // Close the image modal.
        close(uuid) {
            this.images.splice(this.images.findIndex(img => img.uuid === uuid))
        }
    }
}
</script>