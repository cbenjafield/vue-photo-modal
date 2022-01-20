<template>
    <div class="fixed inset-0 flex items-center justify-center p-6">
        <div class="fixed inset-0 bg-black opacity-50"></div>
        <div class="max-h-full max-w-full overflow-hidden rounded-md bg-white relative shadow-md">
            <img 
                class="max-w-full max-h-full"
                :class="image.class || null"
                :src="image.src || null"
                :alt="image.alt || null"
                :width="image.width || null"
                :height="image.height || null"
            >
            <button
                class="appearance-none focus:outline-none bg-transparent hover:bg-gray-200 transition duration-150 ease-in-out inline-flex items-center justify-center text-white hover:text-gray-500 focus:ring-2 focus:ring-offset-0 focus:ring-indigo-600 w-8 h-8 overflow-hidden absolute top-4 right-4 cursor-pointer"
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
    }
}
</script>