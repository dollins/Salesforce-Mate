<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Popup',
    components: {},
    data() {
        return {
            active: true,
            list: "example.com"
        }
    }
})
</script>
<template>
    <div class="wrapper">
        <h1 class="title">Simple Toggle Sites</h1>
        <div class="buttons">
            <button type="button" class="state-off" :class="{'is-active': !active}">Off</button>
            <button type="button" class="state-on" :class="{'is-active': active}">On</button>
        </div>
        <div class="sites">
            <p>List your websites below, one per line</p>
            <textarea rows="8" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" v-model="list"></textarea>
        </div>
        <button type="button" class="state-save">Save Site List</button>
    </div>
</template>