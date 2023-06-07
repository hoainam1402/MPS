import { useRouter } from "vue-router";
import config from "../../../common/config/config";

export function useRoutePath(props ) {
    const router = useRouter();

    const goToDashboard = () => {
        router.push(config.Path.DASHBOARD);
    }

    const goToProject = () => {
        router.push(config.Path.PROJECT);
    }

    const goTo = (path) => {
        router.push(path);
    }


    return{
        goTo,
        goToDashboard,
        goToProject
    }
  }