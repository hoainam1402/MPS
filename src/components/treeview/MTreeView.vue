<template>
  <div class="m-tree-view">
    <ul v-show="!collapsed">
      <li v-for="item in data" :key="item.id">
        <MTab
          class="caret"
          v-if="item.children"
          :text="item.text"
          :leftIcon="'mi-16 mi-carret-right-white'"
          @click="toggleCollapse(item)"
        >
        </MTab>
        <MTab 
        v-else 
        :text="item.text"
        :icon="item.icon"
        />
        <MTreeView
          v-if="item.children"
          :items="item.children"
          :collapsed="item.collapsed"
        ></MTreeView>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent,  reactive } from "vue";
import MTab from "@/components/tab/TabItem.vue";
import commonFn from "@/utils/helper/commonFn.js"
export default defineComponent({
  name: "MTreeView",
  components: {MTab},
  props: {
    items: {
      type: Array,
      required: true
    },
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const data = reactive(commonFn.addCollapsedPropertyForTree(props.items));

    const toggleCollapse = (item) => {
      let idx = data.findIndex(x => x.id === item.id);
      if(idx >= 0){
        data[idx].collapsed = !item.collapsed;
      }
    };

    return{
      data,
      toggleCollapse
    }
  }

});

</script>

<style scoped>
@import url(../../style/components/tree.css);
</style>
