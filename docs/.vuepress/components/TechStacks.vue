<script setup lang="ts">
type Props = {
  list: string[];
}

const props = defineProps<Props>()
</script>

<template>
  <span class="tech-stack" v-for="tech in props.list" :key="tech">
    {{ tech }}
  </span>
</template>

<style>
.tech-stack {
  background-color: var(--code-bg-color);
  border-radius: 0.25rem;
  color: var(--c-text-accent);
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1;
  margin: 0 0.25rem 0.25rem 0;
  padding: 0.25rem 0.5rem;
}
</style>
