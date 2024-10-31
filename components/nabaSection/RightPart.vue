<template>
  <div class="w-[300px] b text-end h-8 space-x-4">
    <Icon
      name="token-branded:burger"
      style="color: yellowgreen"
      class="w-8 h-8"
    />
    <el-dropdown>
      <el-button>
        Delicious Burger<el-icon class="el-icon--right">
          <Icon name="iconamoon:arrow-down-2-bold" />
          <arrow-down
        /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <Icon name="tabler:bell" class="w-8 h-8 text-[#B0C3CC]" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
