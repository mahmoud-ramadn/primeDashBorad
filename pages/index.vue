<template>
  <h1 class="text-xl py-3 font-medium">Dashboard</h1>

  <div class="card space-y-9 mt-11">
    <Splitter class="space-x-6">
      <SplitterPanel :size="70" class="p-6">
        <div class="flex justify-between">
          <div class="flex flex-col gap-3">
            <h3 class="w-4 font-normal">Reveue</h3>
            <span class="text-xl font-medium py-2 leading-8"
              >IDR 7.852.000</span
            >
            <p class="text-xs flex items-center">
              <Icon
                name="pepicons-pencil:arrow-up"
                class="text-[#149D52] text-xl"
              />
              <span class="text-[#149D52]">2.1%</span> vs last week
            </p>
            <p class="text-xs font-normal">Sales from 1-12 Dec, 2020</p>
          </div>

          <el-button
            type="primary"
            style="background: #dde4f0; border: none"
            class="w-28 h-8 text-[#DDE4F0] shadow-lg"
            >view Report</el-button
          >
        </div>

        <div class="w-full">
          <Coom />

          <Radio />
        </div>
      </SplitterPanel>
      <SplitterPanel
        class="p-6 flex flex-col justify-between"
        :size="30"
        :minSize="10"
      >
        <div class="flex justify-between">
          <div>
            <h1>Order Time</h1>
            <p class="text-xs text-gray-300 leading-10">From 1-6 Dec, 2020</p>
          </div>
          <el-button
            type="primary"
            style="background: #dde4f0; border: none"
            class="w-28 h-8 text-[#DDE4F0] shadow-lg"
            >view Report</el-button
          >
        </div>
        <Circle />
        <Radio />
      </SplitterPanel>
    </Splitter>

    <div class="w-full grid grid-cols-4">
      <div class="col-span-1">
        <h1 class="font-normal">Your Rating</h1>
        <p class="text-xs text-black/60">
          Lorem ipsum dolor sit amet, consectetur
        </p>
        <CircllllsIdex />
      </div>
      <div class="col-span-2 overflow-hidden p-10 border-x-[1px]">
        <p class="text-xl">Most Ordered Food</p>
        <span class="text-xs text-black/65"
          >Adipiscing elit, sed do eiusmod tempor</span
        >
        <Table />
      </div>
      <div class="col-span-1 space-y-14 p-4">
        <div class="flex justify-between">
          <div>
            <h1>Order Time</h1>
            <p class="text-xs text-gray-300 leading-10">From 1-6 Dec, 2020</p>
          </div>
          <el-button
            type="primary"
            style="background: #dde4f0; border: none"
            class="w-28 h-8 text-[#DDE4F0] shadow-lg"
            >view Report</el-button
          >
        </div>
        <Radarr />
      </div>
    </div>
  </div>
</template>
