
<template>
  <div class="bg-white shadow-sm rounded">
    <RouterLink :to="`/character/${item.id}`">
      <div>
        <img
          :src="`${item.thumbnail.path}/portrait_fantastic.${item.thumbnail.extension}`"
          class="w-full h-56 object-cover"
        />
      </div>
      <div class="px-2 py-4">
        <h2 class="text-center font-semibold text-base">
          {{ item.name }}
        </h2>
      </div>
    </RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { Character } from "~/types/character";
defineProps<{
  item: Character;
}>();
</script>