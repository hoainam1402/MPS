import { createRouter, createWebHistory } from "vue-router";
import MConstant from "@/common/consts/MConstant";
import baseRouter from "./baseRouter";
import auth from "../utils/helper/auth";

const LAYOUT_NAME = "MainLayout";
const PAGE_NOT_FOUND_ROUTE = {
  path: "/page-not-found",
};

const routes = [
  {
    path: "/",
    name: LAYOUT_NAME,
    component: () => import("../views/layouts/MainLayout.vue"),
    meta: {
      // anonymous: true
    },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        meta: {
          subSystemCode: MConstant.SubSystemCode.M_Dashboard,
          anonymous: true
        },
        component: () => import("../views/pages/dashboard/Index.vue"),
      },
      {
        path: "project",
        name: "project",
        meta: {
          subSystemCode: MConstant.SubSystemCode.M_Project,
          anonymous: true
        },
        component: () => import("../views/pages/project/Index.vue"),
        children: [
          {
            path: "board",
            name: "board",
            meta: {
              subSystemCode: MConstant.SubSystemCode.M_Project_Board,
              anonymous: true
            },
            component: () => import("../views/pages/project/Board.vue"),
          },
          {
            path: "gantt",
            name: "gantt",
            meta: {
              subSystemCode: MConstant.SubSystemCode.M_Project_Gantt,
              anonymous: true
            },
            component: () => import("../views/pages/project/Gantt.vue"),
          },
        ]
      },
    ],
  },
  ...baseRouter,
  {
    // Redirect to 404 page, if no match found
    path: "/:pathMatch(.*)*",
    component: () =>
      import(/* webpackChunkName:'pages' */ "../views/pages/404.vue"),
    meta: {
      anonymous: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  // khi chuyển router sẽ show maskloading cho người dùng biết xử lý
  // do tình huông tải file js chậm
  // trong after sẽ ẩn mask loading đi
  // Tạm thời dùng loading global, sau này có thể làm kiểu thanh line chạy ngay dưới address bar sau
  // commonFn.mask()

  // hide all popup
  // TODO => Ẩn tất cả popup ở đây
  // popupUtil.hideAll()

  // trang không authen
  if (to.meta.anonymous) {
    next();
    return;
  }

  // kiểm tra authen -> fail redirect login
  if (!auth.isAuthenticated()) {
      next({
        name: "login",
        query: {
          callback_url: encodeURI(to.fullPath)
        }
      })
    return;
  }

  // Điều hướng sang route mặc định
  if (to.name === LAYOUT_NAME) {
    next("dashboard");
    return;
    // next(getDefaultRoute(to) || PAGE_NOT_FOUND_ROUTE);
  }

  // Validate Permission, Không có quyền thì chuyển sang màn hình 403
  if (!checkPermission(to, from, next)) {
    next(PAGE_NOT_FOUND_ROUTE);
    return;
  }

  // default
  next();
});

/**
 * Lấy permission của người dùng
 * @returns
 */
const getPermission = () => store.getters[ModuleContext + "/Permission"];

/**
 * Có quyền sử dụng
 * @param {*} userPermission
 * @param {*} requiredPermission
 * @returns
 */
const hasUsePermission = (userPermission, requiredPermission) => {
  //   return userPermission[requiredPermission]?.includes(MSConstant.Permission.Use)
  return true;
};

/**
 * Validate permission
 * @param {*} to
 * @param {*} from
 * @param {*} next
 * @returns
 */
const checkPermission = (to, from, next) => {
  return true;
  // TODO
  const requiredPermission = to.meta.subSystemCode;
  const userPermission = getPermission();

  // Không khai báo subSystemCode hoặc không có userPermissionKey (full quyền) thì cho pass luôn
  if (!requiredPermission || !userPermission) {
    return true;
  }

  return hasUsePermission(userPermission, requiredPermission);
};

/**
 * Lấy ra route mặc định
 * @param {*} to
 * @returns
 * route mặc định không phải là ignoreRedirect
 */
const getDefaultRoute = (to) => {
  const userPermission = getPermission();
  const defaultRoute = routes
    .find((route) => route.name === to.name)
    ?.children?.find(
      (child) =>
        !child.meta?.ignoreRedirect &&
        (!userPermission ||
          !child.meta.subSystemCode ||
          hasUsePermission(userPermission, child.meta.subSystemCode))
    );

  return defaultRoute;
};

export default router;
