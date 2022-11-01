<template>
    <div>
        <navbar />
        <slot></slot>
    </div>
</template>

<script setup>
import navbar from '@/components/layout/navbar.vue';
</script>