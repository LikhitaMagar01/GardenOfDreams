<template>
    <div>
        <div class="mx-10 my-5 p-5 flex justify-center h-screen">
            Garden of dreams
        </div>
        <navbar />
        <slot></slot>
        <!-- <div>
            <component :is="sidebar" />
            this is default vue
        </div> -->
    </div>
</template>

<script setup>
import navbar from '@/components/layout/navbar.vue';
// const sidebar = resolveComponent("Sidebar")
</script>