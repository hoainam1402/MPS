<template>
  <div class="m-main-layout">
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default {
    name: "MainLayput"
}
</script>

<style>
.m-main-layout *{
  font-family: 'GoogleSans-Medium', Helvetica, Arial, sans-serif;

}
</style>