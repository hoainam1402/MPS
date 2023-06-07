<template>
    <header>
      <div class="m-header d-flex flex-align-center">
        <div class="m-header-left">
          <div class="m-header-left-logo pointer d-flex">
            <div class="m-header-left-logo__icon mi-32 mi-task-logo"></div>
            <div class="m-header-left-logo__brand ">
              Công việc
            </div>
          </div>
  
          
        </div>

        <div class="flex-1"></div>

        <div class="m-header-right d-flex flex-align-center">
            <MSplitButton
            :text="'Thêm công việc'"
            :title="'Thêm công việc'"
            :classCustom="'m-button-m'"
            :leftIcon="'mi-24 mi-plus-white'"
            />
          
            <div class="divider m-mr32 m-w1"></div>

            <div class="m-icon-btn mi-24 mi-search m-mr32"></div>

            <div class="m-icon-btn mi-24 mi-notification m-mr32"></div>

            <div class="m-icon-btn mi-24 mi-question m-mr32"></div>

            <div class="m-icon-btn mi-24 mi-book m-mr32"></div>

            <div class="m-icon-btn mi-24 mi-show-detail m-mr32"></div>

            <div class="m-icon-btn avatar m-mr8"></div>
            

        </div>
      </div>
    </header>
  </template>
    
    <script>
import MSplitButton from '@/components/button/MSplitButton.vue'
  export default {
    name: "HeaderLayout",
    components: {MSplitButton}

  };
  </script>
    <style>
  @import url('@/style/layouts/layout-header.css');
  </style>