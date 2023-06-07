import { onMounted } from "vue";
import HeaderLayout from "@/views/layouts/HeaderLayout.vue";
export default {
    components : {HeaderLayout},
    setup(props) {
        // lifecycle hooks
        onMounted(() => {
            console.log(`The initial of Project Page`);
        });

        return;
    }
}