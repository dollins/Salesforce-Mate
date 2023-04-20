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
        <div class="title">
            SF Mate
        </div>
        <div class="organizer">
            <div class="organizer--control">
                <div class="organizer--control--featured">
                    <img src="/icons/utils/favorite_white.png"/>
                </div>
                <div class="organizer--control--search">
                    <input type="text" placeholder="Search here..."/>
                </div>
                <div class="organizer--control--new">
                    <button>New</button>
                </div>
            </div>
            <div class="organizer--tabs">
                <div class="organizer--tabs--tab">
                    <div class="organizer--tabs--tab--header">
                        <div class="organizer--tabs--tab--header--state">

                        </div>
                        <div class="organizer--tabs--tab--header--count">
                            3
                        </div>
                        <div class="organizer--tabs--tab--header--name">
                            Default
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>