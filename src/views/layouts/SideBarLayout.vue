<template>
    <aside>
        <div class="m-sidebar">
            <div class="m-tab-list">
              <router-link to="/dashboard" class="m-tab-item m-pt8 m-pb8">
                <div class="m-tab-item-wrapper d-flex flex-align-center">
                  <div class="mi-24 mi-home m-mr16"></div>
                  <div class="">Tổng quan</div>
                </div>
              </router-link>

              <router-link to="/dashboard" class="m-tab-item m-pt8 m-pb8">
                <div class="m-tab-item-wrapper d-flex flex-align-center">
                  <div class="mi-24 mi-my-task m-mr16"></div>
                  <div class="">Việc của tôi</div>
                </div>
              </router-link>

              <router-link to="/dashboard" class="m-tab-item m-pt8 m-pb8">
                <div class="m-tab-item-wrapper d-flex flex-align-center">
                  <div class="mi-24 mi-chart m-mr16"></div>
                  <div class="">Báo cáo</div>
                </div>
              </router-link>
            </div>

            <div class="m-department-list">
              <MTreeView
              :items="data"
              />
            </div>
        </div>
    </aside>

</template>

<script>
import MSplitButton from "@/components/button/MSplitButton.vue";
import MTreeView from "@/components/treeview/MTreeView.vue";
export default {
  name: "SideBarLayout",
  components: { MSplitButton, MTreeView },
  setup(props, context){
    const data =  [
        {
          id: 1,
          text: 'Beverages',
          collapsed: false,
          children: [
            { id: 2, text: 'Water' },
            { id: 3, text: 'Coffee' },
            {
              id: 4,
              text: 'Tea',
              children: [
                { id: 5, text: 'Black Tea' },
                { id: 6, text: 'White Tea' },
                {
                  id: 7,
                  text: 'Green Tea',
                  children: [
                    { id: 8, text: 'Sencha' },
                    { id: 9, text: 'Gyokuro' },
                    { id: 10, text: 'Matcha' },
                    { id: 11, text: 'Pi Lo Chun' }
                  ]
                }
              ]
            }
          ]
        }
      ];

      return {
        data
      }
  },
};
</script>
<style>
@import url("@/style/layouts/sidebar-layout.css");
</style>
