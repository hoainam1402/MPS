import { onMounted , nextTick, ref} from "vue";
import { useEventSubscriber } from "../../utils/uses/base/useEventSubscriber";
import config from "../../common/config/config";

export function useInitPage(handlerEventProvider) {
  var handlerEventProviders = {};
  const pnContainer = ref(null);

  let initPage = () => {
    // khởi tạo dữ liệu
    initData();

    // khởi tạo và đăng ký các sự kiện
    registerEvent();
  };

  const initData = () => {
    pnContainer.value = document.querySelector('[itemid="pnContainer"]');
    handlerEventProviders = handlerEventProvider;
    window._bypassLogin = config.Authentication.BYPASS_LOGIN;
  };

  /**
   * Hàm khởi tạo sự kiện trên trang
   */
  const registerEvent = () => {
    // const containerEl = pnContainer.value;

    // đăng ký sự kiện click cho các button
    useEventSubscriber(handlerEventProviders)
  };

  //#region Hàm xử lý sự kiện
  
  //#endregion

  //#region life circle hooks
  //#endregion

  initPage();
  return { pnContainer };
}
