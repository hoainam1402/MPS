import { onMounted } from "vue";
import HeaderLayout from "@/views/layouts/HeaderLayout.vue";
import SideBarLayout from "@/views/layouts/SideBarLayout.vue";
export default {
    components : {HeaderLayout, SideBarLayout},
    setup(props) {
        // lifecycle hooks
        onMounted(() => {
            console.log(`The initial of Dashboard Page`);
            console.log(import.meta.env.VITE_DOMAIN_BE);
        });

        return;
    }
}