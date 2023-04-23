<template>
  <div class="mt-8 mb-10">
    <div class="container mx-auto">
      <div class="mb-4">
        <TextField v-model="keyword" />
      </div>
      <div class="grid grid-cols-5 gap-x-3 gap-y-5 mb-5">
        <template v-for="(item, index) in items" :key="index">
          <Card :item="item" />
        </template>
      </div>
      <div class="flex align-center justify-center">
        <Paginate
          :limit="pagination.limit"
          :tottal_count="pagination.tottal_count"
          v-model:skip="pagination.skip"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Character } from "@/types/character";
import { has } from "lodash";
import qs from "query-string";

const items = ref<Character[]>([]);
const ts = Date.now().toString();
const nuxtApp = useNuxtApp();

const pagination = ref({
  limit: 100,
  skip: 1,
  tottal_count: 0,
});
const runtimeConfig = useRuntimeConfig();
const keyword = ref("");
const hash = nuxtApp.$utils.getHash(
  ts,
  runtimeConfig.public.privateKey,
  runtimeConfig.public.publicKey
);
const getCharacters = async () => {
  try {
    const query = qs.stringify({
      apikey: runtimeConfig.public.publicKey,
      ts,
      hash,
      limit: pagination.value.limit,
      offset: pagination.value.skip,
      name: keyword.value ? keyword.value : undefined,
    });
    const httpRequest = await fetch(`/site_url/characters?${query}`, {
      method: "GET",
    });
    const httpResponse = await httpRequest.json();
    (pagination.value.tottal_count = httpResponse.data.total),
      (items.value = httpResponse.data.results || []);
  } catch (error) {}
};
onMounted(async () => {
  await getCharacters();
});

watch(
  () => pagination.value.skip,
  async (new_value: number) => {
    await getCharacters();
  }
);

watch(keyword, async (new_value: string) => {
  await getCharacters();
});

const onClickHandler = (page: number) => {
  console.log(page);
};
</script>