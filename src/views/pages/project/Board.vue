<template>
  <div class="background-image d-flex flex-wrap">
    <div class="col-3">
      <div class="w-[350px] h-[70px] text-white text-xl align-center bg-[#67e8f9] flex flex-wrap items-center gap-[4px]">
        <img class="w-[30px] h-[30px] ml-[10px]" src="@/assets/board/finish_flag.png" alt="logo" />
        <div>Công việc cần thực hiện </div>
        <img  class="w-[30px] h-[30px]" src="@/assets/board/thunder.png" alt="logo" />
        <div class="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-gray-200">2</div>
      </div>
      <draggable class="list-group" :list="list1" group="people" @change="log">
        <div
            class="list-group-item"
            v-for="(element, index) in list1"
            :key="element.name"
        >
          {{ element.name }} {{ index }}
        </div>
      </draggable>
    </div>

    <div class="col-3">
      <div class="w-[250px] h-[70px]">Draggable 2</div>
      <draggable class="list-group" :list="list2" group="people" @change="log">
        <div
            class="list-group-item"
            v-for="(element, index) in list2"
            :key="element.name"
        >
          {{ element.name }} {{ index }}
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {VueDraggableNext} from 'vue-draggable-next'
import HeaderLayout from "@/views/layouts/HeaderLayout.vue";

export default defineComponent({
  components: {
    HeaderLayout,
    draggable: VueDraggableNext,
  },
  data() {
    return {
      enabled: true,
      list1: [
        {name: 'John', id: 1},
        {name: 'Joao', id: 2},
        {name: 'Jean', id: 3},
        {name: 'Gerard', id: 4},
      ],
      list2: [
        {name: 'John', id: 1},
        {name: 'Joao', id: 2},
        {name: 'Jean', id: 3},
        {name: 'Gerard', id: 4},
      ],
      dragging: false,
    }
  },
  methods: {
    log(event) {
      console.log(event)
    },
  },
})
</script>
<style scoped>
.background-image {
  background: url(@/assets/background/dashboard-bg-1.jpg) no-repeat;
  background-size: cover;
  height: 100%;
}
</style>