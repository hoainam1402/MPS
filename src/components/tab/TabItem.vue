<template>
  <div
    @click="onClick"
    :class="['m-tab-item m-pt8 m-pb8', isLink ? 'pointer' : '']"
    :title="title"
  >
    <div
      :class="[
        'm-tab-item-wrapper',
        'd-flex',
        'flex-align-center',
        classCustom,
      ]"
    >
      <div :class="['m-mr16', leftIcon]"></div>
      <div :class="classText">{{ text }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRoutePath } from "@/utils/uses/router/useRoutePath";

export default defineComponent({
  name: "MTab",
  props: {
    // Nội dung của button
    text: {
      type: String,
      default: null,
    },

    // Icon trái
    leftIcon: {
      default: null,
      type: String,
    },

    // Class custom cho button
    classCustom: String,

    classText: String,

    // Border của button
    border: {
      type: Boolean,
      default: false,
    },

    // Trạng thái disable của button
    disable: {
      type: Boolean,
      default: false,
    },

    tag: {
      type: String,
      default: null,
    },

    title: {
      type: String,
      default: null,
    },

    isLink: {
      type: Boolean,
      default: false,
    },

    to: {
      type: String,
      default: null,
    },
  },
  setup(props, { emit }) {
    const { goTo } = useRoutePath();
    const onClick = (event) => {
        if(props.isLink){
            if(!props.to){
                console.log("Thiếu config to trên tab link!");
                return;
            }

            goTo(props.to);

        }

        emit("onClick", event);
    }
  },
});
</script>

<style scoped>
.m-tab-item {
  height: 40px;
  display: block;
}

.m-tab-item:hover {
  background: var(--surface-900);
}

.m-tab-item .m-tab-item-wrapper {
  padding: 0 16px 0 24px;
  color: #fff;
  font-size: 15px;
}
</style>
