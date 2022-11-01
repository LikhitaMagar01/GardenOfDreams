<script setup>
const route = useRoute()
const id = computed(() => {
    return route.params.id.replace("-", " ")
    // return route.params.id
});
useHead({
    title: `dynamic page ${route.params.id}`
})
</script>
<template>
    <div>
        this is dynamic route {{ id }}
    </div>
</template>