<template>
  <div class="common-layout">
    <el-container>
      <el-header class="bg-blue-700">Header</el-header>
      <el-main>
        <slot />
      </el-main>

      <el-footer class="bg-black">Footer</el-footer>
    </el-container>
  </div>
</template>
