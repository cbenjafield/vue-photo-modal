# Vue Photo Modal

A really simple modal plugin to show images larger when using Vue and Tailwind.

![Vue Photo Modal example](https://user-images.githubusercontent.com/4989492/150506726-b21d19c5-4861-4071-9153-5d2ae5d086ed.jpg)

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