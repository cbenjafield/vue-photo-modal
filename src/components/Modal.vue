<template>
    <div class="photo-modal fixed inset-0 flex items-center justify-center p-6 max-h-screen max-w-screen">
        <div class="fixed inset-0 bg-black opacity-50" @click.prevent="close"></div>
        <div class="max-h-full max-w-full overflow-hidden rounded-md bg-white relative shadow-md" :style="`height:${height}px`" ref="imageWrapper">
            <img 
                class="max-w-full max-h-full"
                :class="image.class || null"
                :src="image.src || null"
                :alt="image.alt || null"
                :width="image.width || null"
                :height="image.height || null"
                ref="image"
            >
            <button
                class="appearance-none focus:outline-none opacity-50 hover:opacity-100 transition duration-150 ease-in-out inline-flex items-center justify-center text-white hover:text-gray-500 focus:ring-2 focus:ring-offset-0 focus:ring-indigo-600 w-8 h-8 overflow-hidden absolute top-4 right-4 cursor-pointer rounded-full"
                type="button"
                aria-label="Close"
                @click.prevent="close"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'VuePhotoModal',
    props: {
        image: Object,
        close: Function
    },
    data() {
        return {
            height: 0
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.height = this.$refs.imageWrapper.clientHeight
        })
    }
}
</script>
<style lang="css">
.photo-modal {
    z-index: 10000;
}
</style>