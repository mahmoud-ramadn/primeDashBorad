<template>
  <ThemeSwitcher />
  <div class="card">
    <DataTable :value="products" tableStyle="min-width: 50rem">
      <Column field="name" header="Name"></Column>
      <Column header="Image">
        <template #body="slotProps">
          <img
            :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`"
            :alt="slotProps.data.image"
            class="w-24 rounded"
          />
        </template>
      </Column>
      <Column field="price" header="Price">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </Column>

      <Column field="category" header="Category"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from "@/service/ProductService";

onMounted(() => {
  ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const formatCurrency = (value) => {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
};
const getSeverity = (product) => {
  switch (product.inventoryStatus) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warn";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
};
</script>
