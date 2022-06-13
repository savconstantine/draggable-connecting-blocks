<template>
    <div class="host" :class="hostDirect + 'Host'" :ref="hostDirect + 'Host' + blockIndex" @click="setLine( blockIndex, hostDirect + 'Host')"></div>
</template>

<script>
    export default {
        name: 'LineHost',
        props: {
            hostDirect: {
                type: String,
                default: 'top'
            },
            blockIndex: {
                type: Number,
                default: 0
            },
        }
    }
</script>