<template>
  <div class="relative">
    <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearchAsync"
      placeholder="Search"
      @select="handleSelect"
      style="width: 639px; height: 32px"
    />
    <Icon
      name="tabler:search"
      class="absolute top-1/2 -translate-y-1/2 right-4 text-[#627B87]"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const state = ref("");

interface LinkItem {
  value: string;
  link: string;
}

const links = ref<LinkItem[]>([]);

let timeout: ReturnType<typeof setTimeout>;
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value;

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    cb(results);
  }, 3000 * Math.random());
};
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    );
  };
};

const handleSelect = (item: Record<string, any>) => {
  console.log(item);
};
</script>
