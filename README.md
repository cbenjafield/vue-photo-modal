# Vue Photo Modal

A really simple modal plugin to show images larger when using Vue and Tailwind.

## Installation

The plugin is available from NPM.

```
npm install --save vue-photo-modal
```

Then, tell Vue to use the plugin:

```
import VuePhotoModal from 'vue-photo-modal'

Vue.use(VuePhotoModal)
```

This will allow you to access the plugin within Vue like so:

```
this.$photoModal.add({
    src: 'src to image',
    alt: 'alt text to use for the image',
    width: 'explicitly set the width',
    height: 'explicitly set the height',
    class: 'class name for the image' 
})
```