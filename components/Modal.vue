<template>
    <div class="fixed inset-0 flex items-center justify-center p-6">
        <div class="max-h-full max-w-full overflow-hidden rounded-md bg-white relative shadow-md">
            <img 
                class="max-w-full max-h-full"
                :class="image.class || null"
                :src="image.src || null"
                :alt="image.alt || null"
                :width="image.width || null"
                :height="image.height || null"
            >
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