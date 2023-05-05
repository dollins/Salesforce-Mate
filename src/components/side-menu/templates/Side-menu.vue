<script lang="ts">
import { defineComponent } from 'vue';
	
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";


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
    <div>Test 123</div>
</template>