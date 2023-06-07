import { onMounted, ref } from "vue";
import MInput from "../../../components/input/MInput.vue";
import MButton from "../../../components/button/MButton.vue";
import { ButtonType } from "../../../components/button/MButton.vue";
import { useInitPage } from "../../base/BasePage";
import { AuthRepository } from "../../../services/Auth";
import { useRouter } from "vue-router";
import { useRoutePath } from "../../../utils/uses/router/useRoutePath";
export default {
  components: { MInput, MButton },
  setup(props, context) {
    const _authRepo = new AuthRepository();
    const { goToDashboard } = useRoutePath();

    let username = ref("");
    let password = ref("");

    const handlerEventProvider = {
      async btnLogin_click(event) {
        // validate
        let data = {
          Username: username.value,
          Password: password.value,
        };

        if(window._bypassLogin){
          debugger
          goToDashboard();
        }

        let res = await _authRepo.login(data, function (response) {
          const authHeader = response.headers.get("Authorization");

          let token = null;
          if (authHeader && authHeader.startsWith("Bearer ")) {
            // Extract the token by removing the 'Bearer ' prefix
            token = authHeader.substring(7); // 7 is the length of 'Bearer '
            _authRepo.setAuthorizationToken(token);
          }

          goToDashboard();
        });
      },
    };

    // lifecycle hooks
    onMounted(() => {
      console.log(`The initial of Login Page`);
    });

    useInitPage(handlerEventProvider);

    return {
      username,
      password
    };
  },
};
