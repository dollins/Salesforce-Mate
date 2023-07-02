<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Popup",
    components: {},
    data() {
        return {
            active: true,
            list: "example.com"
        };
    },
    methods: {
        togglePopup(event) {
            if (event.currentTarget.closest('section').classList.includes('slds-is-open')) {
                event.currentTarget.closest('section').classList.remove('slds-is-open');
            } else {
                event.currentTarget.closest('section').classList.add('slds-is-open');
            }
        }
    }
});
</script>
<template>
    <div class="wrapper">
        <div class="title">SF Mate</div>
        <div class="accordeon">
            <div class="organizer">
            <div class="organizer--control">
                <div class="organizer--control--featured">
                    <img src="/icons/utils/favorite_white.png" />
                </div>
                <div class="organizer--control--search">
                    <input type="text" placeholder="Search here..." />
                </div>
                <div class="organizer--control--new">
                    <button>New</button>
                </div>
            </div>
        </div>
            <ul class="slds-accordion">
                <li class="slds-accordion__list-item">
                    <section class="slds-accordion__section">
                        <div class="slds-accordion__summary">
                            <h2 class="slds-accordion__summary-heading">
                                <button
                                    class="slds-button slds-button_reset slds-accordion__summary-action"
                                    aria-controls="referenceId-45"
                                    aria-expanded="false"
                                    title="Accordion summary"
                                    @click="togglePopup"
                                >
                                    <svg
                                        class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left"
                                        aria-hidden="true"
                                    >
                                        <use xlink:href="/icons/symbols.svg#switch"></use>
                                    </svg>
                                    <span class="slds-accordion__summary-content">Accordion summary</span>
                                </button>
                                <span class="slds-badge slds-badge_lightest">
                                    2
                                </span>
                            </h2>
                        </div>
                        <div class="slds-accordion__content" id="referenceId-45">Accordion details - A</div>
                    </section>
                </li>
                <li class="slds-accordion__list-item">
                    <section class="slds-accordion__section">
                        <div class="slds-accordion__summary">
                            <h2 class="slds-accordion__summary-heading">
                                <button
                                    class="slds-button slds-button_reset slds-accordion__summary-action"
                                    aria-controls="referenceId-46"
                                    aria-expanded="false"
                                    title="Accordion summary"
                                >
                                    <svg
                                        class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left"
                                        aria-hidden="true"
                                    >
                                        <use xlink:href="/icons/symbols.svg#switch"></use>
                                    </svg>
                                    <span class="slds-accordion__summary-content">Accordion summary</span>
                                </button>
                                <span class="slds-badge slds-badge_lightest">
                                    3
                                </span>
                            </h2>
                        </div>
                        <div hidden="" class="slds-accordion__content" id="referenceId-46">Accordion details - B</div>
                    </section>
                </li>
                <li class="slds-accordion__list-item">
                    <section class="slds-accordion__section">
                        <div class="slds-accordion__summary">
                            <h2 class="slds-accordion__summary-heading">
                                <button
                                    class="slds-button slds-button_reset slds-accordion__summary-action"
                                    aria-controls="referenceId-47"
                                    aria-expanded="false"
                                    title="Accordion summary"
                                >
                                    <svg
                                        class="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left"
                                        aria-hidden="true"
                                    >
                                        <use xlink:href="/icons/symbols.svg#switch"></use>
                                    </svg>
                                    <span class="slds-accordion__summary-content">Accordion summary</span>
                                </button>
                                <span class="slds-badge slds-badge_lightest">
                                    5
                                </span>
                            </h2>
                        </div>
                        <div hidden="" class="slds-accordion__content" id="referenceId-47">Accordion details - C</div>
                    </section>
                </li>
            </ul>
        </div>
    </div>
</template>
