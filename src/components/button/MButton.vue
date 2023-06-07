<template>
  <button
    class="m-button"
    :class="[
      buttonTypeClass,
      text ? '' : 'only-icon',
      border ? 'm-btn-border' : '',
      classCustom,
    ]"
    :title="title"
    :tag="tag"
  >
    <div
      :class="['icon-24 icon-left', leftIcon, disabled ? 'disabled-icon' : '']"
      v-if="leftIcon"
    >
      &nbsp;
    </div>
    <div
      class="text"
      :class="[{ 'pl-0': leftIcon, 'pr-0': rightIcon }]"
      v-if="text"
    >
      {{ text }}
    </div>
    <div
      :class="[
        'icon-24 icon-right',
        rightIcon,
        disabled ? 'disabled-icon' : '',
      ]"
      v-if="rightIcon"
    />
  </button>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MButton",
  props: {
    // Nội dung của button
    text: {
      type: String,
      default: null,
    },

    // Loại button gồm 3 loại primary/secondary/third/four để hiện thị style tương ứng
    type: {
      type: String,
      validator: (value) => {
        return ["primary", "secondary", "tertiary"].includes(value);
      },
      default: "primary",
    },

    // Icon trái
    leftIcon: {
      default: null,
      type: String,
    },
    // Icon phải
    rightIcon: {
      default: null,
      type: String,
    },

    // Class custom cho button
    classCustom: String,

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
      type : String,
      default: null
    },

    title: {
      type: String,
      default: null
    }
  },
  computed: {
    buttonTypeClass() {
      return `m-btn-${this.type}`;
    },
  },
});

export const ButtonType = {
  Primary: "m-btn-primary",
  Secondary: "m-btn-secondary",
};
</script>

<style scoped>
@import url(../../style/components/button.css);
</style>
