<script lang="ts">
import { defineComponent } from "vue";
import { generateTOTP } from '@/scripts/credentialsModule';

console.log('Generated TOTP:');
console.log(generateTOTP('JBSWY3DPEHPK3PXP'));


export default defineComponent({
    name: "SideMenu",
    components: {},
    data() {
        return {
            active: true,
            list: "example.com"
        };
    }
});
</script>
<template>
    <div class="inspect-popup">
        <div class="header">
            <div class="header-icon">
                <svg viewBox="0 0 24 24">
                    <path
                        d="
                M11 9c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1z
                m1 5.8c0 .2-.1.3-.3.3h-1.4c-.2 0-.3-.1-.3-.3v-4.6c0-.2.1-.3.3-.3h1.4c.2.0.3.1.3.3z
                M11 3.8c-4 0-7.2 3.2-7.2 7.2s3.2 7.2 7.2 7.2s7.2-3.2 7.2-7.2s-3.2-7.2-7.2-7.2z
                m0 12.5c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3s5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3z
                M 17.6 15.9c-.2-.2-.3-.2-.5 0l-1.4 1.4c-.2.2-.2.3 0 .5l4 4c.2.2.3.2.5 0l1.4-1.4c.2-.2.2-.3 0-.5z
                "
                    ></path>
                </svg>
            </div>
            <div class="header-title">Salesforce inspector</div>
            <div class="header-close-button">
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAw3pUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjabVBbDgMhCPznFD2CPFQ8jttuk96gxy8Ku1nbTsKIDBkR2N+vJ9wGCAUkVy2tlGSQJo26JZocfTImmTzBEhqudTgFshKPTr9qif6jjqeBH92yfDHSewjbKrR4gPTLiGKyMdHIH2HUwojJBQyD7t9KpWm9fmHb0wr1gEGi69g/92rbe2R7h4l2Rk7G7Eth4hEM3C0RY+RsjcjV8sxlVg4zW8i/PR2AD+d+WRcpUBJ0AAABhGlDQ1BJQ0MgcHJvZmlsZQAAeJx9kT1Iw0AYht+mlYpUOthBxSFDdbKLijrWKhShQqgVWnUwufQPmjQkKS6OgmvBwZ/FqoOLs64OroIg+APi6uKk6CIlfpcWWsR4x3EP733vy913gNCoMM0KxAFNt810MiFmc6ti8BUBhGnOYEhmljEnSSl4jq97+Ph+F+NZ3nV/jn41bzHAJxLHmWHaxBvE05u2wXmfOMJKskp8Tjxu0gWJH7mutPiNc9FlgWdGzEx6njhCLBa7WOliVjI14iniqKrplC9kW6xy3uKsVWqsfU/+wlBeX1nmOq0RJLGIJUgQoaCGMiqwEaNdJ8VCms4THv5h1y+RSyFXGYwcC6hCg+z6wf/gd2+twuREKymUAHpeHOdjFAjuAs2643wfO07zBPA/A1d6x19tALOfpNc7WvQICG8DF9cdTdkDLneAwSdDNmVX8tMSCgXg/Yy+KQcM3AJ9a62+tc9x+gBkqFepG+DgEBgrUva6x7t7u/v2b027fz+38nLChH9nrQAADXppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6Y2VjMjdmMDEtOTQ5MS00OThmLTliMTAtZjU2MWFjOTNiYTcxIgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ4ZDY2YzMwLTliZjMtNDkzMy04MjQ2LTdjM2M2MTdlMDQxZCIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmExYzBkMDk1LTNlZDctNDllMi05NjQ0LWFmODUwMmYzNDM5NSIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iTWFjIE9TIgogICBHSU1QOlRpbWVTdGFtcD0iMTY4MTU3NDE3MTk5NzE1OCIKICAgR0lNUDpWZXJzaW9uPSIyLjEwLjM0IgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjM6MDQ6MTVUMTc6NTY6MTArMDI6MDAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDIzOjA0OjE1VDE3OjU2OjEwKzAyOjAwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODk2NjI4MTAtYmU4Ni00ZmYzLWE2NWQtMWE3YzNhYWM3MDY1IgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKE1hYyBPUykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjMtMDQtMTVUMTc6NTY6MTErMDI6MDAiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+Uju9nQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+cEDw84C+FnFUIAAAFISURBVGje7dlBcsIwDAVQf0Pv1R6CRW9jztGeoEeEmYhNWTE0svUtq4z+OkTzQqI4cimZTCaTecXIb95bO66oqz0e2pM+/BCAB6a3JkYwHqhndfdqYhQzE7VX96+adXZx7/NVxtVnoTTn+Tif34xNQSBSNlWHMdx+2otieoa8UCxMB2geionpbAoQQHf85XL9XIEZvdshiuyhRBmvBYkJFQzTh9q27esfYMZQHhhwULru59EAwPun7ChGNwP39htHsVoz+M9UP4r5nsGcRqFHsV+atSyMiHxHnzxAOuM9o5iKCYwaxwRE2TH3nE4/h5fBBEDpMb0L09ZaDY8JjBrHBETZMbNRS4ck+plCqaVAiKB5Yyw2KsSgkYkCr5ht1ewyOfWemzHqmdsi9ePM4xN8xYaXpWbYLcnRmkNDdY/91VU1M5lMJuOaG8+HiUNRngqGAAAAAElFTkSuQmCC"
                />
            </div>
        </div>
        <div class="main">
            <div class="all-data-box">
                <ul class="small-tabs">
                    <li data-aspect="sobject" class="active">Objects</li>
                    <li data-aspect="users" class="">Users</li>
                </ul>
            </div>
            <div class="global-box">
                <a href="data-export.html?host=rbi3--poc.sandbox.my.salesforce.com" target="_top" class="button"
                    >Data <u>E</u>xport</a
                ><a href="data-import.html?host=rbi3--poc.sandbox.my.salesforce.com" target="_top" class="button"
                    >Data <u>I</u>mport</a
                ><a href="limits.html?host=rbi3--poc.sandbox.my.salesforce.com" target="_top" class="button"
                    >Org <u>L</u>imits</a
                ><a href="metadata-retrieve.html?host=rbi3--poc.sandbox.my.salesforce.com" target="_top" class="button"
                    ><u>D</u>ownload Metadata</a
                ><a href="explore-api.html?host=rbi3--poc.sandbox.my.salesforce.com" target="_top" class="button"
                    >E<u>x</u>plore API</a
                ><a
                    href="https://rbi3--poc.sandbox.my.salesforce.com/lightning/setup/SetupOneHome/home?setupApp=all"
                    title="You can choose if you want to open in a new tab or not"
                    target="_top"
                    class="button"
                    >Setup <u>H</u>ome</a
                >
            </div>
        </div>
        <div class="footer">
            <div class="meta">
                <div class="version">
                    (<a href="https://github.com/sorenkrabbe/Chrome-Salesforce-inspector/blob/master/CHANGES.md"
                        >v1.14</a
                    >
                    / 57.0)
                </div>
                <div class="tip">[ctrl+alt+i] to open</div>
                <a class="about" href="https://github.com/sorenkrabbe/Chrome-Salesforce-inspector" target="_top"
                    >About</a
                >
            </div>
        </div>
    </div>
</template>
