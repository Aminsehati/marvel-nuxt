<template>
  <div class="container mx-auto mt-9 mb-5">
    <div class="grid grid-cols-2 gap-x-5 gap-y-3">
      <div>
        <div
          v-if="
            character_info.thumbnail &&
            character_info.thumbnail.path &&
            character_info.thumbnail.extension
          "
        >
          <img
            :src="`${character_info.thumbnail.path}/portrait_fantastic.${character_info.thumbnail.extension}`"
            class="w-full object-cover "
          />
        </div>
      </div>
      <div>
        <h3 class="mb-2 font-semibold text-xl">
          {{ character_info.name }}
        </h3>
        <h5 class="text-base font-medium mb-5">
          {{ character_info.description }}
        </h5>
        <div>
          <h2 class="font-semibold text-xl mb-3">Serial</h2>
          <div
            v-for="(item, index) in character_info &&
            character_info.series &&
            character_info.series.items"
            :key="index"
          >
            <div class="text-base">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Character } from "~/types/character";
import qs from "query-string";
const route = useRoute();
const ts = Date.now().toString();
const nuxtApp = useNuxtApp();
const runtimeConfig = useRuntimeConfig();
const character_info = ref<Character>(new Character());
const hash = nuxtApp.$utils.getHash(
  ts,
  runtimeConfig.public.privateKey,
  runtimeConfig.public.publicKey
);
const getCharacter = async (id: string) => {
  try {
    const query = qs.stringify({
      apikey: runtimeConfig.public.publicKey,
      ts,
      hash,
    });
    const httpRequest = await fetch(`/site_url/characters/${id}?${query}`, {
      method: "GET",
    });
    const httpResponse = await httpRequest.json();
    character_info.value = httpResponse.data.results[0];
  } catch (error) {}
};
useFetch(() => {
  const { id } = route.params;
  if (id) {
    getCharacter(id);
  }
});
</script>