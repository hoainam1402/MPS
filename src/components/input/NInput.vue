<template>
  <div class="m-row-input d-flex m-input-border" :class="customClass">
    <div class="m-input-wrapper">
      <input
        :type="type"
        :value="modelValue"
        @input="handleUpdateModelValue($event)"
        :name="name"
        :autocomplete="autocomplete"
        :id="id"
        :tag="tag"
        :required="require"
        :readonly="disable"
        :placeholder="placeholder"
        @blur="handleBlurElement($event)"
        :style="{ width: width + 'px' }"
        class="m-input"
      />
    </div>

    <span class="m-input-error-label">{{ textMessage }}</span>
  </div>
</template>

<script>
export default {
  name: "NInput",
  props: {

    type: {
      type : String,
      default : "text"
    },

    // Tên của input
    name: String,

    // Label của input
    label: String,

    // Trường bắt buộc của input
    require: Boolean,

    // Label của input
    id: String,

    // Chiều rộng tối thiểu của select
    width: Number,

    // Placeholder của input
    placeholder: String,

    // Custom class
    customClass: String,

    disable: {
      type: Boolean,
      default: false,
    },

    autocomplete: String,

    // Giá trị của input
    modelValue: null,

    // Text Message khi có lỗi xảy ra
    textMessage: String,

    tag: {
      type : String,
      default : null
    }
  },
  setup(props , context) {
    //#region Xử lý dữ liệu
    /**
     * Thực hiện cập nhật lại model value
     * @author : TNLAM (30-09-2022)
     * @param {Any} newValue giá trị mới
     * @return {}
     */
    const handleUpdateModelValue = ($event) => {
      console.log(1);
      debugger
      // Set giá trị nhỏ nhất là 0
      const target = $event.target || $event.currentTarget;
      //   const boundElement = target.closest(".m-input-border");
      //   // Nếu input đang invalid thì bỏ nó
      //   if (
      //     boundElement.hasAttribute("invalid") &&
      //     target.hasAttribute("required") &&
      //     target.value
      //   ) {
      //     boundElement.removeAttribute("invalid");
      //   }

      // if(target.type == "email" && target.value && validate.isEmailValid(target.value)){
      //   target.removeAttribute("invalid");
      // }

      context.emit("update:modelValue", target.value);
    };

    

    /**
     * Xử lý sau khi blur
     * @author : TNLAM (30-09-2022)
     * @param {Any} newValue giá trị mới
     * @return {}
     */
    const handleBlurElement = ($event) => {
      // Format lại dữ liệu số - Hiện đang lỗi
      // let currentValue = Number(this.modelValue).toLocaleString("vi-VI");
      // this.$emit('update:modelValue', currentValue);

      // Thực hiện gọi hàm ở component cha
      context.emit("onValidateInput", $event);
    };
    //#endregion

    return
    {
      handleUpdateModelValue,
      handleBlurElement
    };
  },

  emits: ["update:modelValue"],

};

</script>

<style scoped>
@import url(../../style/components/input.css);
</style>
