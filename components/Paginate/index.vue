<template>
  <ClientOnly>
    <vue-awesome-paginate
      :total-items="tottal_count"
      :items-per-page="limit"
      :max-pages-shown="limit"
      v-model="skip_item"
      v-if="props.tottal_count && props.tottal_count > 0"
    />
  </ClientOnly>
</template>

<script lang="ts" setup>
const props = defineProps<{
  limit?: number;
  skip?: number;
  tottal_count?: number;
}>();
const skip_item = ref(props.skip);
const emit = defineEmits(["update:skip"]);
watch(skip_item, (new_value: number | undefined) => {
  emit("update:skip", new_value);
});
</script>

<style lang="scss">
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
