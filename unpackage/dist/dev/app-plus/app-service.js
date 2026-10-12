if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _imports_0$b = "/static/images/logo.png";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$o = {
    __name: "splash",
    setup(__props, { expose: __expose }) {
      __expose();
      vue.onMounted(() => {
        const userInfo = uni.getStorageSync("userInfo");
        setTimeout(() => {
          if (userInfo) {
            uni.switchTab({ url: "/pages/home/index" });
          } else {
            uni.redirectTo({ url: "/pages/login/login" });
          }
        }, 1500);
      });
      const __returned__ = { onMounted: vue.onMounted };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "splash-container" }, [
      vue.createElementVNode("image", {
        class: "app-logo",
        src: _imports_0$b
      }),
      vue.createElementVNode("text", { class: "app-name" }, "知途")
    ]);
  }
  const PagesSplashSplash = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-b5d3b004"], ["__file", "D:/多媒体比赛/momo9.29/pages/splash/splash.vue"]]);
  const ON_SHOW = "onShow";
  const ON_HIDE = "onHide";
  const ON_LAUNCH = "onLaunch";
  const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const createLifeCycleHook = (lifecycle, flag = 0) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createLifeCycleHook(
    ON_SHOW,
    1 | 2
    /* HookFlags.PAGE */
  );
  const onHide = /* @__PURE__ */ createLifeCycleHook(
    ON_HIDE,
    1 | 2
    /* HookFlags.PAGE */
  );
  const onLaunch = /* @__PURE__ */ createLifeCycleHook(
    ON_LAUNCH,
    1
    /* HookFlags.APP */
  );
  const onPullDownRefresh = /* @__PURE__ */ createLifeCycleHook(
    ON_PULL_DOWN_REFRESH,
    2
    /* HookFlags.PAGE */
  );
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$n = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick(e) {
        this.$emit("click", e);
      }
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-946bce22"], ["__file", "D:/多媒体比赛/momo9.29/node_modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue"]]);
  const baseUrl = "http://120.55.58.198:8000";
  let isRefreshing$1 = false;
  let refreshQueue$1 = [];
  const isTokenExpired$1 = (token) => {
    if (!token)
      return true;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const currentTime = Math.floor(Date.now() / 1e3);
      return payload.exp < currentTime;
    } catch (error) {
      return true;
    }
  };
  const refreshAccessToken$1 = async () => {
    if (isRefreshing$1) {
      return new Promise((resolve, reject) => {
        refreshQueue$1.push({ resolve, reject });
      });
    }
    isRefreshing$1 = true;
    try {
      const refreshToken = uni.getStorageSync("refreshToken");
      if (!refreshToken) {
        throw new Error("无刷新令牌");
      }
      const [error, response] = await uni.request({
        url: `${baseUrl}/api/users/token_refresh/`,
        method: "POST",
        data: { refresh: refreshToken }
      });
      if (error)
        throw error;
      if (response.data && response.data.access) {
        const newAccessToken = response.data.access;
        uni.setStorageSync("accessToken", newAccessToken);
        refreshQueue$1.forEach(({ resolve }) => resolve(newAccessToken));
        refreshQueue$1 = [];
        return newAccessToken;
      } else {
        throw new Error("刷新令牌失败");
      }
    } catch (error) {
      refreshQueue$1.forEach(({ reject }) => reject(error));
      refreshQueue$1 = [];
      if (error.message.includes("刷新令牌失败") || error.message.includes("无刷新令牌")) {
        uni.removeStorageSync("accessToken");
        uni.removeStorageSync("refreshToken");
        uni.removeStorageSync("userInfo");
        throw new Error("登录已过期，请重新登录");
      }
      throw error;
    } finally {
      isRefreshing$1 = false;
    }
  };
  function request(options) {
    return new Promise(async (resolve, reject) => {
      try {
        let accessToken = uni.getStorageSync("accessToken");
        if (accessToken && isTokenExpired$1(accessToken)) {
          try {
            accessToken = await refreshAccessToken$1();
          } catch (refreshError) {
            if (refreshError.message.includes("登录已过期")) {
              uni.showToast({ title: "登录已过期，请重新登录", icon: "none" });
              uni.navigateTo({ url: "/pages/login/login" });
            }
            reject(refreshError);
            return;
          }
        }
        const headers = {
          "Content-Type": "application/json",
          ...options.headers
        };
        if (accessToken) {
          headers["Authorization"] = `Bearer ${accessToken}`;
        }
        uni.request({
          url: baseUrl + options.url,
          method: options.method || "GET",
          header: headers,
          data: options.data || {},
          success: (res) => {
            var _a;
            if (res.statusCode === 200) {
              formatAppLog("log", "at common/request.js:115", "Request success:", res.data);
              resolve(res.data);
            } else if (res.statusCode === 401) {
              uni.removeStorageSync("accessToken");
              uni.removeStorageSync("refreshToken");
              uni.showToast({ title: "登录已过期，请重新登录", icon: "none" });
              uni.navigateTo({ url: "/pages/login/login" });
              reject(res);
            } else {
              formatAppLog("log", "at common/request.js:125", "Request failed:", res);
              uni.showToast({
                title: ((_a = res.data) == null ? void 0 : _a.message) || "请求失败",
                icon: "none"
              });
              reject(res);
            }
          },
          fail: (err) => {
            uni.showToast({ title: "网络错误", icon: "none" });
            reject(err);
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }
  const _imports_0$a = "/static/icons/correct-in.svg";
  const _imports_5 = "/static/icons/document.svg";
  const _imports_6 = "/static/icons/star.svg";
  const _imports_1$5 = "/static/icons/bars.svg";
  const _imports_8 = "/static/icons/help.svg";
  const MAX_RETRY = 5;
  const _sfc_main$m = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const showPasswordModal = vue.ref(false);
      const showAIFloatWindow = vue.ref(false);
      const password = vue.ref("");
      const wrongPassword = vue.ref(false);
      const errorMessage = vue.ref("");
      const aiMessages = vue.ref([]);
      const aiInputText = vue.ref("");
      const isDragging = vue.ref(false);
      const buttonPosition = vue.ref({ x: 600, y: 800 });
      const processMessageContent = (content) => {
        if (!content)
          return "";
        let processedContent = String(content);
        if (processedContent.trim().startsWith("{ response：") && processedContent.trim().endsWith("}")) {
          processedContent = processedContent.trim().replace(/^\{\s*response：["']?/, "").replace(/["']?\s*\}$/, "");
        }
        processedContent = processedContent.replace(/\/n/g, "<br>");
        processedContent = processedContent.replace(/【[^】]*】/g, "");
        processedContent = processedContent.replace(/([^<]|^)([^>\n])\s*([0-9]+\.)/, "$1$2<br>$3");
        processedContent = processedContent.replace(/([^<>])\n([^<>])/g, "$1<br>$2");
        return processedContent;
      };
      const isLoading = vue.ref(false);
      let startX = 0;
      let startY = 0;
      const verifyPassword = async () => {
        if (!password.value.trim()) {
          wrongPassword.value = true;
          errorMessage.value = "请输入二级密码";
          return;
        }
        try {
          isLoading.value = true;
          const result = await request({
            url: "/api/ai_use/doubao_talk",
            method: "POST",
            data: {
              action: "verify_password",
              secondary_password: password.value
            }
          });
          if (result.status === "success") {
            uni.setStorageSync("doubaoToken", result.data.token);
            uni.setStorageSync("doubaoTokenExpires", result.data.expires_at);
            showPasswordModal.value = false;
            showAIFloatWindow.value = true;
            wrongPassword.value = false;
            password.value = "";
            addWelcomeMessage();
          } else {
            const responseData = result.data || result;
            if (responseData.message === "请先设置二级密码") {
              uni.showModal({
                title: "提示",
                content: "您还未设置二级密码，请先前往设置页面设置二级密码",
                confirmText: "去设置",
                cancelText: "取消",
                success: (modalRes) => {
                  if (modalRes.confirm) {
                    uni.navigateTo({ url: "/pages/profile/settings" });
                  }
                }
              });
            } else {
              wrongPassword.value = true;
              errorMessage.value = "二级密码错误";
            }
          }
        } catch (error) {
          formatAppLog("error", "at pages/home/index.vue:336", "密码验证异常:", error);
          wrongPassword.value = true;
          errorMessage.value = "验证失败，请重试";
        } finally {
          isLoading.value = false;
        }
      };
      const addWelcomeMessage = () => {
        aiMessages.value.push({
          id: Date.now(),
          type: "ai",
          content: "您好，我是AI作文辅导助手，请问有什么可以帮助您的吗？"
        });
      };
      const handleTouchStart = (e) => {
        isDragging.value = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      };
      const handleTouchMove = (e) => {
        if (!isDragging.value)
          return;
        const deltaX = e.touches[0].clientX - startX;
        const deltaY = e.touches[0].clientY - startY;
        buttonPosition.value.x += deltaX;
        buttonPosition.value.y += deltaY;
        const screenWidth = 750;
        const screenHeight = 1334;
        const buttonSize = 120;
        buttonPosition.value.x = Math.max(
          buttonSize / 2,
          Math.min(screenWidth - buttonSize / 2, buttonPosition.value.x)
        );
        buttonPosition.value.y = Math.max(
          buttonSize / 2,
          Math.min(screenHeight - buttonSize / 2, buttonPosition.value.y)
        );
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      };
      const handleTouchEnd = () => {
        isDragging.value = false;
      };
      const sendAIMessage = async () => {
        const userInput = aiInputText.value.trim();
        if (!userInput)
          return;
        aiMessages.value.push({
          id: Date.now(),
          type: "user",
          content: userInput
        });
        aiInputText.value = "";
        isLoading.value = true;
        try {
          const doubaoToken = uni.getStorageSync("doubaoToken");
          const expiresAt = uni.getStorageSync("doubaoTokenExpires");
          const isTokenExpired2 = !doubaoToken || !expiresAt || /* @__PURE__ */ new Date() > new Date(expiresAt);
          const requestData = {
            action: "talk",
            basic_text_segment: "请基于小学作文水平，提供合适的辅导建议：",
            user_talk: userInput
          };
          if (isTokenExpired2) {
            const storedPassword = uni.getStorageSync("secondaryPassword") || password.value;
            if (storedPassword) {
              requestData.secondary_password = storedPassword;
            } else {
              throw new Error("请先完成二级密码验证");
            }
          }
          const result = await request({
            url: "/api/ai_use/doubao_talk",
            method: "POST",
            data: requestData
          });
          if (result.status === "success") {
            let responseContent = result.data.response;
            if (typeof responseContent === "object" && responseContent !== null) {
              responseContent = responseContent.response || JSON.stringify(responseContent);
            }
            aiMessages.value.push({
              id: Date.now() + 1,
              type: "ai",
              content: responseContent
            });
            if (result.data.token && result.data.expires_at) {
              uni.setStorageSync("doubaoToken", result.data.token);
              uni.setStorageSync("doubaoTokenExpires", result.data.expires_at);
            }
            scrollToBottom();
          } else {
            uni.showToast({ title: result.message || "对话失败", icon: "none" });
            if (result.message.includes("令牌") || result.message.includes("密码")) {
              showPasswordModal.value = true;
              password.value = "";
            }
          }
        } catch (error) {
          formatAppLog("error", "at pages/home/index.vue:464", "发送消息异常:", error);
          uni.showToast({ title: "发送失败，请重试", icon: "none" });
        } finally {
          isLoading.value = false;
        }
      };
      const scrollToBottom = () => {
        setTimeout(() => {
          const chatContainer = document.querySelector(".ai-chat-container");
          if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
          }
        }, 100);
      };
      const closeAIFloatWindow = () => {
        showAIFloatWindow.value = false;
      };
      const handleAIClick = () => {
        showPasswordModal.value = true;
        password.value = "";
        wrongPassword.value = false;
        errorMessage.value = "";
        uni.removeStorageSync("doubaoToken");
        uni.removeStorageSync("doubaoTokenExpires");
      };
      const closePasswordModal = () => {
        showPasswordModal.value = false;
        wrongPassword.value = false;
        errorMessage.value = "";
        password.value = "";
      };
      vue.onUnmounted(() => {
      });
      const getTypeText = (type) => {
        const map = {
          descriptive: "写景",
          character: "写人",
          narrative: "写事"
        };
        return map[type] || "写事";
      };
      const searchFocus = vue.ref(false);
      const searchText = vue.ref("");
      const functionNames = vue.ref([
        "智能批改",
        "AI写作",
        "素材库",
        "学习论坛",
        "更多"
      ]);
      const getIconType = (idx) => ["compose", "paperplane", "star", "chat", "more"][idx] || "help";
      const dailyEpigrams = vue.ref([]);
      const essayList = vue.ref([]);
      const currentGrade = vue.ref("请选择年级");
      const selectedGradeIndex = vue.ref(-1);
      const grades = ["三年级", "四年级", "五年级", "六年级"];
      const processEssays = (essays) => {
        if (!Array.isArray(essays)) {
          formatAppLog("warn", "at pages/home/index.vue:542", "processEssays: essays参数不是数组，返回空数组");
          return [];
        }
        return essays.map((e) => {
          var _a, _b;
          return {
            ...e,
            type: ((_a = e.tags) == null ? void 0 : _a.includes("写景")) || e.category === "写景" ? "descriptive" : ((_b = e.tags) == null ? void 0 : _b.includes("写人")) || e.category === "写人" ? "character" : "narrative",
            displayTime: e.createTime || "三天前"
          };
        });
      };
      let retryCount = 0;
      async function refreshEssays() {
        var _a;
        if (retryCount >= MAX_RETRY)
          return;
        try {
          const token = uni.getStorageSync("accessToken");
          const url = token ? "/api/content/recommend/personalized/" : "/api/content/recommend/popular/";
          const data = await request({
            url,
            method: "GET",
            data: { limit: 2 }
          });
          let list = [];
          if (data) {
            if (Array.isArray((_a = data.data) == null ? void 0 : _a.essays)) {
              list = data.data.essays;
            } else if (Array.isArray(data.essays)) {
              list = data.essays;
            } else if (Array.isArray(data.data)) {
              list = data.data;
            } else if (Array.isArray(data)) {
              list = data;
            }
          }
          essayList.value = processEssays(list);
          retryCount = 0;
        } catch (e) {
          formatAppLog("error", "at pages/home/index.vue:590", "refreshEssays 异常", e);
          if (e.message && e.message.includes("登录已过期")) {
            retryCount = MAX_RETRY;
          } else {
            retryCount += 1;
          }
        }
      }
      const onGradeChange = async (e) => {
        var _a;
        const token = uni.getStorageSync("accessToken");
        if (!token) {
          uni.showToast({ title: "请先登录", icon: "none" });
          return;
        }
        const gradeNum = e.detail.value + 3;
        selectedGradeIndex.value = e.detail.value;
        currentGrade.value = grades[e.detail.value];
        try {
          formatAppLog("log", "at pages/home/index.vue:613", "开始更新年级:", gradeNum);
          const response = await request({
            url: "/api/users/grade_update/",
            method: "POST",
            data: { grade: gradeNum }
          });
          formatAppLog("log", "at pages/home/index.vue:620", "年级更新响应:", response);
          const toastMessage = response.message || "年级更新成功";
          formatAppLog("log", "at pages/home/index.vue:622", "显示提示消息:", toastMessage);
          uni.showToast({
            title: toastMessage,
            icon: "none"
          });
          await refreshEssays();
        } catch (error) {
          formatAppLog("error", "at pages/home/index.vue:630", "年级更新失败:", error);
          const errorMessage2 = error.message || ((_a = error.data) == null ? void 0 : _a.message) || "年级更新失败";
          uni.showToast({
            title: errorMessage2,
            icon: "none"
          });
        }
      };
      async function loadUserGradeOnce() {
        var _a;
        const token = uni.getStorageSync("accessToken");
        if (!token)
          return;
        try {
          const data = await request({
            url: "/api/users/profile/",
            method: "GET"
          });
          const grade = ((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.grade) ?? (data == null ? void 0 : data.grade) ?? 3;
          const idx = Math.max(0, Math.min(grade - 3, grades.length - 1));
          selectedGradeIndex.value = idx;
          currentGrade.value = grades[idx];
        } catch (e) {
          formatAppLog("log", "at pages/home/index.vue:655", "拉年级失败", e);
        }
      }
      async function loadDailyEpigrams() {
        try {
          const data = await request({
            url: "/api/content/epigram/daily/",
            method: "GET"
          });
          if (Array.isArray(data)) {
            dailyEpigrams.value = data;
          } else if (data && Array.isArray(data.epigrams)) {
            dailyEpigrams.value = data.epigrams;
          } else if (data && Array.isArray(data.data)) {
            dailyEpigrams.value = data.data;
          } else {
            dailyEpigrams.value = [];
          }
        } catch (error) {
        }
      }
      vue.onMounted(async () => {
        await loadUserGradeOnce();
        await loadDailyEpigrams();
        await refreshEssays();
        uni.getSystemInfoSync();
        const screenWidth = 750;
        buttonPosition.value.x = screenWidth - 150;
        buttonPosition.value.y = 730;
      });
      uni.refreshEssays = refreshEssays;
      const focusSearch = () => {
        searchFocus.value = true;
      };
      const __returned__ = { showPasswordModal, showAIFloatWindow, password, wrongPassword, errorMessage, aiMessages, aiInputText, isDragging, buttonPosition, processMessageContent, isLoading, get startX() {
        return startX;
      }, set startX(v) {
        startX = v;
      }, get startY() {
        return startY;
      }, set startY(v) {
        startY = v;
      }, verifyPassword, addWelcomeMessage, handleTouchStart, handleTouchMove, handleTouchEnd, sendAIMessage, scrollToBottom, closeAIFloatWindow, handleAIClick, closePasswordModal, getTypeText, searchFocus, searchText, functionNames, getIconType, dailyEpigrams, essayList, currentGrade, selectedGradeIndex, grades, processEssays, get retryCount() {
        return retryCount;
      }, set retryCount(v) {
        retryCount = v;
      }, MAX_RETRY, refreshEssays, onGradeChange, loadUserGradeOnce, loadDailyEpigrams, focusSearch, ref: vue.ref, onMounted: vue.onMounted, onUnmounted: vue.onUnmounted, get request() {
        return request;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("scroll-view", {
          class: "homeLayout",
          "scroll-y": ""
        }, [
          vue.createCommentVNode(" 可聚焦搜索框 "),
          vue.createElementVNode("view", { class: "search-row" }, [
            vue.createElementVNode("view", {
              class: "search-box",
              onClick: $setup.focusSearch
            }, [
              vue.createVNode(_component_uni_icons, {
                type: "search",
                size: "18",
                color: "#999"
              }),
              vue.withDirectives(vue.createElementVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.searchText = $event),
                placeholder: "搜索作文/素材",
                focus: $setup.searchFocus,
                disabled: false,
                onBlur: _cache[1] || (_cache[1] = ($event) => $setup.searchFocus = false)
              }, null, 40, ["focus"]), [
                [vue.vModelText, $setup.searchText]
              ])
            ]),
            vue.createElementVNode("view", { class: "grade-picker" }, [
              vue.createElementVNode(
                "picker",
                {
                  range: $setup.grades,
                  onChange: $setup.onGradeChange
                },
                [
                  vue.createElementVNode(
                    "view",
                    { class: "picker-text" },
                    vue.toDisplayString($setup.currentGrade),
                    1
                    /* TEXT */
                  )
                ],
                32
                /* NEED_HYDRATION */
              ),
              vue.createVNode(_component_uni_icons, {
                type: "arrowdown",
                size: "14",
                color: "#666"
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "banner" }, [
            vue.createElementVNode("swiper", {
              "indicator-dots": "",
              "indicator-color": "rgba(255,255,255,0.5)",
              "indicator-active-color": "#fff",
              autoplay: "",
              circular: ""
            }, [
              vue.createElementVNode("swiper-item", null, [
                vue.createElementVNode("view", { class: "swiper-page page-blue" }, [
                  vue.createElementVNode("text", { class: "line1" }, "智能作文批改"),
                  vue.createCommentVNode(" 第一行：大而粗 "),
                  vue.createElementVNode("text", { class: "line2" }, "手写识别 词句分析 智能润色"),
                  vue.createCommentVNode(" 第二行：普通 "),
                  vue.createElementVNode("text", { class: "line3" }, "文档导出 打印 专项练习"),
                  vue.createCommentVNode(" 第三行：普通 ")
                ])
              ]),
              vue.createElementVNode("swiper-item", null, [
                vue.createElementVNode("view", { class: "swiper-page page-green" }, [
                  vue.createElementVNode("text", { class: "line1" }, "个性化习题训练"),
                  vue.createElementVNode("text", { class: "line2" }, "错题纠正 病句练习 相似字对比"),
                  vue.createElementVNode("text", { class: "line3" }, "专项突破 真题训练")
                ])
              ]),
              vue.createElementVNode("swiper-item", null, [
                vue.createElementVNode("view", { class: "swiper-page page-orange" }, [
                  vue.createElementVNode("text", { class: "line1" }, "素材库与学习论坛"),
                  vue.createElementVNode("text", { class: "line2" }, "每日金句 成语故事 实时信息"),
                  vue.createElementVNode("text", { class: "line3" }, "佳作分享 写作思路交流")
                ])
              ])
            ]),
            vue.createCommentVNode(" 圆形容器网格 - 放在轮播图下面 "),
            vue.createCommentVNode(" 修改后的圆形容器网格 "),
            vue.createCommentVNode(" 修改后的圆形容器网格 "),
            vue.createElementVNode("view", { class: "circle-grid" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($setup.functionNames, (name, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "circle-container",
                    key: index
                  }, [
                    vue.createElementVNode(
                      "view",
                      {
                        class: "circle",
                        style: vue.normalizeStyle({ backgroundColor: index === 4 ? "rgba(200, 200, 200, 0.4)" : "rgba(173, 216, 230, 0.4)" })
                      },
                      [
                        vue.createCommentVNode(" 使用本地SVG图标代替uni-icons "),
                        index === 0 ? (vue.openBlock(), vue.createElementBlock("image", {
                          key: 0,
                          src: _imports_0$a,
                          class: "icon-svg",
                          mode: "aspectFit"
                        })) : index === 1 ? (vue.openBlock(), vue.createElementBlock("image", {
                          key: 1,
                          src: _imports_5,
                          class: "icon-svg",
                          mode: "aspectFit"
                        })) : index === 2 ? (vue.openBlock(), vue.createElementBlock("image", {
                          key: 2,
                          src: _imports_6,
                          class: "icon-svg",
                          mode: "aspectFit"
                        })) : index === 3 ? (vue.openBlock(), vue.createElementBlock("image", {
                          key: 3,
                          src: _imports_1$5,
                          class: "icon-svg",
                          mode: "aspectFit"
                        })) : (vue.openBlock(), vue.createElementBlock("image", {
                          key: 4,
                          src: _imports_8,
                          class: "icon-svg",
                          mode: "aspectFit"
                        }))
                      ],
                      4
                      /* STYLE */
                    ),
                    vue.createCommentVNode(" 这里显示数组中的名字 "),
                    vue.createElementVNode(
                      "text",
                      { class: "circle-desc" },
                      vue.toDisplayString(name),
                      1
                      /* TEXT */
                    )
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createElementVNode("view", { class: "section-title" }, [
              vue.createElementVNode("text", { class: "title-text" }, "优秀范文")
            ]),
            vue.createElementVNode("view", { class: "article-container" }, [
              vue.createCommentVNode(" 第一个单独包 navigator "),
              $setup.essayList[0] ? (vue.openBlock(), vue.createElementBlock("navigator", {
                key: 0,
                url: `/pages/home/essay?id=${$setup.essayList[0].id}`,
                "hover-class": "none"
              }, [
                vue.createElementVNode("view", { class: "article-box" }, [
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass(["tag", "tag-" + $setup.essayList[0].type])
                    },
                    vue.toDisplayString($setup.getTypeText($setup.essayList[0].type)),
                    3
                    /* TEXT, CLASS */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "publish-time" },
                    vue.toDisplayString($setup.essayList[0].displayTime || "刚刚"),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "article-title" },
                    vue.toDisplayString($setup.essayList[0].title),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "article-preview" },
                    vue.toDisplayString(($setup.essayList[0].text || "").slice(0, 60)) + vue.toDisplayString(($setup.essayList[0].text || "").length > 60 ? "..." : ""),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", { class: "user-info" }, [
                    vue.createElementVNode("view", { class: "user-avatar" }),
                    vue.createElementVNode(
                      "text",
                      { class: "user-name" },
                      vue.toDisplayString($setup.essayList[0].author || "用户") + " | " + vue.toDisplayString($setup.essayList[0].grade || "三年级"),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("text", { class: "read-more" }, "查看全文")
                ])
              ], 8, ["url"])) : vue.createCommentVNode("v-if", true),
              vue.createCommentVNode(" 第二个及以后保持原列表渲染，不跳转 "),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($setup.essayList.slice(1), (essay, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "article-box",
                    key: index
                  }, [
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass(["tag", "tag-" + essay.type])
                      },
                      vue.toDisplayString($setup.getTypeText(essay.type)),
                      3
                      /* TEXT, CLASS */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "publish-time" },
                      vue.toDisplayString(essay.displayTime || "刚刚"),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "article-title" },
                      vue.toDisplayString(essay.title),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "article-preview" },
                      vue.toDisplayString((essay.text || "").slice(0, 60)) + vue.toDisplayString((essay.text || "").length > 60 ? "..." : ""),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "user-info" }, [
                      vue.createElementVNode("view", { class: "user-avatar" }),
                      vue.createElementVNode(
                        "text",
                        { class: "user-name" },
                        vue.toDisplayString(essay.author || "用户") + " | " + vue.toDisplayString(essay.grade || "三年级"),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("text", { class: "read-more" }, "查看全文")
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createElementVNode("view", { class: "section-title" }, [
              vue.createElementVNode("text", { class: "title-text" }, "每日金句")
            ]),
            vue.createElementVNode("view", { class: "sentence-container" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($setup.dailyEpigrams, (sentence, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "sentence-box",
                    key: sentence.id || index
                  }, [
                    vue.createElementVNode(
                      "text",
                      { class: "sentence-text" },
                      '"' + vue.toDisplayString(sentence.text) + '" — ' + vue.toDisplayString(sentence.author),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("text", { class: "suit-tag" }, "适合写景作文"),
                    vue.createElementVNode("text", { class: "collect-tag" }, "收藏")
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])
        ]),
        vue.createCommentVNode(" AI助手可拖动按钮 "),
        vue.createElementVNode(
          "view",
          {
            class: "ai-float-button",
            style: vue.normalizeStyle({
              left: `${$setup.buttonPosition.x}rpx`,
              top: `${$setup.buttonPosition.y}rpx`
            }),
            onTouchstart: $setup.handleTouchStart,
            onTouchmove: $setup.handleTouchMove,
            onTouchend: $setup.handleTouchEnd,
            onClick: $setup.handleAIClick
          },
          [
            vue.createVNode(_component_uni_icons, {
              type: "chat",
              size: "40",
              color: "#fff"
            })
          ],
          36
          /* STYLE, NEED_HYDRATION */
        ),
        vue.createCommentVNode(" 密码验证弹窗 "),
        $setup.showPasswordModal ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "modal-overlay",
          onClick: $setup.closePasswordModal
        }, [
          vue.createElementVNode("view", {
            class: "password-modal",
            onClick: _cache[3] || (_cache[3] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "modal-header" }, [
              vue.createElementVNode("text", { class: "modal-title" }, "家长身份验证")
            ]),
            vue.createElementVNode("view", { class: "modal-content" }, [
              vue.createElementVNode("text", { class: "modal-desc" }, "请输入二级密码以使用AI作文辅导功能"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.password = $event),
                  type: "password",
                  placeholder: "请输入二级密码",
                  class: "password-input",
                  focus: true
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $setup.password]
              ]),
              $setup.wrongPassword ? (vue.openBlock(), vue.createElementBlock(
                "text",
                {
                  key: 0,
                  class: "error-text"
                },
                vue.toDisplayString($setup.errorMessage),
                1
                /* TEXT */
              )) : vue.createCommentVNode("v-if", true)
            ]),
            vue.createElementVNode("view", { class: "modal-footer" }, [
              vue.createElementVNode("button", {
                class: "cancel-btn",
                onClick: $setup.closePasswordModal
              }, "取消"),
              vue.createElementVNode("button", {
                class: "confirm-btn",
                onClick: $setup.verifyPassword
              }, "确认")
            ])
          ])
        ])) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" AI对话浮窗 "),
        $setup.showAIFloatWindow ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "ai-window"
        }, [
          vue.createElementVNode("view", { class: "ai-window-header" }, [
            vue.createElementVNode("text", { class: "ai-window-title" }, "AI作文辅导助手"),
            vue.createVNode(_component_uni_icons, {
              type: "close",
              size: "24",
              color: "#666",
              onClick: $setup.closeAIFloatWindow
            })
          ]),
          vue.createElementVNode("view", { class: "ai-chat-container" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.aiMessages, (message) => {
                return vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: message.id,
                    class: vue.normalizeClass(["message-item", message.type])
                  },
                  [
                    vue.createElementVNode("view", {
                      class: "message-content",
                      innerHTML: $setup.processMessageContent(message.content)
                    }, null, 8, ["innerHTML"])
                  ],
                  2
                  /* CLASS */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            $setup.isLoading ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "loading-indicator"
            }, [
              vue.createElementVNode("view", { class: "loading-spinner" }),
              vue.createElementVNode("text", { class: "loading-text" }, "AI正在思考...")
            ])) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createElementVNode("view", { class: "ai-input-container" }, [
            vue.withDirectives(vue.createElementVNode("input", {
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.aiInputText = $event),
              type: "text",
              placeholder: "请输入您的问题...",
              class: "ai-input",
              onConfirm: $setup.sendAIMessage,
              disabled: $setup.isLoading
            }, null, 40, ["disabled"]), [
              [vue.vModelText, $setup.aiInputText]
            ]),
            vue.createElementVNode("button", {
              class: "send-btn",
              onClick: $setup.sendAIMessage,
              disabled: $setup.isLoading
            }, "发送", 8, ["disabled"])
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesHomeIndex = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-4978fed5"], ["__file", "D:/多媒体比赛/momo9.29/pages/home/index.vue"]]);
  const _sfc_main$l = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const showPasswordModal = vue.ref(false);
      const showAIFloatWindow = vue.ref(false);
      const password = vue.ref("");
      const wrongPassword = vue.ref(false);
      const errorMessage = vue.ref("");
      const aiMessages = vue.ref([]);
      const aiInputText = vue.ref("");
      const isDragging = vue.ref(false);
      const buttonPosition = vue.ref({ x: 600, y: 800 });
      const isLoading = vue.ref(false);
      let startX = 0;
      let startY = 0;
      const processMessageContent = (content) => {
        if (!content)
          return "";
        let processedContent = String(content);
        if (processedContent.trim().startsWith("{ response：") && processedContent.trim().endsWith("}")) {
          processedContent = processedContent.trim().replace(/^\{\s*response：["']?/, "").replace(/["']?\s*\}$/, "");
        }
        processedContent = processedContent.replace(/\/n/g, "<br>");
        processedContent = processedContent.replace(/【[^】]*】/g, "");
        processedContent = processedContent.replace(/([^<]|^)([^>\n])\s*([0-9]+\.)/, "$1$2<br>$3");
        processedContent = processedContent.replace(/([^<>])\n([^<>])/g, "$1<br>$2");
        return processedContent;
      };
      const verifyPassword = async () => {
        if (!password.value.trim()) {
          wrongPassword.value = true;
          errorMessage.value = "请输入二级密码";
          return;
        }
        try {
          isLoading.value = true;
          const result = await request({
            url: "/api/ai_use/doubao_talk",
            method: "POST",
            data: {
              action: "verify_password",
              secondary_password: password.value
            }
          });
          if (result.status === "success") {
            uni.setStorageSync("doubaoToken", result.data.token);
            uni.setStorageSync("doubaoTokenExpires", result.data.expires_at);
            showPasswordModal.value = false;
            showAIFloatWindow.value = true;
            wrongPassword.value = false;
            password.value = "";
            addWelcomeMessage();
          } else {
            wrongPassword.value = true;
            errorMessage.value = result.message || "密码验证失败";
          }
        } catch (error) {
          formatAppLog("error", "at pages/correct/index.vue:343", "密码验证异常:", error);
          wrongPassword.value = true;
          errorMessage.value = "验证失败，请重试";
        } finally {
          isLoading.value = false;
        }
      };
      const addWelcomeMessage = () => {
        aiMessages.value.push({
          id: Date.now(),
          type: "ai",
          content: "您好，我是AI作文辅导助手，请问有什么可以帮助您的吗？"
        });
      };
      const handleTouchStart = (e) => {
        isDragging.value = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      };
      const handleTouchMove = (e) => {
        if (!isDragging.value)
          return;
        const deltaX = e.touches[0].clientX - startX;
        const deltaY = e.touches[0].clientY - startY;
        buttonPosition.value.x += deltaX;
        buttonPosition.value.y += deltaY;
        const screenWidth = 750;
        const screenHeight = 1334;
        const buttonSize = 120;
        buttonPosition.value.x = Math.max(
          buttonSize / 2,
          Math.min(screenWidth - buttonSize / 2, buttonPosition.value.x)
        );
        buttonPosition.value.y = Math.max(
          buttonSize / 2,
          Math.min(screenHeight - buttonSize / 2, buttonPosition.value.y)
        );
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      };
      const handleTouchEnd = () => {
        isDragging.value = false;
      };
      const sendAIMessage = async () => {
        const userInput = aiInputText.value.trim();
        if (!userInput)
          return;
        aiMessages.value.push({
          id: Date.now(),
          type: "user",
          content: userInput
        });
        aiInputText.value = "";
        isLoading.value = true;
        try {
          const doubaoToken = uni.getStorageSync("doubaoToken");
          const expiresAt = uni.getStorageSync("doubaoTokenExpires");
          const isTokenExpired2 = !doubaoToken || !expiresAt || /* @__PURE__ */ new Date() > new Date(expiresAt);
          const requestData = {
            action: "talk",
            basic_text_segment: "请基于小学作文水平，提供合适的辅导建议：",
            user_talk: userInput
          };
          if (isTokenExpired2) {
            const storedPassword = uni.getStorageSync("secondaryPassword") || password.value;
            if (storedPassword) {
              requestData.secondary_password = storedPassword;
            } else {
              throw new Error("请先完成二级密码验证");
            }
          }
          const result = await request({
            url: "/api/ai_use/doubao_talk",
            method: "POST",
            data: requestData
          });
          if (result.status === "success") {
            let responseContent = result.data.response;
            if (typeof responseContent === "object" && responseContent !== null) {
              responseContent = responseContent.response || JSON.stringify(responseContent);
            }
            aiMessages.value.push({
              id: Date.now() + 1,
              type: "ai",
              content: responseContent
            });
            if (result.data.token && result.data.expires_at) {
              uni.setStorageSync("doubaoToken", result.data.token);
              uni.setStorageSync("doubaoTokenExpires", result.data.expires_at);
            }
            scrollToBottom();
          } else {
            uni.showToast({ title: result.message || "对话失败", icon: "none" });
            if (result.message.includes("令牌") || result.message.includes("密码")) {
              showPasswordModal.value = true;
              password.value = "";
            }
          }
        } catch (error) {
          formatAppLog("error", "at pages/correct/index.vue:471", "发送消息异常:", error);
          uni.showToast({ title: "发送失败，请重试", icon: "none" });
        } finally {
          isLoading.value = false;
        }
      };
      const scrollToBottom = () => {
        setTimeout(() => {
          const chatContainer = document.querySelector(".ai-chat-container");
          if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
          }
        }, 100);
      };
      const closeAIFloatWindow = () => {
        showAIFloatWindow.value = false;
      };
      const handleAIClick = () => {
        showPasswordModal.value = true;
        password.value = "";
        wrongPassword.value = false;
        errorMessage.value = "";
        uni.removeStorageSync("doubaoToken");
        uni.removeStorageSync("doubaoTokenExpires");
      };
      const closePasswordModal = () => {
        showPasswordModal.value = false;
        wrongPassword.value = false;
        errorMessage.value = "";
        password.value = "";
      };
      vue.onUnmounted(() => {
      });
      const essayTop3 = vue.ref([
        {
          id: 1,
          title: "我的好朋友小明",
          text: "我的好朋友小明是一个活泼开朗的男孩，他有一双明亮的大眼睛，总是带着微笑。我们经常一起上学、放学，一起做游戏。小明学习很好，尤其是数学，经常帮助我解决难题。",
          author: "三年级学生",
          type: "character",
          tags: ["写人", "朋友"],
          displayTime: "2天前"
        },
        {
          id: 2,
          title: "难忘的一次旅行",
          text: "去年夏天，我们全家去了海边旅行，那是我最难忘的一次经历。我第一次看到了无边无际的大海，浪花一个接一个地涌来，美丽极了。我们还在沙滩上捡贝壳、堆沙堡，玩得很开心。",
          author: "四年级学生",
          type: "narrative",
          tags: ["写事", "旅行"],
          displayTime: "1周前"
        }
      ]);
      const hotTags = vue.ref(["写人", "写事", "写景", "想象"]);
      const activeFilter = vue.ref("all");
      const quoteContent = vue.ref({
        title: "学而不思则罔，思而不学则殆",
        desc: "只学习而不思考，就会迷惑不解；只思考而不学习，就会在学业上陷入困境。"
      });
      const cultureContent = vue.ref({
        title: "丝绸之路的历史意义",
        desc: "丝绸之路不仅是古代东西方贸易的通道，更是文化交流的桥梁，促进了世界文明的发展。"
      });
      const newsContent = vue.ref({
        title: "人工智能助力教育创新",
        desc: "近年来，AI技术在教育领域的应用日益广泛，为个性化学习提供了新的可能性。"
      });
      const filterButtons = vue.ref([
        { label: "全部", value: "all" }
      ]);
      const mockData = {
        tags: ["写人", "写事", "写景", "想象"],
        result: [
          {
            id: 1,
            title: "我的好朋友小明",
            text: "我的好朋友小明是一个活泼开朗的男孩，他有一双明亮的大眼睛，总是带着微笑。我们经常一起上学、放学，一起做游戏。小明学习很好，尤其是数学，经常帮助我解决难题。",
            author: "三年级学生",
            type: "character",
            tags: ["写人", "朋友"],
            displayTime: "2天前"
          },
          {
            id: 2,
            title: "难忘的一次旅行",
            text: "去年夏天，我们全家去了海边旅行，那是我最难忘的一次经历。我第一次看到了无边无际的大海，浪花一个接一个地涌来，美丽极了。我们还在沙滩上捡贝壳、堆沙堡，玩得很开心。",
            author: "四年级学生",
            type: "narrative",
            tags: ["写事", "旅行"],
            displayTime: "1周前"
          },
          {
            id: 3,
            title: "美丽的校园",
            text: "我们的校园很美，春天鲜花盛开，夏天绿树成荫，秋天落叶纷飞，冬天银装素裹。走进校门，首先看到的是一个宽阔的操场，操场周围种满了高大的树木。教室宽敞明亮，是我们学习的好地方。",
            author: "五年级学生",
            type: "descriptive",
            tags: ["写景", "校园"],
            displayTime: "3天前"
          },
          {
            id: 4,
            title: "未来的世界",
            text: "未来的世界会是什么样子呢？我想象着，那时候的汽车可以飞，可以在水面上行驶。机器人会帮我们做家务，照顾老人和孩子。人们可以乘坐宇宙飞船去其他星球旅行，探索宇宙的奥秘。",
            author: "六年级学生",
            type: "imaginative",
            tags: ["想象", "未来"],
            displayTime: "5天前"
          }
        ]
      };
      const isOffline = vue.ref(true);
      async function fetchRecommendations(tag = "all") {
        isLoading.value = true;
        try {
          formatAppLog("log", "at pages/correct/index.vue:611", "使用离线模拟数据");
          useMockData(tag);
          isOffline.value = true;
        } catch (error) {
          formatAppLog("error", "at pages/correct/index.vue:615", "获取推荐失败:", error);
          if (!essayTop3.value || essayTop3.value.length === 0) {
            essayTop3.value = [
              { id: 1, title: "备用范文1", text: "这是一篇备用范文...", tags: ["备用"], displayTime: "刚刚" },
              { id: 2, title: "备用范文2", text: "这是另一篇备用范文...", tags: ["备用"], displayTime: "5分钟前" }
            ];
          }
        } finally {
          isLoading.value = false;
        }
      }
      function useMockData(tag) {
        hotTags.value = mockData.tags;
        if (tag && tag !== "all") {
          const filtered = mockData.result.filter((item) => {
            return item.type === tag || item.tags && Array.isArray(item.tags) && item.tags.includes(tag);
          });
          essayTop3.value = filtered.length > 0 ? filtered : mockData.result;
        } else {
          essayTop3.value = mockData.result;
        }
        const newFilterButtons = [
          { label: "全部", value: "all" }
        ];
        mockData.tags.slice(0, 4).forEach((tag2) => {
          newFilterButtons.push({ label: tag2, value: tag2 });
        });
        filterButtons.value = newFilterButtons;
        formatAppLog("log", "at pages/correct/index.vue:657", "模拟数据已加载，共", essayTop3.value.length, "篇范文");
      }
      const changeFilter = async (value) => {
        if (activeFilter.value === value || isLoading.value)
          return;
        activeFilter.value = value;
        formatAppLog("log", "at pages/correct/index.vue:665", "切换到", value, "标签");
        try {
          await fetchRecommendations(value);
        } catch (error) {
          formatAppLog("error", "at pages/correct/index.vue:671", "切换标签失败:", error);
          if (!essayTop3.value || essayTop3.value.length === 0) {
            useMockData("all");
          }
        }
      };
      vue.onMounted(() => {
        try {
          formatAppLog("log", "at pages/correct/index.vue:683", "页面加载，立即获取推荐数据");
          fetchRecommendations(activeFilter.value);
        } catch (error) {
          formatAppLog("error", "at pages/correct/index.vue:687", "页面加载失败:", error);
          if (!essayTop3.value || essayTop3.value.length === 0) {
            essayTop3.value = [
              { id: 1, title: "默认范文", text: "这是系统默认推荐的范文内容...", tags: ["默认"], displayTime: "刚刚" }
            ];
          }
        }
      });
      onPullDownRefresh(async () => {
        try {
          formatAppLog("log", "at pages/correct/index.vue:701", "下拉刷新，重新获取推荐数据");
          await fetchRecommendations(activeFilter.value);
        } catch (error) {
          formatAppLog("error", "at pages/correct/index.vue:705", "下拉刷新失败:", error);
          if (!essayTop3.value || essayTop3.value.length === 0) {
            useMockData();
          }
        } finally {
          uni.stopPullDownRefresh();
        }
      });
      const navigateToExercise = () => {
        uni.navigateTo({
          url: "/pages/correct/checkone"
        });
      };
      const navigateToCamera = () => {
        uni.navigateTo({
          url: "/pages/correct/photo"
        });
      };
      const showSettings = vue.ref(false);
      const preferences = vue.ref({
        idiom: true,
        quote: true,
        culture: true,
        news: false
      });
      const togglePreference = (key) => {
        preferences.value[key] = !preferences.value[key];
      };
      const savePreferences = () => {
        formatAppLog("log", "at pages/correct/index.vue:741", "保存偏好设置:", preferences.value);
        showSettings.value = false;
      };
      const __returned__ = { showPasswordModal, showAIFloatWindow, password, wrongPassword, errorMessage, aiMessages, aiInputText, isDragging, buttonPosition, isLoading, get startX() {
        return startX;
      }, set startX(v) {
        startX = v;
      }, get startY() {
        return startY;
      }, set startY(v) {
        startY = v;
      }, processMessageContent, verifyPassword, addWelcomeMessage, handleTouchStart, handleTouchMove, handleTouchEnd, sendAIMessage, scrollToBottom, closeAIFloatWindow, handleAIClick, closePasswordModal, essayTop3, hotTags, activeFilter, quoteContent, cultureContent, newsContent, filterButtons, mockData, isOffline, fetchRecommendations, useMockData, changeFilter, navigateToExercise, navigateToCamera, showSettings, preferences, togglePreference, savePreferences, ref: vue.ref, onMounted: vue.onMounted, computed: vue.computed, onUnmounted: vue.onUnmounted, get onPullDownRefresh() {
        return onPullDownRefresh;
      }, get request() {
        return request;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "container" }, [
          vue.createCommentVNode(" 两个横向排列的框 - 顶部居中 "),
          vue.createElementVNode("view", { class: "boxes-container" }, [
            vue.createElementVNode("view", {
              class: "box",
              onClick: $setup.navigateToCamera
            }, [
              vue.createElementVNode("view", { class: "circle blue-circle" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "camera-filled",
                  size: "38",
                  color: "#007AFF"
                })
              ]),
              vue.createElementVNode("view", { class: "text-container" }, [
                vue.createElementVNode("text", { class: "main-text" }, "拍照批改"),
                vue.createElementVNode("text", { class: "sub-text" }, "拍摄作文自动批改")
              ])
            ]),
            vue.createElementVNode("view", {
              class: "box",
              onClick: $setup.navigateToExercise
            }, [
              vue.createElementVNode("view", { class: "circle purple-circle" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "compose",
                  size: "38",
                  color: "#8A2BE2"
                })
              ]),
              vue.createElementVNode("view", { class: "text-container" }, [
                vue.createElementVNode("text", { class: "main-text" }, "习题练习"),
                vue.createElementVNode("text", { class: "sub-text" }, "按主题练习写作")
              ])
            ])
          ]),
          vue.createCommentVNode(" 新增的文字行 "),
          vue.createElementVNode("view", { class: "section-header" }, [
            vue.createElementVNode("text", { class: "title-text" }, "每日素材精推"),
            vue.createElementVNode("view", {
              class: "settings-icon",
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.showSettings = true)
            }, [
              vue.createVNode(_component_uni_icons, {
                type: "settings",
                size: "38",
                color: "#666"
              })
            ])
          ]),
          !$setup.showSettings ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "long-boxes-container"
          }, [
            vue.createElementVNode("navigator", {
              url: "/pages/correct/idiom_story",
              "hover-class": "none"
            }, [
              $setup.preferences.idiom ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "long-box"
              }, [
                vue.createElementVNode("view", { class: "tag-box" }, [
                  vue.createElementVNode("text", { class: "tag-text" }, "成语故事")
                ]),
                vue.createElementVNode("text", { class: "content-title" }, "守株待兔"),
                vue.createElementVNode("text", { class: "content-desc" }, "从前有个农夫，一天在田地里干活时，看见一只兔子撞到树桩上死了。从此，他...")
              ])) : vue.createCommentVNode("v-if", true)
            ]),
            $setup.preferences.quote ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "long-box"
            }, [
              vue.createElementVNode("view", { class: "tag-box" }, [
                vue.createElementVNode("text", { class: "tag-text" }, "名言金句")
              ]),
              vue.createElementVNode(
                "text",
                { class: "content-title italic-text" },
                vue.toDisplayString($setup.quoteContent.title),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                { class: "content-desc" },
                vue.toDisplayString($setup.quoteContent.desc),
                1
                /* TEXT */
              )
            ])) : vue.createCommentVNode("v-if", true),
            $setup.preferences.culture ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "long-box"
            }, [
              vue.createElementVNode("view", { class: "tag-box" }, [
                vue.createElementVNode("text", { class: "tag-text" }, "文化历史")
              ]),
              vue.createElementVNode(
                "text",
                { class: "content-title" },
                vue.toDisplayString($setup.cultureContent.title),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                { class: "content-desc" },
                vue.toDisplayString($setup.cultureContent.desc),
                1
                /* TEXT */
              )
            ])) : vue.createCommentVNode("v-if", true),
            $setup.preferences.news ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "long-box"
            }, [
              vue.createElementVNode("view", { class: "tag-box" }, [
                vue.createElementVNode("text", { class: "tag-text" }, "时事信息")
              ]),
              vue.createElementVNode(
                "text",
                { class: "content-title" },
                vue.toDisplayString($setup.newsContent.title),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "text",
                { class: "content-desc" },
                vue.toDisplayString($setup.newsContent.desc),
                1
                /* TEXT */
              )
            ])) : vue.createCommentVNode("v-if", true)
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" 推荐范文部分 "),
          vue.createElementVNode("view", { class: "section-title recommend" }, [
            vue.createElementVNode("text", { class: "title-text" }, "推荐范文")
          ]),
          vue.createCommentVNode(" 标签过滤按钮组 "),
          $setup.filterButtons.length > 1 ? (vue.openBlock(), vue.createElementBlock("scroll-view", {
            key: 1,
            "scroll-x": "",
            class: "filter-scroll"
          }, [
            vue.createElementVNode("view", { class: "filter-buttons" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($setup.filterButtons, (button, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index,
                    class: vue.normalizeClass(["filter-button", { active: $setup.activeFilter === button.value }]),
                    onClick: ($event) => $setup.changeFilter(button.value)
                  }, [
                    vue.createElementVNode(
                      "text",
                      { class: "button-text" },
                      vue.toDisplayString(button.label),
                      1
                      /* TEXT */
                    )
                  ], 10, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" 加载状态 "),
          $setup.isLoading ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "loading-state"
          }, [
            vue.createVNode(_component_uni_icons, {
              type: "spinner-cycle",
              size: "48",
              color: "#999"
            }),
            vue.createElementVNode("text", { class: "loading-text" }, "加载中...")
          ])) : (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: 3 },
            [
              vue.createCommentVNode(" 推荐范文列表 - 优先显示 "),
              vue.createElementVNode("view", { class: "long-boxes-container" }, [
                vue.createCommentVNode(" 首先显示推荐范文列表 "),
                $setup.essayTop3 && $setup.essayTop3.length > 0 ? (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  { key: 0 },
                  vue.renderList($setup.essayTop3, (essay) => {
                    var _a;
                    return vue.openBlock(), vue.createElementBlock("navigator", {
                      key: essay.id || _ctx.index,
                      url: "/pages/home/essay?id=" + (essay.id || _ctx.index),
                      "hover-class": "none",
                      class: "long-box-link"
                    }, [
                      vue.createElementVNode("view", { class: "long-box" }, [
                        vue.createCommentVNode(" 显示第一个标签 "),
                        vue.createElementVNode("view", { class: "tag-box purple-tag" }, [
                          vue.createElementVNode(
                            "text",
                            { class: "tag-text" },
                            vue.toDisplayString(((_a = essay.tags) == null ? void 0 : _a[0]) || essay.type || "范文"),
                            1
                            /* TEXT */
                          )
                        ]),
                        vue.createElementVNode(
                          "text",
                          { class: "bottom-content-title" },
                          vue.toDisplayString(essay.title || "无标题"),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "text",
                          { class: "bottom-content-desc" },
                          vue.toDisplayString(essay.text ? essay.text.slice(0, 60) + "..." : "暂无内容"),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "text",
                          { class: "display-time" },
                          vue.toDisplayString(essay.displayTime || "刚刚"),
                          1
                          /* TEXT */
                        )
                      ])
                    ], 8, ["url"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 1 },
                  [
                    vue.createCommentVNode(" 如果没有数据，显示错误状态 "),
                    vue.createElementVNode("view", {
                      class: "error-state",
                      onClick: _cache[1] || (_cache[1] = ($event) => $setup.fetchRecommendations($setup.activeFilter))
                    }, [
                      vue.createVNode(_component_uni_icons, {
                        type: "warn",
                        size: "64",
                        color: "#FF6B6B"
                      }),
                      vue.createElementVNode("text", { class: "error-text" }, "点击加载离线数据"),
                      vue.createElementVNode("view", { class: "retry-info" }, [
                        vue.createElementVNode("text", null, "服务器暂时不可用")
                      ])
                    ])
                  ],
                  2112
                  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                ))
              ])
            ],
            2112
            /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
          )),
          vue.createCommentVNode(" 遮罩层 "),
          $setup.showSettings ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 4,
            class: "modal-mask",
            onClick: _cache[2] || (_cache[2] = ($event) => $setup.showSettings = false)
          })) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" 设置面板弹窗 "),
          $setup.showSettings ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 5,
            class: "settings-modal"
          }, [
            vue.createElementVNode("view", { class: "modal-header" }, [
              vue.createElementVNode("view", { class: "header-content" }, [
                vue.createElementVNode("text", { class: "modal-title" }, "推送偏好设置"),
                vue.createElementVNode("text", { class: "modal-subtitle" }, "选择您感兴趣的素材类型，我们会为您推送")
              ]),
              vue.createElementVNode("view", {
                class: "close-icon",
                onClick: _cache[3] || (_cache[3] = ($event) => $setup.showSettings = false)
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "close",
                  size: "36",
                  color: "#999"
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "modal-content" }, [
              vue.createElementVNode("view", { class: "setting-item" }, [
                vue.createElementVNode("view", { class: "label-with-icon" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "list",
                    size: "32",
                    color: "rgba(24, 144, 255, 0.7)",
                    class: "item-icon"
                  }),
                  vue.createElementVNode("text", { class: "setting-label" }, "成语故事")
                ]),
                vue.createElementVNode("switch", {
                  checked: $setup.preferences.idiom,
                  onChange: _cache[4] || (_cache[4] = ($event) => $setup.togglePreference("idiom"))
                }, null, 40, ["checked"])
              ]),
              vue.createElementVNode("view", { class: "setting-item" }, [
                vue.createElementVNode("view", { class: "label-with-icon" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "compose",
                    size: "32",
                    color: "rgba(82, 196, 26, 0.7)",
                    class: "item-icon"
                  }),
                  vue.createElementVNode("text", { class: "setting-label" }, "名言金句")
                ]),
                vue.createElementVNode("switch", {
                  checked: $setup.preferences.quote,
                  onChange: _cache[5] || (_cache[5] = ($event) => $setup.togglePreference("quote"))
                }, null, 40, ["checked"])
              ]),
              vue.createElementVNode("view", { class: "setting-item" }, [
                vue.createElementVNode("view", { class: "label-with-icon" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "flag",
                    size: "32",
                    color: "rgba(250, 173, 20, 0.7)",
                    class: "item-icon"
                  }),
                  vue.createElementVNode("text", { class: "setting-label" }, "文化历史")
                ]),
                vue.createElementVNode("switch", {
                  checked: $setup.preferences.culture,
                  onChange: _cache[6] || (_cache[6] = ($event) => $setup.togglePreference("culture"))
                }, null, 40, ["checked"])
              ]),
              vue.createElementVNode("view", { class: "setting-item" }, [
                vue.createElementVNode("view", { class: "label-with-icon" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "info",
                    size: "32",
                    color: "rgba(114, 46, 209, 0.7)",
                    class: "item-icon"
                  }),
                  vue.createElementVNode("text", { class: "setting-label" }, "时事信息")
                ]),
                vue.createElementVNode("switch", {
                  checked: $setup.preferences.news,
                  onChange: _cache[7] || (_cache[7] = ($event) => $setup.togglePreference("news"))
                }, null, 40, ["checked"])
              ])
            ]),
            vue.createCommentVNode(" 保存按钮 "),
            vue.createElementVNode("view", { class: "modal-footer" }, [
              vue.createElementVNode("view", {
                class: "save-button",
                onClick: $setup.savePreferences
              }, [
                vue.createElementVNode("text", { class: "save-text" }, "保存偏好")
              ])
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ]),
        vue.createCommentVNode(" AI助手可拖动按钮 "),
        vue.createElementVNode(
          "view",
          {
            class: "ai-float-button",
            style: vue.normalizeStyle({
              left: `${$setup.buttonPosition.x}rpx`,
              top: `${$setup.buttonPosition.y}rpx`
            }),
            onTouchstart: $setup.handleTouchStart,
            onTouchmove: $setup.handleTouchMove,
            onTouchend: $setup.handleTouchEnd,
            onClick: $setup.handleAIClick
          },
          [
            vue.createVNode(_component_uni_icons, {
              type: "chat",
              size: "40",
              color: "#fff"
            })
          ],
          36
          /* STYLE, NEED_HYDRATION */
        ),
        vue.createCommentVNode(" 密码验证弹窗 "),
        $setup.showPasswordModal ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "modal-overlay",
          onClick: $setup.closePasswordModal
        }, [
          vue.createElementVNode("view", {
            class: "password-modal",
            onClick: _cache[9] || (_cache[9] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "modal-header" }, [
              vue.createElementVNode("text", { class: "modal-title" }, "家长身份验证")
            ]),
            vue.createElementVNode("view", { class: "modal-content" }, [
              vue.createElementVNode("text", { class: "modal-desc" }, "请输入二级密码以使用AI作文辅导功能"),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.password = $event),
                  type: "password",
                  placeholder: "请输入二级密码",
                  class: "password-input",
                  focus: true
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $setup.password]
              ]),
              $setup.wrongPassword ? (vue.openBlock(), vue.createElementBlock(
                "text",
                {
                  key: 0,
                  class: "error-text"
                },
                vue.toDisplayString($setup.errorMessage),
                1
                /* TEXT */
              )) : vue.createCommentVNode("v-if", true)
            ]),
            vue.createElementVNode("view", { class: "modal-footer" }, [
              vue.createElementVNode("button", {
                class: "cancel-btn",
                onClick: $setup.closePasswordModal
              }, "取消"),
              vue.createElementVNode("button", {
                class: "confirm-btn",
                onClick: $setup.verifyPassword
              }, "确认")
            ])
          ])
        ])) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" AI对话浮窗 "),
        $setup.showAIFloatWindow ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "ai-window"
        }, [
          vue.createElementVNode("view", { class: "ai-window-header" }, [
            vue.createElementVNode("text", { class: "ai-window-title" }, "AI作文辅导助手"),
            vue.createVNode(_component_uni_icons, {
              type: "close",
              size: "24",
              color: "#666",
              onClick: $setup.closeAIFloatWindow
            })
          ]),
          vue.createElementVNode("view", { class: "ai-chat-container" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.aiMessages, (message) => {
                return vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: message.id,
                    class: vue.normalizeClass(["message-item", message.type])
                  },
                  [
                    vue.createElementVNode("view", {
                      class: "message-content",
                      innerHTML: $setup.processMessageContent(message.content)
                    }, null, 8, ["innerHTML"])
                  ],
                  2
                  /* CLASS */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            $setup.isLoading ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "loading-indicator"
            }, [
              vue.createElementVNode("view", { class: "loading-spinner" }),
              vue.createElementVNode("text", { class: "loading-text" }, "AI正在思考...")
            ])) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createElementVNode("view", { class: "ai-input-container" }, [
            vue.withDirectives(vue.createElementVNode("input", {
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.aiInputText = $event),
              type: "text",
              placeholder: "请输入您的问题...",
              class: "ai-input",
              onConfirm: $setup.sendAIMessage,
              disabled: $setup.isLoading
            }, null, 40, ["disabled"]), [
              [vue.vModelText, $setup.aiInputText]
            ]),
            vue.createElementVNode("button", {
              class: "send-btn",
              onClick: $setup.sendAIMessage,
              disabled: $setup.isLoading
            }, "发送", 8, ["disabled"])
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesCorrectIndex = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-1e990484"], ["__file", "D:/多媒体比赛/momo9.29/pages/correct/index.vue"]]);
  const _imports_1$4 = "/static/images/111.jpg";
  const _imports_2$2 = "/static/icons/edit.svg";
  const _imports_3$2 = "/static/icons/compose.svg";
  const _imports_0$9 = "/static/icons/arrow-right.svg";
  const _imports_7 = "/static/icons/settings.svg";
  const _sfc_main$k = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const userProfile = vue.ref({
        username: "",
        user_id: "",
        nickname: "",
        grade: null,
        user_model_essay: "",
        avg_score: 0,
        medals: 0
      });
      const showLoginModal = vue.ref(false);
      const gradeMap = {
        3: "三年级",
        4: "四年级",
        5: "五年级",
        6: "六年级"
      };
      const formatGrade = (gradeValue) => {
        return gradeMap[gradeValue] || "未设置年级";
      };
      const checkLoginStatus2 = () => {
        const token = uni.getStorageSync("accessToken");
        const userInfo = uni.getStorageSync("userInfo");
        const isLoggedIn = !!token || userInfo && (userInfo.user_id || userInfo.id);
        formatAppLog("log", "at pages/profile/index.vue:171", "登录状态检查:", { token: !!token, userInfo: !!userInfo, isLoggedIn });
        return isLoggedIn;
      };
      const handleMenuClick = (page) => {
        if (!checkLoginStatus2()) {
          showLoginModal.value = true;
          return;
        }
        navigateTo(page);
      };
      const handleEditProfile = () => {
        if (!checkLoginStatus2()) {
          showLoginModal.value = true;
          return;
        }
        navigateTo("edit-profile");
      };
      const refreshUserProfile = async () => {
        uni.showLoading({
          title: "刷新中...",
          mask: true
        });
        try {
          await loadUserProfile();
        } catch (error) {
          formatAppLog("error", "at pages/profile/index.vue:204", "刷新失败:", error);
        } finally {
          uni.hideLoading();
        }
      };
      const getProfileApi = () => {
        return new Promise(async (resolve, reject) => {
          const accessToken = uni.getStorageSync("accessToken");
          if (!accessToken) {
            reject("请先登录");
            return;
          }
          try {
            const res = await request({
              url: "/api/users/profile/",
              method: "GET"
            });
            formatAppLog("log", "at pages/profile/index.vue:230", "获取个人信息响应:", res);
            const data = (res == null ? void 0 : res.data) || res || {};
            resolve(data);
          } catch (error) {
            formatAppLog("error", "at pages/profile/index.vue:235", "获取个人信息请求失败:", error);
            if (!error) {
              reject("网络请求异常");
              return;
            }
            const errorMessage = error.message || "";
            if (errorMessage.includes("登录已过期")) {
              reject("请先登录");
            } else if (errorMessage.includes("ECONNREFUSED")) {
              reject("服务器连接失败，使用本地数据");
            } else if (error.statusCode === 401) {
              reject("登录已过期，请重新登录");
            } else if (error.statusCode === 404) {
              reject("用户信息未找到");
            } else {
              reject(errorMessage || "获取个人信息失败");
            }
          }
        });
      };
      const loadUserProfile = async () => {
        const storedUserInfo = uni.getStorageSync("userInfo");
        formatAppLog("log", "at pages/profile/index.vue:263", "本地存储的用户信息:", storedUserInfo);
        if (!checkLoginStatus2()) {
          userProfile.value = {
            username: "",
            user_id: "",
            nickname: "",
            grade: null,
            user_model_essay: "",
            avg_score: 0,
            medals: 0
          };
          return;
        }
        try {
          formatAppLog("log", "at pages/profile/index.vue:281", "开始从API获取个人信息...");
          const profileData = await getProfileApi();
          if (!profileData || typeof profileData !== "object") {
            throw new Error("无效的响应数据");
          }
          uni.setStorageSync("lastProfileResponse", JSON.stringify(profileData));
          formatAppLog("log", "at pages/profile/index.vue:291", "从API获取的原始个人信息:", profileData);
          const userData = profileData && (profileData.user || profileData.user_info || profileData) || {};
          formatAppLog("log", "at pages/profile/index.vue:295", "处理后的用户数据对象:", userData);
          userProfile.value = {
            username: (userData == null ? void 0 : userData.username) || (userData == null ? void 0 : userData.name) || "",
            user_id: (userData == null ? void 0 : userData.user_id) || (userData == null ? void 0 : userData.id) || (storedUserInfo == null ? void 0 : storedUserInfo.user_id) || (storedUserInfo == null ? void 0 : storedUserInfo.id) || "暂无",
            nickname: (userData == null ? void 0 : userData.nickname) || (userData == null ? void 0 : userData.username) || (userData == null ? void 0 : userData.name) || (storedUserInfo == null ? void 0 : storedUserInfo.nickname) || "未登录用户",
            grade: (userData == null ? void 0 : userData.grade) ?? (storedUserInfo == null ? void 0 : storedUserInfo.grade) ?? null,
            user_model_essay: (userData == null ? void 0 : userData.user_model_essay) || (userData == null ? void 0 : userData.excellent_essays) || "0",
            avg_score: (userData == null ? void 0 : userData.avg_score) || (userData == null ? void 0 : userData.average_score) || 0,
            medals: (userData == null ? void 0 : userData.medals) || 0
          };
          uni.showToast({
            title: "个人信息已更新",
            icon: "success",
            duration: 1500
          });
          formatAppLog("log", "at pages/profile/index.vue:315", "最终显示的用户资料:", userProfile.value);
        } catch (error) {
          formatAppLog("error", "at pages/profile/index.vue:318", "加载用户资料失败:", error);
          const safeStoredInfo = storedUserInfo || {};
          formatAppLog("log", "at pages/profile/index.vue:322", "API获取失败，使用本地存储的用户信息");
          userProfile.value = {
            username: (safeStoredInfo == null ? void 0 : safeStoredInfo.username) || "",
            user_id: (safeStoredInfo == null ? void 0 : safeStoredInfo.user_id) || (safeStoredInfo == null ? void 0 : safeStoredInfo.id) || "暂无",
            nickname: (safeStoredInfo == null ? void 0 : safeStoredInfo.nickname) || (safeStoredInfo == null ? void 0 : safeStoredInfo.username) || "未知用户",
            grade: (safeStoredInfo == null ? void 0 : safeStoredInfo.grade) ?? null,
            user_model_essay: (safeStoredInfo == null ? void 0 : safeStoredInfo.user_model_essay) || "0",
            avg_score: (safeStoredInfo == null ? void 0 : safeStoredInfo.avg_score) || 0,
            medals: (safeStoredInfo == null ? void 0 : safeStoredInfo.medals) || 0
          };
          const errorString = (error == null ? void 0 : error.toString()) || "";
          if (errorString === "请先登录" || errorString.includes("401") || errorString.includes("登录已过期")) {
            uni.removeStorageSync("accessToken");
            uni.removeStorageSync("refreshToken");
            showLoginModal.value = true;
          } else {
            uni.showToast({
              title: "网络获取失败，显示缓存数据",
              icon: "none"
            });
          }
        }
      };
      const goToLogin = () => {
        showLoginModal.value = false;
        uni.reLaunch({
          url: "/pages/login/login"
        });
      };
      const navigateTo = (page) => {
        const routes = {
          "writing-portrait": "/pages/profile/portrait",
          "achievement-tracker": "/pages/profile/variation",
          "my-essays": "/pages/profile/my_essay",
          "favorites": "/pages/profile/favourites",
          "settings": "/pages/profile/settings",
          "help-center": "/pages/profile/help",
          "edit-profile": "/pages/profile/edit"
        };
        if (routes[page]) {
          uni.navigateTo({ url: routes[page] });
        }
      };
      vue.onMounted(() => {
        formatAppLog("log", "at pages/profile/index.vue:375", "个人中心页面已挂载，开始加载用户信息");
        loadUserProfile();
        try {
          const checkInterval = setInterval(() => {
            const currentToken = uni.getStorageSync("accessToken");
            if (currentToken && currentToken !== lastCheckToken.value) {
              lastCheckToken.value = currentToken;
              formatAppLog("log", "at pages/profile/index.vue:387", "检测到token变化，重新加载用户信息");
              loadUserProfile();
            }
          }, 3e4);
          vue.onBeforeUnmount(() => {
            clearInterval(checkInterval);
          });
        } catch (error) {
          formatAppLog("log", "at pages/profile/index.vue:397", "设置登录状态监听失败:", error);
        }
      });
      const lastCheckToken = vue.ref(uni.getStorageSync("accessToken"));
      const __returned__ = { userProfile, showLoginModal, gradeMap, formatGrade, checkLoginStatus: checkLoginStatus2, handleMenuClick, handleEditProfile, refreshUserProfile, getProfileApi, loadUserProfile, goToLogin, navigateTo, lastCheckToken, ref: vue.ref, onMounted: vue.onMounted, onBeforeUnmount: vue.onBeforeUnmount, get request() {
        return request;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "profile-page" }, [
      vue.createCommentVNode(" 用户信息头部 - 使用蓝色渐变背景 "),
      vue.createElementVNode("view", { class: "user-header" }, [
        vue.createElementVNode("view", { class: "user-avatar" }, [
          vue.createElementVNode("image", {
            class: "avatar-img",
            src: _imports_1$4,
            mode: "aspectFill"
          })
        ]),
        vue.createElementVNode("view", { class: "user-info" }, [
          vue.createElementVNode(
            "text",
            { class: "user-name" },
            vue.toDisplayString($setup.userProfile.nickname || $setup.userProfile.username || "未登录用户"),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "text",
            { class: "user-id" },
            "ID: " + vue.toDisplayString($setup.userProfile.user_id || "暂无"),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "text",
            { class: "user-grade" },
            vue.toDisplayString($setup.formatGrade($setup.userProfile.grade)),
            1
            /* TEXT */
          )
        ]),
        vue.createCommentVNode(" 操作图标区域 "),
        vue.createElementVNode("view", { class: "action-buttons" }, [
          vue.createElementVNode("view", {
            class: "refresh-icon-container",
            onClick: $setup.refreshUserProfile
          }, [
            vue.createElementVNode("image", {
              class: "refresh-icon",
              src: _imports_1$5,
              mode: "aspectFit"
            })
          ]),
          vue.createElementVNode("view", {
            class: "edit-icon-container",
            onClick: $setup.handleEditProfile
          }, [
            vue.createElementVNode("image", {
              class: "edit-icon",
              src: _imports_2$2,
              mode: "aspectFit"
            })
          ])
        ])
      ]),
      vue.createCommentVNode(" 数据统计卡片 "),
      vue.createElementVNode("view", { class: "stats-card" }, [
        vue.createElementVNode("view", { class: "stat-item" }, [
          vue.createElementVNode(
            "text",
            { class: "stat-value" },
            vue.toDisplayString($setup.userProfile.avg_score || 0),
            1
            /* TEXT */
          ),
          vue.createElementVNode("text", { class: "stat-label" }, "平均得分")
        ]),
        vue.createElementVNode("view", { class: "stat-divider" }),
        vue.createElementVNode("view", { class: "stat-item" }, [
          vue.createElementVNode(
            "text",
            { class: "stat-value" },
            vue.toDisplayString($setup.userProfile.user_model_essay || 0),
            1
            /* TEXT */
          ),
          vue.createElementVNode("text", { class: "stat-label" }, "优秀范文")
        ]),
        vue.createElementVNode("view", { class: "stat-divider" }),
        vue.createElementVNode("view", { class: "stat-item" }, [
          vue.createElementVNode(
            "text",
            { class: "stat-value" },
            vue.toDisplayString($setup.userProfile.medals || 0),
            1
            /* TEXT */
          ),
          vue.createElementVNode("text", { class: "stat-label" }, "写作勋章")
        ])
      ]),
      vue.createCommentVNode(" 功能菜单 "),
      vue.createElementVNode("view", { class: "menu-section" }, [
        vue.createElementVNode("view", {
          class: "menu-item-card",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.handleMenuClick("writing-portrait"))
        }, [
          vue.createElementVNode("view", { class: "menu-icon-container" }, [
            vue.createElementVNode("image", {
              class: "menu-icon",
              src: _imports_3$2,
              mode: "aspectFit"
            })
          ]),
          vue.createElementVNode("view", { class: "menu-content" }, [
            vue.createElementVNode("text", { class: "menu-text" }, "写作画像"),
            vue.createElementVNode("text", { class: "menu-desc" }, "查看你的写作特点")
          ]),
          vue.createElementVNode("image", {
            class: "menu-arrow",
            src: _imports_0$9,
            mode: "aspectFit"
          })
        ]),
        vue.createElementVNode("view", {
          class: "menu-item-card",
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.handleMenuClick("achievement-tracker"))
        }, [
          vue.createElementVNode("view", { class: "menu-icon-container" }, [
            vue.createElementVNode("image", {
              class: "menu-icon",
              src: _imports_1$5,
              mode: "aspectFit"
            })
          ]),
          vue.createElementVNode("view", { class: "menu-content" }, [
            vue.createElementVNode("text", { class: "menu-text" }, "成长轨迹"),
            vue.createElementVNode("text", { class: "menu-desc" }, "查看你的成长变化")
          ]),
          vue.createElementVNode("image", {
            class: "menu-arrow",
            src: _imports_0$9,
            mode: "aspectFit"
          })
        ]),
        vue.createElementVNode("view", {
          class: "menu-item-card",
          onClick: _cache[2] || (_cache[2] = ($event) => $setup.handleMenuClick("my-essays"))
        }, [
          vue.createElementVNode("view", { class: "menu-icon-container" }, [
            vue.createElementVNode("image", {
              class: "menu-icon",
              src: _imports_5,
              mode: "aspectFit"
            })
          ]),
          vue.createElementVNode("view", { class: "menu-content" }, [
            vue.createElementVNode("text", { class: "menu-text" }, "我的作文"),
            vue.createElementVNode("text", { class: "menu-desc" }, "查看历史作文")
          ]),
          vue.createElementVNode("image", {
            class: "menu-arrow",
            src: _imports_0$9,
            mode: "aspectFit"
          })
        ]),
        vue.createElementVNode("view", {
          class: "menu-item-card",
          onClick: _cache[3] || (_cache[3] = ($event) => $setup.handleMenuClick("favorites"))
        }, [
          vue.createElementVNode("view", { class: "menu-icon-container" }, [
            vue.createElementVNode("image", {
              class: "menu-icon",
              src: _imports_6,
              mode: "aspectFit"
            })
          ]),
          vue.createElementVNode("view", { class: "menu-content" }, [
            vue.createElementVNode("text", { class: "menu-text" }, "收藏夹"),
            vue.createElementVNode("text", { class: "menu-desc" }, "我的收藏内容")
          ]),
          vue.createElementVNode("image", {
            class: "menu-arrow",
            src: _imports_0$9,
            mode: "aspectFit"
          })
        ])
      ]),
      vue.createCommentVNode(" 系统设置菜单 "),
      vue.createElementVNode("view", { class: "menu-section system-section" }, [
        vue.createElementVNode("view", {
          class: "menu-item-card",
          onClick: _cache[4] || (_cache[4] = ($event) => $setup.handleMenuClick("settings"))
        }, [
          vue.createElementVNode("view", { class: "menu-icon-container" }, [
            vue.createElementVNode("image", {
              class: "menu-icon",
              src: _imports_7,
              mode: "aspectFit"
            })
          ]),
          vue.createElementVNode("view", { class: "menu-content" }, [
            vue.createElementVNode("text", { class: "menu-text" }, "设置"),
            vue.createElementVNode("text", { class: "menu-desc" }, "账号与系统设置")
          ]),
          vue.createElementVNode("image", {
            class: "menu-arrow",
            src: _imports_0$9,
            mode: "aspectFit"
          })
        ]),
        vue.createElementVNode("view", {
          class: "menu-item-card",
          onClick: _cache[5] || (_cache[5] = ($event) => $setup.handleMenuClick("help-center"))
        }, [
          vue.createElementVNode("view", { class: "menu-icon-container" }, [
            vue.createElementVNode("image", {
              class: "menu-icon",
              src: _imports_8,
              mode: "aspectFit"
            })
          ]),
          vue.createElementVNode("view", { class: "menu-content" }, [
            vue.createElementVNode("text", { class: "menu-text" }, "帮助中心"),
            vue.createElementVNode("text", { class: "menu-desc" }, "使用指南与常见问题")
          ]),
          vue.createElementVNode("image", {
            class: "menu-arrow",
            src: _imports_0$9,
            mode: "aspectFit"
          })
        ])
      ]),
      vue.createCommentVNode(" 登录提示弹窗 "),
      $setup.showLoginModal ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "login-modal"
      }, [
        vue.createElementVNode("view", {
          class: "modal-mask",
          onClick: _cache[6] || (_cache[6] = ($event) => $setup.showLoginModal = false)
        }),
        vue.createElementVNode("view", { class: "modal-content" }, [
          vue.createElementVNode("view", { class: "modal-header" }, [
            vue.createElementVNode("text", { class: "modal-title" }, "提示")
          ]),
          vue.createElementVNode("view", { class: "modal-body" }, [
            vue.createElementVNode("text", { class: "modal-text" }, "请先登录以查看个人信息")
          ]),
          vue.createElementVNode("view", { class: "modal-footer" }, [
            vue.createElementVNode("view", {
              class: "modal-btn cancel-btn",
              onClick: _cache[7] || (_cache[7] = ($event) => $setup.showLoginModal = false)
            }, "取消"),
            vue.createElementVNode("view", { class: "modal-divider" }),
            vue.createElementVNode("view", {
              class: "modal-btn confirm-btn",
              onClick: $setup.goToLogin
            }, "去登录")
          ])
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesProfileIndex = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-201c0da5"], ["__file", "D:/多媒体比赛/momo9.29/pages/profile/index.vue"]]);
  let isRefreshing = false;
  let refreshQueue = [];
  const isTokenExpired = (token) => {
    if (!token)
      return true;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const currentTime = Math.floor(Date.now() / 1e3);
      return payload.exp < currentTime;
    } catch (error) {
      return true;
    }
  };
  const checkLoginStatus = () => {
    const accessToken = uni.getStorageSync("accessToken");
    const refreshToken = uni.getStorageSync("refreshToken");
    if (!accessToken && !refreshToken) {
      return "not_logged_in";
    }
    if (accessToken && !isTokenExpired(accessToken)) {
      return "logged_in";
    }
    if (refreshToken && !isTokenExpired(refreshToken)) {
      return "needs_refresh";
    }
    return "expired";
  };
  const refreshAccessToken = async () => {
    if (isRefreshing) {
      formatAppLog("log", "at utils/tokenManager.js:50", "刷新令牌正在进行中，加入等待队列...");
      return new Promise((resolve, reject) => {
        refreshQueue.push({ resolve, reject });
      });
    }
    isRefreshing = true;
    formatAppLog("log", "at utils/tokenManager.js:57", "开始刷新访问令牌...");
    try {
      const refreshToken = uni.getStorageSync("refreshToken");
      if (!refreshToken) {
        throw new Error("无刷新令牌");
      }
      if (isTokenExpired(refreshToken)) {
        clearAllTokens();
        throw new Error("刷新令牌已过期，请重新登录");
      }
      const response = await uni.request({
        url: "/api/users/token_refresh/",
        method: "POST",
        data: { refresh: refreshToken },
        header: {
          "Content-Type": "application/json"
        }
      });
      formatAppLog("log", "at utils/tokenManager.js:81", "刷新令牌响应状态:", response.statusCode);
      formatAppLog("log", "at utils/tokenManager.js:82", "刷新令牌响应数据:", JSON.stringify(response.data));
      if (response.statusCode === 200) {
        let newAccessToken;
        if (response.data.access) {
          newAccessToken = response.data.access;
        } else if (response.data.token) {
          newAccessToken = response.data.token;
        } else if (response.data.data && response.data.data.access) {
          newAccessToken = response.data.data.access;
        } else if (typeof response.data === "string") {
          newAccessToken = response.data;
        } else {
          formatAppLog("error", "at utils/tokenManager.js:98", "无效的响应格式，无法找到access token:", response.data);
          throw new Error("刷新令牌失败: 无效的响应格式");
        }
        if (!newAccessToken) {
          throw new Error("刷新令牌失败: 未返回访问令牌");
        }
        uni.setStorageSync("accessToken", newAccessToken);
        formatAppLog("log", "at utils/tokenManager.js:107", "令牌刷新成功，新令牌长度:", newAccessToken.length);
        refreshQueue.forEach(({ resolve }) => resolve(newAccessToken));
        refreshQueue = [];
        return newAccessToken;
      } else {
        const errorMsg = response.data.detail || response.data.message || response.data.error || JSON.stringify(response.data) || "未知错误";
        formatAppLog("error", "at utils/tokenManager.js:116", "刷新令牌失败，状态码:", response.statusCode, "错误信息:", errorMsg);
        throw new Error(`刷新令牌失败: ${errorMsg}`);
      }
    } catch (error) {
      formatAppLog("error", "at utils/tokenManager.js:120", "刷新令牌请求失败:", error);
      refreshQueue.forEach(({ reject }) => reject(error));
      refreshQueue = [];
      if (error.message.includes("过期") || error.message.includes("无刷新令牌")) {
        clearAllTokens();
        throw new Error("登录已过期，请重新登录");
      }
      throw error;
    } finally {
      isRefreshing = false;
    }
  };
  const clearAllTokens = () => {
    uni.removeStorageSync("accessToken");
    uni.removeStorageSync("refreshToken");
    uni.removeStorageSync("userInfo");
    uni.removeStorageSync("isGuest");
    formatAppLog("log", "at utils/tokenManager.js:143", "所有令牌已清除");
  };
  const requestWithAuth = async (options) => {
    try {
      let accessToken = uni.getStorageSync("accessToken");
      const loginStatus = checkLoginStatus();
      formatAppLog("log", "at utils/tokenManager.js:153", "当前登录状态:", loginStatus);
      if (loginStatus === "not_logged_in") {
        formatAppLog("log", "at utils/tokenManager.js:156", "用户未登录，跳转到登录页");
        uni.navigateTo({ url: "/pages/login/login" });
        throw new Error("请先登录");
      }
      if (loginStatus === "needs_refresh") {
        formatAppLog("log", "at utils/tokenManager.js:162", "访问令牌过期，尝试刷新...");
        try {
          accessToken = await refreshAccessToken();
          formatAppLog("log", "at utils/tokenManager.js:165", "刷新成功，使用新令牌:", accessToken.substring(0, 20) + "...");
        } catch (refreshError) {
          formatAppLog("error", "at utils/tokenManager.js:167", "令牌刷新失败:", refreshError);
          clearAllTokens();
          uni.navigateTo({ url: "/pages/login/login" });
          throw new Error("登录已过期，请重新登录");
        }
      }
      if (loginStatus === "expired") {
        formatAppLog("log", "at utils/tokenManager.js:175", "令牌已完全过期");
        clearAllTokens();
        uni.navigateTo({ url: "/pages/login/login" });
        throw new Error("登录已过期，请重新登录");
      }
      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
        ...options.headers
      };
      formatAppLog("log", "at utils/tokenManager.js:187", "发起认证请求:", options.url);
      const response = await uni.request({
        ...options,
        headers
      });
      if (response.statusCode === 401) {
        formatAppLog("log", "at utils/tokenManager.js:195", "请求返回401，尝试刷新令牌并重试...");
        try {
          const newAccessToken = await refreshAccessToken();
          headers.Authorization = `Bearer ${newAccessToken}`;
          formatAppLog("log", "at utils/tokenManager.js:202", "使用新令牌重试请求...");
          const retryResponse = await uni.request({
            ...options,
            headers
          });
          return retryResponse;
        } catch (retryError) {
          formatAppLog("error", "at utils/tokenManager.js:209", "重试请求失败:", retryError);
          clearAllTokens();
          uni.navigateTo({ url: "/pages/login/login" });
          throw new Error("登录已过期，请重新登录");
        }
      }
      return response;
    } catch (error) {
      formatAppLog("error", "at utils/tokenManager.js:219", "认证请求失败:", error);
      throw error;
    }
  };
  const _imports_1$3 = "/static/icons/user.svg";
  const _imports_3$1 = "/static/icons/password.svg";
  const _sfc_main$j = {
    __name: "login",
    setup(__props, { expose: __expose }) {
      __expose();
      const username = vue.ref("");
      const password = vue.ref("");
      const isAgree = vue.ref(false);
      const isLoading = vue.ref(false);
      const errors = vue.reactive({
        username: "",
        password: "",
        global: ""
      });
      const navigateToHome = () => {
        uni.switchTab({
          url: "/pages/home/index"
        });
      };
      const checkLoginStatus2 = () => {
        const accessToken = uni.getStorageSync("accessToken");
        if (accessToken && !isTokenExpired(accessToken)) {
          navigateToHome();
        } else if (accessToken) {
          refreshAccessToken().then(() => {
            navigateToHome();
          }).catch((error) => {
            formatAppLog("log", "at pages/login/login.vue:104", "令牌刷新失败，需要重新登录:", error.message);
            if (error.message.includes("无刷新令牌") || error.message.includes("登录已过期")) {
              clearAllTokens();
            }
          });
        }
      };
      vue.onMounted(() => {
        checkLoginStatus2();
      });
      onShow(() => {
        checkLoginStatus2();
      });
      const clearError = (field) => {
        errors[field] = "";
        errors.global = "";
      };
      const toggleAgree = () => {
        isAgree.value = !isAgree.value;
      };
      const validateForm = () => {
        let valid = true;
        if (!username.value.trim()) {
          errors.username = "请输入用户名";
          valid = false;
        }
        if (!password.value) {
          errors.password = "请输入密码";
          valid = false;
        } else if (password.value.length < 6) {
          errors.password = "密码长度不能少于6位";
          valid = false;
        }
        if (!isAgree.value) {
          uni.showToast({
            title: "请同意用户协议",
            icon: "none",
            duration: 2e3
          });
          valid = false;
        }
        return valid;
      };
      const handleGuestAccess = () => {
        uni.showModal({
          title: "游客访问",
          content: "以游客身份访问，部分功能可能受限",
          confirmText: "确定",
          cancelText: "取消",
          success: (res) => {
            if (res.confirm) {
              uni.setStorageSync("isGuest", true);
              uni.showToast({
                title: "欢迎游客访问",
                icon: "success"
              });
              setTimeout(() => {
                navigateToHome();
              }, 1e3);
            }
          }
        });
      };
      const handleLogin = async () => {
        if (!validateForm())
          return;
        try {
          isLoading.value = true;
          const res = await new Promise((resolve, reject) => {
            uni.request({
              url: "http://120.55.58.198:8000/api/users/login/",
              // url: 'http://192.168.3.56:8000/api/users/login/',
              method: "POST",
              data: {
                username: username.value.trim(),
                password: password.value
              },
              success: (response) => resolve(response.data),
              fail: (err) => reject(err)
            });
          });
          if (res.status === "success") {
            uni.showToast({ title: res.message || "登录成功", icon: "success" });
            uni.setStorageSync("accessToken", res.data.access);
            uni.setStorageSync("refreshToken", res.data.refresh);
            uni.setStorageSync("userInfo", {
              username: res.data.username,
              email: res.data.email
            });
            uni.removeStorageSync("isGuest");
            formatAppLog("log", "at pages/login/login.vue:217", "accessToken:", uni.getStorageSync("accessToken"));
            formatAppLog("log", "at pages/login/login.vue:218", "refreshToken:", uni.getStorageSync("refreshToken"));
            setTimeout(() => {
              navigateToHome();
            }, 1500);
          } else {
            errors.global = res.message || "登录失败";
            uni.showToast({ title: res.message || "登录失败", icon: "none" });
          }
        } catch (e) {
          formatAppLog("error", "at pages/login/login.vue:227", "登录请求异常:", e);
          if (e.errMsg && e.errMsg.includes("timeout")) {
            errors.global = "请求超时，请检查网络连接";
            uni.showToast({ title: "请求超时，请检查网络连接", icon: "none" });
          } else if (e.errMsg && e.errMsg.includes("network")) {
            errors.global = "网络异常，请检查网络连接";
            uni.showToast({ title: "网络异常，请检查网络连接", icon: "none" });
          } else {
            errors.global = "登录请求失败，请稍后重试";
            uni.showToast({ title: "登录请求失败，请稍后重试", icon: "none" });
          }
        } finally {
          isLoading.value = false;
        }
      };
      const openAgreement = (type) => {
        const title = type === "user" ? "用户协议" : "隐私协议";
        const content = type === "user" ? "【用户协议】\n1. 您同意按照本平台规则使用服务...\n2. 不得利用本平台从事违法活动..." : "【隐私协议】\n1. 我们将严格保护您的个人信息...\n2. 未经允许不会向第三方披露您的信息...";
        uni.showModal({
          title,
          content,
          showCancel: false,
          confirmText: "我知道了",
          confirmColor: "#409eff"
        });
      };
      const openHelp = () => {
        uni.showModal({
          title: "帮助中心",
          content: "如有疑问，请联系客服：400-xxxx-xxxx",
          showCancel: false
        });
      };
      const __returned__ = { username, password, isAgree, isLoading, errors, navigateToHome, checkLoginStatus: checkLoginStatus2, clearError, toggleAgree, validateForm, handleGuestAccess, handleLogin, openAgreement, openHelp, ref: vue.ref, reactive: vue.reactive, onMounted: vue.onMounted, get onShow() {
        return onShow;
      }, get isTokenExpired() {
        return isTokenExpired;
      }, get refreshAccessToken() {
        return refreshAccessToken;
      }, get clearAllTokens() {
        return clearAllTokens;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "login-page" }, [
      vue.createCommentVNode(" 右上角帮助 "),
      vue.createElementVNode("text", {
        class: "help-link",
        onClick: $setup.openHelp
      }, "帮助"),
      vue.createCommentVNode(" Logo + 标题区 "),
      vue.createElementVNode("image", {
        class: "app-logo",
        src: _imports_0$b
      }),
      vue.createElementVNode("text", { class: "app-title" }, "知途"),
      vue.createElementVNode("text", { class: "app-subtitle" }, "你的学习好帮手"),
      vue.createCommentVNode(" 用户名输入 "),
      vue.createElementVNode("view", { class: "input-group" }, [
        vue.createElementVNode("image", {
          class: "input-icon",
          src: _imports_1$3
        }),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            class: "input-field",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.username = $event),
            placeholder: "请输入用户名",
            onInput: _cache[1] || (_cache[1] = ($event) => $setup.clearError("username"))
          },
          null,
          544
          /* NEED_HYDRATION, NEED_PATCH */
        ), [
          [vue.vModelText, $setup.username]
        ])
      ]),
      $setup.errors.username ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          class: "error-tip"
        },
        vue.toDisplayString($setup.errors.username),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 密码输入 "),
      vue.createElementVNode("view", { class: "input-group" }, [
        vue.createElementVNode("image", {
          class: "input-icon",
          src: _imports_3$1
        }),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            class: "input-field",
            type: "password",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.password = $event),
            placeholder: "请输入密码",
            onInput: _cache[3] || (_cache[3] = ($event) => $setup.clearError("password"))
          },
          null,
          544
          /* NEED_HYDRATION, NEED_PATCH */
        ), [
          [vue.vModelText, $setup.password]
        ])
      ]),
      $setup.errors.password ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 1,
          class: "error-tip"
        },
        vue.toDisplayString($setup.errors.password),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 通用错误提示（如密码错误） "),
      $setup.errors.global ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 2,
          class: "error-tip global-error"
        },
        vue.toDisplayString($setup.errors.global),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 协议勾选（拆分文本实现高亮和点击） "),
      vue.createElementVNode("view", { class: "agree-row" }, [
        vue.createElementVNode("checkbox", {
          class: "agree-check",
          onClick: $setup.toggleAgree
        }),
        vue.createElementVNode("text", { class: "agree-text" }, [
          vue.createTextVNode(" 我已经阅读并同意 "),
          vue.createElementVNode("text", {
            class: "agree-link",
            onClick: _cache[4] || (_cache[4] = ($event) => $setup.openAgreement("user"))
          }, "《用户协议》"),
          vue.createTextVNode(" 及 "),
          vue.createElementVNode("text", {
            class: "agree-link",
            onClick: _cache[5] || (_cache[5] = ($event) => $setup.openAgreement("privacy"))
          }, "《隐私协议》")
        ])
      ]),
      vue.createCommentVNode(" 登录按钮 "),
      vue.createElementVNode("button", {
        class: "login-btn",
        onClick: $setup.handleLogin,
        loading: $setup.isLoading
      }, " 登录 ", 8, ["loading"]),
      vue.createCommentVNode(" 底部链接 "),
      vue.createElementVNode("view", { class: "link-row" }, [
        vue.createElementVNode("navigator", {
          url: "/pages/register/register",
          class: "link-text"
        }, "新用户注册"),
        vue.createElementVNode("text", { class: "divider" }, "|"),
        vue.createElementVNode("navigator", {
          url: "/pages/forget/forgot",
          class: "link-text"
        }, "忘记密码？"),
        vue.createElementVNode("text", { class: "divider" }, "|"),
        vue.createElementVNode("text", {
          class: "link-text",
          onClick: $setup.handleGuestAccess
        }, "游客访问")
      ])
    ]);
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-e4e4508d"], ["__file", "D:/多媒体比赛/momo9.29/pages/login/login.vue"]]);
  const _imports_0$8 = "/static/icons/email.svg";
  const _imports_2$1 = "/static/icons/grade.svg";
  const _sfc_main$i = {
    __name: "register",
    setup(__props, { expose: __expose }) {
      __expose();
      const email = vue.ref("");
      const username = vue.ref("");
      const password = vue.ref("");
      const confirmPwd = vue.ref("");
      const isAgree = vue.ref(false);
      const isLoading = vue.ref(false);
      const grades = vue.ref(["三年级", "四年级", "五年级", "六年级"]);
      const gradeValues = vue.ref([3, 4, 5, 6]);
      const selectedGradeIndex = vue.ref(-1);
      const selectedGradeValue = vue.ref(null);
      const errors = vue.reactive({
        email: "",
        username: "",
        grade: "",
        // 新增年级错误提示
        password: "",
        confirmPwd: ""
      });
      const clearError = (field) => {
        errors[field] = "";
      };
      const handleGradeChange = (e) => {
        const index = parseInt(e.detail.value);
        selectedGradeIndex.value = index;
        selectedGradeValue.value = gradeValues.value[index];
        clearError("grade");
      };
      const toggleAgree = () => {
        isAgree.value = !isAgree.value;
      };
      const validateForm = () => {
        let valid = true;
        const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const pwdReg = /^[A-Za-z0-9]+$/;
        if (!email.value.trim()) {
          errors.email = "请输入邮箱号";
          valid = false;
        } else if (!emailReg.test(email.value)) {
          errors.email = "请输入有效的邮箱格式";
          valid = false;
        }
        if (!username.value.trim()) {
          errors.username = "请输入用户名";
          valid = false;
        }
        if (selectedGradeValue.value === null) {
          errors.grade = "请选择年级";
          valid = false;
        }
        if (!password.value) {
          errors.password = "请输入密码";
          valid = false;
        } else if (!pwdReg.test(password.value)) {
          errors.password = "请输入数字与字母组合的密码";
          valid = false;
        } else if (password.value.length < 6 || password.value.length > 16) {
          errors.password = "密码长度需在6-16位之间";
          valid = false;
        }
        if (!confirmPwd.value) {
          errors.confirmPwd = "请确认密码";
          valid = false;
        } else if (password.value !== confirmPwd.value) {
          errors.confirmPwd = "两次输入的密码不一致";
          valid = false;
        }
        if (!isAgree.value) {
          uni.showToast({
            title: "请同意用户协议",
            icon: "none",
            duration: 2e3
          });
          valid = false;
        }
        return valid;
      };
      const registerApi = (userData) => {
        return new Promise((resolve, reject) => {
          const apiUrl = "http://120.55.58.198:8000/api/users/register/";
          uni.request({
            url: apiUrl,
            method: "POST",
            withCredentials: true,
            // 添加跨域携带Cookie
            data: {
              username: userData.username,
              email: userData.email,
              grade: userData.gradeValue,
              // 传递数值而非文本
              password1: userData.password,
              // 初始密码
              password2: userData.confirmPwd
              // 确认密码
            },
            header: {
              "Content-Type": "application/json"
            },
            timeout: 1e4,
            success: (response) => resolve(response.data),
            fail: (err) => {
              formatAppLog("error", "at pages/register/register.vue:228", "注册请求失败详情:", err);
              if (err.errMsg.includes("timeout")) {
                reject("请求超时，请检查网络连接");
              } else if (err.errMsg.includes("network")) {
                reject("网络异常，请检查网络连接");
              } else {
                reject("注册请求失败，请稍后重试");
              }
            }
          });
        });
      };
      const handleRegister = async () => {
        if (!validateForm())
          return;
        try {
          isLoading.value = true;
          const userData = {
            email: email.value.trim(),
            username: username.value.trim(),
            gradeValue: selectedGradeValue.value,
            // 传递数值
            password: password.value,
            confirmPwd: confirmPwd.value
          };
          const res = await registerApi(userData);
          if (res.status === "success") {
            uni.showToast({
              title: res.message || "注册成功",
              icon: "success",
              duration: 1500
            });
            uni.setStorageSync("tempUser", {
              username: res.data.username,
              email: res.data.email
            });
            setTimeout(() => {
              uni.navigateTo({
                url: "/pages/login/login"
              });
            }, 1500);
          } else {
            const errorMsg = res.message || "注册失败，请检查输入信息";
            uni.showToast({
              title: errorMsg,
              icon: "none",
              duration: 2e3
            });
          }
        } catch (e) {
          formatAppLog("error", "at pages/register/register.vue:294", "注册异常:", e);
          uni.showToast({
            title: e || "系统异常，请稍后重试",
            icon: "none",
            duration: 2e3
          });
        } finally {
          isLoading.value = false;
        }
      };
      const openAgreement = (type) => {
        const titleMap = {
          user: "用户协议",
          privacy: "隐私协议"
        };
        const contentMap = {
          user: `【用户协议】
1. 您同意按照本平台规则使用服务...
2. 不得利用本平台从事违法活动...`,
          privacy: `【隐私协议】
1. 我们将严格保护您的个人信息...
2. 未经允许不会向第三方披露您的信息...`
        };
        uni.showModal({
          title: titleMap[type],
          content: contentMap[type],
          showCancel: false,
          confirmText: "我知道了",
          confirmColor: "#409eff"
        });
      };
      const openHelp = () => {
        uni.showModal({
          title: "帮助中心",
          content: "如有疑问，请联系客服：400-xxxx-xxxx",
          showCancel: false
        });
      };
      const __returned__ = { email, username, password, confirmPwd, isAgree, isLoading, grades, gradeValues, selectedGradeIndex, selectedGradeValue, errors, clearError, handleGradeChange, toggleAgree, validateForm, registerApi, handleRegister, openAgreement, openHelp, ref: vue.ref, reactive: vue.reactive };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "register-page" }, [
      vue.createCommentVNode(" 右上角帮助 "),
      vue.createElementVNode("text", {
        class: "help-link",
        onClick: $setup.openHelp
      }, "帮助"),
      vue.createCommentVNode(" 欢迎标题 "),
      vue.createElementVNode("text", { class: "page-title" }, "Hi"),
      vue.createElementVNode("text", { class: "page-subtitle" }, "欢迎来到知途"),
      vue.createCommentVNode(" 邮箱输入 "),
      vue.createElementVNode("view", { class: "input-group" }, [
        vue.createElementVNode("image", {
          class: "input-icon",
          src: _imports_0$8
        }),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            class: "input-field",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.email = $event),
            placeholder: "请输入邮箱号",
            onInput: _cache[1] || (_cache[1] = ($event) => $setup.clearError("email"))
          },
          null,
          544
          /* NEED_HYDRATION, NEED_PATCH */
        ), [
          [vue.vModelText, $setup.email]
        ])
      ]),
      $setup.errors.email ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          class: "error-tip"
        },
        vue.toDisplayString($setup.errors.email),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 用户名输入 "),
      vue.createElementVNode("view", { class: "input-group" }, [
        vue.createElementVNode("image", {
          class: "input-icon",
          src: _imports_1$3
        }),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            class: "input-field",
            type: "text",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.username = $event),
            placeholder: "请输入用户名",
            onInput: _cache[3] || (_cache[3] = ($event) => $setup.clearError("username"))
          },
          null,
          544
          /* NEED_HYDRATION, NEED_PATCH */
        ), [
          [vue.vModelText, $setup.username]
        ])
      ]),
      $setup.errors.username ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 1,
          class: "error-tip"
        },
        vue.toDisplayString($setup.errors.username),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 年级选择 "),
      vue.createElementVNode("view", { class: "input-group" }, [
        vue.createElementVNode("image", {
          class: "input-icon",
          src: _imports_2$1
        }),
        vue.createElementVNode("picker", {
          class: "input-field picker",
          value: $setup.selectedGradeIndex,
          range: $setup.grades,
          onChange: $setup.handleGradeChange
        }, [
          vue.createElementVNode(
            "view",
            { class: "picker-text" },
            vue.toDisplayString($setup.selectedGradeIndex >= 0 ? $setup.grades[$setup.selectedGradeIndex] : "请选择年级"),
            1
            /* TEXT */
          )
        ], 40, ["value", "range"])
      ]),
      $setup.errors.grade ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 2,
          class: "error-tip"
        },
        vue.toDisplayString($setup.errors.grade),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 密码输入 "),
      vue.createElementVNode("view", { class: "input-group" }, [
        vue.createElementVNode("image", {
          class: "input-icon",
          src: _imports_3$1
        }),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            class: "input-field",
            type: "password",
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.password = $event),
            placeholder: "请输入密码",
            onInput: _cache[5] || (_cache[5] = ($event) => $setup.clearError("password"))
          },
          null,
          544
          /* NEED_HYDRATION, NEED_PATCH */
        ), [
          [vue.vModelText, $setup.password]
        ])
      ]),
      $setup.errors.password ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 3,
          class: "error-tip"
        },
        vue.toDisplayString($setup.errors.password),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 确认密码输入 "),
      vue.createElementVNode("view", { class: "input-group" }, [
        vue.createElementVNode("image", {
          class: "input-icon",
          src: _imports_3$1
        }),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            class: "input-field",
            type: "password",
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.confirmPwd = $event),
            placeholder: "请再次确认密码",
            onInput: _cache[7] || (_cache[7] = ($event) => $setup.clearError("confirmPwd"))
          },
          null,
          544
          /* NEED_HYDRATION, NEED_PATCH */
        ), [
          [vue.vModelText, $setup.confirmPwd]
        ])
      ]),
      $setup.errors.confirmPwd ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 4,
          class: "error-tip"
        },
        vue.toDisplayString($setup.errors.confirmPwd),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 协议勾选 "),
      vue.createElementVNode("view", { class: "agree-row" }, [
        vue.createElementVNode("checkbox", {
          class: "agree-check",
          checked: $setup.isAgree,
          onClick: $setup.toggleAgree
        }, null, 8, ["checked"]),
        vue.createElementVNode("text", {
          class: "agree-text",
          onClick: $setup.toggleAgree
        }, [
          vue.createTextVNode(" 我已经阅读并同意 "),
          vue.createElementVNode("text", {
            class: "agree-link",
            onClick: _cache[8] || (_cache[8] = vue.withModifiers(($event) => $setup.openAgreement("user"), ["stop"]))
          }, "《用户协议》"),
          vue.createTextVNode(" 及 "),
          vue.createElementVNode("text", {
            class: "agree-link",
            onClick: _cache[9] || (_cache[9] = vue.withModifiers(($event) => $setup.openAgreement("privacy"), ["stop"]))
          }, "《隐私协议》")
        ])
      ]),
      vue.createCommentVNode(" 注册按钮 "),
      vue.createElementVNode("button", {
        class: "register-btn",
        onClick: $setup.handleRegister,
        loading: $setup.isLoading
      }, " 立即注册 ", 8, ["loading"]),
      vue.createCommentVNode(" 底部链接 "),
      vue.createElementVNode("view", { class: "link-row" }, [
        vue.createElementVNode("navigator", {
          url: "/pages/login/login",
          class: "link-text"
        }, "已有账号？去登录")
      ])
    ]);
  }
  const PagesRegisterRegister = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-bac4a35d"], ["__file", "D:/多媒体比赛/momo9.29/pages/register/register.vue"]]);
  const _imports_0$7 = "/static/images/student1.jpg";
  const _imports_1$2 = "/static/images/teacher.webp";
  const _sfc_main$h = {
    __name: "essay",
    setup(__props, { expose: __expose }) {
      __expose();
      const isLiked = vue.ref(false);
      const isCollected = vue.ref(false);
      const toggleLike = () => {
        isLiked.value = !isLiked.value;
      };
      const toggleCollect = () => {
        isCollected.value = !isCollected.value;
      };
      const comments = vue.ref([
        {
          avatar: "/static/images/student2.jpg",
          author: "王小红",
          time: "2天前",
          content: '这个"火酒疗法"好神奇！我爸爸也会用类似的方法，不过是用生姜擦，下次我也要仔细观察写下来',
          replyCount: "12",
          liked: false
        },
        {
          avatar: "/static/images/student3.jpg",
          author: "张伟",
          time: "1天前",
          content: "写得真生动！特别是爸爸动作那一段，我好像看到了蓝火苗和爸爸飞快的手",
          replyCount: "8",
          liked: true
        }
      ]);
      const recommendList = vue.ref([
        {
          title: "爸爸的拿手菜",
          tag: "写人",
          content: "爸爸最拿手的是红烧肉，每次他系着围裙在厨房忙碌时，整个家里都飘着香味..."
        },
        {
          title: "修车高手爸爸",
          tag: "写人",
          content: "爸爸什么车都会修，自行车、电动车坏了，他敲敲打打就能修好，像变魔术一样..."
        },
        {
          title: "爱讲故事的爸爸",
          tag: "写人",
          content: "爸爸肚子里有讲不完的故事，每天晚上睡前都会给我讲他小时候的趣事..."
        }
      ]);
      const onBack = () => {
        uni.navigateBack();
      };
      const __returned__ = { isLiked, isCollected, toggleLike, toggleCollect, comments, recommendList, onBack, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "essay-detail" }, [
      vue.createCommentVNode(" 顶部导航 "),
      vue.createElementVNode("view", { class: "nav-bar" }, [
        vue.createElementVNode("text", {
          class: "nav-back",
          onClick: $setup.onBack
        }, "←"),
        vue.createElementVNode("text", { class: "nav-title" }, "范文详情"),
        vue.createElementVNode("view", { class: "nav-actions" }, [
          vue.createVNode(_component_uni_icons, {
            type: "home",
            size: "24",
            color: "#666",
            style: { "margin-left": "20rpx" }
          })
        ])
      ]),
      vue.createElementVNode("scroll-view", {
        class: "content-scroll",
        "scroll-y": ""
      }, [
        vue.createCommentVNode(" 文章标题 & 标签 "),
        vue.createElementVNode("view", { class: "header" }, [
          vue.createElementVNode("view", { class: "title-container" }, [
            vue.createElementVNode("text", { class: "title" }, "我的爸爸真厉害"),
            vue.createElementVNode("view", { class: "tag" }, "写人")
          ])
        ]),
        vue.createCommentVNode(" 作者信息 "),
        vue.createElementVNode("view", { class: "author-info" }, [
          vue.createElementVNode("view", { class: "author-left" }, [
            vue.createElementVNode("image", {
              class: "author-avatar",
              src: _imports_0$7
            }),
            vue.createElementVNode("text", { class: "author-name" }, "李明"),
            vue.createElementVNode("text", { class: "author-grade" }, "| 四年级")
          ]),
          vue.createElementVNode("view", { class: "author-right" }, [
            vue.createElementVNode("text", { class: "publish-time" }, "3天前"),
            vue.createElementVNode("view", { class: "view-count-container" }, [
              vue.createVNode(_component_uni_icons, {
                type: "eye",
                size: "14",
                color: "#999"
              }),
              vue.createElementVNode("text", { class: "view-count" }, "1,258")
            ]),
            vue.createElementVNode("view", { class: "rating" }, [
              vue.createElementVNode("text", { class: "stars" }, "★★★★☆"),
              vue.createElementVNode("text", { class: "rating-score" }, "4.5")
            ])
          ])
        ]),
        vue.createCommentVNode(" 文章内容 "),
        vue.createElementVNode("view", { class: "content" }, [
          vue.createElementVNode("text", { class: "content-text" }, '我的爸爸个子不算高，但他有一双有力的手，还有一个"绝活"——用"火酒"给我治膝盖，我一直觉得爸爸特别厉害。'),
          vue.createElementVNode("text", { class: "content-text" }, '有一次，我在学校玩的时候不小心磕到了膝盖，回家后膝盖又肿又疼，连走路都一瘸一拐的。爸爸看到后，说："别怕，爸爸有办法给你治。"只见爸爸把瓷盘子在微波炉里消好毒，往盘子里倒了点白酒，然后用打火机点燃了白酒！蓝蓝的火苗在盘子里跳跃着，我看得又害怕又好奇。'),
          vue.createElementVNode("text", { class: "content-text" }, '爸爸示意我伸出腿，放在他的腿上，然后他的手飞快地伸到"火酒"里，又迅速把手收回来——这时爸爸的手上沾了许多带着热气的"火酒"，他立刻轻轻拍在我的膝盖上。我感觉膝盖暖暖的，一点也不疼了，反而很舒服。'),
          vue.createElementVNode("text", { class: "content-text" }, '我也想亲自体验一下爸爸的"绝活"，但爸爸说："这个方法有危险，小孩子不能学。"我只是碰了碰装"火酒"的盘子，就感觉很烫，心想爸爸的手是不是有"魔法"呀！'),
          vue.createElementVNode("text", { class: "content-text" }, '我的爸爸真厉害，不仅会用"火酒"治膝盖，还总能在我需要的时候帮我解决难题，我爱我的爸爸！')
        ]),
        vue.createCommentVNode(" 查看智能批改按钮 "),
        vue.createElementVNode("view", { class: "ai-correction" }, [
          vue.createElementVNode("text", { class: "ai-text" }, "查看智能批改"),
          vue.createVNode(_component_uni_icons, {
            type: "arrowright",
            size: "16",
            color: "#409EFF"
          })
        ]),
        vue.createCommentVNode(' 写作亮点（适配"写人"和爸爸主题） '),
        vue.createElementVNode("view", { class: "highlights" }, [
          vue.createElementVNode("view", { class: "section-title-container" }, [
            vue.createVNode(_component_uni_icons, {
              type: "star-filled",
              size: "20",
              color: "#FFD700",
              class: "section-icon"
            }),
            vue.createElementVNode("text", { class: "section-title" }, "写作亮点")
          ]),
          vue.createElementVNode("view", { class: "highlight-item" }, [
            vue.createElementVNode("view", { class: "highlight-icon" }, "✓"),
            vue.createElementVNode("text", { class: "highlight-text" }, '选材独特，通过爸爸用"火酒"治膝盖这一特殊技能，展现爸爸的厉害之处')
          ]),
          vue.createElementVNode("view", { class: "highlight-item" }, [
            vue.createElementVNode("view", { class: "highlight-icon" }, "✓"),
            vue.createElementVNode("text", { class: "highlight-text" }, '细节描写生动，"蓝蓝的火苗"、"飞快地伸手"等动作描写让画面感很强')
          ]),
          vue.createElementVNode("view", { class: "highlight-item" }, [
            vue.createElementVNode("view", { class: "highlight-icon" }, "✓"),
            vue.createElementVNode("text", { class: "highlight-text" }, "情感真挚，从害怕到好奇再到佩服，情感变化自然真实")
          ]),
          vue.createElementVNode("view", { class: "highlight-item" }, [
            vue.createElementVNode("view", { class: "highlight-icon" }, "✓"),
            vue.createElementVNode("text", { class: "highlight-text" }, '首尾呼应，开头点题"爸爸真厉害"，结尾再次强调并升华感情')
          ])
        ]),
        vue.createCommentVNode(" 老师评语（适配爸爸主题） "),
        vue.createElementVNode("view", { class: "teacher-comment" }, [
          vue.createElementVNode("view", { class: "teacher-header" }, [
            vue.createElementVNode("image", {
              class: "teacher-avatar",
              src: _imports_1$2
            }),
            vue.createElementVNode("view", { class: "teacher-info" }, [
              vue.createElementVNode("text", { class: "teacher-name" }, "王老师"),
              vue.createElementVNode("text", { class: "teacher-title" }, "小学语文高级教师 | 10年教龄")
            ])
          ]),
          vue.createElementVNode("view", { class: "comment-content" }, [
            vue.createElementVNode("text", { class: "comment-text" }, "这篇写爸爸的作文选材非常新颖！小作者没有写爸爸辅导作业、做饭等常见内容，而是选择了爸爸用传统方法治膝盖这一独特角度，让人眼前一亮。"),
            vue.createElementVNode("text", { class: "comment-text" }, '对"火酒"治疗过程的描写特别精彩，从消毒盘子、倒酒点火，到快速沾酒拍膝盖，动作连贯，画面感十足。特别是"蓝蓝的火苗"、"带着热气的火酒"这些细节，让读者仿佛亲眼看到了整个过程。'),
            vue.createElementVNode("text", { class: "comment-text" }, "情感表达也很自然，从开始的害怕到后来的佩服，最后升华到对爸爸的爱，层层递进。如果能在文中加入一些爸爸的外貌或神态描写，人物形象会更加丰满。")
          ]),
          vue.createElementVNode("view", { class: "comment-level" }, "（等级：优秀）")
        ]),
        vue.createCommentVNode(" 写人作文小技巧 "),
        vue.createElementVNode("view", { class: "writing-tips" }, [
          vue.createElementVNode("view", { class: "section-title-container" }, [
            vue.createVNode(_component_uni_icons, {
              type: "bulb",
              size: "20",
              color: "#FFD700",
              class: "section-icon"
            }),
            vue.createElementVNode("text", { class: "section-title" }, "写人作文小技巧")
          ]),
          vue.createElementVNode("view", { class: "tip-item" }, [
            vue.createElementVNode("text", { class: "tip-title" }, '找"独特技能"'),
            vue.createElementVNode("text", { class: "tip-desc" }, '每个人都有特别的本领，像爸爸的"火酒疗法"，选这样的材料作文就成功了一半')
          ]),
          vue.createElementVNode("view", { class: "tip-item" }, [
            vue.createElementVNode("text", { class: "tip-title" }, '写"过程细节"'),
            vue.createElementVNode("text", { class: "tip-desc" }, '把人物做事的步骤写清楚，比如爸爸怎么准备、怎么操作，读者就能看懂学不会的"绝活"')
          ]),
          vue.createElementVNode("view", { class: "tip-item" }, [
            vue.createElementVNode("text", { class: "tip-title" }, '加"心理变化"'),
            vue.createElementVNode("text", { class: "tip-desc" }, "写出你看到时的感受，从害怕到佩服，让读者和你一起经历情感变化")
          ]),
          vue.createElementVNode("view", { class: "tip-item" }, [
            vue.createElementVNode("text", { class: "tip-title" }, '用"对比手法"'),
            vue.createElementVNode("text", { class: "tip-desc" }, '像"我碰盘子觉得很烫"和"爸爸不怕烫"的对比，突出爸爸的厉害')
          ])
        ]),
        vue.createCommentVNode(" 同类推荐（写人范文） "),
        vue.createElementVNode("view", { class: "recommendations" }, [
          vue.createElementVNode("view", { class: "recommend-header" }, [
            vue.createElementVNode("text", { class: "section-title" }, "同类范文推荐"),
            vue.createElementVNode("text", { class: "see-more" }, "更多")
          ]),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.recommendList, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "recommend-item",
                key: index
              }, [
                vue.createElementVNode("view", { class: "recommend-title-container" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "recommend-title" },
                    vue.toDisplayString(item.title),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "view",
                    { class: "recommend-tag" },
                    vue.toDisplayString(item.tag),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode(
                  "text",
                  { class: "recommend-content" },
                  vue.toDisplayString(item.content),
                  1
                  /* TEXT */
                )
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createCommentVNode(" 同学互评 "),
        vue.createElementVNode("view", { class: "classmate-comments" }, [
          vue.createElementVNode("text", { class: "section-title" }, "同学互评"),
          vue.createCommentVNode(" 评论输入框 "),
          vue.createElementVNode("view", { class: "comment-input-container" }, [
            vue.createElementVNode("image", {
              class: "user-avatar",
              src: _imports_1$4
            }),
            vue.createElementVNode("view", { class: "input-wrapper" }, [
              vue.createElementVNode("input", {
                class: "comment-input",
                placeholder: "分享你的看法..."
              }),
              vue.createVNode(_component_uni_icons, {
                type: "paperplane",
                size: "20",
                color: "#fff",
                class: "send-icon"
              })
            ])
          ]),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.comments, (comment, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "comment-item",
                key: index
              }, [
                vue.createElementVNode("image", {
                  class: "comment-avatar",
                  src: comment.avatar
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "comment-content" }, [
                  vue.createElementVNode("view", { class: "comment-header" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "comment-author" },
                      vue.toDisplayString(comment.author),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "comment-time" },
                      vue.toDisplayString(comment.time),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode(
                    "text",
                    { class: "comment-text" },
                    vue.toDisplayString(comment.content),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", { class: "comment-footer" }, [
                    vue.createVNode(_component_uni_icons, {
                      type: comment.liked ? "hand-up-filled" : "hand-up",
                      size: "18",
                      color: comment.liked ? "#409EFF" : "#666"
                    }, null, 8, ["type", "color"]),
                    vue.createElementVNode(
                      "text",
                      { class: "reply-count" },
                      vue.toDisplayString(comment.replyCount),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("text", { class: "reply" }, "回复")
                  ])
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      vue.createCommentVNode(" 底部操作栏 "),
      vue.createElementVNode("view", { class: "footer-bar" }, [
        vue.createElementVNode("view", {
          class: "footer-action",
          onClick: $setup.toggleLike
        }, [
          vue.createVNode(_component_uni_icons, {
            type: $setup.isLiked ? "hand-up-filled" : "hand-up",
            size: "24",
            color: $setup.isLiked ? "#409EFF" : "#666"
          }, null, 8, ["type", "color"]),
          vue.createElementVNode(
            "text",
            {
              class: "action-text",
              style: vue.normalizeStyle({ color: $setup.isLiked ? "#409EFF" : "#666" })
            },
            "点赞",
            4
            /* STYLE */
          )
        ]),
        vue.createElementVNode("view", {
          class: "footer-action",
          onClick: $setup.toggleCollect
        }, [
          vue.createVNode(_component_uni_icons, {
            type: $setup.isCollected ? "star-filled" : "star",
            size: "24",
            color: $setup.isCollected ? "#409EFF" : "#666"
          }, null, 8, ["type", "color"]),
          vue.createElementVNode(
            "text",
            {
              class: "action-text",
              style: vue.normalizeStyle({ color: $setup.isCollected ? "#409EFF" : "#666" })
            },
            "收藏",
            4
            /* STYLE */
          )
        ]),
        vue.createElementVNode("view", { class: "footer-action" }, [
          vue.createVNode(_component_uni_icons, {
            type: "redo",
            size: "24",
            color: "#666"
          }),
          vue.createElementVNode("text", { class: "action-text" }, "分享")
        ]),
        vue.createElementVNode("view", { class: "imitate-btn" }, [
          vue.createElementVNode("text", null, "仿写这篇作文")
        ])
      ])
    ]);
  }
  const PagesHomeEssay = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-64de4bd5"], ["__file", "D:/多媒体比赛/momo9.29/pages/home/essay.vue"]]);
  const _imports_0$6 = "/static/icons/arrow-left.svg";
  const _imports_1$1 = "/static/icons/arrow-right-gray.svg";
  const _sfc_main$g = {
    __name: "settings",
    setup(__props, { expose: __expose }) {
      __expose();
      const showLogoutConfirm = vue.ref(false);
      const setupRequestInterceptor = () => {
        const originalRequest = uni.request;
        uni.request = function(options) {
          const accessToken = uni.getStorageSync("accessToken");
          if (accessToken) {
            options.header = options.header || {};
            options.header["Authorization"] = `Bearer ${accessToken}`;
          }
          return originalRequest.call(this, options);
        };
        formatAppLog("log", "at pages/profile/settings.vue:66", "请求拦截器已设置，自动添加Authorization头");
      };
      const goBack = () => {
        uni.navigateBack();
      };
      const navigateTo = (page) => {
        const routes = {
          "account-security": "/pages/profile/account-security",
          "privacy-collection": "/pages/profile/privacy-collection",
          "third-party-sharing": "/pages/profile/third-party-sharing"
        };
        if (routes[page]) {
          uni.navigateTo({ url: routes[page] });
        }
      };
      const logoutApi = () => {
        return new Promise((resolve, reject) => {
          const refreshToken = uni.getStorageSync("refreshToken");
          if (!refreshToken) {
            reject("未找到刷新令牌");
            return;
          }
          uni.request({
            url: "http://120.55.58.198:8000/api/users/logout/",
            // url: 'http://192.168.3.56:8000/api/users/logout/',
            method: "POST",
            header: {
              "Content-Type": "application/json"
            },
            data: {
              refresh: refreshToken
            },
            success: (res) => {
              if (res.statusCode === 200 && res.data.status === "success") {
                resolve(true);
              } else {
                reject(res.data.message || "登出失败");
              }
            },
            fail: (err) => {
              reject("网络请求失败");
            }
          });
        });
      };
      const handleLogout = () => {
        uni.showModal({
          title: "退出登录",
          content: "确定要退出登录吗？",
          confirmColor: "#FF4D4F",
          success: async (res) => {
            if (res.confirm) {
              try {
                await logoutApi();
                uni.removeStorageSync("accessToken");
                uni.removeStorageSync("refreshToken");
                uni.removeStorageSync("userInfo");
                uni.showToast({
                  title: "已退出登录",
                  icon: "success"
                });
                setTimeout(() => {
                  uni.reLaunch({
                    url: "/pages/login/login"
                  });
                }, 1500);
              } catch (error) {
                formatAppLog("error", "at pages/profile/settings.vue:151", "退出登录失败:", error);
                uni.removeStorageSync("accessToken");
                uni.removeStorageSync("refreshToken");
                uni.removeStorageSync("userInfo");
                uni.showToast({
                  title: "已退出登录",
                  icon: "success"
                });
                setTimeout(() => {
                  uni.reLaunch({
                    url: "/pages/login/login"
                  });
                }, 1500);
              }
            }
          }
        });
      };
      vue.onMounted(() => {
        setupRequestInterceptor();
      });
      const __returned__ = { showLogoutConfirm, setupRequestInterceptor, goBack, navigateTo, logoutApi, handleLogout, ref: vue.ref, onMounted: vue.onMounted };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "settings-page" }, [
      vue.createCommentVNode(" 顶部导航栏 "),
      vue.createElementVNode("view", { class: "nav-header" }, [
        vue.createElementVNode("view", {
          class: "nav-back",
          onClick: $setup.goBack
        }, [
          vue.createElementVNode("image", {
            class: "back-icon",
            src: _imports_0$6,
            mode: "aspectFit"
          })
        ]),
        vue.createElementVNode("text", { class: "nav-title" }, "设置")
      ]),
      vue.createCommentVNode(" 设置菜单 "),
      vue.createElementVNode("view", { class: "settings-menu" }, [
        vue.createCommentVNode(" 账号与安全 "),
        vue.createElementVNode("view", {
          class: "menu-item",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.navigateTo("account-security"))
        }, [
          vue.createElementVNode("text", { class: "menu-text" }, "账号与安全"),
          vue.createElementVNode("image", {
            class: "menu-arrow",
            src: _imports_1$1,
            mode: "aspectFit"
          })
        ]),
        vue.createCommentVNode(" 个人信息收集清单 "),
        vue.createElementVNode("view", {
          class: "menu-item",
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.navigateTo("privacy-collection"))
        }, [
          vue.createElementVNode("text", { class: "menu-text" }, "个人信息收集清单"),
          vue.createElementVNode("image", {
            class: "menu-arrow",
            src: _imports_1$1,
            mode: "aspectFit"
          })
        ]),
        vue.createCommentVNode(" 第三方信息共享清单 "),
        vue.createElementVNode("view", {
          class: "menu-item",
          onClick: _cache[2] || (_cache[2] = ($event) => $setup.navigateTo("third-party-sharing"))
        }, [
          vue.createElementVNode("text", { class: "menu-text" }, "第三方信息共享清单"),
          vue.createElementVNode("image", {
            class: "menu-arrow",
            src: _imports_1$1,
            mode: "aspectFit"
          })
        ]),
        vue.createCommentVNode(" 退出登录 "),
        vue.createElementVNode("view", {
          class: "menu-item logout-item",
          onClick: $setup.handleLogout
        }, [
          vue.createElementVNode("text", { class: "logout-text" }, "退出登录")
        ])
      ])
    ]);
  }
  const PagesProfileSettings = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-eeefe5cd"], ["__file", "D:/多媒体比赛/momo9.29/pages/profile/settings.vue"]]);
  const _sfc_main$f = {
    __name: "checkone",
    setup(__props, { expose: __expose }) {
      __expose();
      const navigateToSpecialTraining = () => {
        try {
          uni.navigateTo({
            url: "/pages/correct/special"
          });
          formatAppLog("log", "at pages/correct/checkone.vue:172", "跳转到专项训练页面成功");
        } catch (err) {
          formatAppLog("error", "at pages/correct/checkone.vue:174", "跳转失败:", err);
          uni.showToast({
            title: "跳转失败",
            icon: "none"
          });
        }
      };
      const __returned__ = { navigateToSpecialTraining };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 两个横向排列的框 - 顶部居中 "),
      vue.createElementVNode("view", { class: "boxes-container" }, [
        vue.createCommentVNode(" 专项训练框 - 添加点击事件 "),
        vue.createElementVNode("view", {
          class: "box",
          onClick: $setup.navigateToSpecialTraining
        }, [
          vue.createElementVNode("view", { class: "circle blue-circle" }, [
            vue.createVNode(_component_uni_icons, {
              type: "list",
              size: "38",
              color: "#007AFF"
            })
          ]),
          vue.createElementVNode("view", { class: "text-container" }, [
            vue.createElementVNode("text", { class: "main-text" }, "专项训练"),
            vue.createElementVNode("text", { class: "sub-text" }, "词句·句式·段落")
          ])
        ]),
        vue.createElementVNode("view", { class: "box" }, [
          vue.createElementVNode("view", { class: "circle purple-circle" }, [
            vue.createVNode(_component_uni_icons, {
              type: "calendar",
              size: "38",
              color: "#8A2BE2"
            })
          ]),
          vue.createElementVNode("view", { class: "text-container" }, [
            vue.createElementVNode("text", { class: "main-text" }, "作文练习"),
            vue.createElementVNode("text", { class: "sub-text" }, "热点话题·联考真题")
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "section-header" }, [
        vue.createElementVNode("text", { class: "title-text" }, "继续练习")
      ]),
      vue.createElementVNode("view", { class: "long-boxes-container" }, [
        vue.createCommentVNode(" 第一个长框 - 文字在下面 "),
        vue.createElementVNode("view", { class: "long-box bottom-layout" }, [
          vue.createCommentVNode(" 继续按钮 "),
          vue.createElementVNode("view", { class: "continue-btn" }, [
            vue.createElementVNode("view", { class: "triangle" }),
            vue.createElementVNode("text", { class: "continue-text" }, "继续")
          ]),
          vue.createElementVNode("view", { class: "tag-box" }, [
            vue.createElementVNode("text", { class: "tag-text" }, "错字训练")
          ]),
          vue.createElementVNode("view", { class: "content-bottom" }, [
            vue.createElementVNode("text", { class: "content-title" }, "相似字辨析"),
            vue.createElementVNode("text", { class: "content-desc" }, "已完成5/10题·剩余约3分钟")
          ])
        ]),
        vue.createCommentVNode(" 第二个长框 - 文字在下面 "),
        vue.createElementVNode("view", { class: "long-box bottom-layout" }, [
          vue.createCommentVNode(" 继续按钮 "),
          vue.createElementVNode("view", { class: "continue-btn" }, [
            vue.createElementVNode("view", { class: "triangle" }),
            vue.createElementVNode("text", { class: "continue-text" }, "继续")
          ]),
          vue.createElementVNode("view", { class: "tag-box" }, [
            vue.createElementVNode("text", { class: "tag-text" }, "句子结构")
          ]),
          vue.createElementVNode("view", { class: "content-bottom" }, [
            vue.createElementVNode("text", { class: "content-title italic-text" }, "病句修改训练"),
            vue.createElementVNode("text", { class: "content-desc" }, "已完成2/8题，剩余约5分钟")
          ])
        ])
      ]),
      vue.createCommentVNode(" 使用新的样式类 "),
      vue.createElementVNode("view", { class: "recommend-header" }, [
        vue.createElementVNode("text", { class: "title-text" }, "为你推荐")
      ]),
      vue.createCommentVNode(" 在为你推荐下面添加两个平行框 "),
      vue.createElementVNode("view", { class: "horizontal-boxes-container" }, [
        vue.createCommentVNode(" 第一个扁框 "),
        vue.createElementVNode("view", { class: "flat-box" }, [
          vue.createElementVNode("view", { class: "flat-tag-box" }, [
            vue.createElementVNode("text", { class: "flat-tag-text" }, "错字训练")
          ]),
          vue.createElementVNode("view", { class: "flat-content" }, [
            vue.createElementVNode("text", { class: "flat-title" }, "形近字辨析"),
            vue.createElementVNode("text", { class: "flat-desc" }, "12道题·6分钟")
          ])
        ]),
        vue.createCommentVNode(" 第二个扁框 "),
        vue.createElementVNode("view", { class: "flat-box" }, [
          vue.createElementVNode("view", { class: "flat-tag-box" }, [
            vue.createElementVNode("text", { class: "flat-tag-text" }, "句子结构")
          ]),
          vue.createElementVNode("view", { class: "flat-content" }, [
            vue.createElementVNode("text", { class: "flat-title" }, "句子仿写"),
            vue.createElementVNode("text", { class: "flat-desc" }, "6道题·10分钟")
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "section-header" }, [
        vue.createElementVNode("text", { class: "title-text" }, "热门作文题")
      ]),
      vue.createCommentVNode(" 热门作文题下面的两个长方形框（新样式） "),
      vue.createElementVNode("view", { class: "essay-boxes-container" }, [
        vue.createCommentVNode(" 第一个作文框 "),
        vue.createElementVNode("view", { class: "essay-box" }, [
          vue.createElementVNode("view", { class: "word-count" }, "300字左右"),
          vue.createElementVNode("view", { class: "essay-content" }, [
            vue.createElementVNode("text", { class: "essay-title" }, "我最喜欢的季节"),
            vue.createElementVNode("text", { class: "essay-desc" }, "描述你最喜欢的季节，说说你喜欢它的原因，以及在这个季节里你喜欢做什么..."),
            vue.createElementVNode("view", { class: "essay-stats" }, [
              vue.createElementVNode("view", { class: "stat-item" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "person",
                  size: "14",
                  color: "rgba(153, 153, 153, 0.8)"
                }),
                vue.createElementVNode("text", { class: "stat-text" }, "328人写过")
              ]),
              vue.createElementVNode("view", { class: "stat-item" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "star",
                  size: "14",
                  color: "rgba(153, 153, 153, 0.8)"
                }),
                vue.createElementVNode("text", { class: "stat-text" }, "4.7分")
              ])
            ])
          ])
        ]),
        vue.createCommentVNode(" 第二个作文框 "),
        vue.createElementVNode("view", { class: "essay-box" }, [
          vue.createElementVNode("view", { class: "word-count" }, "400字左右"),
          vue.createElementVNode("view", { class: "essay-content" }, [
            vue.createElementVNode("text", { class: "essay-title" }, "一见难忘的事"),
            vue.createElementVNode("text", { class: "essay-desc" }, "生活中有很多事情让我们难忘，请写一件你印象最深刻的事，说说发生了什么..."),
            vue.createElementVNode("view", { class: "essay-stats" }, [
              vue.createElementVNode("view", { class: "stat-item" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "person",
                  size: "14",
                  color: "rgba(153, 153, 153, 0.8)"
                }),
                vue.createElementVNode("text", { class: "stat-text" }, "276人写过")
              ]),
              vue.createElementVNode("view", { class: "stat-item" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "star",
                  size: "14",
                  color: "rgba(153, 153, 153, 0.8)"
                }),
                vue.createElementVNode("text", { class: "stat-text" }, "4.5分")
              ])
            ])
          ])
        ])
      ]),
      vue.createElementVNode("view", {
        class: "section-header",
        style: { "margin-top": "-15rpx" }
      }, [
        vue.createElementVNode("text", { class: "title-text" }, "最近联考真题")
      ]),
      vue.createCommentVNode(" 添加标题和内容的大框 "),
      vue.createCommentVNode(" 修正标签class名 "),
      vue.createElementVNode("view", { class: "big-exam-box" }, [
        vue.createElementVNode("view", { class: "grade-tag grade-5" }, "五年级"),
        vue.createCommentVNode(" 上半部分 "),
        vue.createElementVNode("view", { class: "exam-top" }, [
          vue.createElementVNode("text", { class: "content-title" }, "我的家乡"),
          vue.createElementVNode("text", { class: "content-desc" }, "每个人都自己的家乡，请你写一篇介绍家乡的作文，可以介绍家乡的风景、特产或风俗习惯...")
        ]),
        vue.createElementVNode("view", { class: "divider-horizontal" }),
        vue.createCommentVNode(" 修正这里：grade-5 改为 grade-6 "),
        vue.createElementVNode("view", { class: "grade-tag grade-6" }, "六年级"),
        vue.createCommentVNode(" 下半部分 "),
        vue.createElementVNode("view", { class: "exam-bottom" }, [
          vue.createElementVNode("text", { class: "content-title" }, "记一次有趣的实验"),
          vue.createElementVNode("text", { class: "content-desc" }, "在科学课上或生活中，你一定做过一些有趣的实验，请选择一次印象最深的写下来...")
        ])
      ])
    ]);
  }
  const PagesCorrectCheckone = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__file", "D:/多媒体比赛/momo9.29/pages/correct/checkone.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation({
        ...options
      });
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, {
          styles,
          ...config
        }, (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$e = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      },
      onceRender: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 0,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 生成样式数据
      stylesObject() {
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transform = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform += line + ":" + styles[i] + ";";
        }
        return transform;
      },
      // 初始化动画条件
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config = {}) {
        if (!this.animation)
          return this;
        Object.keys(obj).forEach((key) => {
          const value = obj[key];
          if (typeof this.animation[key] === "function") {
            Array.isArray(value) ? this.animation[key](...value) : this.animation[key](value);
          }
        });
        this.animation.step(config);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.isShow = true;
        this.transform = this.styleInit(false).transform || "";
        this.opacity = this.styleInit(false).opacity || 0;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run(() => {
              this.transform = "";
              this.opacity = this.styleInit(false).opacity || 1;
              this.$emit("change", {
                detail: this.isShow
              });
            });
          }, 80);
        });
      },
      // 关闭过度动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = { transform: "", opacity: 1 };
        const buildStyle = (type2, mode) => {
          const value = this.animationType(type2)[mode];
          if (mode.startsWith("fade")) {
            styles.opacity = value;
          } else {
            styles.transform += value + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => buildStyle(type, mode));
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])), [
      [vue.vShow, $data.isShow]
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "D:/多媒体比赛/momo9.29/node_modules/@dcloudio/uni-ui/lib/uni-transition/uni-transition.vue"]]);
  const _sfc_main$d = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      // 开启动画
      animation: {
        type: Boolean,
        default: true
      },
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      type: {
        type: String,
        default: "center"
      },
      // maskClick
      isMaskClick: {
        type: Boolean,
        default: null
      },
      // TODO 2 个版本后废弃属性 ，使用 isMaskClick
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      },
      borderRadius: {
        type: String
      }
    },
    watch: {
      /**
       * 监听type类型
       */
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      /**
       * 监听遮罩是否可点击
       * @param {Object} val
       */
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      // H5 下禁止底部滚动
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          backgroundColor: "transparent",
          borderRadius: this.borderRadius || "0",
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: "top"
      };
    },
    computed: {
      getStyles() {
        let res = { backgroundColor: this.bg };
        if (this.borderRadius || "0") {
          res = Object.assign(res, { borderRadius: this.borderRadius });
        }
        return res;
      },
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    // TODO vue3
    unmounted() {
      this.setH5Visible();
    },
    activated() {
      this.setH5Visible(!this.showPopup);
    },
    deactivated() {
      this.setH5Visible(true);
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible(visible = true) {
      },
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      /**
       * 公用方法，遮罩层禁止点击
       */
      disableMask() {
        this.mkclick = false;
      },
      // TODO nvue 取消冒泡
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          return;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at node_modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue:310", "缺少类型：", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      /**
       * 顶部弹出样式处理
       */
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          this.showPoptrans();
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      /**
       * 底部弹出样式处理
       */
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      /**
       * 中间弹出样式处理
       */
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: this.borderRadius || "0"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0",
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          borderRadius: this.borderRadius || "0",
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPoptrans();
      },
      showPoptrans() {
        this.$nextTick(() => {
          this.showPopup = true;
          this.showTrans = true;
        });
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
      },
      [
        vue.createElementVNode(
          "view",
          {
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
            $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
              key: "1",
              name: "mask",
              "mode-class": "fade",
              styles: $data.maskClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createVNode(_component_uni_transition, {
              key: "2",
              "mode-class": $data.ani,
              name: "content",
              styles: $data.transClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
                    style: vue.normalizeStyle($options.getStyles),
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
          ],
          32
          /* NEED_HYDRATION */
        )
      ],
      2
      /* CLASS */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-7db519c7"], ["__file", "D:/多媒体比赛/momo9.29/node_modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.vue"]]);
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages2,
        locale
      ];
      locale = options[0];
      messages2 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  const zhHans = {
    "uni-load-more.contentdown": "上拉显示更多",
    "uni-load-more.contentrefresh": "正在加载...",
    "uni-load-more.contentnomore": "没有更多数据了"
  };
  const zhHant = {
    "uni-load-more.contentdown": "上拉顯示更多",
    "uni-load-more.contentrefresh": "正在加載...",
    "uni-load-more.contentnomore": "沒有更多數據了"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  let platform;
  setTimeout(() => {
    platform = uni.getSystemInfoSync().platform;
  }, 16);
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$c = {
    name: "UniLoadMore",
    emits: ["clickLoadMore"],
    props: {
      status: {
        // 上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
        type: String,
        default: "more"
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      iconType: {
        type: String,
        default: "auto"
      },
      iconSize: {
        type: Number,
        default: 24
      },
      color: {
        type: String,
        default: "#777777"
      },
      contentText: {
        type: Object,
        default() {
          return {
            contentdown: "",
            contentrefresh: "",
            contentnomore: ""
          };
        }
      },
      showText: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        webviewHide: false,
        platform,
        imgBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZVHb98LM+F5bHL8khA1iSeiyQBCRM+YGqKUnnJTDLGI0BGZlKDIU2MMglUiDApEZvSsZnQtBRJtKwQNKQMFYeRDR10WOLd8ljYXdh+v8v5fR3Od+797t1dnOnO/Ofce77z+J//+b/P+ZqtXbs2sJ9MJhNUV1cHJ06cCJo3bx7EPc2aNcvpy7pWrVoF+/fvDyoqKoI2bdoE9fX1F7TjN8a+EXBn/fkfvw942Tf+wYMHg9mzZwfjxo0LDhw4EPa1x2MbFw/fOGfPng1qa2tzcCkILsLDydq2bRsunpOTMM7TD/W/tZDZhPdeKD+yGxHhdu3aBV27dg3OnDlzMVANMheLAO3btw8KCwuDmpoaX5OxbgUIMEq7K8IcPnw4KCsrC/r37x8cP378/4cAXAB3vqSkJMuiDhTkw+XcuXNhOWbMmKBly5YhUT8xArhyFvP0BfwRsAuwxJZJsm/nzp2DTp06he/OU+cZ64K6o0ePBkOHDg2GDx8e6gEbJ5Q/NHNuAJQ1hgBeHUDlR7nVTkY8rQAvAi4z34vR/mPs1FoRsaCgIJThI0eOBC1atEiFGGV+5MiRoS45efJkqFjJFXV1dQuA012m2WcwTw98fy6CqBdsaiIO4CScrGPHjvk4odhavPquRtFWXEC25VgkREKOCh/qDSq+vn37htzD/mZTOmOc5U7zKzBPEedygWshcDyWvs30igAbU+6oyMgJBCFhwQE0fccxN60Ay9iebbjoDh06hMowjQxT4fXq1SskArmHZpkArvixp/kWzHdMeArExSJEaiXIjjRjRJ4DaAGWpibLzXN3Fm1vA5teBgh3j1Rv3bp1YgKwPdmf2p9zcyNYYgPKMfY0T5f5nNYdw158nJ8QawW4CLKwiOBSEgO/hok2eBydR+3dYH+PLxA5J8Vv0KBBwenTp0P2JWAx6+yFEBfs8lMY+y0SWMBNI9E4ThKi58VKTg3FQZS1RQF1cz27eC0QHMu+3E0SkUowjhVt5VdaWhp07949ZHv2Qd1EjDXM2cla1M0nl3GxAs3J9yREzyTdFVKVFOaE9qRA8GM0WebRuo9JGZKA7Mv2SeS/Z8+eoQ9BArMfFrLGo6jvxbhHbJZnKX2Rzz1O7QhJJ9Cs2ZMaWIyq/zhdeqPNfIoHd58clIQD+JSXl4dKlyIAuBdVXZwFVWKspSSoxE++h8x4k3uCnEhE4I5KwRiFWGOU0QWKiCYLbdoRMRKAu2kQ9vkfLU6dOhX06NEjlH+yMRZSinnuyWnYosVcji8CEA/6Cg2JF+IIUBqnGKUTCNwtwBN4f89RiK1R96DEgO2o0NDmtEdvVFdVVYV+P3UAPUEs6GFwV3PHmXkD4vh74iDFJysVI/MlaQhwKeBNTLYX5VuA8T4/gZxA4MRGFxDB6R7OmYPfyykGRJbyie+XnGYnQIC/coH9+vULiYrxrkL9ZA9+0ykaHIfEpM7ge8TiJ2CsHYwyMfafAF1yCGBHYIbCVDjDjKt7BeB51D+LgQa6OkG7IDYEEtvQ7lnXLKLtLdLuJBpE4gPUXcW2+PkZwOex+4cGDhwYDBkyRL7/HFcEwUGPo/8uWRUpYnfxGHco8HkewLHLyYmAawAPuIFZxhOpDfJQ8gbUv41yORAptMWBNr6oqMhWird5+u+iHmBb2nhjDV7HWBNQTgK8y11l5NetWzc5ULscAtSj7nbNI0skhWeUZCc0W4nyH/jO4Vz0u1IeYhbk4AiwM6tjxIWByHsoZ9qcIBPJd/y+DwPfBESOmCa/QF3WiZHucLlEDpNxcNhmheEOPgdQNx6/VZFQzFZ5TN08AHXQt2Ii3EdyFuUsPtTcGPhW5iMiCNELvz+Gdn9huG4HUJaW/w3g0wxV0XaG7arG2WeKiUWYM4Y7GO5ezshTARbbWGw/DvXkpp/ivVvE0JVoMxN4rpGzJMhE5Pl+xlATsDIqikP9F9D2z3h9nOksEUFhK+qO4rcPkoalMQ/HqJLIyb3F3JdjrCcw1yZ8joyJLR5gCo54etlag7qIoeNh1N1BRYj3DTFJ0elotxPlVzkGuYAmL0VSJVGAJA41c4Z6A3BzTLfn0HYwYKEI6CUAMzZEWvLsIcQOo1AmmyyM72nHJCfYsogflGV6jEk9vyQZXSuq6w4c16NsGcGZbwOPr+H1RkOk2LEzjNepxQkihHSCQ4ynAYNRx2zMKV92CQMWqj8J0BRE8EShxRFN6YrfCRhC0x3r/Zm4IbQCcmJoV0kMamllccR6FjHqUC5F2R/wS2dcymOlfAKOS4KmzQb5cpNC2MC7JhVn5wjXoJ44rYhLh8n0eXOCorJxa7POjbSlCGVczr34/RsAmrcvo9s+wGp3tzVhntxiXiJ4nvEYb4FJkf0O8HocAePmLvCxnL0AORraVekJk6TYjDabRVXfRE2lCN1h6ZQRN1+InUbsCpKwoBZHh0dODN9JBCUffItXxEavTQkUtnfTVAplCWL3JISz29h4NjotnuSsQKJCk8dF+kJR6RARjrqFVmfPnj3ZbK8cIJ0msd6jgHPGtfVTQ8VLmlvh4mct9sobRmPic0DyDQQnx/NlfYUgyz59+oScsH379pAwXABD32nTpoUHIToESeI5mnbE/UqDdyLcafEBf2MCqgC7NwxIbMREJQ0g4D4sfJwnD+AmRrII05cfMWJE+L1169bQr+fip06dGp4oJ83lmYd5wj/EmMa4TaHivo4EeCguYZBnkB5g2aWA69OIEnUHOaGysjIYMGBAMGnSpODYsWPZwCpFmm4lNq+4gSLQA7jcX8DwtjEyRC8wjabnXEx9kfWnTJkSJkAo90xpJVV+FmcVNeYAF5zWngS4C4O91MBxmAv8blLEpbjI5sz9MTdAhcgkCT1RO8mZkAjfiYpTEvStAS53Uw1vAiUGgZ3GpuQEYvoiBqlIan7kSDHnTwJQFNiPu0+5VxCVYhcZIjNrdXUDdp+Eq5AZ3Gkg8QAyVZRZIk4Tl4QAbF9cXJxNYZMAtAokgs4BrNxEpCtteXg7DDTMDKYNSuQdKsnJBek7HxewvxaosWxLYXtw+cJp18217wql4aKCfBNoEu0O5VU+PhctJ0YeXD4C6JQpyrlpSLTojpGGGN5YwNziChdIZLk4lvLcFJ9jMX3QdiImY9bmGQU+TRUL5CHITTRlgF8D9ouD1MfmLoEPl5xokIumZ2cfgMpHt47IW9N64Hsh7wQYYjyIugWuF5fCqYncXRd5vPMWyizzvhi/32+nvG0dZc9vR6fZOu0md5e+uC408FvKSIOZwXlGvxPv95izA2Vtvg1xKFWARI+vMX66HUhpQQb643uW1bSjuTWyw2SBvDrBvjFic1eGGlz5esq3ko9uSIlBRqPuFcCv8F4WIcN12nVaBd0SaYwI6PDDImR11JkqgHcPmQssjxIn6bUshygDFJUTxPMpHk+jfjPgupgdnYV2R/g7xSjtpah8RJBewhwf0gGK6XI92u4wXFEU40afJ4DN4h5LcAd+40HI3JgJecuT0c062W0i2hQJUTcxan3/CMW1PF2K6bbA+Daz4xRs1D3Br1Cm0OihKCqizW78/nXAF/G5TXrEcVzaNMH6CyMswqsAHqDyDLEyou8lwOXnKF8DjI6KjV3KzMBiXkDH8ij/H214J5A596ekrZ3F0zXlWeL7+P5eUrNo3/QwC15uxthuzidy7DzKRwEDaAViiDgKbTbz7CJnzo0bN7pIfIiid8SuPwn25o3QCmpnyjlZkyxPP8EomCJzrGb7GJMx7tNsq4MT2xMUYaiErZOluTzKsnz3gwCeCZyVRZJfYplNEokEjwrPtxlxjeYAk+F1F74VAzPxQRNYYdtpOUvWs8J1sGhBJMNsb7igN8plJs1eSmLIhLKE4rvaCX27gOhLpLOsIzJ7qn/i+wZzcvSOZ23/du8TZjwV8zHIXoP4R3ifBxiFz1dcVpa3aPntPE+c6TmIWE9EtcMmAcPdWAhYhAXxcLOQi9L1WhD1Sc8p1d2oL7XGiRKp8F4A2i8K/nfI+y/gsTDJ/YC/8+AD5Uh04KHiGl+cIFPnBDDrPMjwRGkLXyxO4VGbfQWnDH2v0bVWE3C9QOXlepbgjEfIJQI6XDG3z5ahD9cw2pS78ipB85wyScNTvsVzlzzhL8/jRrnmVjfFJK/m3m4nj9vbgQTguT8XZTjsm672R5uJKEaQmBI/c58gyus8ZDagLpEVSJBIyHp4jn++xqPV71OgQgJYEWOtZ/haxRtKmWOBu8xdBLftWltsY84zE6WIEy/eIOWL+BaayMx+KHtL7EAkqdNDLiEXmEMUHniedtJqg9HmZtfvt26vNi0BdG3Ft3g8ZOf7PAu59TxtzivLNIekyi+wD1i8CuUiD9FXAa8C+/xS3JPmZnomyc7H+fb4/Se0bk41Fel621r4cgVxbq91V4jVqwB7HTe2M7jgB+QWHavZkDRPmZcASoZEmBx6i75bGjPcMdL4/VKGFAGWZkGzPG0XAbdL9A81G5LOmUnC9hHKJeO7dcUMjblSl12867ElFTtaGl20xvvLGPdVz/8TVuU7y0x1PG7vtNg24oz9Uo/Z412++VFWI7Fcog9tu9Lm6gvRmIPv9x1xmQAu6RDkXtbOtlGEmpgD5Nvnyc0dcv0EE6cfdi1HmhMf9wDF3k3gtRvEedhxjpgfqPb9PU9iEJHnyOUA7bQUXh6kq/D7l2iTjWv7XOD530BDr8jIrus+srXjt4MzumJMHuTsBa63YKE1+RR5lBjEikCCnWKWiHdzOgKO+nRIBAF88za/IFmJ3eMZov4CYxGBabcpGL8EYx+SeMXJeRwHNsV/h+vdxeuhEpN3ZyNY78Gm2fknJxVGhyjixPiQvVkNzT1elD9Py/aTAL64Hb9vcYmC9zfdXdT/C1LeGbg4rnBaAihDFJH12W5ulfNCNe/xTsP3bp8ikzJs5BF+5PNfAQYAPaseTdsEcaYAAAAASUVORK5CYII="
      };
    },
    computed: {
      iconSnowWidth() {
        return (Math.floor(this.iconSize / 24) || 1) * 2;
      },
      contentdownText() {
        return this.contentText.contentdown || t("uni-load-more.contentdown");
      },
      contentrefreshText() {
        return this.contentText.contentrefresh || t("uni-load-more.contentrefresh");
      },
      contentnomoreText() {
        return this.contentText.contentnomore || t("uni-load-more.contentnomore");
      }
    },
    mounted() {
      var pages = getCurrentPages();
      var page = pages[pages.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
    },
    methods: {
      onClick() {
        this.$emit("clickLoadMore", {
          detail: {
            status: this.status
          }
        });
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-load-more",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.webviewHide && ($props.iconType === "circle" || $props.iconType === "auto" && $data.platform === "android") && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          class: "uni-load-more__img uni-load-more__img--android-MP"
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          )
        ],
        4
        /* STYLE */
      )) : !$data.webviewHide && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          class: "uni-load-more__img uni-load-more__img--ios-H5"
        },
        [
          vue.createElementVNode("image", {
            src: $data.imgBase64,
            mode: "widthFix"
          }, null, 8, ["src"])
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.showText ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 2,
          class: "uni-load-more__text",
          style: vue.normalizeStyle({ color: $props.color })
        },
        vue.toDisplayString($props.status === "more" ? $options.contentdownText : $props.status === "loading" ? $options.contentrefreshText : $options.contentnomoreText),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-2c1dd21f"], ["__file", "D:/多媒体比赛/momo9.29/node_modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.vue"]]);
  const _sfc_main$b = {
    __name: "edit",
    setup(__props, { expose: __expose }) {
      __expose();
      const formData = vue.reactive({
        nickname: "",
        grade: null,
        // 整数（3,4,5,6）
        mobile: "",
        // 11位数字字符串
        sex: "",
        // 'male' 或 'female'
        age: null,
        // 整数（0-120）
        avatar_url: ""
      });
      const gradeOptions = [
        { value: 3, label: "三年级" },
        { value: 4, label: "四年级" },
        { value: 5, label: "五年级" },
        { value: 6, label: "六年级" }
      ];
      const gradeIndex = vue.ref(0);
      const showGradePicker = vue.ref(false);
      const loading = vue.ref(false);
      const gradePopup = vue.ref(null);
      const gradeIndexArray = vue.computed(() => [gradeIndex.value]);
      const formatGrade = (gradeValue) => {
        const grade = gradeOptions.find((item) => item.value === gradeValue);
        return grade ? grade.label : "";
      };
      vue.watch(showGradePicker, (val) => {
        if (val) {
          gradePopup.value.open();
        } else {
          gradePopup.value.close();
        }
      });
      const onGradeChange = (e) => {
        const value = e.detail.value[0];
        gradeIndex.value = value;
      };
      const closeGradePicker = () => {
        showGradePicker.value = false;
      };
      const confirmGrade = () => {
        formData.grade = gradeOptions[gradeIndex.value].value;
        showGradePicker.value = false;
      };
      const goBack = () => {
        uni.navigateBack();
      };
      const changeAvatar = () => {
        uni.showToast({
          title: "头像上传功能开发中",
          icon: "none"
        });
      };
      const getProfileApi = () => {
        return new Promise((resolve, reject) => {
          const accessToken = uni.getStorageSync("accessToken");
          uni.request({
            url: "http://120.55.58.198:8000/api/users/profile/",
            // url: 'http://192.168.3.56:8000/api/users/profile/',
            method: "GET",
            header: {
              "Authorization": `Bearer ${accessToken}`,
              "Content-Type": "application/json"
            },
            success: (res) => {
              if (res.statusCode === 200 && res.data.status === "success") {
                resolve(res.data.data);
              } else {
                reject(res.data.message || "获取个人信息失败");
              }
            },
            fail: (err) => {
              reject("网络请求失败");
            }
          });
        });
      };
      const updateProfileApi = (profileData) => {
        return new Promise((resolve, reject) => {
          const accessToken = uni.getStorageSync("accessToken");
          uni.request({
            url: "http://120.55.58.198:8000/api/users/profile/",
            // url: 'http://192.168.3.56:8000/api/users/profile/',
            method: "POST",
            data: profileData,
            header: {
              "Authorization": `Bearer ${accessToken}`,
              "Content-Type": "application/json"
            },
            success: (res) => {
              if (res.statusCode === 200) {
                if (res.data.status === "success") {
                  resolve(true);
                } else {
                  if (res.data.errors) {
                    reject(res.data.errors);
                  } else {
                    reject(res.data.message || "更新失败");
                  }
                }
              } else if (res.statusCode === 401) {
                reject("请先登录或Token无效");
              } else {
                reject(`服务器错误: ${res.statusCode}`);
              }
            },
            fail: (err) => {
              reject("网络请求失败");
            }
          });
        });
      };
      const loadUserProfile = async () => {
        loading.value = true;
        try {
          const profileData = await getProfileApi();
          Object.assign(formData, {
            nickname: profileData.nickname || "",
            grade: profileData.grade ? parseInt(profileData.grade) : null,
            mobile: profileData.mobile || "",
            sex: profileData.sex || "",
            age: profileData.age ? parseInt(profileData.age) : null,
            avatar_url: profileData.avatar_url || ""
          });
          if (formData.grade) {
            const gradeIndexFound = gradeOptions.findIndex((item) => item.value === formData.grade);
            if (gradeIndexFound !== -1) {
              gradeIndex.value = gradeIndexFound;
            }
          }
        } catch (error) {
          formatAppLog("error", "at pages/profile/edit.vue:303", "加载用户资料失败:", error);
          uni.showToast({
            title: "加载失败",
            icon: "none"
          });
        } finally {
          loading.value = false;
        }
      };
      const saveProfile = async () => {
        var _a;
        if (formData.nickname && formData.nickname.length > 100) {
          uni.showToast({
            title: "昵称长度不能超过100个字符",
            icon: "none"
          });
          return;
        }
        if (formData.mobile && !/^1[3-9]\d{9}$/.test(formData.mobile)) {
          uni.showToast({
            title: "请输入正确的手机号",
            icon: "none"
          });
          return;
        }
        if (formData.age !== null && formData.age !== "") {
          const ageNum = parseInt(formData.age);
          if (isNaN(ageNum) || ageNum < 0 || ageNum > 120) {
            uni.showToast({
              title: "请输入有效的年龄(0-120)",
              icon: "none"
            });
            return;
          }
        }
        if (formData.sex && !["male", "female"].includes(formData.sex)) {
          uni.showToast({
            title: "请选择有效的性别",
            icon: "none"
          });
          return;
        }
        if (formData.grade && ![3, 4, 5, 6].includes(formData.grade)) {
          uni.showToast({
            title: "请选择有效的年级",
            icon: "none"
          });
          return;
        }
        loading.value = true;
        try {
          const submitData = {
            nickname: formData.nickname || "",
            mobile: formData.mobile || "",
            sex: formData.sex || "",
            grade: formData.grade ? parseInt(formData.grade) : null,
            age: formData.age !== null && formData.age !== "" ? parseInt(formData.age) : null
          };
          Object.keys(submitData).forEach((key) => {
            if (submitData[key] === null || submitData[key] === "") {
              delete submitData[key];
            }
          });
          await updateProfileApi(submitData);
          uni.showToast({
            title: "保存成功",
            icon: "success"
          });
          setTimeout(() => {
            uni.navigateBack();
          }, 1500);
        } catch (error) {
          formatAppLog("error", "at pages/profile/edit.vue:389", "保存个人信息失败:", error);
          if (typeof error === "object") {
            const firstError = (_a = Object.values(error)[0]) == null ? void 0 : _a[0];
            if (firstError) {
              uni.showToast({
                title: firstError,
                icon: "none"
              });
            }
          } else {
            uni.showToast({
              title: error || "保存失败",
              icon: "none"
            });
          }
        } finally {
          loading.value = false;
        }
      };
      vue.onMounted(() => {
        loadUserProfile();
      });
      const __returned__ = { formData, gradeOptions, gradeIndex, showGradePicker, loading, gradePopup, gradeIndexArray, formatGrade, onGradeChange, closeGradePicker, confirmGrade, goBack, changeAvatar, getProfileApi, updateProfileApi, loadUserProfile, saveProfile, ref: vue.ref, reactive: vue.reactive, watch: vue.watch, onMounted: vue.onMounted, computed: vue.computed };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_1$1);
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "edit-profile-page" }, [
      vue.createCommentVNode(" 顶部导航栏 "),
      vue.createElementVNode("view", { class: "nav-header" }, [
        vue.createElementVNode("view", {
          class: "nav-back",
          onClick: $setup.goBack
        }, [
          vue.createVNode(_component_uni_icons, {
            type: "arrow-left",
            size: "24",
            color: "#333333"
          })
        ]),
        vue.createElementVNode("text", { class: "nav-title" }, "个人信息"),
        vue.createElementVNode("view", {
          class: "nav-save",
          onClick: $setup.saveProfile
        }, [
          vue.createElementVNode("text", { class: "save-text" }, "保存")
        ])
      ]),
      vue.createCommentVNode(" 个人信息表单 "),
      vue.createElementVNode("view", { class: "profile-form" }, [
        vue.createCommentVNode(" 头像 "),
        vue.createElementVNode("view", { class: "form-item avatar-item" }, [
          vue.createElementVNode("text", { class: "item-label" }, "头像"),
          vue.createElementVNode("view", {
            class: "avatar-container",
            onClick: $setup.changeAvatar
          }, [
            vue.createElementVNode("image", {
              class: "avatar-img",
              src: $setup.formData.avatar_url || "/static/images/111.jpg",
              mode: "aspectFill"
            }, null, 8, ["src"]),
            vue.createElementVNode("view", { class: "avatar-edit" }, [
              vue.createVNode(_component_uni_icons, {
                type: "camera-filled",
                size: "16",
                color: "#FFFFFF"
              })
            ])
          ])
        ]),
        vue.createCommentVNode(" 分割线 "),
        vue.createElementVNode("view", { class: "divider" }),
        vue.createCommentVNode(" 昵称 "),
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("text", { class: "item-label" }, "昵称"),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              class: "item-input",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.formData.nickname = $event),
              placeholder: "未填写",
              "placeholder-style": "color: #999999;",
              maxlength: "100"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $setup.formData.nickname]
          ]),
          vue.createVNode(_component_uni_icons, {
            type: "right",
            size: "18",
            color: "#CCCCCC"
          })
        ]),
        vue.createCommentVNode(" 分割线 "),
        vue.createElementVNode("view", { class: "divider" }),
        vue.createCommentVNode(" 年级 "),
        vue.createElementVNode("view", {
          class: "form-item",
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.showGradePicker = true)
        }, [
          vue.createElementVNode("text", { class: "item-label" }, "年级"),
          vue.createElementVNode(
            "text",
            { class: "item-value" },
            vue.toDisplayString($setup.formatGrade($setup.formData.grade) || "请选择年级"),
            1
            /* TEXT */
          ),
          vue.createVNode(_component_uni_icons, {
            type: "right",
            size: "18",
            color: "#CCCCCC"
          })
        ]),
        vue.createCommentVNode(" 分割线 "),
        vue.createElementVNode("view", { class: "divider" }),
        vue.createCommentVNode(" 手机号 "),
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("text", { class: "item-label" }, "手机号"),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              class: "item-input",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.formData.mobile = $event),
              type: "number",
              placeholder: "请输入手机号",
              "placeholder-style": "color: #999999;",
              maxlength: "11"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $setup.formData.mobile]
          ])
        ]),
        vue.createCommentVNode(" 分割线 "),
        vue.createElementVNode("view", { class: "divider" }),
        vue.createCommentVNode(" 年龄 "),
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("text", { class: "item-label" }, "年龄"),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              class: "item-input",
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.formData.age = $event),
              type: "number",
              placeholder: "请输入年龄",
              "placeholder-style": "color: #999999;",
              maxlength: "3"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $setup.formData.age]
          ])
        ]),
        vue.createCommentVNode(" 分割线 "),
        vue.createElementVNode("view", { class: "divider" }),
        vue.createCommentVNode(" 性别 "),
        vue.createElementVNode("view", { class: "form-item gender-item" }, [
          vue.createElementVNode("text", { class: "item-label" }, "性别"),
          vue.createElementVNode("view", { class: "gender-options" }, [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["gender-option", { active: $setup.formData.sex === "male" }]),
                onClick: _cache[4] || (_cache[4] = ($event) => $setup.formData.sex = "male")
              },
              [
                vue.createElementVNode("text", null, "男")
              ],
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["gender-option", { active: $setup.formData.sex === "female" }]),
                onClick: _cache[5] || (_cache[5] = ($event) => $setup.formData.sex = "female")
              },
              [
                vue.createElementVNode("text", null, "女")
              ],
              2
              /* CLASS */
            )
          ])
        ])
      ]),
      vue.createCommentVNode(" 年级选择器 - 修复后的代码 "),
      vue.createVNode(
        _component_uni_popup,
        {
          ref: "gradePopup",
          type: "bottom",
          "safe-area": false
        },
        {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "picker-container" }, [
              vue.createElementVNode("view", { class: "picker-header" }, [
                vue.createElementVNode("text", {
                  class: "picker-cancel",
                  onClick: $setup.closeGradePicker
                }, "取消"),
                vue.createElementVNode("text", { class: "picker-title" }, "选择年级"),
                vue.createElementVNode("text", {
                  class: "picker-confirm",
                  onClick: $setup.confirmGrade
                }, "确定")
              ]),
              vue.createElementVNode("picker-view", {
                class: "picker-view",
                value: $setup.gradeIndexArray,
                onChange: $setup.onGradeChange,
                "indicator-style": "height: 80rpx;"
              }, [
                vue.createElementVNode("picker-view-column", null, [
                  (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList($setup.gradeOptions, (item, index) => {
                      return vue.createElementVNode(
                        "view",
                        {
                          class: "picker-item",
                          key: index
                        },
                        vue.toDisplayString(item.label),
                        1
                        /* TEXT */
                      );
                    }),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ])
              ], 40, ["value"])
            ])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      ),
      vue.createCommentVNode(" 加载提示 "),
      $setup.loading ? (vue.openBlock(), vue.createBlock(_component_uni_load_more, {
        key: 0,
        status: $setup.loading ? "loading" : "more"
      }, null, 8, ["status"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesProfileEdit = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-ead3e541"], ["__file", "D:/多媒体比赛/momo9.29/pages/profile/edit.vue"]]);
  const _imports_0$5 = "/static/知途logoo.png";
  const _sfc_main$a = {
    __name: "idiom_story",
    setup(__props, { expose: __expose }) {
      __expose();
      const onBack = () => {
        uni.navigateBack();
      };
      const goToExercise = () => {
      };
      const goToMoreWorks = () => {
      };
      const __returned__ = { onBack, goToExercise, goToMoreWorks };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("scroll-view", {
      class: "page-container",
      "scroll-y": ""
    }, [
      vue.createCommentVNode(" 导航栏区域 "),
      vue.createElementVNode("view", { class: "nav-bar" }, [
        vue.createElementVNode("view", {
          class: "back-btn",
          onClick: $setup.onBack
        }, [
          vue.createElementVNode("text", { class: "back-icon" }, "←")
        ]),
        vue.createElementVNode("view", { class: "nav-title" }, "成语故事详情"),
        vue.createElementVNode("view", { class: "nav-actions" }, [
          vue.createElementVNode("text", { class: "icon collect-icon" }, "☆"),
          vue.createElementVNode("text", { class: "icon share-icon" }, "⇱")
        ])
      ]),
      vue.createCommentVNode(" 成语标题区域 "),
      vue.createElementVNode("view", { class: "idiom-header" }, [
        vue.createElementVNode("view", { class: "idiom-name-container" }, [
          vue.createElementVNode("text", { class: "idiom-name" }, "守株待兔")
        ]),
        vue.createElementVNode("view", { class: "idiom-pinyin-container" }, [
          vue.createElementVNode("text", { class: "idiom-pinyin" }, "shǒu zhū dài tù")
        ]),
        vue.createElementVNode("view", { class: "tag-group" }, [
          vue.createElementVNode("view", { class: "tag-item" }, "寓言故事"),
          vue.createElementVNode("view", { class: "tag-item" }, "成语"),
          vue.createElementVNode("view", { class: "tag-item" }, "写事作文可用")
        ])
      ]),
      vue.createCommentVNode(" 成语解释区域 "),
      vue.createElementVNode("view", { class: "section" }, [
        vue.createElementVNode("view", { class: "section-title" }, [
          vue.createElementVNode("view", { class: "title-content" }, [
            vue.createElementVNode("text", { class: "title-icon" }, "📖"),
            vue.createElementVNode("text", { class: "title-text" }, "成语解释")
          ])
        ]),
        vue.createElementVNode("text", { class: "section-content" }, " 株：露出地面的树根。比喻不主动努力，而存万一的侥幸心理，希望得到意外的收获。也比喻死守狭隘的经验，不知变通。 ")
      ]),
      vue.createCommentVNode(" 成语故事区域 "),
      vue.createElementVNode("view", { class: "section" }, [
        vue.createElementVNode("view", { class: "section-title" }, [
          vue.createElementVNode("view", { class: "title-content" }, [
            vue.createElementVNode("text", { class: "title-icon" }, "📜"),
            vue.createElementVNode("text", { class: "title-text" }, "成语故事")
          ])
        ]),
        vue.createElementVNode("text", { class: "section-content" }, " 从前，宋国有个农夫。一天，他在田里干活，突然看见一只兔子飞快地跑过来，一下子撞在田边的树桩上，折断了脖子死了。 "),
        vue.createElementVNode("text", { class: "section-content" }, ' 农夫很高兴，他没花一点力气就捡到了一只兔子。他想："要是每天都能捡到一只兔子，那该多好啊！" '),
        vue.createElementVNode("text", { class: "section-content" }, " 从那以后，农夫再也不肯下田干活了。他天天守在树桩旁边，等着再有兔子撞过来。可是，日子一天一天过去了，再也没有兔子撞在树桩上。 "),
        vue.createElementVNode("text", { class: "section-content" }, " 而他的田地因为没人耕种，也渐渐荒芜了。人们都嘲笑他太傻了。 ")
      ]),
      vue.createCommentVNode(" 成语出处区域 "),
      vue.createElementVNode("view", { class: "section" }, [
        vue.createElementVNode("view", { class: "section-title" }, [
          vue.createElementVNode("view", { class: "title-content" }, [
            vue.createElementVNode("text", { class: "title-icon" }, "🔖"),
            vue.createElementVNode("text", { class: "title-text" }, "成语出处")
          ])
        ]),
        vue.createElementVNode("view", { class: "quote-box" }, [
          vue.createElementVNode("text", { class: "quote-content" }, ' "宋人有耕田者。田中有株，兔走触株，折颈而死。因释其耒而守株，冀复得兔。兔不可复得，而身为宋国笑。" '),
          vue.createElementVNode("text", { class: "quote-source" }, "——《韩非子·五蠹》")
        ])
      ]),
      vue.createCommentVNode(" 作文中使用示例区域 "),
      vue.createElementVNode("view", { class: "section" }, [
        vue.createElementVNode("view", { class: "section-title" }, [
          vue.createElementVNode("view", { class: "title-content" }, [
            vue.createElementVNode("text", { class: "title-icon" }, "✏️"),
            vue.createElementVNode("text", { class: "title-text" }, "作文中使用示例")
          ])
        ]),
        vue.createElementVNode("view", { class: "example-item" }, [
          vue.createElementVNode("text", { class: "example-title" }, "例1：写事作文《一次失败的考试》"),
          vue.createElementVNode("text", { class: "example-content" }, " 上次考试我侥幸考了满分，就以为不用努力也能保持好成绩，整天玩耍不学习。这次考试成绩一出来，我才明白，学习不能守株待兔，只有付出持续的努力，才能取得好成绩。 ")
        ]),
        vue.createElementVNode("view", { class: "example-item" }, [
          vue.createElementVNode("text", { class: "example-title" }, "例2：议论文《成功靠什么》"),
          vue.createElementVNode("text", { class: "example-content" }, " 成功从来不是偶然的，它需要我们脚踏实地，一步一个脚印地去奋斗。那些想通过守株待兔获得成功的人，最终只会一事无成。 ")
        ])
      ]),
      vue.createCommentVNode(" 写作技巧提示区域 "),
      vue.createElementVNode("view", { class: "section" }, [
        vue.createElementVNode("view", { class: "section-title" }, [
          vue.createElementVNode("view", { class: "title-content" }, [
            vue.createElementVNode("text", { class: "title-icon" }, "💡"),
            vue.createElementVNode("text", { class: "title-text" }, "写作技巧提示")
          ])
        ]),
        vue.createElementVNode("view", { class: "tip-box" }, [
          vue.createElementVNode("text", { class: "tip-title" }, "如何在作文中运用成语故事？"),
          vue.createElementVNode("text", { class: "tip-content" }, "1. 引用成语时，要先理解成语的意思和用法，避免用错"),
          vue.createElementVNode("text", { class: "tip-content" }, "2. 可以在议论文中用成语故事作为论据，增强说服力"),
          vue.createElementVNode("text", { class: "tip-content" }, "3. 在记叙文结尾，可以用成语总结道理，点明主题"),
          vue.createElementVNode("text", { class: "tip-content" }, "4. 使用成语后，可以简单解释一下，让读者更清楚你的想法")
        ])
      ]),
      vue.createCommentVNode(" 近义词拓展区域 "),
      vue.createElementVNode("view", { class: "section" }, [
        vue.createElementVNode("view", { class: "section-title" }, [
          vue.createElementVNode("view", { class: "title-content" }, [
            vue.createElementVNode("text", { class: "title-icon" }, "🔍"),
            vue.createElementVNode("text", { class: "title-text" }, "近义词拓展")
          ])
        ]),
        vue.createElementVNode("view", { class: "synonym-group" }, [
          vue.createElementVNode("view", { class: "synonym-item" }, "刻舟求剑"),
          vue.createElementVNode("view", { class: "synonym-item" }, "坐享其成"),
          vue.createElementVNode("view", { class: "synonym-item" }, "不劳而获"),
          vue.createElementVNode("view", { class: "synonym-item" }, "墨守成规")
        ])
      ]),
      vue.createCommentVNode(" 相关写作练习区域 "),
      vue.createElementVNode("view", { class: "section" }, [
        vue.createElementVNode("view", { class: "section-title" }, [
          vue.createElementVNode("view", { class: "title-content" }, [
            vue.createElementVNode("text", { class: "title-icon" }, "📝"),
            vue.createElementVNode("text", { class: "title-text" }, "相关写作练习")
          ])
        ]),
        vue.createElementVNode("view", { class: "exercise-item" }, [
          vue.createElementVNode("text", { class: "exercise-title" }, "《由“守株待兔”想到的》"),
          vue.createElementVNode("text", { class: "exercise-desc" }, "写一篇300字左右的议论文，谈谈你从这个成语故事中学到的道理"),
          vue.createElementVNode("text", {
            class: "exercise-btn",
            onClick: $setup.goToExercise
          }, "开始练习")
        ]),
        vue.createElementVNode("view", { class: "exercise-item" }, [
          vue.createElementVNode("text", { class: "exercise-title" }, "改写《守株待兔》"),
          vue.createElementVNode("text", { class: "exercise-desc" }, "发挥想象，给守株待兔的故事增加新的情节，写成一篇400字左右的记叙文"),
          vue.createElementVNode("text", {
            class: "exercise-btn",
            onClick: $setup.goToExercise
          }, "开始练习")
        ])
      ]),
      vue.createCommentVNode(" 同学优秀作品区域 "),
      vue.createElementVNode("view", { class: "section" }, [
        vue.createElementVNode("view", { class: "section-title" }, [
          vue.createElementVNode("view", { class: "title-content" }, [
            vue.createElementVNode("text", { class: "title-icon" }, "👥"),
            vue.createElementVNode("text", { class: "title-text" }, "同学优秀作品")
          ]),
          vue.createElementVNode("text", {
            class: "more-icon",
            onClick: $setup.goToMoreWorks
          }, ">")
        ]),
        vue.createElementVNode("view", { class: "work-item" }, [
          vue.createElementVNode("text", { class: "work-title" }, "《不要做守株待兔的人》"),
          vue.createElementVNode("text", { class: "work-content" }, "读了《守株待兔》这个故事，我明白了一个道理：做任何事情都不能心存侥幸，只有通过自己的努力，才能获得成功..."),
          vue.createElementVNode("view", { class: "work-author" }, [
            vue.createElementVNode("image", {
              class: "author-avatar",
              src: _imports_0$5,
              mode: "aspectFill"
            }),
            vue.createElementVNode("text", { class: "author-info" }, "张强 | 五年级")
          ])
        ])
      ])
    ]);
  }
  const PagesCorrectIdiomStory = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-40750c64"], ["__file", "D:/多媒体比赛/momo9.29/pages/correct/idiom_story.vue"]]);
  const _imports_0$4 = "/static/images/guide1.png";
  const _imports_1 = "/static/images/guide2.png";
  const _imports_2 = "/static/images/guide3.png";
  const _imports_3 = "/static/images/guide4.png";
  const _sfc_main$9 = {
    __name: "guidance",
    setup(__props, { expose: __expose }) {
      __expose();
      const current = vue.ref(0);
      const onChange = (e) => {
        current.value = e.detail.current;
      };
      const onSkip = () => {
        uni.switchTab({
          url: "/pages/home/index"
        });
      };
      const onExperience = () => {
        uni.switchTab({
          url: "/pages/home/index"
        });
      };
      const __returned__ = { current, onChange, onSkip, onExperience, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 轮播组件 "),
      vue.createElementVNode("swiper", {
        class: "swiper",
        autoplay: false,
        current: $setup.current,
        onChange: $setup.onChange,
        "indicator-dots": "",
        "indicator-color": "#CCCCCC",
        "indicator-active-color": "#333333"
      }, [
        vue.createCommentVNode(" 第一张引导页 "),
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode("view", { class: "slide" }, [
            vue.createCommentVNode(" 中间图片 "),
            vue.createElementVNode("image", {
              class: "slide-image1",
              src: _imports_0$4,
              mode: "widthFix",
              alt: "智能批改功能展示"
            }),
            vue.createCommentVNode(" 文字说明 "),
            vue.createElementVNode("view", { class: "text-container" }, [
              vue.createElementVNode("text", { class: "title" }, "智能批改"),
              vue.createElementVNode("text", { class: "subtitle" }, "智能识别，全面批改")
            ])
          ])
        ]),
        vue.createCommentVNode(" 第二张引导页 "),
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode("view", { class: "slide" }, [
            vue.createElementVNode("image", {
              class: "slide-image2",
              src: _imports_1,
              mode: "widthFix",
              alt: "精准推送功能展示"
            }),
            vue.createElementVNode("view", { class: "text-container" }, [
              vue.createElementVNode("text", { class: "title" }, "精准推送"),
              vue.createElementVNode("text", { class: "subtitle" }, "每日素材，有效推新")
            ])
          ])
        ]),
        vue.createCommentVNode(" 第三张引导页 "),
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode("view", { class: "slide" }, [
            vue.createElementVNode("image", {
              class: "slide-image3",
              src: _imports_2,
              mode: "widthFix",
              alt: "习题专攻功能展示"
            }),
            vue.createElementVNode("view", { class: "text-container" }, [
              vue.createElementVNode("text", { class: "title" }, "习题专攻"),
              vue.createElementVNode("text", { class: "subtitle" }, "精准捕捉，专攻弱势")
            ])
          ])
        ]),
        vue.createCommentVNode(" 第四张引导页（移到这里，与其他swiper-item同级） "),
        vue.createElementVNode("swiper-item", null, [
          vue.createElementVNode("view", { class: "slide" }, [
            vue.createElementVNode("image", {
              class: "slide-image4",
              src: _imports_3,
              mode: "widthFix",
              alt: "写作画像功能展示"
            }),
            vue.createElementVNode("view", { class: "text-container" }, [
              vue.createElementVNode("text", { class: "title" }, "写作画像"),
              vue.createElementVNode("text", { class: "subtitle" }, "伴读教育，熟知风格")
            ]),
            vue.createCommentVNode(" 立即体验按钮 "),
            vue.createElementVNode("button", {
              class: "experience-btn",
              onClick: $setup.onExperience
            }, " 立即体验 ")
          ])
        ])
      ], 40, ["current"]),
      vue.createCommentVNode(" 跳过按钮 "),
      $setup.current < 3 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "skip-btn",
        onClick: $setup.onSkip
      }, " 跳过 ")) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesGuidanceGuidance = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-2fe0222b"], ["__file", "D:/多媒体比赛/momo9.29/pages/guidance/guidance.vue"]]);
  const _sfc_main$8 = {
    __name: "correct_result",
    setup(__props, { expose: __expose }) {
      __expose();
      const processMessageContent = (content) => {
        if (!content)
          return "";
        let processedContent = String(content);
        if (processedContent.trim().startsWith("{ response：") && processedContent.trim().endsWith("}")) {
          processedContent = processedContent.trim().replace(/^\{\s*response：["']?/, "").replace(/["']?\s*\}$/, "");
        }
        processedContent = processedContent.replace(/\/n/g, "<br>");
        processedContent = processedContent.replace(/【[^】]*】/g, "");
        processedContent = processedContent.replace(/([^<]|^)([^>\n])\s*([0-9]+\.)/, "$1$2<br>$3");
        processedContent = processedContent.replace(/([^<>])\n([^<>])/g, "$1<br>$2");
        return processedContent;
      };
      const tabList = vue.ref([
        { name: "作文全篇" },
        { name: "综合评价" },
        { name: "分句点评" },
        { name: "润色结果" },
        { name: "推荐习题" }
      ]);
      const currentTab = vue.ref(0);
      const essayTitle = vue.ref("");
      const essayContent = vue.ref("");
      const totalEvaluation = vue.ref("");
      const themeAnalysis = vue.ref("");
      const structureAnalysis = vue.ref("");
      const contentAnalysis = vue.ref("");
      const expressionAnalysis = vue.ref("");
      const learningSummary = vue.ref("");
      const learningSuggestionsList = vue.ref([]);
      const totalScore = vue.ref(0);
      const loading = vue.ref(false);
      const hasError = vue.ref(false);
      const errorMsg = vue.ref("");
      const handleReupload = () => {
        uni.switchTab({
          url: "/pages/correct/index",
          success: () => {
            uni.showToast({ title: "请重新上传文章", icon: "none" });
          },
          fail: (err) => {
            formatAppLog("error", "at pages/correct/correct_result.vue:560", "跳转失败:", err);
            uni.showToast({ title: "跳转失败，请重试", icon: "none" });
          }
        });
      };
      const hasEssayContent = vue.computed(() => {
        const hasValidText = !!essayContent.value && essayContent.value.trim() !== "";
        const hasValidEvaluation = [
          totalEvaluation.value,
          themeAnalysis.value,
          structureAnalysis.value,
          contentAnalysis.value,
          expressionAnalysis.value
        ].some((item) => !!item && item.trim() !== "");
        return hasValidText && hasValidEvaluation;
      });
      const submitId = vue.ref("");
      const switchTab = (index) => {
        currentTab.value = index;
      };
      const fetchCorrectionResult = async () => {
        formatAppLog("log", "at pages/correct/correct_result.vue:594", "发起查询，submitId:", submitId.value);
        loading.value = true;
        hasError.value = false;
        errorMsg.value = "";
        try {
          if (!submitId.value) {
            throw new Error("缺少提交ID");
          }
          const accessToken = uni.getStorageSync("accessToken");
          const res = await uni.request({
            url: "http://120.55.58.198:8000/api/ai_use/haoweilai_ai",
            // url: 'http://192.168.3.56:8000/api/ai_use/haoweilai_ai',
            method: "POST",
            header: {
              "Content-Type": "application/json",
              "Authorization": accessToken ? `Bearer ${accessToken}` : ""
            },
            data: {
              submit_id: submitId.value
            },
            timeout: 15e3
          });
          if (res.statusCode !== 200) {
            throw new Error(`请求失败，状态码: ${res.statusCode}`);
          }
          formatAppLog("log", "at pages/correct/correct_result.vue:624", "接口响应数据:", res.data);
          if (res.data.status === "error") {
            throw new Error(res.data.message || "获取结果失败");
          }
          const data = res.data.data || {};
          formatAppLog("log", "at pages/correct/correct_result.vue:630", "后端返回的业务数据:", data);
          essayTitle.value = data.essay_title || "";
          const rawContent = data.essay_text || "";
          const paragraphs = rawContent.split(/\r\n|\r|\n/).filter((paragraph) => paragraph.trim() !== "");
          const formattedContent = paragraphs.map((paragraph) => {
            return `<p style="text-indent: 2em;">${paragraph}</p>`;
          }).join("");
          essayContent.value = formattedContent;
          totalEvaluation.value = data.total_comment || "";
          themeAnalysis.value = data.theme_comment || "";
          structureAnalysis.value = data.organization_comment || "";
          contentAnalysis.value = data.content_comment || "";
          expressionAnalysis.value = data.expression_comment || "";
          const totalSuggestionStr = data.total_suggestion || "";
          const summaryEndIndex = totalSuggestionStr.indexOf("：");
          const summary = summaryEndIndex !== -1 ? totalSuggestionStr.slice(0, summaryEndIndex + 1) : totalSuggestionStr;
          const suggestionsPart = summaryEndIndex !== -1 ? totalSuggestionStr.slice(summaryEndIndex + 1) : "";
          const suggestionsArray = suggestionsPart.split(/；|。/).map((item) => item.trim().replace(/^\d+\./, "")).filter((item) => item);
          learningSummary.value = summary;
          learningSuggestionsList.value = suggestionsArray;
          totalScore.value = Number(data.total_score) || 0;
        } catch (error) {
          hasError.value = true;
          errorMsg.value = error.message;
          uni.showToast({ title: error.message, icon: "none" });
          formatAppLog("log", "at pages/correct/correct_result.vue:672", "接口请求出错:", error);
        } finally {
          loading.value = false;
        }
      };
      vue.onMounted(() => {
        const getSubmitId = () => {
          var _a;
          const pages = getCurrentPages();
          if (pages.length === 0)
            return "";
          const currentPage = pages[pages.length - 1];
          const fullPath = currentPage.$page.fullPath || "";
          if (fullPath.includes("?")) {
            const queryString = fullPath.split("?")[1];
            const params = queryString.split("&");
            for (const param of params) {
              const [key, value] = param.split("=");
              if (key === "submitId") {
                return decodeURIComponent(value || "");
              }
            }
          }
          return ((_a = currentPage.options) == null ? void 0 : _a.submitId) || "";
        };
        const refreshSubmitId = () => {
          const newSubmitId = getSubmitId();
          submitId.value = newSubmitId;
          formatAppLog("log", "at pages/correct/correct_result.vue:705", "获取到的submitId:", newSubmitId);
          if (submitId.value) {
            fetchCorrectionResult();
          } else {
            hasError.value = true;
            errorMsg.value = "未找到提交记录";
          }
        };
        refreshSubmitId();
        setTimeout(refreshSubmitId, 300);
      });
      const handleManualModify = () => {
        formatAppLog("log", "at pages/correct/correct_result.vue:721", "触发手动修改逻辑");
      };
      const buttonPosition = vue.ref({ x: 305, y: 300 });
      const isDragging = vue.ref(false);
      const startPosition = vue.ref({ x: 0, y: 0 });
      const showAIFloatWindow = vue.ref(false);
      const showPasswordModal = vue.ref(false);
      const messages2 = vue.ref([]);
      const inputMessage = vue.ref("");
      const isLoading = vue.ref(false);
      const password = vue.ref("");
      const errorMessage = vue.ref("");
      const chatContainer = vue.ref(null);
      const handleTouchStart = (e) => {
        isDragging.value = true;
        startPosition.value = {
          x: e.touches[0].clientX - buttonPosition.value.x,
          y: e.touches[0].clientY - buttonPosition.value.y
        };
      };
      const handleTouchMove = (e) => {
        if (isDragging.value) {
          const x = e.touches[0].clientX - startPosition.value.x;
          const y = e.touches[0].clientY - startPosition.value.y;
          const screenWidth = uni.getSystemInfoSync().windowWidth;
          const screenHeight = uni.getSystemInfoSync().windowHeight;
          const buttonSize = 90;
          buttonPosition.value.x = Math.max(0, Math.min(x, screenWidth - buttonSize));
          buttonPosition.value.y = Math.max(0, Math.min(y, screenHeight - buttonSize));
        }
      };
      const handleTouchEnd = () => {
        isDragging.value = false;
      };
      const handleAIClick = () => {
        if (isDragging.value)
          return;
        showPasswordModal.value = true;
        password.value = "";
        errorMessage.value = "";
        uni.removeStorageSync("doubaoToken");
        uni.removeStorageSync("doubaoTokenExpires");
      };
      const closeAIFloatWindow = () => {
        showAIFloatWindow.value = false;
      };
      const closePasswordModal = () => {
        showPasswordModal.value = false;
        password.value = "";
        errorMessage.value = "";
      };
      const verifyPassword = async () => {
        if (!password.value) {
          errorMessage.value = "请输入二级密码";
          return;
        }
        try {
          const res = await request({
            url: "/api/ai_use/doubao_talk",
            method: "POST",
            data: {
              action: "verify_password",
              secondary_password: password.value
            }
          });
          if (res.status === "success") {
            uni.setStorageSync("doubaoToken", res.data.token);
            uni.setStorageSync("doubaoTokenExpires", res.data.expires_at);
            closePasswordModal();
            showAIFloatWindow.value = true;
            messages2.value.push({ sender: "ai", content: "您好！我是AI作文辅导助手，请问有什么可以帮助您辅导孩子写作文的问题？" });
            vue.nextTick(() => {
              scrollToBottom();
            });
          } else {
            const responseData = res.data || res;
            if (responseData.message === "请先设置二级密码") {
              uni.showModal({
                title: "提示",
                content: "您还未设置二级密码，请先前往设置页面设置二级密码",
                confirmText: "去设置",
                cancelText: "取消",
                success: (modalRes) => {
                  if (modalRes.confirm) {
                    uni.navigateTo({ url: "/pages/profile/settings" });
                  }
                }
              });
            } else {
              errorMessage.value = "二级密码错误";
            }
          }
        } catch (error) {
          formatAppLog("error", "at pages/correct/correct_result.vue:849", "密码验证失败:", error);
          errorMessage.value = "验证失败，请稍后重试";
        }
      };
      const scrollToBottom = () => {
        vue.nextTick(() => {
          if (chatContainer.value) {
            chatContainer.value.scrollToEnd({ animated: true });
          }
        });
      };
      const sendMessage = async () => {
        const message = inputMessage.value.trim();
        if (!message || isLoading.value)
          return;
        messages2.value.push({ sender: "user", content: message });
        inputMessage.value = "";
        scrollToBottom();
        isLoading.value = true;
        try {
          const doubaoToken = uni.getStorageSync("doubaoToken");
          const expiresAt = uni.getStorageSync("doubaoTokenExpires");
          const isTokenExpired2 = !doubaoToken || !expiresAt || /* @__PURE__ */ new Date() > new Date(expiresAt);
          const requestData = {
            action: "talk",
            basic_text_segment: "请基于小学作文水平，提供合适的辅导建议：",
            user_talk: message
          };
          if (isTokenExpired2) {
            throw new Error("请先完成二级密码验证");
          }
          const res = await request({
            url: "/api/ai_use/doubao_talk",
            method: "POST",
            data: requestData
          });
          if (res.status === "success") {
            let responseContent = res.data.response;
            if (typeof responseContent === "object" && responseContent !== null) {
              responseContent = responseContent.response || JSON.stringify(responseContent);
            }
            messages2.value.push({ sender: "ai", content: responseContent });
            if (res.data.token && res.data.expires_at) {
              uni.setStorageSync("doubaoToken", res.data.token);
              uni.setStorageSync("doubaoTokenExpires", res.data.expires_at);
            }
          } else {
            messages2.value.push({ sender: "ai", content: res.message || "抱歉，我暂时无法回答这个问题，请稍后再试。" });
            if (res.message && (res.message.includes("令牌") || res.message.includes("密码"))) {
              showPasswordModal.value = true;
              password.value = "";
            }
          }
        } catch (error) {
          formatAppLog("error", "at pages/correct/correct_result.vue:931", "AI回复失败:", error);
          messages2.value.push({ sender: "ai", content: "抱歉，我暂时无法回答这个问题，请稍后再试。" });
        } finally {
          isLoading.value = false;
          scrollToBottom();
        }
      };
      vue.onUnmounted(() => {
      });
      const __returned__ = { processMessageContent, tabList, currentTab, essayTitle, essayContent, totalEvaluation, themeAnalysis, structureAnalysis, contentAnalysis, expressionAnalysis, learningSummary, learningSuggestionsList, totalScore, loading, hasError, errorMsg, handleReupload, hasEssayContent, submitId, switchTab, fetchCorrectionResult, handleManualModify, buttonPosition, isDragging, startPosition, showAIFloatWindow, showPasswordModal, messages: messages2, inputMessage, isLoading, password, errorMessage, chatContainer, handleTouchStart, handleTouchMove, handleTouchEnd, handleAIClick, closeAIFloatWindow, closePasswordModal, verifyPassword, scrollToBottom, sendMessage, ref: vue.ref, onMounted: vue.onMounted, computed: vue.computed, onUnmounted: vue.onUnmounted, nextTick: vue.nextTick, get request() {
        return request;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "container" }, [
          vue.createCommentVNode(" 加载态 "),
          $setup.loading ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "loading-overlay"
          }, [
            vue.createVNode(_component_uni_icons, {
              type: "spinner",
              size: "60rpx",
              color: "#007AFF",
              animation: "spin"
            }),
            vue.createElementVNode("text", { class: "loading-text" }, "正在获取批改结果...")
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" 错误态 "),
          $setup.hasError && !$setup.loading ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "error-container"
          }, [
            vue.createVNode(_component_uni_icons, {
              type: "warn",
              size: "50rpx",
              color: "#FF5722"
            }),
            vue.createElementVNode(
              "text",
              { class: "error-text" },
              vue.toDisplayString($setup.errorMsg),
              1
              /* TEXT */
            ),
            vue.createElementVNode("button", {
              class: "retry-btn",
              onClick: $setup.fetchCorrectionResult
            }, "重新加载")
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" 内容态（请求成功） "),
          !$setup.loading && !$setup.hasError ? (vue.openBlock(), vue.createElementBlock("view", { key: 2 }, [
            vue.createCommentVNode(" 导航栏 - 横向滚动 "),
            vue.createElementVNode("view", { class: "tab-container" }, [
              vue.createElementVNode("scroll-view", {
                class: "tab-scroll",
                "scroll-x": "",
                "show-scrollbar": "false",
                "scroll-with-animation": true
              }, [
                vue.createElementVNode("view", { class: "tab-bar" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList($setup.tabList, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        key: index,
                        class: vue.normalizeClass(["tab-item", { active: $setup.currentTab === index }]),
                        onClick: ($event) => $setup.switchTab(index)
                      }, vue.toDisplayString(item.name), 11, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ])
            ]),
            vue.createCommentVNode(" 内容区域 - 统一外层容器 "),
            vue.createElementVNode("view", { class: "content-wrap" }, [
              vue.createCommentVNode(" 作文全篇 "),
              vue.withDirectives(vue.createElementVNode(
                "view",
                { class: "essay-section" },
                [
                  vue.createElementVNode("view", { class: "section-header" }, [
                    vue.createElementVNode("view", { class: "header-icon" }, [
                      vue.createElementVNode("text", { class: "header-icon-inner" }, "📄")
                    ]),
                    vue.createElementVNode("view", { class: "header-title" }, "作文原文")
                  ]),
                  vue.createCommentVNode(" 作文全篇 -> essay-section 内的题目区域 "),
                  $setup.essayTitle ? (vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      key: 0,
                      class: "essay-title"
                    },
                    vue.toDisplayString($setup.essayTitle),
                    1
                    /* TEXT */
                  )) : (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    { key: 1 },
                    [
                      vue.createCommentVNode(" 无题目时显示提示 "),
                      vue.createElementVNode("view", { class: "essay-title-empty" }, " 未获取到作文题目 ")
                    ],
                    2112
                    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                  )),
                  vue.createCommentVNode(" 作文内容：判断是否有内容，显示原文/空提示 "),
                  vue.createElementVNode("view", { class: "essay-card" }, [
                    vue.createCommentVNode(" 有文章内容：显示原文和修改按钮 "),
                    $setup.hasEssayContent ? (vue.openBlock(), vue.createElementBlock(
                      vue.Fragment,
                      { key: 0 },
                      [
                        vue.createElementVNode("view", {
                          class: "essay-content",
                          innerHTML: $setup.essayContent
                        }, null, 8, ["innerHTML"]),
                        vue.createElementVNode("text", {
                          class: "modify-btn",
                          onClick: $setup.handleManualModify
                        }, [
                          vue.createVNode(_component_uni_icons, {
                            type: "edit",
                            size: "22rpx",
                            color: "#007AFF",
                            class: "btn-icon"
                          }),
                          vue.createTextVNode(" 识别有误？手动修改 ")
                        ])
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : (vue.openBlock(), vue.createElementBlock(
                      vue.Fragment,
                      { key: 1 },
                      [
                        vue.createCommentVNode(" 无文章内容：显示空提示 "),
                        vue.createElementVNode("view", { class: "essay-empty-tip" }, [
                          vue.createVNode(_component_uni_icons, {
                            type: "empty",
                            size: "60rpx",
                            color: "#ccc"
                          }),
                          vue.createElementVNode("text", { class: "empty-text" }, "未获取到文章内容")
                        ])
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    ))
                  ])
                ],
                512
                /* NEED_PATCH */
              ), [
                [vue.vShow, $setup.currentTab === 0]
              ]),
              vue.createCommentVNode(" 综合评价 "),
              vue.withDirectives(vue.createElementVNode(
                "view",
                { class: "eval-section" },
                [
                  vue.createElementVNode("view", { class: "section-header" }, [
                    vue.createElementVNode("view", { class: "header-icon" }, [
                      vue.createElementVNode("text", { class: "header-icon-inner" }, "⭐")
                    ]),
                    vue.createElementVNode("view", { class: "header-title" }, "作文综合评价")
                  ]),
                  vue.createCommentVNode(" 评价卡片容器 "),
                  vue.createCommentVNode(" 有文章内容：显示评价卡片 "),
                  $setup.hasEssayContent ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "eval-card-group"
                  }, [
                    vue.createCommentVNode(" 总评卡片（添加评分和星星） "),
                    vue.createElementVNode("view", {
                      class: "eval-card eval-card-full",
                      style: { "--card-color": "#42b983" }
                    }, [
                      vue.createElementVNode("view", { class: "eval-card-header1" }, [
                        vue.createCommentVNode(" 总评标题和图标 "),
                        vue.createElementVNode("view", { class: "header-left" }, [
                          vue.createElementVNode("text", { class: "eval-icon" }, "💬"),
                          vue.createElementVNode("view", { class: "header-text" }, "总评")
                        ]),
                        vue.createCommentVNode(" 评分和星星（右上角） "),
                        vue.createElementVNode("view", { class: "header-rating" }, [
                          vue.createElementVNode(
                            "text",
                            { class: "rating-value" },
                            vue.toDisplayString($setup.totalScore) + "分",
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode("view", { class: "stars-container" }, [
                            (vue.openBlock(), vue.createElementBlock(
                              vue.Fragment,
                              null,
                              vue.renderList(5, (index) => {
                                return vue.createElementVNode(
                                  "text",
                                  {
                                    class: vue.normalizeClass(["star", { "star-filled": index <= $setup.totalScore, "star-empty": index > $setup.totalScore }]),
                                    key: index
                                  },
                                  "★",
                                  2
                                  /* CLASS */
                                );
                              }),
                              64
                              /* STABLE_FRAGMENT */
                            ))
                          ])
                        ])
                      ]),
                      vue.createElementVNode(
                        "view",
                        { class: "eval-card-content" },
                        vue.toDisplayString($setup.totalEvaluation),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createCommentVNode(" 双列卡片 "),
                    vue.createElementVNode("view", { class: "eval-card-grid" }, [
                      vue.createElementVNode("view", {
                        class: "eval-card",
                        style: { "--card-color": "#3498db" }
                      }, [
                        vue.createElementVNode("view", { class: "eval-card-header" }, [
                          vue.createElementVNode("text", { class: "eval-icon" }, "🎯"),
                          vue.createElementVNode("view", { class: "header-text" }, "主题")
                        ]),
                        vue.createElementVNode(
                          "view",
                          { class: "eval-card-content" },
                          vue.toDisplayString($setup.themeAnalysis),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("view", {
                        class: "eval-card",
                        style: { "--card-color": "#9b59b6" }
                      }, [
                        vue.createElementVNode("view", { class: "eval-card-header" }, [
                          vue.createElementVNode("text", { class: "eval-icon" }, "📋"),
                          vue.createElementVNode("view", { class: "header-text" }, "结构")
                        ]),
                        vue.createElementVNode(
                          "view",
                          { class: "eval-card-content" },
                          vue.toDisplayString($setup.structureAnalysis),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("view", {
                        class: "eval-card",
                        style: { "--card-color": "#f1c40f" }
                      }, [
                        vue.createElementVNode("view", { class: "eval-card-header" }, [
                          vue.createElementVNode("text", { class: "eval-icon" }, "📝"),
                          vue.createElementVNode("view", { class: "header-text" }, "内容")
                        ]),
                        vue.createElementVNode(
                          "view",
                          { class: "eval-card-content" },
                          vue.toDisplayString($setup.contentAnalysis),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("view", {
                        class: "eval-card",
                        style: { "--card-color": "#e74c3c" }
                      }, [
                        vue.createElementVNode("view", { class: "eval-card-header" }, [
                          vue.createElementVNode("text", { class: "eval-icon" }, "📊"),
                          vue.createElementVNode("view", { class: "header-text" }, "表达")
                        ]),
                        vue.createElementVNode(
                          "view",
                          { class: "eval-card-content" },
                          vue.toDisplayString($setup.expressionAnalysis),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    vue.createElementVNode("view", {
                      class: "eval-card eval-card-full",
                      style: { "--card-color": "#1abc9c" }
                    }, [
                      vue.createElementVNode("view", { class: "eval-card-header" }, [
                        vue.createElementVNode("text", { class: "eval-icon" }, "💡"),
                        vue.createElementVNode("view", { class: "header-text" }, "学习建议")
                      ]),
                      vue.createElementVNode("view", { class: "eval-card-content" }, [
                        vue.createCommentVNode(" 总概括 "),
                        vue.createElementVNode(
                          "view",
                          { class: "suggestion-summary" },
                          vue.toDisplayString($setup.learningSummary),
                          1
                          /* TEXT */
                        ),
                        vue.createCommentVNode(" 分条建议 "),
                        (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList($setup.learningSuggestionsList, (item, idx) => {
                            return vue.openBlock(), vue.createElementBlock("view", {
                              class: "suggestion-item",
                              key: idx
                            }, [
                              vue.createElementVNode(
                                "view",
                                {
                                  class: "item-num",
                                  style: vue.normalizeStyle({ "background-color": "var(--card-color)" })
                                },
                                vue.toDisplayString(idx + 1),
                                5
                                /* TEXT, STYLE */
                              ),
                              vue.createElementVNode(
                                "view",
                                { class: "item-text" },
                                vue.toDisplayString(item),
                                1
                                /* TEXT */
                              )
                            ]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])
                    ])
                  ])) : (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    { key: 1 },
                    [
                      vue.createCommentVNode(" 无文章内容：显示重新上传提示 "),
                      vue.createElementVNode("view", { class: "eval-empty-tip" }, [
                        vue.createVNode(_component_uni_icons, {
                          type: "warn",
                          size: "60rpx",
                          color: "#FF5722"
                        }),
                        vue.createElementVNode("text", { class: "empty-text" }, "请重新上传文章以获取评价"),
                        vue.createElementVNode("button", {
                          class: "reupload-btn",
                          onClick: $setup.handleReupload
                        }, "返回重新上传")
                      ])
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ],
                512
                /* NEED_PATCH */
              ), [
                [vue.vShow, $setup.currentTab === 1]
              ]),
              vue.createCommentVNode(" 空页面保持不变 "),
              vue.withDirectives(vue.createElementVNode(
                "view",
                { class: "comment-section" },
                [
                  vue.createElementVNode("view", { class: "section-header" }, [
                    vue.createElementVNode("view", { class: "header-icon" }, [
                      vue.createElementVNode("text", { class: "header-icon-inner" }, "💬")
                    ]),
                    vue.createElementVNode("view", { class: "header-title" }, "分句点评")
                  ]),
                  vue.createCommentVNode(" 分句点评矩形框 "),
                  vue.createElementVNode("view", { class: "comment-card" }, [
                    vue.createElementVNode("view", { class: "comment-item" }, [
                      vue.createElementVNode("div", {
                        class: "original-text",
                        style: { "font-weight": "bold", "margin-bottom": "15rpx" }
                      }, '"在所有小动物里，我最想养的就是小狗。"'),
                      vue.createElementVNode("div", { class: "comment-section" }, [
                        vue.createElementVNode("span", {
                          class: "comment-label",
                          style: { "color": "#3B82F6", "font-weight": "bold", "margin-right": "10rpx" }
                        }, "点评："),
                        vue.createElementVNode("span", null, "简单直接地表明了自己最想养的动物是小狗，情感上很直白地传达出对小狗的喜爱与渴望。")
                      ]),
                      vue.createElementVNode("div", {
                        class: "suggestion-section",
                        style: { "margin-top": "10rpx" }
                      }, [
                        vue.createElementVNode("span", {
                          class: "suggestion-label",
                          style: { "color": "#10B981", "font-weight": "bold", "margin-right": "10rpx" }
                        }, "补充："),
                        vue.createElementVNode("span", null, '可以稍作修饰，比如 "在各种各样的小动物里，我满心期待最想养的就是小狗"，让情感表达更饱满。')
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "comment-divider" }),
                    vue.createElementVNode("view", { class: "comment-item" }, [
                      vue.createElementVNode("div", {
                        class: "original-text",
                        style: { "font-weight": "bold", "margin-bottom": "15rpx" }
                      }, `"我喜欢小狗可爱的外形。它有着柔软的皮毛，眼睛像两颗圆溜溜的黑宝石，还有一条摇来摇去的小尾巴，平时看到主人回家它会高兴地又蹦又跳，仿佛在说：'欢迎回家。'"`),
                      vue.createElementVNode("div", { class: "comment-section" }, [
                        vue.createElementVNode("span", {
                          class: "comment-label",
                          style: { "color": "#3B82F6", "font-weight": "bold", "margin-right": "10rpx" }
                        }, "点评："),
                        vue.createElementVNode("span", null, '"柔软" 形象写出小狗皮毛的触感，"圆溜溜""黑宝石" 生动描绘出小狗眼睛的模样，"摇来摇去""又蹦又跳" 这些词汇把小狗活泼的姿态展现出来，情感上满是对小狗外形与活泼模样的喜爱。')
                      ]),
                      vue.createElementVNode("div", {
                        class: "suggestion-section",
                        style: { "margin-top": "10rpx" }
                      }, [
                        vue.createElementVNode("span", {
                          class: "suggestion-label",
                          style: { "color": "#10B981", "font-weight": "bold", "margin-right": "10rpx" }
                        }, "补充："),
                        vue.createElementVNode("span", null, `可增加对小狗其他部位的描写，像 "它有着柔软得像棉花糖似的皮毛，眼睛像两颗圆溜溜、在阳光下闪着光的黑宝石，还有一条像小绒绳似的尾巴，摇来摇去的。平时看到主人回家，它会兴奋地又蹦又跳，小爪子在地上欢快地扒拉着，仿佛在热情地说：'欢迎回家呀！'"，让小狗的形象更鲜活。`)
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "comment-divider" }),
                    vue.createElementVNode("view", { class: "comment-item" }, [
                      vue.createElementVNode("div", {
                        class: "original-text",
                        style: { "font-weight": "bold", "margin-bottom": "15rpx" }
                      }, `"小狗是人类忠诚的朋友，而且它可以看家护院。只要听到一点点的动静，它就会快速地站起来，仔细观察四周。如果发现敌情，它就会发出'汪汪'的叫声，向主人传递信息。"`),
                      vue.createElementVNode("div", { class: "comment-section" }, [
                        vue.createElementVNode("span", {
                          class: "comment-label",
                          style: { "color": "#3B82F6", "font-weight": "bold", "margin-right": "10rpx" }
                        }, "点评："),
                        vue.createElementVNode("span", null, '"忠诚" 体现出小狗的品性，"快速""仔细""汪汪" 这些词汇，把小狗警惕、负责的看家护院状态很好地呈现，能感受到对小狗这一优点的认可与赞赏。')
                      ]),
                      vue.createElementVNode("div", {
                        class: "suggestion-section",
                        style: { "margin-top": "10rpx" }
                      }, [
                        vue.createElementVNode("span", {
                          class: "suggestion-label",
                          style: { "color": "#10B981", "font-weight": "bold", "margin-right": "10rpx" }
                        }, "补充："),
                        vue.createElementVNode("span", null, `细化小狗的动作，"小狗是人类十分忠诚的朋友，而且它特别能看家护院。只要听到一丁点儿细微的动静，它就会'噌'地一下快速站起来，耳朵竖得笔直，眼睛紧紧盯着发出动静的方向，仔细观察着四周。要是发现有陌生的情况，它就会猛地发出'汪汪汪'急促的叫声，急切地向主人传递'有情况'的信息"，突出小狗的机敏。`)
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "comment-divider" }),
                    vue.createElementVNode("view", { class: "comment-item" }, [
                      vue.createElementVNode("div", {
                        class: "original-text",
                        style: { "font-weight": "bold", "margin-bottom": "15rpx" }
                      }, '"如果我能养一只小狗，我会好好照顾它，做一个有爱心负责任的小主人。"'),
                      vue.createElementVNode("div", { class: "comment-section" }, [
                        vue.createElementVNode("span", {
                          class: "comment-label",
                          style: { "color": "#3B82F6", "font-weight": "bold", "margin-right": "10rpx" }
                        }, "点评："),
                        vue.createElementVNode("span", null, '"好好照顾""有爱心负责任" 直接表达出自己若养小狗会付出的态度，情感真挚，满是对未来照顾小狗的期待与责任感。')
                      ]),
                      vue.createElementVNode("div", {
                        class: "suggestion-section",
                        style: { "margin-top": "10rpx" }
                      }, [
                        vue.createElementVNode("span", {
                          class: "suggestion-label",
                          style: { "color": "#10B981", "font-weight": "bold", "margin-right": "10rpx" }
                        }, "补充："),
                        vue.createElementVNode("span", null, '具体说说照顾的方式，"如果我能养一只小狗，我会每天给它准备香喷喷的食物，带它去公园的草地上尽情奔跑玩耍，还会在它生病时，小心翼翼地照顾它，做一个充满爱心、十分负责任的小主人"，让想法更具体。')
                      ])
                    ])
                  ])
                ],
                512
                /* NEED_PATCH */
              ), [
                [vue.vShow, $setup.currentTab === 2]
              ]),
              vue.withDirectives(vue.createElementVNode(
                "view",
                { class: "polish-section" },
                [
                  vue.createElementVNode("view", { class: "section-header" }, [
                    vue.createElementVNode("view", { class: "header-icon" }, [
                      vue.createElementVNode("text", { class: "header-icon-inner" }, "✨")
                    ]),
                    vue.createElementVNode("view", { class: "header-title" }, "润色结果")
                  ]),
                  vue.createCommentVNode(" 润色文章矩形框 "),
                  vue.createElementVNode("view", { class: "polish-card" }, [
                    vue.createElementVNode("view", {
                      class: "polish-title",
                      style: { "font-weight": "bold", "font-size": "32rpx", "margin-bottom": "20rpx", "text-align": "center" }
                    }, "我想养一只小狗"),
                    vue.createElementVNode("view", { class: "polish-content" }, [
                      vue.createElementVNode("p", { style: { "text-indent": "2em" } }, "在所有小动物里，我最想养的就是小狗啦。"),
                      vue.createElementVNode("p", { style: { "text-indent": "2em" } }, '我特别喜欢小狗那可爱的外形。它有着像云朵般柔软的皮毛，摸起来舒服极了；眼睛像两颗圆溜溜的黑宝石，亮晶晶的，仿佛藏着星辰大海；还有一条总是摇来摇去的小尾巴，像个快乐的小鞭子。平时只要看到主人回家，它就会高兴地又蹦又跳，小短腿快速交替，小尾巴摇得像个小风扇，仿佛在热情地说："欢迎回家呀！"'),
                      vue.createElementVNode("p", { style: { "text-indent": "2em" } }, '小狗可是人类忠诚的好朋友，而且它还能看家护院。只要听到一点点细微的动静，它就会 "噌" 地一下快速站起来，耳朵竖得直直的，仔细观察着四周。要是发现有什么异常，它就会发出 "汪汪" 的叫声，那叫声响亮又急促，像是在向主人传递 "有情况" 的信号。'),
                      vue.createElementVNode("p", { style: { "text-indent": "2em" } }, "如果我能养一只小狗，我一定会好好照顾它。每天给它准备美味的食物，带它去草地上奔跑玩耍，还会温柔地给它梳理毛发。我要做一个有爱心、有责任心的小主人，让小狗成为我最亲密的伙伴。")
                    ])
                  ])
                ],
                512
                /* NEED_PATCH */
              ), [
                [vue.vShow, $setup.currentTab === 3]
              ]),
              vue.withDirectives(vue.createElementVNode(
                "view",
                { class: "exercise-section" },
                [
                  vue.createElementVNode("view", { class: "section-header" }, [
                    vue.createElementVNode("view", { class: "header-icon" }, [
                      vue.createElementVNode("text", { class: "header-icon-inner" }, "📝")
                    ]),
                    vue.createElementVNode("view", { class: "header-title" }, "推荐习题")
                  ]),
                  vue.createCommentVNode(" 练习题矩形框 "),
                  vue.createElementVNode("view", { class: "exercise-card" }, [
                    vue.createCommentVNode(" 一、近似字辨析 "),
                    vue.createElementVNode("view", { class: "exercise-item" }, [
                      vue.createElementVNode("view", { class: "exercise-title" }, "一、近似字辨析"),
                      vue.createElementVNode("view", { class: "exercise-content" }, [
                        vue.createElementVNode("view", { class: "exercise-subtitle" }, '1.辨析 "形" 与 "型"，并填空。'),
                        vue.createElementVNode("view", { class: "exercise-sentence" }, " 小狗可爱的外( )，是很多宠物( )文创的设计灵感来源。 "),
                        vue.createElementVNode("view", { class: "exercise-subtitle" }, '2.辨析 "诚" 与 "城"，并填空。'),
                        vue.createElementVNode("view", { class: "exercise-sentence" }, " 小狗是人类忠( )的朋友，它在( )市的各个角落，用叫声守护家园。 ")
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "exercise-divider" }),
                    vue.createCommentVNode(" 二、病句修改 "),
                    vue.createElementVNode("view", { class: "exercise-item" }, [
                      vue.createElementVNode("view", { class: "exercise-title" }, "二、病句修改"),
                      vue.createElementVNode("view", { class: "exercise-content" }, [
                        vue.createElementVNode("view", { class: "sentence-group" }, [
                          vue.createElementVNode("view", { class: "original-sentence" }, '1.原句：小狗有着柔软的皮毛，眼睛像两颗圆溜溜的黑宝石，还有一条摇来摇去的小尾巴，平时看到主人回家它会高兴地又蹦又跳，仿佛在说："欢迎回家。"'),
                          vue.createElementVNode("view", { class: "modified-sentence" }, '修改：小狗有着柔软的皮毛，眼睛像两颗圆溜溜的黑宝石，还有一条摇来摇去的小尾巴。平时看到主人回家，它会高兴地又蹦又跳，仿佛在说："欢迎回家。"（原句前半部分描述小狗外形，后半部分讲看到主人的反应，中间用句号断开，使句子层次更清晰）')
                        ]),
                        vue.createElementVNode("view", { class: "sentence-group" }, [
                          vue.createElementVNode("view", { class: "original-sentence" }, "2.原句：只要听到一点点的动静，它就会快速地站起来，仔细观察四周。"),
                          vue.createElementVNode("view", { class: "modified-sentence" }, '修改：只要听到一点点动静，它就会快速地站起来，仔细观察四周。（"一点点的动静" 中 "的" 字多余，删去使句子更通顺）')
                        ])
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "exercise-divider" }),
                    vue.createCommentVNode(" 三、词语搭配 "),
                    vue.createElementVNode("view", { class: "exercise-item" }, [
                      vue.createElementVNode("view", { class: "exercise-title" }, "三、词语搭配"),
                      vue.createElementVNode("view", { class: "exercise-content" }, [
                        vue.createElementVNode("view", { class: "exercise-subtitle" }, '请用 "√" 选出合适的词语。'),
                        vue.createElementVNode("view", { class: "options-group" }, [
                          vue.createElementVNode("view", { class: "question-text" }, "1.（ ）的皮毛"),
                          vue.createElementVNode("view", { class: "options" }, [
                            vue.createElementVNode("view", { class: "option-item" }, "A. 柔软"),
                            vue.createElementVNode("view", { class: "option-item" }, "B. 柔和")
                          ])
                        ]),
                        vue.createElementVNode("view", { class: "options-group" }, [
                          vue.createElementVNode("view", { class: "question-text" }, "2.（ ）的叫声"),
                          vue.createElementVNode("view", { class: "options" }, [
                            vue.createElementVNode("view", { class: "option-item" }, "A. 汪汪"),
                            vue.createElementVNode("view", { class: "option-item" }, "B. 喵喵")
                          ])
                        ])
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "exercise-divider" }),
                    vue.createCommentVNode(" 四、仿写句子 "),
                    vue.createElementVNode("view", { class: "exercise-item" }, [
                      vue.createElementVNode("view", { class: "exercise-title" }, "四、仿写句子"),
                      vue.createElementVNode("view", { class: "exercise-content" }, [
                        vue.createElementVNode("view", { class: "model-sentence" }, "例句：小狗的眼睛像两颗圆溜溜的黑宝石。"),
                        vue.createElementVNode("view", { class: "blank-sentence" }, "仿写：小狗的尾巴像______________________。")
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "exercise-divider" }),
                    vue.createCommentVNode(" 五、阅读理解 "),
                    vue.createElementVNode("view", { class: "exercise-item" }, [
                      vue.createElementVNode("view", { class: "exercise-title" }, "五、阅读理解"),
                      vue.createElementVNode("view", { class: "exercise-content" }, [
                        vue.createCommentVNode(" 1、课文段落阅读理解 "),
                        vue.createElementVNode("view", { class: "reading-passage" }, [
                          vue.createElementVNode("view", { class: "passage-title" }, "(1)、课文段落阅读理解（选自三年级上册《秋天的雨》）"),
                          vue.createElementVNode("view", { class: "passage-text" }, " 秋天的雨，有一盒五彩缤纷的颜料。你看，它把黄色给了银杏树，黄黄的叶子像一把把小扇子，扇哪扇哪，扇走了夏天的炎热。它把红色给了枫树，红红的枫叶像一枚枚邮票，飘哇飘哇，邮来了秋天的凉爽。金黄色是给田野的，看，田野像金色的海洋。橙红色是给果树的，橘子、柿子你挤我碰，争着要人们去摘呢！菊花仙子得到的颜色就更多了，紫红的、淡黄的、雪白的…… 美丽的菊花在秋雨里频频点头。 "),
                          vue.createElementVNode("view", { class: "question-section" }, [
                            vue.createElementVNode("view", { class: "question-item" }, [
                              vue.createElementVNode("view", { class: "question-number" }, "1."),
                              vue.createElementVNode("view", { class: "question-text" }, '秋天的雨把黄色给了什么植物？请在文中用 "____" 画出来。')
                            ]),
                            vue.createElementVNode("view", { class: "question-item" }, [
                              vue.createElementVNode("view", { class: "question-number" }, "2."),
                              vue.createElementVNode("view", { class: "question-text" }, '文中说 "红红的枫叶像一枚枚邮票"，作者为什么会这样比喻呢？（ ）'),
                              vue.createElementVNode("view", { class: "options" }, [
                                vue.createElementVNode("view", { class: "option-item" }, "A. 因为枫叶和邮票一样是红色的"),
                                vue.createElementVNode("view", { class: "option-item" }, "B. 因为枫叶飘落的样子像邮票传递消息，带来了秋天的凉爽")
                              ])
                            ]),
                            vue.createElementVNode("view", { class: "question-item" }, [
                              vue.createElementVNode("view", { class: "question-number" }, "3."),
                              vue.createElementVNode("view", { class: "question-text" }, "读了这段话，你能感受到作者对秋天的雨抱着怎样的感情？")
                            ])
                          ])
                        ]),
                        vue.createElementVNode("view", { class: "exercise-divider" }),
                        vue.createCommentVNode(" 2、课外段落阅读理解 "),
                        vue.createElementVNode("view", { class: "reading-passage" }, [
                          vue.createElementVNode("view", { class: "passage-title" }, "(2)、课外段落阅读理解"),
                          vue.createElementVNode("view", { class: "passage-text" }, " 清晨的树林里，阳光透过树叶的缝隙，洒下细碎的金光。一只小松鼠从树洞里钻了出来，它拖着毛茸茸的大尾巴，眨着黑亮的圆眼睛，东瞧瞧西看看。很快，它发现了松树上结满的小松果，立刻顺着树干爬上去，用灵巧的前爪摘下一颗，塞进腮边的口袋里。它一会儿爬向这根树枝，一会儿跳到那根树枝，口袋渐渐鼓了起来。累了的时候，它就坐在树杈上，捧着松果啃起来，尾巴蓬松地盖在背上，看起来舒服极了。 "),
                          vue.createElementVNode("view", { class: "question-section" }, [
                            vue.createElementVNode("view", { class: "question-item" }, [
                              vue.createElementVNode("view", { class: "question-number" }, "1."),
                              vue.createElementVNode("view", { class: "question-text" }, "小松鼠在树林里做了什么事情？请写出其中一件。")
                            ]),
                            vue.createElementVNode("view", { class: "question-item" }, [
                              vue.createElementVNode("view", { class: "question-number" }, "2."),
                              vue.createElementVNode("view", { class: "question-text" }, "文中哪些词语写出了小松鼠的样子很可爱？请找出两个。")
                            ]),
                            vue.createElementVNode("view", { class: "question-item" }, [
                              vue.createElementVNode("view", { class: "question-number" }, "3."),
                              vue.createElementVNode("view", { class: "question-text" }, "从这段话中，你能看出小松鼠是一种怎样的小动物？")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ],
                512
                /* NEED_PATCH */
              ), [
                [vue.vShow, $setup.currentTab === 4]
              ])
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ]),
        vue.createCommentVNode(" 可拖动圆形按钮 "),
        vue.createElementVNode(
          "view",
          {
            class: "ai-float-button",
            style: vue.normalizeStyle({ left: $setup.buttonPosition.x + "px", top: $setup.buttonPosition.y + "px" }),
            onTouchstart: $setup.handleTouchStart,
            onTouchmove: $setup.handleTouchMove,
            onTouchend: $setup.handleTouchEnd,
            onClick: $setup.handleAIClick
          },
          [
            vue.createVNode(_component_uni_icons, {
              type: "chat",
              size: "40rpx",
              color: "#FFFFFF"
            })
          ],
          36
          /* STYLE, NEED_HYDRATION */
        ),
        vue.createCommentVNode(" 密码验证弹窗 "),
        $setup.showPasswordModal ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "modal-overlay",
          onClick: $setup.closePasswordModal
        }, [
          vue.createElementVNode("view", {
            class: "password-modal",
            onClick: _cache[1] || (_cache[1] = vue.withModifiers(() => {
            }, ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "modal-content" }, [
              vue.createElementVNode("view", { class: "modal-header" }, [
                vue.createElementVNode("text", { class: "modal-title" }, "家长身份验证"),
                vue.createVNode(_component_uni_icons, {
                  type: "close",
                  size: "32rpx",
                  color: "#666",
                  onClick: $setup.closePasswordModal
                })
              ]),
              vue.createElementVNode("view", { class: "modal-body" }, [
                vue.createElementVNode("text", { class: "password-label" }, "请输入二级密码以使用AI作文辅导功能"),
                vue.withDirectives(vue.createElementVNode(
                  "input",
                  {
                    type: "password",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.password = $event),
                    placeholder: "请输入二级密码",
                    class: "password-input",
                    onConfirm: $setup.verifyPassword
                  },
                  null,
                  544
                  /* NEED_HYDRATION, NEED_PATCH */
                ), [
                  [vue.vModelText, $setup.password]
                ]),
                $setup.errorMessage ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "error-message"
                  },
                  vue.toDisplayString($setup.errorMessage),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ]),
              vue.createElementVNode("view", { class: "modal-footer" }, [
                vue.createElementVNode("button", {
                  class: "cancel-btn",
                  onClick: $setup.closePasswordModal
                }, "取消"),
                vue.createElementVNode("button", {
                  class: "confirm-btn",
                  onClick: $setup.verifyPassword
                }, "确认")
              ])
            ])
          ])
        ])) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" AI对话浮窗 "),
        $setup.showAIFloatWindow ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "ai-window"
        }, [
          vue.createElementVNode("view", { class: "ai-header" }, [
            vue.createElementVNode("text", { class: "ai-title" }, "AI作文辅导"),
            vue.createVNode(_component_uni_icons, {
              type: "close",
              size: "32rpx",
              color: "#666",
              onClick: $setup.closeAIFloatWindow
            })
          ]),
          vue.createElementVNode(
            "scroll-view",
            {
              class: "ai-chat-container",
              "scroll-y": "",
              ref: "chatContainer"
            },
            [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($setup.messages, (message, index) => {
                  return vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      key: index,
                      class: vue.normalizeClass(["message-item", message.sender === "user" ? "user-message" : "ai-message"])
                    },
                    [
                      vue.createElementVNode("view", {
                        class: "message-content",
                        innerHTML: $setup.processMessageContent(message.content)
                      }, null, 8, ["innerHTML"])
                    ],
                    2
                    /* CLASS */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              $setup.isLoading ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "loading-indicator"
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "spinner",
                  size: "24rpx",
                  color: "#999",
                  animation: "spin"
                }),
                vue.createElementVNode("text", { class: "loading-text" }, "AI正在思考...")
              ])) : vue.createCommentVNode("v-if", true)
            ],
            512
            /* NEED_PATCH */
          ),
          vue.createElementVNode("view", { class: "ai-input-container" }, [
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.inputMessage = $event),
                type: "text",
                placeholder: "请问如何辅导孩子写这篇作文？",
                class: "ai-input",
                onConfirm: $setup.sendMessage
              },
              null,
              544
              /* NEED_HYDRATION, NEED_PATCH */
            ), [
              [vue.vModelText, $setup.inputMessage]
            ]),
            vue.createElementVNode("button", {
              class: "send-btn",
              onClick: $setup.sendMessage,
              disabled: !$setup.inputMessage.trim() || $setup.isLoading
            }, [
              !$setup.isLoading ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, "发送")) : (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "loading-indicator"
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "spinner",
                  size: "20rpx",
                  color: "#fff",
                  animation: "spin"
                }),
                vue.createElementVNode("text", { class: "loading-text" }, "发送中")
              ]))
            ], 8, ["disabled"])
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesCorrectCorrectResult = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "D:/多媒体比赛/momo9.29/pages/correct/correct_result.vue"]]);
  const _sfc_main$7 = {
    __name: "special",
    setup(__props, { expose: __expose }) {
      __expose();
      const __returned__ = { uniIcons: __easycom_0$1 };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "progress-container" }, [
      vue.createElementVNode("view", { class: "progress-card" }, [
        vue.createElementVNode("text", { class: "title" }, "你的学习进度"),
        vue.createCommentVNode(" 词句训练 "),
        vue.createElementVNode("view", { class: "progress-item" }, [
          vue.createElementVNode("view", { class: "row" }, [
            vue.createElementVNode("text", { class: "label" }, "词句训练"),
            vue.createElementVNode("text", { class: "percent" }, "65%")
          ]),
          vue.createElementVNode("view", { class: "progress-bar" }, [
            vue.createElementVNode("view", {
              class: "progress",
              style: { "width": "65%" }
            })
          ])
        ]),
        vue.createCommentVNode(" 句式训练 "),
        vue.createElementVNode("view", { class: "progress-item" }, [
          vue.createElementVNode("view", { class: "row" }, [
            vue.createElementVNode("text", { class: "label" }, "句式训练"),
            vue.createElementVNode("text", { class: "percent" }, "40%")
          ]),
          vue.createElementVNode("view", { class: "progress-bar" }, [
            vue.createElementVNode("view", {
              class: "progress",
              style: { "width": "40%" }
            })
          ])
        ]),
        vue.createCommentVNode(" 段落训练 "),
        vue.createElementVNode("view", { class: "progress-item" }, [
          vue.createElementVNode("view", { class: "row" }, [
            vue.createElementVNode("text", { class: "label" }, "段落训练"),
            vue.createElementVNode("text", { class: "percent" }, "25%")
          ]),
          vue.createElementVNode("view", { class: "progress-bar" }, [
            vue.createElementVNode("view", {
              class: "progress",
              style: { "width": "25%" }
            })
          ])
        ]),
        vue.createElementVNode("text", { class: "footer-tip" }, "已完成13/40个练习，继续加油！")
      ]),
      vue.createCommentVNode(" 词句训练标题 "),
      vue.createElementVNode("view", { class: "training-title" }, " 词句训练 "),
      vue.createCommentVNode(" 四个框的容器 "),
      vue.createCommentVNode(" 四个框的容器 "),
      vue.createElementVNode("view", { class: "box-container" }, [
        vue.createElementVNode("view", { class: "box-item" }, [
          vue.createElementVNode("view", { class: "blue-circle" }, [
            vue.createVNode($setup["uniIcons"], {
              type: "compose",
              size: "28",
              color: "#007aff"
            })
          ]),
          vue.createElementVNode("text", { class: "box-title" }, "汉字描红"),
          vue.createElementVNode("text", { class: "box-subtitle" }, "练习常用字的正确书写和笔画顺序"),
          vue.createElementVNode("view", { class: "tag beginner" }, "入门"),
          vue.createElementVNode("text", { class: "right-text" }, "10分钟/天")
        ]),
        vue.createElementVNode("view", { class: "box-item" }, [
          vue.createElementVNode("view", { class: "blue-circle" }, [
            vue.createVNode($setup["uniIcons"], {
              type: "link",
              size: "28",
              color: "#007aff"
            })
          ]),
          vue.createElementVNode("text", { class: "box-title" }, "词语搭配"),
          vue.createElementVNode("text", { class: "box-subtitle" }, "学习正确的词语搭配，提高表达准确性"),
          vue.createElementVNode("view", { class: "tag beginner" }, "基础"),
          vue.createElementVNode("text", { class: "right-text" }, "8分钟/天")
        ]),
        vue.createElementVNode("view", { class: "box-item" }, [
          vue.createElementVNode("view", { class: "blue-circle" }, [
            vue.createVNode($setup["uniIcons"], {
              type: "list",
              size: "28",
              color: "#007aff"
            })
          ]),
          vue.createElementVNode("text", { class: "box-title" }, "近义词辨析"),
          vue.createElementVNode("text", { class: "box-subtitle" }, "理解意思相近词语的细微差别"),
          vue.createElementVNode("view", { class: "tag beginner" }, "进阶"),
          vue.createElementVNode("text", { class: "right-text" }, "12分钟/天")
        ]),
        vue.createElementVNode("view", { class: "box-item" }, [
          vue.createElementVNode("view", { class: "blue-circle" }, [
            vue.createVNode($setup["uniIcons"], {
              type: "help",
              size: "28",
              color: "#007aff"
            })
          ]),
          vue.createElementVNode("text", { class: "box-title" }, "量词使用"),
          vue.createElementVNode("text", { class: "box-subtitle" }, "学习正确使用量词，如“一只鸟”、“一本书”"),
          vue.createElementVNode("view", { class: "tag beginner" }, "基础"),
          vue.createElementVNode("text", { class: "right-text" }, "5分钟/天")
        ])
      ]),
      vue.createCommentVNode(" 新标题 "),
      vue.createElementVNode("view", { class: "training-title-second" }, " 进阶训练 "),
      vue.createCommentVNode(" 新的四个框容器 "),
      vue.createElementVNode("view", { class: "box-container-advanced" }, [
        vue.createElementVNode("view", { class: "box-item-advanced" }, [
          vue.createElementVNode("view", { class: "purple-circle-advanced" }, [
            vue.createVNode($setup["uniIcons"], {
              type: "refresh",
              size: "28",
              color: "#8A2BE2"
            })
          ]),
          vue.createElementVNode("text", { class: "box-title-advanced" }, "句子排序"),
          vue.createElementVNode("text", { class: "box-subtitle-advanced" }, "将打乱的句子按逻辑顺序重新排列"),
          vue.createElementVNode("view", { class: "tag-advanced beginner" }, "基础"),
          vue.createElementVNode("text", { class: "right-text-advanced" }, "10分钟/天")
        ]),
        vue.createElementVNode("view", { class: "box-item-advanced" }, [
          vue.createElementVNode("view", { class: "purple-circle-advanced" }, [
            vue.createVNode($setup["uniIcons"], {
              type: "paperclip",
              size: "28",
              color: "#8A2BE2"
            })
          ]),
          vue.createElementVNode("text", { class: "box-title-advanced" }, "仿写句子"),
          vue.createElementVNode("text", { class: "box-subtitle-advanced" }, "根据例句，学习使用相同结构造句"),
          vue.createElementVNode("view", { class: "tag-advanced basic" }, "进阶"),
          vue.createElementVNode("text", { class: "right-text-advanced" }, "15分钟/天")
        ]),
        vue.createElementVNode("view", { class: "box-item-advanced" }, [
          vue.createElementVNode("view", { class: "purple-circle-advanced" }, [
            vue.createVNode($setup["uniIcons"], {
              type: "help",
              size: "28",
              color: "#8A2BE2"
            })
          ]),
          vue.createElementVNode("text", { class: "box-title-advanced" }, "病句修改"),
          vue.createElementVNode("text", { class: "box-subtitle-advanced" }, "识别并修改有语法错误的句子"),
          vue.createElementVNode("view", { class: "tag-advanced basic" }, "进阶"),
          vue.createElementVNode("text", { class: "right-text-advanced" }, "12分钟/天")
        ]),
        vue.createElementVNode("view", { class: "box-item-advanced" }, [
          vue.createElementVNode("view", { class: "purple-circle-advanced" }, [
            vue.createVNode($setup["uniIcons"], {
              type: "minus",
              size: "28",
              color: "#8A2BE2"
            })
          ]),
          vue.createElementVNode("text", { class: "box-title-advanced" }, "标点符号"),
          vue.createElementVNode("text", { class: "box-subtitle-advanced" }, "学习正确使用逗号、句号、问号等"),
          vue.createElementVNode("view", { class: "tag-advanced basic" }, "基础"),
          vue.createElementVNode("text", { class: "right-text-advanced" }, "8分钟/天")
        ])
      ]),
      vue.createElementVNode("view", { class: "training-title-third" }, " 段落训练 "),
      vue.createElementVNode("view", { class: "box-container-third" }, [
        vue.createElementVNode("view", { class: "box-item-third" }, [
          vue.createElementVNode("view", { class: "green-circle-third" }, [
            vue.createVNode($setup["uniIcons"], {
              type: "compose",
              size: "28",
              color: "#2e8b57"
            })
          ]),
          vue.createElementVNode("text", { class: "box-title-third" }, "写一句话"),
          vue.createElementVNode("text", { class: "box-subtitle-third" }, "学习用完整的一句话描述事物"),
          vue.createElementVNode("view", { class: "tag-third beginner" }, "入门"),
          vue.createElementVNode("text", { class: "right-text-third" }, "5分钟/天")
        ]),
        vue.createElementVNode("view", { class: "box-item-third" }, [
          vue.createElementVNode("view", { class: "green-circle-third" }, [
            vue.createVNode($setup["uniIcons"], {
              type: "image",
              size: "28",
              color: "#2e8b57"
            })
          ]),
          vue.createElementVNode("text", { class: "box-title-third" }, "看图写段"),
          vue.createElementVNode("text", { class: "box-subtitle-third" }, "根据图片内容写一小段描述性文字"),
          vue.createElementVNode("view", { class: "tag-third beginner" }, "基础"),
          vue.createElementVNode("text", { class: "right-text-third" }, "15分钟/天")
        ]),
        vue.createElementVNode("view", { class: "box-item-third" }, [
          vue.createElementVNode("view", { class: "green-circle-third" }, [
            vue.createVNode($setup["uniIcons"], {
              type: "list",
              size: "28",
              color: "#2e8b57"
            })
          ]),
          vue.createElementVNode("text", { class: "box-title-third" }, "段落结构"),
          vue.createElementVNode("text", { class: "box-subtitle-third" }, "学习如何组织段落，使内容有条理"),
          vue.createElementVNode("view", { class: "tag-third beginner" }, "进阶"),
          vue.createElementVNode("text", { class: "right-text-third" }, "20分钟/天")
        ]),
        vue.createElementVNode("view", { class: "box-item-third" }, [
          vue.createElementVNode("view", { class: "green-circle-third" }, [
            vue.createVNode($setup["uniIcons"], {
              type: "paperclip",
              size: "28",
              color: "#2e8b57"
            })
          ]),
          vue.createElementVNode("text", { class: "box-title-third" }, "开头结尾"),
          vue.createElementVNode("text", { class: "box-subtitle-third" }, "学习写好段落的开头和结尾句子"),
          vue.createElementVNode("view", { class: "tag-third beginner" }, "进阶"),
          vue.createElementVNode("text", { class: "right-text-third" }, "15分钟/天")
        ])
      ]),
      vue.createElementVNode("view", { class: "training-title-second" }, " 为你推荐的学习路径 "),
      vue.createCommentVNode(" 低年级基础提升计划卡片 "),
      vue.createElementVNode("view", { class: "plan-card" }, [
        vue.createElementVNode("view", { class: "plan-header" }, [
          vue.createElementVNode("text", { class: "plan-title" }, "低年级基础提升计划"),
          vue.createElementVNode("text", { class: "plan-subtitle" }, "适合1-3年级，共8周课程")
        ]),
        vue.createCommentVNode(" 进度条 "),
        vue.createElementVNode("view", { class: "plan-progress" }, [
          vue.createElementVNode("text", { class: "progress-text" }, "当前进度：第3周 38%"),
          vue.createElementVNode("view", { class: "progress-bar" }, [
            vue.createElementVNode("view", {
              class: "progress-fill",
              style: { "width": "38%" }
            })
          ])
        ]),
        vue.createCommentVNode(" 本周重点 "),
        vue.createElementVNode("view", { class: "plan-focus" }, [
          vue.createElementVNode("text", { class: "focus-title" }, "本周学习重点："),
          vue.createElementVNode("text", { class: "focus-item" }, "• 掌握“的、地、得”的正确用法"),
          vue.createElementVNode("text", { class: "focus-item" }, "• 学习简单的比喻句写作"),
          vue.createElementVNode("text", { class: "focus-item" }, "• 练习写50字左右的段落")
        ]),
        vue.createCommentVNode(" 继续按钮 "),
        vue.createElementVNode("button", { class: "plan-btn" }, "继续学习")
      ])
    ]);
  }
  const PagesCorrectSpecial = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-0f87818b"], ["__file", "D:/多媒体比赛/momo9.29/pages/correct/special.vue"]]);
  const _imports_0$3 = "/static/images/learning-portrait-bg.png";
  const _sfc_main$6 = {
    __name: "portrait",
    setup(__props, { expose: __expose }) {
      __expose();
      const userInfo = vue.ref({
        nickname: "",
        avatar: "",
        grade: null
      });
      const profileData = vue.reactive({
        overallScore: 0,
        writingStyle: "",
        recentImprovement: [],
        weaknesses: [],
        improvementCount: 0,
        weaknessCount: 0,
        // 根据后端参数调整详细评分数据结构
        detailedScores: {
          theme_average: 0,
          // 主题核心
          organization_average: 0,
          // 结构逻辑
          content_average: 0,
          // 内容要点
          expression_average: 0
          // 表达风格
        }
      });
      const isLoading = vue.ref(true);
      const errorMessage = vue.ref("");
      const gradeOptions = [
        { value: 3, label: "三年级" },
        { value: 4, label: "四年级" },
        { value: 5, label: "五年级" },
        { value: 6, label: "六年级" }
      ];
      const formatGrade = (gradeValue) => {
        if (!gradeValue)
          return "未设置年级";
        const grade = gradeOptions.find((item) => item.value === gradeValue);
        return grade ? grade.label : "";
      };
      const goBack = () => {
        uni.navigateBack();
      };
      const checkLoginStatus2 = () => {
        const accessToken = uni.getStorageSync("accessToken");
        return !!accessToken;
      };
      const getUserProfile = async () => {
        const accessToken = uni.getStorageSync("accessToken");
        if (!accessToken) {
          throw new Error("请先登录");
        }
        return new Promise((resolve, reject) => {
          uni.request({
            url: "http://120.55.58.198:8000/api/users/profile/",
            // url: 'http://192.168.3.56:8000/api/users/profile/',
            method: "GET",
            header: {
              "Authorization": `Bearer ${accessToken}`,
              "Content-Type": "application/json"
            },
            success: (res) => {
              if (res.statusCode === 200 && res.data.status === "success") {
                resolve(res.data.data);
              } else if (res.statusCode === 401) {
                reject("请先登录");
              } else {
                reject(res.data.message || "获取个人信息失败");
              }
            },
            fail: (err) => {
              reject("网络请求失败");
            }
          });
        });
      };
      const fetchUserInfo = async () => {
        try {
          if (!checkLoginStatus2()) {
            userInfo.value = {
              nickname: "未登录用户",
              avatar: "/static/images/111.jpg",
              grade: null
            };
            return;
          }
          try {
            const cachedUserInfo = uni.getStorageSync("cachedUserInfo");
            const cacheTime = uni.getStorageSync("userInfoCacheTime");
            const now2 = Date.now();
            const cacheValidity = 30 * 60 * 1e3;
            formatAppLog("log", "at pages/profile/portrait.vue:110", "用户信息缓存检查:", {
              hasCache: !!cachedUserInfo,
              hasCacheTime: !!cacheTime,
              cacheTime,
              now: now2,
              isExpired: cacheTime ? now2 - cacheTime >= cacheValidity : true
            });
            if (cachedUserInfo && typeof cachedUserInfo === "object" && cacheTime && !isNaN(cacheTime) && now2 - cacheTime < cacheValidity) {
              formatAppLog("log", "at pages/profile/portrait.vue:119", "使用缓存的用户信息");
              userInfo.value = cachedUserInfo;
              return;
            }
          } catch (cacheError) {
            formatAppLog("error", "at pages/profile/portrait.vue:124", "用户信息缓存检查失败:", cacheError);
          }
          const profileData2 = await getUserProfile();
          userInfo.value = {
            nickname: profileData2.nickname || profileData2.username || "未设置昵称",
            avatar: profileData2.avatar || "/static/images/111.jpg",
            grade: profileData2.grade || null
          };
          try {
            uni.setStorageSync("cachedUserInfo", userInfo.value);
            uni.setStorageSync("userInfoCacheTime", now);
            formatAppLog("log", "at pages/profile/portrait.vue:140", "用户信息已缓存，有效期30分钟");
          } catch (cacheError) {
            formatAppLog("error", "at pages/profile/portrait.vue:142", "用户信息缓存失败:", cacheError);
          }
        } catch (error) {
          formatAppLog("error", "at pages/profile/portrait.vue:146", "获取用户信息失败:", error);
          try {
            const cachedUserInfo = uni.getStorageSync("cachedUserInfo");
            if (cachedUserInfo && typeof cachedUserInfo === "object") {
              formatAppLog("log", "at pages/profile/portrait.vue:151", "网络请求失败，使用缓存的用户信息");
              userInfo.value = cachedUserInfo;
            } else {
              userInfo.value = {
                nickname: "获取失败",
                avatar: "/static/images/111.jpg",
                grade: null
              };
            }
          } catch (cacheError) {
            formatAppLog("error", "at pages/profile/portrait.vue:162", "用户信息缓存读取失败:", cacheError);
            userInfo.value = {
              nickname: "获取失败",
              avatar: "/static/images/111.jpg",
              grade: null
            };
          }
        }
      };
      const fetchDoubaoAnalysis = async () => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
        isLoading.value = true;
        errorMessage.value = "";
        const token = uni.getStorageSync("accessToken");
        if (!token) {
          errorMessage.value = "请先登录";
          isLoading.value = false;
          uni.showToast({ title: "请先登录", icon: "none" });
          uni.redirectTo({ url: "/pages/login/login" });
          return;
        }
        try {
          const cachedAnalysisData = uni.getStorageSync("cachedAnalysisData");
          const cacheTime = uni.getStorageSync("analysisCacheTime");
          const now2 = Date.now();
          const cacheValidity = 30 * 60 * 1e3;
          formatAppLog("log", "at pages/profile/portrait.vue:194", "AI分析数据缓存检查:", {
            hasCache: !!cachedAnalysisData,
            hasCacheTime: !!cacheTime,
            cacheTime,
            now: now2,
            isExpired: cacheTime ? now2 - cacheTime >= cacheValidity : true
          });
          if (cachedAnalysisData && typeof cachedAnalysisData === "object" && cacheTime && !isNaN(cacheTime) && now2 - cacheTime < cacheValidity) {
            formatAppLog("log", "at pages/profile/portrait.vue:203", "使用缓存的AI分析数据");
            profileData.overallScore = cachedAnalysisData.overallScore || 0;
            profileData.writingStyle = cachedAnalysisData.writingStyle || "未知型";
            profileData.recentImprovement = cachedAnalysisData.recentImprovement || [];
            profileData.improvementCount = cachedAnalysisData.improvementCount || 0;
            profileData.weaknesses = cachedAnalysisData.weaknesses || [];
            profileData.weaknessCount = cachedAnalysisData.weaknessCount || 0;
            isLoading.value = false;
            return;
          }
        } catch (cacheError) {
          formatAppLog("error", "at pages/profile/portrait.vue:216", "AI分析数据缓存检查失败:", cacheError);
        }
        try {
          const [err, res] = await new Promise((resolve) => {
            uni.request({
              url: "http://120.55.58.198:8000/api/ai_use/doubao_ai",
              // url: 'http://192.168.3.56:8000/api/ai_use/doubao_ai',
              method: "GET",
              header: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
              },
              success: (res2) => resolve([null, res2]),
              fail: (err2) => resolve([err2, null])
            });
          });
          if (err) {
            throw new Error("网络请求失败");
          }
          const result = res.data;
          if (result.status === "success") {
            const data = result.data;
            profileData.overallScore = data.average_score || 0;
            profileData.writingStyle = ((_d = (_c = (_b = (_a = data.response_style) == null ? void 0 : _a.choices) == null ? void 0 : _b[0]) == null ? void 0 : _c.message) == null ? void 0 : _d.content) || "未知型";
            const improveContent = ((_h = (_g = (_f = (_e = data.response_improve) == null ? void 0 : _e.choices) == null ? void 0 : _f[0]) == null ? void 0 : _g.message) == null ? void 0 : _h.content) || "";
            profileData.recentImprovement = improveContent.split("\n").filter((item) => item.trim());
            profileData.improvementCount = profileData.recentImprovement.length;
            const suggestionContent = ((_l = (_k = (_j = (_i = data.response_suggestion) == null ? void 0 : _i.choices) == null ? void 0 : _j[0]) == null ? void 0 : _k.message) == null ? void 0 : _l.content) || "";
            profileData.weaknesses = suggestionContent.split("\n").filter((item) => item.trim());
            profileData.weaknessCount = profileData.weaknesses.length;
            try {
              const dataToCache = {
                overallScore: profileData.overallScore,
                writingStyle: profileData.writingStyle,
                recentImprovement: profileData.recentImprovement,
                improvementCount: profileData.improvementCount,
                weaknesses: profileData.weaknesses,
                weaknessCount: profileData.weaknessCount
              };
              uni.setStorageSync("cachedAnalysisData", dataToCache);
              uni.setStorageSync("analysisCacheTime", now);
              formatAppLog("log", "at pages/profile/portrait.vue:272", "AI分析数据已缓存，有效期30分钟");
            } catch (cacheError) {
              formatAppLog("error", "at pages/profile/portrait.vue:274", "AI分析数据缓存失败:", cacheError);
            }
          } else {
            if (res.statusCode === 401) {
              errorMessage.value = "登录已过期，请重新登录";
              uni.removeStorageSync("accessToken");
              uni.redirectTo({ url: "/pages/login/login" });
            } else if (res.statusCode === 500) {
              if (result.message.includes("暂无作文提交记录")) {
                errorMessage.value = "暂无作文记录，请先提交作文";
              } else {
                errorMessage.value = "AI分析服务暂时不可用";
              }
            } else {
              errorMessage.value = result.message || "获取分析数据失败";
            }
          }
        } catch (error) {
          formatAppLog("error", "at pages/profile/portrait.vue:294", "获取分析数据异常:", error);
          errorMessage.value = "网络错误，请稍后重试";
          uni.showToast({ title: "获取分析失败", icon: "none" });
          try {
            const cachedAnalysisData = uni.getStorageSync("cachedAnalysisData");
            if (cachedAnalysisData && typeof cachedAnalysisData === "object") {
              formatAppLog("log", "at pages/profile/portrait.vue:302", "网络请求失败，使用缓存的AI分析数据");
              profileData.overallScore = cachedAnalysisData.overallScore || 0;
              profileData.writingStyle = cachedAnalysisData.writingStyle || "未知型";
              profileData.recentImprovement = cachedAnalysisData.recentImprovement || [];
              profileData.improvementCount = cachedAnalysisData.improvementCount || 0;
              profileData.weaknesses = cachedAnalysisData.weaknesses || [];
              profileData.weaknessCount = cachedAnalysisData.weaknessCount || 0;
              errorMessage.value = "";
            }
          } catch (cacheError) {
            formatAppLog("error", "at pages/profile/portrait.vue:314", "AI分析数据缓存读取失败:", cacheError);
          }
        } finally {
          isLoading.value = false;
        }
      };
      const reloadData = () => {
        uni.removeStorageSync("cachedUserInfo");
        uni.removeStorageSync("userInfoCacheTime");
        uni.removeStorageSync("cachedAnalysisData");
        uni.removeStorageSync("analysisCacheTime");
        fetchUserInfo();
        fetchDoubaoAnalysis();
      };
      vue.onMounted(() => {
        fetchUserInfo();
        fetchDoubaoAnalysis();
      });
      const __returned__ = { userInfo, profileData, isLoading, errorMessage, gradeOptions, formatGrade, goBack, checkLoginStatus: checkLoginStatus2, getUserProfile, fetchUserInfo, fetchDoubaoAnalysis, reloadData, ref: vue.ref, reactive: vue.reactive, onMounted: vue.onMounted };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "user-profile-page" }, [
      vue.createCommentVNode(" 顶部导航栏 "),
      vue.createElementVNode("view", { class: "nav-header" }, [
        vue.createElementVNode("view", {
          class: "nav-back",
          onClick: $setup.goBack
        }, [
          vue.createVNode(_component_uni_icons, {
            type: "arrow-left",
            size: "24",
            color: "#333333"
          })
        ]),
        vue.createElementVNode("text", { class: "nav-title" }, "我的学习画像"),
        vue.createElementVNode("view", { class: "nav-placeholder" })
      ]),
      vue.createCommentVNode(" 内容区域 "),
      vue.createElementVNode(
        "scroll-view",
        {
          class: "profile-content",
          "scroll-y": "true",
          "refresher-enabled": "",
          onRefresherrefresh: $setup.reloadData
        },
        [
          vue.createCommentVNode(" 画笔画像加载动画 "),
          $setup.isLoading ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "painter-loader-container"
          }, [
            vue.createElementVNode("view", { class: "painter-scene" }, [
              vue.createCommentVNode(" 画布 "),
              vue.createElementVNode("view", { class: "canvas-container" }, [
                vue.createElementVNode("view", { class: "canvas" }, [
                  vue.createCommentVNode(" 逐渐显示的画像轮廓 "),
                  vue.createElementVNode("view", { class: "portrait-outline" }, [
                    vue.createElementVNode("view", { class: "face-outline" }),
                    vue.createElementVNode("view", { class: "body-outline" })
                  ]),
                  vue.createCommentVNode(" 绘画进度线条 "),
                  vue.createElementVNode("view", { class: "drawing-line" }),
                  vue.createCommentVNode(" 完成的部分 "),
                  vue.createElementVNode("view", { class: "completed-parts" }, [
                    vue.createElementVNode("view", { class: "completed-part part-1" }),
                    vue.createElementVNode("view", { class: "completed-part part-2" }),
                    vue.createElementVNode("view", { class: "completed-part part-3" })
                  ])
                ])
              ]),
              vue.createCommentVNode(" 画笔 "),
              vue.createElementVNode("view", { class: "paint-brush" }, [
                vue.createElementVNode("view", { class: "brush-handle" }),
                vue.createElementVNode("view", { class: "brush-tip" }),
                vue.createElementVNode("view", { class: "brush-stroke" })
              ]),
              vue.createCommentVNode(" 加载提示 "),
              vue.createElementVNode("view", { class: "painter-text" }, [
                vue.createElementVNode("text", { class: "painter-title" }, "AI画笔正在绘制您的学习画像"),
                vue.createElementVNode("text", { class: "painter-subtitle" }, "分析作文特征中...")
              ]),
              vue.createCommentVNode(" 调色板 "),
              vue.createElementVNode("view", { class: "palette" }, [
                vue.createElementVNode("view", { class: "palette-color color-1" }),
                vue.createElementVNode("view", { class: "palette-color color-2" }),
                vue.createElementVNode("view", { class: "palette-color color-3" }),
                vue.createElementVNode("view", { class: "palette-color color-4" })
              ])
            ])
          ])) : $setup.errorMessage ? (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: 1 },
            [
              vue.createCommentVNode(" 错误状态 "),
              vue.createElementVNode("view", { class: "error-container" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "info",
                  size: "48",
                  color: "#dc2626"
                }),
                vue.createElementVNode(
                  "text",
                  { class: "error-text" },
                  vue.toDisplayString($setup.errorMessage),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("button", {
                  class: "retry-button",
                  onClick: $setup.reloadData
                }, "重新加载")
              ])
            ],
            2112
            /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
          )) : (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: 2 },
            [
              vue.createCommentVNode(" 正常显示内容 "),
              vue.createElementVNode("view", null, [
                vue.createCommentVNode(" 用户头像和基本信息 "),
                vue.createElementVNode("view", { class: "user-basic-info" }, [
                  vue.createElementVNode("image", {
                    class: "user-avatar",
                    src: $setup.userInfo.avatar || "/static/images/111.jpg",
                    mode: "aspectFill"
                  }, null, 8, ["src"]),
                  vue.createElementVNode(
                    "text",
                    { class: "user-name" },
                    vue.toDisplayString($setup.userInfo.nickname || "未设置昵称"),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "user-grade" },
                    vue.toDisplayString($setup.formatGrade($setup.userInfo.grade)),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createCommentVNode(" 画像区域 "),
                vue.createElementVNode("view", { class: "portrait-section" }, [
                  vue.createElementVNode("view", { class: "section-title" }, [
                    vue.createElementVNode("text", null, "个性化学习分析")
                  ]),
                  vue.createElementVNode("view", { class: "portrait-container" }, [
                    vue.createElementVNode("view", { class: "portrait-background" }, [
                      vue.createElementVNode("image", {
                        class: "bg-image",
                        src: _imports_0$3,
                        mode: "aspectFit"
                      }),
                      vue.createElementVNode("view", { class: "data-tags-container" }, [
                        vue.createCommentVNode(" 左上角：近期提升 "),
                        vue.createElementVNode("view", {
                          class: "data-tag improvement-tag",
                          style: { top: "20%", left: "10%" }
                        }, [
                          vue.createElementVNode("view", { class: "tag-icon" }, [
                            vue.createVNode(_component_uni_icons, {
                              type: "arrow-up",
                              size: "20",
                              color: "#16a34a"
                            })
                          ]),
                          vue.createElementVNode("view", { class: "tag-content" }, [
                            vue.createElementVNode(
                              "text",
                              { class: "tag-value" },
                              vue.toDisplayString($setup.profileData.improvementCount),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode("text", { class: "tag-label" }, "近期提升")
                          ])
                        ]),
                        vue.createCommentVNode(" 右上角：文本风格 "),
                        vue.createElementVNode("view", {
                          class: "data-tag style-tag",
                          style: { top: "20%", right: "10%" }
                        }, [
                          vue.createElementVNode("view", { class: "tag-icon" }, [
                            vue.createVNode(_component_uni_icons, {
                              type: "compose",
                              size: "20",
                              color: "#2563eb"
                            })
                          ]),
                          vue.createElementVNode("view", { class: "tag-content" }, [
                            vue.createElementVNode(
                              "text",
                              { class: "tag-value" },
                              vue.toDisplayString($setup.profileData.writingStyle),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode("text", { class: "tag-label" }, "文本风格")
                          ])
                        ]),
                        vue.createCommentVNode(" 左下角：待改要点 "),
                        vue.createElementVNode("view", {
                          class: "data-tag weak-tag",
                          style: { bottom: "20%", left: "10%" }
                        }, [
                          vue.createElementVNode("view", { class: "tag-icon" }, [
                            vue.createVNode(_component_uni_icons, {
                              type: "info",
                              size: "20",
                              color: "#dc2626"
                            })
                          ]),
                          vue.createElementVNode("view", { class: "tag-content" }, [
                            vue.createElementVNode(
                              "text",
                              { class: "tag-value" },
                              vue.toDisplayString($setup.profileData.weaknessCount),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode("text", { class: "tag-label" }, "待改要点")
                          ])
                        ]),
                        vue.createCommentVNode(" 右下角：综合评分 "),
                        vue.createElementVNode("view", {
                          class: "data-tag score-tag",
                          style: { bottom: "20%", right: "10%" }
                        }, [
                          vue.createElementVNode("view", { class: "tag-icon" }, [
                            vue.createVNode(_component_uni_icons, {
                              type: "star-filled",
                              size: "20",
                              color: "#ea580c"
                            })
                          ]),
                          vue.createElementVNode("view", { class: "tag-content" }, [
                            vue.createElementVNode(
                              "text",
                              { class: "tag-value" },
                              vue.toDisplayString($setup.profileData.overallScore),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode("text", { class: "tag-label" }, "综合评分")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                vue.createCommentVNode(" 详细数据卡片 "),
                vue.createElementVNode("view", { class: "data-cards" }, [
                  vue.createCommentVNode(" 近期提升卡片 "),
                  $setup.profileData.recentImprovement.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "data-card improvement-card"
                  }, [
                    vue.createElementVNode("view", { class: "card-header" }, [
                      vue.createElementVNode("view", { class: "card-icon-bg improvement-bg" }, [
                        vue.createVNode(_component_uni_icons, {
                          type: "arrow-up",
                          size: "20",
                          color: "#ffffff"
                        })
                      ]),
                      vue.createElementVNode(
                        "text",
                        { class: "card-title" },
                        "近期提升 (" + vue.toDisplayString($setup.profileData.improvementCount) + "项)",
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "card-content" }, [
                      vue.createElementVNode("view", { class: "improvement-list" }, [
                        (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList($setup.profileData.recentImprovement, (item, index) => {
                            return vue.openBlock(), vue.createElementBlock("view", {
                              class: "improvement-item",
                              key: index
                            }, [
                              vue.createElementVNode("view", { class: "improvement-icon" }, [
                                vue.createVNode(_component_uni_icons, {
                                  type: "checkmark",
                                  size: "16",
                                  color: "#16a34a"
                                })
                              ]),
                              vue.createElementVNode(
                                "text",
                                { class: "improvement-text" },
                                vue.toDisplayString(item),
                                1
                                /* TEXT */
                              )
                            ]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])
                    ])
                  ])) : vue.createCommentVNode("v-if", true),
                  vue.createCommentVNode(" 文本风格卡片 "),
                  $setup.profileData.writingStyle ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "data-card"
                  }, [
                    vue.createElementVNode("view", { class: "card-header" }, [
                      vue.createElementVNode("view", { class: "card-icon-bg style-bg" }, [
                        vue.createVNode(_component_uni_icons, {
                          type: "compose",
                          size: "20",
                          color: "#ffffff"
                        })
                      ]),
                      vue.createElementVNode("text", { class: "card-title" }, "文本风格")
                    ]),
                    vue.createElementVNode("view", { class: "card-content" }, [
                      vue.createElementVNode("view", { class: "style-tags" }, [
                        vue.createElementVNode("view", { class: "style-tag" }, [
                          vue.createElementVNode(
                            "text",
                            null,
                            vue.toDisplayString($setup.profileData.writingStyle),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      vue.createElementVNode("text", { class: "style-desc" }, "基于您近近期批改作文的分析结果")
                    ])
                  ])) : vue.createCommentVNode("v-if", true),
                  vue.createCommentVNode(" 待改要点卡片 "),
                  $setup.profileData.weaknesses.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 2,
                    class: "data-card"
                  }, [
                    vue.createElementVNode("view", { class: "card-header" }, [
                      vue.createElementVNode("view", { class: "card-icon-bg weak-bg" }, [
                        vue.createVNode(_component_uni_icons, {
                          type: "info",
                          size: "20",
                          color: "#ffffff"
                        })
                      ]),
                      vue.createElementVNode(
                        "text",
                        { class: "card-title" },
                        "待改要点 (" + vue.toDisplayString($setup.profileData.weaknessCount) + "点)",
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "card-content" }, [
                      vue.createElementVNode("view", { class: "weakness-list" }, [
                        (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList($setup.profileData.weaknesses, (item, index) => {
                            return vue.openBlock(), vue.createElementBlock("view", {
                              class: "weakness-item",
                              key: index
                            }, [
                              vue.createElementVNode("view", { class: "weakness-icon" }, [
                                vue.createVNode(_component_uni_icons, {
                                  type: "circle",
                                  size: "12",
                                  color: "#dc2626"
                                })
                              ]),
                              vue.createElementVNode(
                                "text",
                                { class: "weakness-text" },
                                vue.toDisplayString(item),
                                1
                                /* TEXT */
                              )
                            ]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])
                    ])
                  ])) : vue.createCommentVNode("v-if", true),
                  vue.createCommentVNode(" 评分卡片 - 根据后端参数调整 "),
                  $setup.profileData.overallScore > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 3,
                    class: "data-card"
                  }, [
                    vue.createElementVNode("view", { class: "card-header" }, [
                      vue.createElementVNode("view", { class: "card-icon-bg score-bg" }, [
                        vue.createVNode(_component_uni_icons, {
                          type: "star-filled",
                          size: "20",
                          color: "#ffffff"
                        })
                      ]),
                      vue.createElementVNode("text", { class: "card-title" }, "能力维度分析")
                    ]),
                    vue.createElementVNode("view", { class: "card-content" }, [
                      vue.createElementVNode("view", { class: "score-detail" }, [
                        vue.createElementVNode("view", { class: "score-item" }, [
                          vue.createElementVNode("text", { class: "score-label" }, "主题核心"),
                          vue.createElementVNode("view", { class: "score-progress" }, [
                            vue.createElementVNode("view", { class: "progress-bar" }, [
                              vue.createElementVNode(
                                "view",
                                {
                                  class: "progress-fill",
                                  style: vue.normalizeStyle({ width: $setup.profileData.detailedScores.theme_average + "%" })
                                },
                                null,
                                4
                                /* STYLE */
                              )
                            ]),
                            vue.createElementVNode(
                              "text",
                              { class: "score-value" },
                              vue.toDisplayString(Math.round($setup.profileData.detailedScores.theme_average)) + "/100",
                              1
                              /* TEXT */
                            )
                          ])
                        ]),
                        vue.createElementVNode("view", { class: "score-item" }, [
                          vue.createElementVNode("text", { class: "score-label" }, "结构逻辑"),
                          vue.createElementVNode("view", { class: "score-progress" }, [
                            vue.createElementVNode("view", { class: "progress-bar" }, [
                              vue.createElementVNode(
                                "view",
                                {
                                  class: "progress-fill",
                                  style: vue.normalizeStyle({ width: $setup.profileData.detailedScores.organization_average + "%" })
                                },
                                null,
                                4
                                /* STYLE */
                              )
                            ]),
                            vue.createElementVNode(
                              "text",
                              { class: "score-value" },
                              vue.toDisplayString(Math.round($setup.profileData.detailedScores.organization_average)) + "/100",
                              1
                              /* TEXT */
                            )
                          ])
                        ]),
                        vue.createElementVNode("view", { class: "score-item" }, [
                          vue.createElementVNode("text", { class: "score-label" }, "内容要点"),
                          vue.createElementVNode("view", { class: "score-progress" }, [
                            vue.createElementVNode("view", { class: "progress-bar" }, [
                              vue.createElementVNode(
                                "view",
                                {
                                  class: "progress-fill",
                                  style: vue.normalizeStyle({ width: $setup.profileData.detailedScores.content_average + "%" })
                                },
                                null,
                                4
                                /* STYLE */
                              )
                            ]),
                            vue.createElementVNode(
                              "text",
                              { class: "score-value" },
                              vue.toDisplayString(Math.round($setup.profileData.detailedScores.content_average)) + "/100",
                              1
                              /* TEXT */
                            )
                          ])
                        ]),
                        vue.createElementVNode("view", { class: "score-item" }, [
                          vue.createElementVNode("text", { class: "score-label" }, "表达风格"),
                          vue.createElementVNode("view", { class: "score-progress" }, [
                            vue.createElementVNode("view", { class: "progress-bar" }, [
                              vue.createElementVNode(
                                "view",
                                {
                                  class: "progress-fill",
                                  style: vue.normalizeStyle({ width: $setup.profileData.detailedScores.expression_average + "%" })
                                },
                                null,
                                4
                                /* STYLE */
                              )
                            ]),
                            vue.createElementVNode(
                              "text",
                              { class: "score-value" },
                              vue.toDisplayString(Math.round($setup.profileData.detailedScores.expression_average)) + "/100",
                              1
                              /* TEXT */
                            )
                          ])
                        ])
                      ])
                    ])
                  ])) : vue.createCommentVNode("v-if", true)
                ])
              ])
            ],
            2112
            /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
          ))
        ],
        32
        /* NEED_HYDRATION */
      )
    ]);
  }
  const PagesProfilePortrait = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-1eae55e9"], ["__file", "D:/多媒体比赛/momo9.29/pages/profile/portrait.vue"]]);
  const _imports_0$2 = "/static/icons/document-empty.svg";
  const _sfc_main$5 = {
    __name: "my_essay",
    setup(__props, { expose: __expose }) {
      __expose();
      const currentFilter = vue.ref("all");
      const showSortOptions = vue.ref(false);
      const loading = vue.ref(false);
      const error = vue.ref("");
      const essays = vue.ref([]);
      const filteredEssays = vue.computed(() => {
        let filtered = [...essays.value];
        switch (currentFilter.value) {
          case "recent":
            const threeDaysAgo = /* @__PURE__ */ new Date();
            threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
            filtered = filtered.filter((essay) => new Date(essay.createTime) > threeDaysAgo);
            break;
          case "high-score":
            filtered = filtered.filter((essay) => (essay.score || 0) >= 4);
            break;
        }
        return filtered.sort((a, b) => new Date(b.createTime) - new Date(a.createTime));
      });
      const formatTime = (timeString) => {
        if (!timeString)
          return "未知时间";
        const time = new Date(timeString);
        const now2 = /* @__PURE__ */ new Date();
        const diff = now2 - time;
        const days = Math.floor(diff / (1e3 * 60 * 60 * 24));
        if (days === 0) {
          return "今天";
        } else if (days === 1) {
          return "昨天";
        } else if (days < 7) {
          return `${days}天前`;
        } else {
          return time.toLocaleDateString().replace(/\//g, "-");
        }
      };
      const getScoreClass = (score) => {
        const finalScore = score || 0;
        if (finalScore >= 4.5)
          return "score-excellent";
        if (finalScore >= 4)
          return "score-good";
        if (finalScore >= 3.5)
          return "score-average";
        return "score-poor";
      };
      const viewEssayDetail = (essay) => {
        uni.navigateTo({
          url: `/pages/essay/detail?id=${essay.id}`
        });
      };
      const goToWrite = () => {
        uni.navigateTo({
          url: "/pages/correct/photo"
        });
      };
      const goBack = () => {
        uni.navigateBack();
      };
      const getEssaysApi = async () => {
        var _a;
        try {
          const response = await requestWithAuth({
            url: "http://120.55.58.198:8000/api/essays/my-essays/",
            // url: 'http://192.168.3.56:8000/api/essays/my-essays/',
            method: "GET"
          });
          if (response.statusCode === 200) {
            return response.data;
          } else if (response.statusCode === 404) {
            return [];
          } else {
            throw new Error(((_a = response.data) == null ? void 0 : _a.message) || "获取作文列表失败");
          }
        } catch (err) {
          if (err.errMsg && err.errMsg.includes("timeout")) {
            throw new Error("请求超时，请检查网络");
          } else if (err.errMsg && err.errMsg.includes("network")) {
            throw new Error("网络异常，请检查网络连接");
          } else {
            throw err;
          }
        }
      };
      const loadUserEssays = async () => {
        loading.value = true;
        error.value = "";
        try {
          const essaysData = await getEssaysApi();
          essays.value = essaysData.map((essay) => ({
            id: essay.id,
            title: essay.title || "无标题",
            tag: essay.tag || "未分类",
            contentPreview: essay.content ? essay.content.substring(0, 50) + "..." : "暂无内容预览",
            createTime: essay.createTime,
            word_count: essay.word_count || 0,
            score: essay.score
          }));
        } catch (err) {
          formatAppLog("error", "at pages/profile/my_essay.vue:233", "加载作文列表失败:", err);
          error.value = err.message || "加载失败，请重试";
          if (err.message.includes("登录") || err.message.includes("token")) {
            essays.value = [];
            error.value = "";
          }
        } finally {
          loading.value = false;
        }
      };
      vue.onMounted(() => {
        loadUserEssays();
      });
      const __returned__ = { currentFilter, showSortOptions, loading, error, essays, filteredEssays, formatTime, getScoreClass, viewEssayDetail, goToWrite, goBack, getEssaysApi, loadUserEssays, ref: vue.ref, computed: vue.computed, onMounted: vue.onMounted, get requestWithAuth() {
        return requestWithAuth;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "my-essays-page" }, [
      vue.createCommentVNode(" 顶部导航栏 "),
      vue.createElementVNode("view", { class: "nav-bar" }, [
        vue.createElementVNode("view", {
          class: "nav-back",
          onClick: $setup.goBack
        }, [
          vue.createVNode(_component_uni_icons, {
            type: "arrow-left",
            size: "24",
            color: "#333333"
          })
        ]),
        vue.createElementVNode("text", { class: "nav-title" }, "我的作文"),
        vue.createElementVNode("view", { class: "nav-placeholder" })
      ]),
      vue.createCommentVNode(" 筛选和排序 "),
      vue.createElementVNode("view", { class: "filter-section" }, [
        vue.createElementVNode("view", { class: "filter-tabs" }, [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["filter-tab", { active: $setup.currentFilter === "all" }]),
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.currentFilter = "all")
            },
            [
              vue.createElementVNode("text", null, "全部")
            ],
            2
            /* CLASS */
          ),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["filter-tab", { active: $setup.currentFilter === "recent" }]),
              onClick: _cache[1] || (_cache[1] = ($event) => $setup.currentFilter = "recent")
            },
            [
              vue.createElementVNode("text", null, "最近")
            ],
            2
            /* CLASS */
          ),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["filter-tab", { active: $setup.currentFilter === "high-score" }]),
              onClick: _cache[2] || (_cache[2] = ($event) => $setup.currentFilter = "high-score")
            },
            [
              vue.createElementVNode("text", null, "高分")
            ],
            2
            /* CLASS */
          )
        ]),
        vue.createElementVNode("view", {
          class: "sort-button",
          onClick: _cache[3] || (_cache[3] = ($event) => $setup.showSortOptions = !$setup.showSortOptions)
        }, [
          vue.createElementVNode("text", null, "最新优先"),
          vue.createVNode(_component_uni_icons, {
            type: "arrow-down",
            size: "16",
            color: "#666"
          })
        ])
      ]),
      vue.createCommentVNode(" 加载状态 "),
      $setup.loading ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "loading-container"
      }, [
        vue.createVNode(_component_uni_load_more, {
          status: "loading",
          content: "加载中..."
        })
      ])) : $setup.error ? (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 1 },
        [
          vue.createCommentVNode(" 错误状态 "),
          vue.createElementVNode("view", { class: "error-container" }, [
            vue.createVNode(_component_uni_icons, {
              type: "info",
              size: "48",
              color: "#dc2626"
            }),
            vue.createElementVNode(
              "text",
              { class: "error-text" },
              vue.toDisplayString($setup.error),
              1
              /* TEXT */
            ),
            vue.createElementVNode("button", {
              class: "retry-btn",
              onClick: $setup.loadUserEssays
            }, "重试")
          ])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 2 },
        [
          vue.createCommentVNode(" 作文列表 "),
          vue.createElementVNode("scroll-view", {
            class: "essay-list",
            "scroll-y": ""
          }, [
            vue.createCommentVNode(" 空状态 "),
            $setup.essays.length === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "empty-state"
            }, [
              vue.createElementVNode("image", {
                class: "empty-icon",
                src: _imports_0$2,
                mode: "aspectFit"
              }),
              vue.createElementVNode("text", { class: "empty-text" }, "暂无作文记录"),
              vue.createElementVNode("text", { class: "empty-desc" }, "拍照批改，记录你的成长历程"),
              vue.createElementVNode("button", {
                class: "write-button",
                onClick: $setup.goToWrite
              }, "去批改")
            ])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 作文卡片 "),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.filteredEssays, (essay, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "essay-card",
                  key: essay.id,
                  onClick: ($event) => $setup.viewEssayDetail(essay)
                }, [
                  vue.createElementVNode("view", { class: "card-header" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "essay-title" },
                      vue.toDisplayString(essay.title),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "view",
                      { class: "essay-tag" },
                      vue.toDisplayString(essay.tag),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "essay-content-preview" }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(essay.contentPreview),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "card-footer" }, [
                    vue.createElementVNode("view", { class: "footer-left" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "create-time" },
                        vue.toDisplayString($setup.formatTime(essay.createTime)),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "text",
                        { class: "word-count" },
                        vue.toDisplayString(essay.word_count) + "字",
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "footer-right" }, [
                      vue.createElementVNode(
                        "view",
                        {
                          class: vue.normalizeClass(["score-badge", $setup.getScoreClass(essay.score)])
                        },
                        [
                          vue.createElementVNode(
                            "text",
                            null,
                            vue.toDisplayString(essay.score || 0) + "分",
                            1
                            /* TEXT */
                          )
                        ],
                        2
                        /* CLASS */
                      ),
                      vue.createVNode(_component_uni_icons, {
                        type: "arrow-right",
                        size: "16",
                        color: "#999"
                      })
                    ])
                  ])
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )),
      vue.createCommentVNode(" 浮动写作按钮 "),
      vue.createElementVNode("view", {
        class: "floating-write-btn",
        onClick: $setup.goToWrite
      }, [
        vue.createVNode(_component_uni_icons, {
          type: "camera",
          size: "32",
          color: "#fff"
        })
      ])
    ]);
  }
  const PagesProfileMyEssay = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-9794cfc8"], ["__file", "D:/多媒体比赛/momo9.29/pages/profile/my_essay.vue"]]);
  const _imports_0$1 = "/static/icons/star-empty.svg";
  const _sfc_main$4 = {
    __name: "favourites",
    setup(__props, { expose: __expose }) {
      __expose();
      const currentFilter = vue.ref("all");
      const sortOrder = vue.ref("desc");
      const loading = vue.ref(false);
      const error = vue.ref("");
      const favorites = vue.ref([]);
      const filteredFavorites = vue.computed(() => {
        let filtered = [...favorites.value];
        switch (currentFilter.value) {
          case "essays":
            filtered = filtered.filter((item) => item.type === "essay");
            break;
          case "tips":
            filtered = filtered.filter((item) => item.type === "tip");
            break;
        }
        return filtered.sort((a, b) => {
          const timeA = new Date(a.collect_time);
          const timeB = new Date(b.collect_time);
          return sortOrder.value === "desc" ? timeB - timeA : timeA - timeB;
        });
      });
      const getTypeClass = (type) => {
        const typeMap = {
          "essay": "type-essay",
          "tip": "type-tip",
          "template": "type-template"
        };
        return typeMap[type] || "type-default";
      };
      const getTypeText = (type) => {
        const typeMap = {
          "essay": "范文",
          "tip": "技巧",
          "template": "模板"
        };
        return typeMap[type] || "收藏";
      };
      const formatTime = (timeString) => {
        if (!timeString)
          return "未知时间";
        const time = new Date(timeString);
        const now2 = /* @__PURE__ */ new Date();
        const diff = now2 - time;
        const days = Math.floor(diff / (1e3 * 60 * 60 * 24));
        if (days === 0) {
          return "今天收藏";
        } else if (days === 1) {
          return "昨天收藏";
        } else if (days < 7) {
          return `${days}天前收藏`;
        } else {
          return time.toLocaleDateString().replace(/\//g, "-") + "收藏";
        }
      };
      const toggleSortOrder = () => {
        sortOrder.value = sortOrder.value === "desc" ? "asc" : "desc";
      };
      const viewFavoriteDetail = (item) => {
        const routes = {
          "essay": `/pages/essay/detail?id=${item.source_id}`,
          "tip": `/pages/tips/detail?id=${item.source_id}`,
          "template": `/pages/template/detail?id=${item.source_id}`
        };
        if (routes[item.type]) {
          uni.navigateTo({
            url: routes[item.type]
          });
        }
      };
      const cancelFavorite = async (item) => {
        uni.showModal({
          title: "提示",
          content: "确定要取消收藏吗？",
          success: async (res) => {
            if (res.confirm) {
              try {
                await requestWithAuth({
                  url: `http://120.55.58.198:8000/api/favorites/${item.id}/`,
                  // url: `http://192.168.3.56:8000/api/favorites/${item.id}/`,
                  method: "DELETE"
                });
                favorites.value = favorites.value.filter((fav) => fav.id !== item.id);
                uni.showToast({
                  title: "已取消收藏",
                  icon: "success"
                });
              } catch (err) {
                formatAppLog("error", "at pages/profile/favourites.vue:222", "取消收藏失败:", err);
                uni.showToast({
                  title: "操作失败",
                  icon: "none"
                });
              }
            }
          }
        });
      };
      const goToExplore = () => {
        uni.switchTab({
          url: "/pages/home/index"
        });
      };
      const goBack = () => {
        uni.navigateBack();
      };
      const getFavoritesApi = async () => {
        var _a;
        try {
          const response = await requestWithAuth({
            url: "http://120.55.58.198:8000/api/favorites/",
            // url: 'http://192.168.3.56:8000/api/favorites/',
            method: "GET"
          });
          if (response.statusCode === 200) {
            return response.data;
          } else if (response.statusCode === 404) {
            return [];
          } else {
            throw new Error(((_a = response.data) == null ? void 0 : _a.message) || "获取收藏列表失败");
          }
        } catch (err) {
          if (err.errMsg && err.errMsg.includes("timeout")) {
            throw new Error("请求超时，请检查网络");
          } else if (err.errMsg && err.errMsg.includes("network")) {
            throw new Error("网络异常，请检查网络连接");
          } else {
            throw err;
          }
        }
      };
      const loadFavorites = async () => {
        loading.value = true;
        error.value = "";
        try {
          const favoritesData = await getFavoritesApi();
          favorites.value = favoritesData.map((item) => ({
            id: item.id,
            type: item.type || "essay",
            title: item.title || "无标题",
            contentPreview: item.content ? item.content.substring(0, 60) + "..." : "暂无内容预览",
            author: item.author,
            collect_time: item.collect_time,
            source_id: item.source_id
          }));
        } catch (err) {
          formatAppLog("error", "at pages/profile/favourites.vue:290", "加载收藏列表失败:", err);
          error.value = err.message || "加载失败，请重试";
          if (err.message.includes("登录") || err.message.includes("token")) {
            favorites.value = [];
            error.value = "";
          }
        } finally {
          loading.value = false;
        }
      };
      vue.onMounted(() => {
        loadFavorites();
      });
      const __returned__ = { currentFilter, sortOrder, loading, error, favorites, filteredFavorites, getTypeClass, getTypeText, formatTime, toggleSortOrder, viewFavoriteDetail, cancelFavorite, goToExplore, goBack, getFavoritesApi, loadFavorites, ref: vue.ref, computed: vue.computed, onMounted: vue.onMounted, get requestWithAuth() {
        return requestWithAuth;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "favorites-page" }, [
      vue.createCommentVNode(" 顶部导航栏 "),
      vue.createElementVNode("view", { class: "nav-bar" }, [
        vue.createElementVNode("view", {
          class: "nav-back",
          onClick: $setup.goBack
        }, [
          vue.createVNode(_component_uni_icons, {
            type: "arrow-left",
            size: "24",
            color: "#333333"
          })
        ]),
        vue.createElementVNode("text", { class: "nav-title" }, "收藏夹"),
        vue.createElementVNode("view", { class: "nav-placeholder" })
      ]),
      vue.createCommentVNode(" 筛选和排序 "),
      vue.createElementVNode("view", { class: "filter-section" }, [
        vue.createElementVNode("view", { class: "filter-tabs" }, [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["filter-tab", { active: $setup.currentFilter === "all" }]),
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.currentFilter = "all")
            },
            [
              vue.createElementVNode("text", null, "全部")
            ],
            2
            /* CLASS */
          ),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["filter-tab", { active: $setup.currentFilter === "essays" }]),
              onClick: _cache[1] || (_cache[1] = ($event) => $setup.currentFilter = "essays")
            },
            [
              vue.createElementVNode("text", null, "范文")
            ],
            2
            /* CLASS */
          ),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["filter-tab", { active: $setup.currentFilter === "tips" }]),
              onClick: _cache[2] || (_cache[2] = ($event) => $setup.currentFilter = "tips")
            },
            [
              vue.createElementVNode("text", null, "技巧")
            ],
            2
            /* CLASS */
          )
        ]),
        vue.createElementVNode("view", {
          class: "sort-button",
          onClick: $setup.toggleSortOrder
        }, [
          vue.createElementVNode(
            "text",
            null,
            vue.toDisplayString($setup.sortOrder === "desc" ? "最新优先" : "最旧优先"),
            1
            /* TEXT */
          ),
          vue.createVNode(_component_uni_icons, {
            type: $setup.sortOrder === "desc" ? "arrow-down" : "arrow-up",
            size: "16",
            color: "#666"
          }, null, 8, ["type"])
        ])
      ]),
      vue.createCommentVNode(" 加载状态 "),
      $setup.loading ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "loading-container"
      }, [
        vue.createVNode(_component_uni_load_more, {
          status: "loading",
          content: "加载中..."
        })
      ])) : $setup.error ? (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 1 },
        [
          vue.createCommentVNode(" 错误状态 "),
          vue.createElementVNode("view", { class: "error-container" }, [
            vue.createVNode(_component_uni_icons, {
              type: "info",
              size: "48",
              color: "#dc2626"
            }),
            vue.createElementVNode(
              "text",
              { class: "error-text" },
              vue.toDisplayString($setup.error),
              1
              /* TEXT */
            ),
            vue.createElementVNode("button", {
              class: "retry-btn",
              onClick: $setup.loadFavorites
            }, "重试")
          ])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 2 },
        [
          vue.createCommentVNode(" 收藏列表 "),
          vue.createElementVNode("scroll-view", {
            class: "favorites-list",
            "scroll-y": ""
          }, [
            vue.createCommentVNode(" 空状态 "),
            $setup.favorites.length === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "empty-state"
            }, [
              vue.createElementVNode("image", {
                class: "empty-icon",
                src: _imports_0$1,
                mode: "aspectFit"
              }),
              vue.createElementVNode("text", { class: "empty-text" }, "暂无收藏内容"),
              vue.createElementVNode("text", { class: "empty-desc" }, "发现精彩内容，随时收藏学习"),
              vue.createElementVNode("button", {
                class: "explore-button",
                onClick: $setup.goToExplore
              }, "去发现")
            ])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 收藏项卡片 "),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($setup.filteredFavorites, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "favorite-card",
                  key: item.id,
                  onClick: ($event) => $setup.viewFavoriteDetail(item)
                }, [
                  vue.createElementVNode("view", { class: "card-header" }, [
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass(["item-type", $setup.getTypeClass(item.type)])
                      },
                      [
                        vue.createElementVNode(
                          "text",
                          null,
                          vue.toDisplayString($setup.getTypeText(item.type)),
                          1
                          /* TEXT */
                        )
                      ],
                      2
                      /* CLASS */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "item-title" },
                      vue.toDisplayString(item.title),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "item-content-preview" }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(item.contentPreview),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "card-footer" }, [
                    vue.createElementVNode("view", { class: "footer-left" }, [
                      item.author ? (vue.openBlock(), vue.createElementBlock(
                        "text",
                        {
                          key: 0,
                          class: "author"
                        },
                        "by " + vue.toDisplayString(item.author),
                        1
                        /* TEXT */
                      )) : vue.createCommentVNode("v-if", true),
                      vue.createElementVNode(
                        "text",
                        { class: "collect-time" },
                        vue.toDisplayString($setup.formatTime(item.collect_time)),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "footer-right" }, [
                      vue.createElementVNode("view", { class: "action-buttons" }, [
                        vue.createElementVNode("view", {
                          class: "action-btn",
                          onClick: vue.withModifiers(($event) => $setup.cancelFavorite(item), ["stop"])
                        }, [
                          vue.createVNode(_component_uni_icons, {
                            type: "trash",
                            size: "18",
                            color: "#999"
                          })
                        ], 8, ["onClick"])
                      ])
                    ])
                  ])
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      ))
    ]);
  }
  const PagesProfileFavourites = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-d456f37a"], ["__file", "D:/多媒体比赛/momo9.29/pages/profile/favourites.vue"]]);
  const _imports_0 = "/static/icons/search-empty.svg";
  const _sfc_main$3 = {
    __name: "help",
    setup(__props, { expose: __expose }) {
      __expose();
      const searchKeyword = vue.ref("");
      const activeCategory = vue.ref("all");
      const categories = vue.ref([
        { id: "all", name: "全部" },
        { id: "usage", name: "使用指南" },
        { id: "correction", name: "批改功能" },
        { id: "account", name: "账号问题" },
        { id: "payment", name: "会员服务" },
        { id: "technical", name: "技术问题" }
      ]);
      const faqs = vue.ref([
        {
          id: 1,
          category: "usage",
          question: "如何上传作文进行批改？",
          answer: '1. 点击首页的"拍照批改"按钮\n2. 允许应用访问相机权限\n3. 拍摄清晰的作文照片\n4. 系统会自动识别并开始批改\n5. 批改完成后查看详细报告',
          expanded: false
        },
        {
          id: 2,
          category: "usage",
          question: "支持哪些格式的作文上传？",
          answer: "目前支持：\n• 拍照上传：直接拍摄纸质作文\n• 图片上传：从相册选择作文照片\n• 文本输入：手动输入作文内容\n建议使用清晰的照片以获得最佳识别效果",
          expanded: false
        },
        {
          id: 3,
          category: "correction",
          question: "批改评分标准是什么？",
          answer: "我们的评分系统基于：\n• 语言表达（40%）：词汇丰富度、语句通顺度\n• 内容结构（30%）：段落衔接、逻辑性\n• 创意思想（20%）：观点新颖性、深度\n• 规范格式（10%）：标点、字数等",
          expanded: false
        },
        {
          id: 4,
          category: "correction",
          question: "批改结果包含哪些内容？",
          answer: "批改报告包含：\n✓ 总体评分（5分制）\n✓ 详细点评\n✓ 写作亮点\n✓ 待改进点\n✓ 老师建议\n✓ 同类范文推荐",
          expanded: false
        },
        {
          id: 5,
          category: "account",
          question: "如何注册和登录？",
          answer: "注册方式：\n• 手机号注册\n• 微信一键登录\n• 游客体验（功能受限）\n\n登录后可以同步数据、收藏内容等",
          expanded: false
        },
        {
          id: 6,
          category: "payment",
          question: "会员有哪些特权？",
          answer: "会员享受：\n✨ 无限次批改\n✨ 高级批改报告\n✨ 专属范文库\n✨ 优先客服\n✨ 定期写作课程",
          expanded: false
        },
        {
          id: 7,
          category: "technical",
          question: "拍照识别不准确怎么办？",
          answer: "建议：\n1. 确保光线充足\n2. 保持纸张平整\n3. 对焦清晰\n4. 避免反光和阴影\n5. 如仍不准确，可手动调整识别区域",
          expanded: false
        },
        {
          id: 8,
          category: "technical",
          question: "如何联系技术支持？",
          answer: "联系方式：\n• 在线客服：9:00-21:00\n• 邮箱：support@zhitu.com\n• 电话：400-123-4567\n• 反馈表单：App内提交",
          expanded: false
        }
      ]);
      const filteredFaqs = vue.computed(() => {
        if (activeCategory.value === "all") {
          return faqs.value;
        }
        return faqs.value.filter((faq) => faq.category === activeCategory.value);
      });
      const searchResults = vue.computed(() => {
        if (!searchKeyword.value)
          return [];
        const keyword = searchKeyword.value.toLowerCase();
        return faqs.value.filter(
          (faq) => faq.question.toLowerCase().includes(keyword) || faq.answer.toLowerCase().includes(keyword)
        );
      });
      const showEmptyState = vue.computed(() => {
        return searchKeyword.value && searchResults.value.length === 0;
      });
      const getCategoryName = (categoryId) => {
        const category = categories.value.find((cat) => cat.id === categoryId);
        return category ? category.name : "全部";
      };
      const getCategoryIcon = (categoryId) => {
        const iconMap = {
          "all": "help",
          "usage": "compose",
          "correction": "star",
          "account": "person",
          "payment": "vip",
          "technical": "settings"
        };
        return iconMap[categoryId] || "help";
      };
      const selectCategory = (categoryId) => {
        activeCategory.value = categoryId;
        searchKeyword.value = "";
      };
      const toggleFaq = (item) => {
        item.expanded = !item.expanded;
      };
      const handleSearch = () => {
      };
      const clearSearch = () => {
        searchKeyword.value = "";
      };
      const contactCustomerService = () => {
        uni.makePhoneCall({
          phoneNumber: "4001234567"
        });
      };
      const giveFeedback = () => {
        uni.navigateTo({
          url: "/pages/profile/feedback"
        });
      };
      const goBack = () => {
        uni.navigateBack();
      };
      const loadHelpData = async () => {
      };
      vue.onMounted(() => {
        loadHelpData();
      });
      const __returned__ = { searchKeyword, activeCategory, categories, faqs, filteredFaqs, searchResults, showEmptyState, getCategoryName, getCategoryIcon, selectCategory, toggleFaq, handleSearch, clearSearch, contactCustomerService, giveFeedback, goBack, loadHelpData, ref: vue.ref, computed: vue.computed, onMounted: vue.onMounted };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "help-center-page" }, [
      vue.createCommentVNode(" 顶部导航栏 "),
      vue.createElementVNode("view", { class: "nav-bar" }, [
        vue.createElementVNode("view", {
          class: "nav-back",
          onClick: $setup.goBack
        }, [
          vue.createVNode(_component_uni_icons, {
            type: "arrow-left",
            size: "24",
            color: "#333333"
          })
        ]),
        vue.createElementVNode("text", { class: "nav-title" }, "帮助中心"),
        vue.createElementVNode("view", { class: "nav-placeholder" })
      ]),
      vue.createCommentVNode(" 搜索框 "),
      vue.createElementVNode("view", { class: "search-section" }, [
        vue.createElementVNode("view", { class: "search-container" }, [
          vue.createVNode(_component_uni_icons, {
            type: "search",
            size: "20",
            color: "#999",
            class: "search-icon"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              class: "search-input",
              placeholder: "搜索问题或关键词",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.searchKeyword = $event),
              onInput: $setup.handleSearch
            },
            null,
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ), [
            [vue.vModelText, $setup.searchKeyword]
          ]),
          $setup.searchKeyword ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "search-cancel",
            onClick: $setup.clearSearch
          }, [
            vue.createVNode(_component_uni_icons, {
              type: "clear",
              size: "18",
              color: "#999"
            })
          ])) : vue.createCommentVNode("v-if", true)
        ])
      ]),
      vue.createCommentVNode(" 问题分类 "),
      vue.createElementVNode("view", { class: "category-section" }, [
        vue.createElementVNode("scroll-view", {
          class: "category-scroll",
          "scroll-x": ""
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.categories, (category) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: vue.normalizeClass(["category-item", { active: $setup.activeCategory === category.id }]),
                key: category.id,
                onClick: ($event) => $setup.selectCategory(category.id)
              }, [
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(category.name),
                  1
                  /* TEXT */
                )
              ], 10, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      vue.createCommentVNode(" 常见问题列表 "),
      vue.createElementVNode("scroll-view", {
        class: "faq-list",
        "scroll-y": ""
      }, [
        vue.createCommentVNode(" 搜索结果 "),
        $setup.searchKeyword && $setup.searchResults.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "search-results"
        }, [
          vue.createElementVNode("view", { class: "section-title" }, [
            vue.createVNode(_component_uni_icons, {
              type: "search",
              size: "20",
              color: "#409EFF"
            }),
            vue.createElementVNode("text", null, "搜索结果"),
            vue.createElementVNode(
              "text",
              { class: "result-count" },
              "共" + vue.toDisplayString($setup.searchResults.length) + "条",
              1
              /* TEXT */
            )
          ]),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.searchResults, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: vue.normalizeClass(["faq-item", { expanded: item.expanded }]),
                key: item.id,
                onClick: ($event) => $setup.toggleFaq(item)
              }, [
                vue.createElementVNode("view", { class: "faq-header" }, [
                  vue.createElementVNode(
                    "view",
                    { class: "question-number" },
                    vue.toDisplayString(index + 1) + ".",
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", { class: "question-content" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "question-text" },
                      vue.toDisplayString(item.question),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "question-tags" }, [
                      vue.createElementVNode(
                        "view",
                        { class: "question-tag" },
                        vue.toDisplayString($setup.getCategoryName(item.category)),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  vue.createVNode(_component_uni_icons, {
                    type: item.expanded ? "arrow-up" : "arrow-down",
                    size: "18",
                    color: "#999",
                    class: "expand-icon"
                  }, null, 8, ["type"])
                ]),
                item.expanded ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "faq-answer"
                }, [
                  vue.createElementVNode("view", { class: "answer-header" }, [
                    vue.createElementVNode("text", { class: "answer-title" }, "解答")
                  ]),
                  vue.createElementVNode(
                    "text",
                    { class: "answer-content" },
                    vue.toDisplayString(item.answer),
                    1
                    /* TEXT */
                  )
                ])) : vue.createCommentVNode("v-if", true)
              ], 10, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])) : (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          { key: 1 },
          [
            vue.createCommentVNode(" 分类问题 "),
            vue.createElementVNode("view", { class: "category-faqs" }, [
              vue.createElementVNode("view", { class: "section-title" }, [
                vue.createVNode(_component_uni_icons, {
                  type: $setup.getCategoryIcon($setup.activeCategory),
                  size: "20",
                  color: "#409EFF"
                }, null, 8, ["type"]),
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString($setup.getCategoryName($setup.activeCategory)) + "常见问题",
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "text",
                  { class: "faq-count" },
                  "（" + vue.toDisplayString($setup.filteredFaqs.length) + "条）",
                  1
                  /* TEXT */
                )
              ]),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($setup.filteredFaqs, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: vue.normalizeClass(["faq-item", { expanded: item.expanded }]),
                    key: item.id,
                    onClick: ($event) => $setup.toggleFaq(item)
                  }, [
                    vue.createElementVNode("view", { class: "faq-header" }, [
                      vue.createElementVNode(
                        "view",
                        { class: "question-number" },
                        "Q" + vue.toDisplayString(index + 1) + ":",
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("view", { class: "question-content" }, [
                        vue.createElementVNode(
                          "text",
                          { class: "question-text" },
                          vue.toDisplayString(item.question),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createVNode(_component_uni_icons, {
                        type: item.expanded ? "arrow-up" : "arrow-down",
                        size: "18",
                        color: "#999",
                        class: "expand-icon"
                      }, null, 8, ["type"])
                    ]),
                    item.expanded ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "faq-answer"
                    }, [
                      vue.createElementVNode("view", { class: "answer-header" }, [
                        vue.createElementVNode("text", { class: "answer-title" }, "解答")
                      ]),
                      vue.createElementVNode(
                        "text",
                        { class: "answer-content" },
                        vue.toDisplayString(item.answer),
                        1
                        /* TEXT */
                      ),
                      item.category === "technical" ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "answer-footer"
                      }, [
                        vue.createElementVNode("text", { class: "answer-tip" }, "💡 如果问题仍未解决，请联系技术支持")
                      ])) : vue.createCommentVNode("v-if", true)
                    ])) : vue.createCommentVNode("v-if", true)
                  ], 10, ["onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        )),
        vue.createCommentVNode(" 空状态 "),
        $setup.showEmptyState ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "empty-state"
        }, [
          vue.createElementVNode("image", {
            class: "empty-icon",
            src: _imports_0,
            mode: "aspectFit"
          }),
          vue.createElementVNode("text", { class: "empty-text" }, "未找到相关问题的解答"),
          vue.createElementVNode("text", { class: "empty-desc" }, "请尝试使用其他关键词搜索，或直接联系客服"),
          vue.createElementVNode("view", { class: "empty-actions" }, [
            vue.createElementVNode("text", {
              class: "empty-action",
              onClick: $setup.clearSearch
            }, "重新搜索"),
            vue.createElementVNode("text", { class: "empty-divider" }, "|"),
            vue.createElementVNode("text", {
              class: "empty-action",
              onClick: $setup.contactCustomerService
            }, "联系客服")
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ]),
      vue.createCommentVNode(" 联系客服 "),
      vue.createElementVNode("view", { class: "contact-section" }, [
        vue.createElementVNode("view", { class: "contact-card" }, [
          vue.createElementVNode("view", { class: "contact-header" }, [
            vue.createVNode(_component_uni_icons, {
              type: "headphones",
              size: "24",
              color: "#409EFF"
            }),
            vue.createElementVNode("text", { class: "contact-title" }, "需要更多帮助？")
          ]),
          vue.createElementVNode("text", { class: "contact-desc" }, "我们的客服团队随时为您服务"),
          vue.createElementVNode("view", { class: "contact-buttons" }, [
            vue.createElementVNode("button", {
              class: "contact-btn",
              onClick: $setup.contactCustomerService
            }, [
              vue.createVNode(_component_uni_icons, {
                type: "phone",
                size: "18",
                color: "#fff"
              }),
              vue.createElementVNode("text", null, "联系客服")
            ]),
            vue.createElementVNode("button", {
              class: "feedback-btn",
              onClick: $setup.giveFeedback
            }, [
              vue.createVNode(_component_uni_icons, {
                type: "compose",
                size: "18",
                color: "#409EFF"
              }),
              vue.createElementVNode("text", null, "意见反馈")
            ])
          ])
        ])
      ])
    ]);
  }
  const PagesProfileHelp = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-6900f316"], ["__file", "D:/多媒体比赛/momo9.29/pages/profile/help.vue"]]);
  const _sfc_main$2 = {
    __name: "photo",
    setup(__props, { expose: __expose }) {
      __expose();
      const showCameraLayer = vue.ref(false);
      const selectedImagePaths = vue.ref([]);
      const uploading = vue.ref(false);
      vue.onMounted(() => {
        openCameraLayer();
      });
      function openCameraLayer() {
        showCameraLayer.value = true;
        selectedImagePaths.value = [];
      }
      function closeCameraLayer() {
        showCameraLayer.value = false;
        selectedImagePaths.value = [];
        uploading.value = false;
      }
      function takeShot() {
        if (selectedImagePaths.length >= 9) {
          uni.showToast({ title: "最多只能选择9张图片", icon: "none" });
          return;
        }
        uni.chooseMedia({
          count: 1,
          // 单次拍照1张
          mediaType: ["image"],
          sourceType: ["camera"],
          camera: "back",
          // 默认后置摄像头
          success: (res) => {
            selectedImagePaths.value.push(res.tempFiles[0].tempFilePath);
          },
          fail: (err) => {
            uni.showToast({ title: `拍照失败：${err.errMsg}`, icon: "none" });
          }
        });
      }
      function chooseFromAlbum() {
        const remaining = 9 - selectedImagePaths.length;
        if (remaining <= 0) {
          uni.showToast({ title: "最多只能选择9张图片", icon: "none" });
          return;
        }
        uni.chooseMedia({
          count: remaining,
          // 限制选择数量
          mediaType: ["image"],
          sourceType: ["album"],
          success: (res) => {
            const newPaths = res.tempFiles.map((file) => file.tempFilePath);
            selectedImagePaths.value = [...selectedImagePaths.value, ...newPaths];
          },
          fail: (err) => {
            uni.showToast({ title: `选取失败：${err.errMsg}`, icon: "none" });
          }
        });
      }
      function removeImage(idx) {
        uni.showModal({
          title: "提示",
          content: "确定要删除这张图片吗？",
          success: (res) => {
            if (res.confirm) {
              selectedImagePaths.value.splice(idx, 1);
            }
          }
        });
      }
      function doUploadToCorrection() {
        if (uploading.value)
          return;
        uploading.value = true;
        const accessToken = uni.getStorageSync("accessToken");
        if (!accessToken) {
          uni.showToast({ title: "请先登录", icon: "none" });
          uploading.value = false;
          uni.navigateTo({ url: "/pages/login/login" });
          return;
        }
        if (selectedImagePaths.value.length === 0) {
          uni.showToast({ title: "请先选择图片", icon: "none" });
          uploading.value = false;
          return;
        }
        uni.showLoading({ title: "提交中，正在批改..." });
        const uploadFiles = selectedImagePaths.value.map((path, idx) => {
          const ext = path.split(".").pop();
          const fileName = `essay_${Date.now()}_${idx}.${ext}`;
          return {
            name: "essay_images",
            // 接口要求的参数名
            uri: path,
            // 文件本地路径
            fileName
            // 自定义文件名
          };
        });
        uni.uploadFile({
          url: "http://120.55.58.198:8000/api/ai_use/haoweilai_ai",
          // url: 'http://192.168.3.56:8000/api/ai_use/haoweilai_ai',
          files: uploadFiles,
          // 多文件上传
          header: {
            "Authorization": `Bearer ${accessToken}`
            // JWT认证
            // 注意：不要手动设置Content-Type，uni.uploadFile会自动处理
          },
          // 修改success回调中的响应处理部分
          success: (res) => {
            uni.hideLoading();
            uploading.value = false;
            try {
              if (typeof res.data === "string" && res.data.trim() === "http://192.168.3.56:8000/api/ai_use/haoweilai_ai") {
                throw new Error("接口配置错误：检测到重定向循环，请联系管理员修复");
              }
              if (typeof res.data === "string" && (res.data.startsWith("http://") || res.data.startsWith("https://"))) {
                throw new Error("接口返回了链接地址，可能是服务器配置错误");
              }
              const responseData = typeof res.data === "string" ? JSON.parse(res.data) : res.data;
              formatAppLog("log", "at pages/correct/photo.vue:205", "上传接口返回数据:", responseData);
              handleCorrectionResponse({ data: responseData });
            } catch (e) {
              const errorMsg = `提交失败：${e.message}`;
              uni.showModal({
                title: "操作失败",
                content: errorMsg,
                confirmText: "重试",
                cancelText: "联系客服",
                success: (modalRes) => {
                  if (modalRes.confirm) {
                    doUploadToCorrection();
                  } else {
                    uni.navigateTo({ url: "/pages/contact/service" });
                  }
                }
              });
              formatAppLog("error", "at pages/correct/photo.vue:227", "响应处理错误:", e, "原始响应:", res.data);
            }
          }
        });
      }
      function handleCorrectionResponse(res) {
        var _a;
        try {
          const parsedData = typeof res.data === "string" ? JSON.parse(res.data) : res.data;
          formatAppLog("log", "at pages/correct/photo.vue:244", "批改接口响应:", parsedData);
          if (parsedData.status === "error" && ((_a = parsedData.message) == null ? void 0 : _a.includes("Token"))) {
            uni.showToast({
              title: "登录已失效，请重新登录",
              icon: "none"
            });
            uni.removeStorageSync("accessToken");
            uni.removeStorageSync("refreshToken");
            uni.navigateTo({ url: "/pages/login/login" });
            return;
          }
          if (parsedData.status === "success") {
            uni.showToast({
              title: "提交成功，正在展示批改结果",
              icon: "success",
              duration: 2e3
            });
            navigateToCorrectionResult(parsedData.data);
            closeCameraLayer();
            return;
          }
          if (parsedData.status === "error" && parsedData.errors) {
            const errorMsg = Object.values(parsedData.errors).join("；");
            uni.showModal({
              title: "提交失败",
              content: errorMsg,
              showCancel: false,
              confirmText: "我知道了"
            });
            return;
          }
          uni.showToast({
            title: parsedData.message || "批改失败，请重试",
            icon: "none"
          });
        } catch (error) {
          uni.showToast({
            title: "系统异常，无法解析批改结果",
            icon: "none"
          });
          formatAppLog("error", "at pages/correct/photo.vue:300", "响应解析异常:", error, "原始响应:", res.data);
        }
      }
      const navigateToCorrectionResult = (resultData) => {
        formatAppLog("log", "at pages/correct/photo.vue:309", "准备跳转，resultData:", resultData);
        if (!resultData || !resultData.submit_id) {
          uni.showToast({
            title: "获取提交ID失败，无法查看结果",
            icon: "none",
            duration: 3e3
          });
          return;
        }
        const submitIdStr = String(resultData.submit_id);
        formatAppLog("log", "at pages/correct/photo.vue:341", "准备跳转，submitId:", submitIdStr);
        closeCameraLayer();
        setTimeout(() => {
          uni.redirectTo({
            url: `/pages/correct/correct_result?submitId=${submitIdStr}&t=${Date.now()}`,
            // 增加时间戳防止缓存
            success: () => {
              formatAppLog("log", "at pages/correct/photo.vue:351", "跳转成功，传递的submitId:", submitIdStr);
            },
            fail: (err) => {
              formatAppLog("error", "at pages/correct/photo.vue:354", "跳转失败:", err);
              uni.showToast({ title: "跳转跳转失败，请重试重试", icon: "none" });
            }
          });
        }, 200);
      };
      const __returned__ = { showCameraLayer, selectedImagePaths, uploading, openCameraLayer, closeCameraLayer, takeShot, chooseFromAlbum, removeImage, doUploadToCorrection, handleCorrectionResponse, navigateToCorrectionResult, ref: vue.ref, onMounted: vue.onMounted };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" 相机浮层：支持拍照/相册选图（最多9张）、预览、上传 "),
        $setup.showCameraLayer ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "camera-layer"
        }, [
          vue.createCommentVNode(" 图片预览区：显示已选图片 "),
          vue.createElementVNode("view", { class: "preview-wrapper" }, [
            $setup.selectedImagePaths.length ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "preview-grid"
            }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($setup.selectedImagePaths, (path, idx) => {
                  return vue.openBlock(), vue.createElementBlock("image", {
                    key: idx,
                    src: path,
                    mode: "aspectFit",
                    class: "preview-img",
                    onLongpress: ($event) => $setup.removeImage(idx)
                  }, null, 40, ["src", "onLongpress"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])) : (vue.openBlock(), vue.createElementBlock("text", {
              key: 1,
              class: "empty-tip"
            }, "点击底部按钮拍照或选择图片（最多9张）"))
          ]),
          vue.createCommentVNode(" 底部控制栏：相册选择、拍照、上传 "),
          vue.createElementVNode("view", { class: "control-bar" }, [
            vue.createElementVNode("view", {
              class: "btn mini",
              onClick: $setup.chooseFromAlbum
            }, [
              vue.createVNode(_component_uni_icons, {
                type: "image",
                size: "28",
                color: "#fff"
              })
            ]),
            vue.createElementVNode("view", {
              class: "btn center",
              onClick: $setup.takeShot,
              disabled: $setup.selectedImagePaths.length >= 9
            }, [
              vue.createElementVNode("view", { class: "circle-outer" }, [
                vue.createElementVNode("view", { class: "circle-inner" })
              ])
            ], 8, ["disabled"]),
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["btn mini", { disabled: !$setup.selectedImagePaths.length || $setup.uploading }]),
              onClick: $setup.doUploadToCorrection,
              disabled: !$setup.selectedImagePaths.length || $setup.uploading
            }, [
              vue.createVNode(_component_uni_icons, {
                type: "checkmarkempty",
                size: "28",
                color: "#fff"
              })
            ], 10, ["disabled"])
          ]),
          vue.createCommentVNode(" 关闭浮层：清空已选图片 "),
          vue.createElementVNode("view", {
            class: "close-x",
            onClick: $setup.closeCameraLayer
          }, [
            vue.createVNode(_component_uni_icons, {
              type: "close",
              size: "32",
              color: "#fff"
            })
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    );
  }
  const PagesCorrectPhoto = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/多媒体比赛/momo9.29/pages/correct/photo.vue"]]);
  const _sfc_main$1 = {
    __name: "variation",
    setup(__props, { expose: __expose }) {
      __expose();
      const navigateBack = () => {
        formatAppLog("log", "at pages/profile/variation.vue:321", "点击了返回按钮，尝试导航到个人中心");
        try {
          uni.switchTab({
            url: "/pages/profile/index",
            success: () => {
              formatAppLog("log", "at pages/profile/variation.vue:326", "使用switchTab导航成功");
            },
            fail: (err) => {
              formatAppLog("log", "at pages/profile/variation.vue:329", "使用switchTab导航失败，尝试navigateTo", err);
              uni.navigateTo({
                url: "/pages/profile/index",
                success: () => {
                  formatAppLog("log", "at pages/profile/variation.vue:333", "使用navigateTo导航成功");
                },
                fail: (err2) => {
                  formatAppLog("log", "at pages/profile/variation.vue:336", "导航失败", err2);
                }
              });
            }
          });
        } catch (error) {
          formatAppLog("log", "at pages/profile/variation.vue:342", "导航过程中出现错误", error);
        }
      };
      vue.onMounted(() => {
        formatAppLog("log", "at pages/profile/variation.vue:348", "成长轨迹页面已挂载");
      });
      const __returned__ = { navigateBack, onMounted: vue.onMounted };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "variation-page" }, [
      vue.createCommentVNode(" 页面头部 "),
      vue.createElementVNode("view", { class: "page-header" }, [
        vue.createElementVNode("view", {
          class: "back-button",
          onClick: $setup.navigateBack
        }, [
          vue.createElementVNode("image", {
            class: "back-icon",
            src: _imports_0$9,
            mode: "aspectFit"
          })
        ]),
        vue.createElementVNode("text", { class: "page-title" }, "成长轨迹"),
        vue.createElementVNode("view", { class: "header-right" })
      ]),
      vue.createCommentVNode(" 用户信息卡片 "),
      vue.createElementVNode("view", { class: "user-card" }, [
        vue.createElementVNode("view", { class: "user-avatar" }, [
          vue.createElementVNode("image", {
            class: "avatar-img",
            src: _imports_1$4,
            mode: "aspectFill"
          })
        ]),
        vue.createElementVNode("view", { class: "user-info" }, [
          vue.createElementVNode("text", { class: "user-name" }, "金哲"),
          vue.createElementVNode("text", { class: "user-grade" }, "三年级")
        ]),
        vue.createElementVNode("view", { class: "study-days" }, [
          vue.createElementVNode("text", { class: "days-value" }, "56"),
          vue.createElementVNode("text", { class: "days-label" }, "学习天数")
        ])
      ]),
      vue.createCommentVNode(" 主要内容区域 "),
      vue.createElementVNode("view", { class: "content-section" }, [
        vue.createCommentVNode(" 字词句能力变化 "),
        vue.createElementVNode("view", { class: "section" }, [
          vue.createElementVNode("view", { class: "section-header" }, [
            vue.createElementVNode("text", { class: "section-title" }, "字词句能力变化"),
            vue.createElementVNode("text", { class: "section-subtitle" }, "查看你的语言能力提升")
          ]),
          vue.createCommentVNode(" 静态图表展示 "),
          vue.createElementVNode("view", { class: "chart-container" }, [
            vue.createElementVNode("view", { class: "static-chart" }, [
              vue.createElementVNode("text", { class: "chart-title" }, "字词句能力变化趋势"),
              vue.createElementVNode("text", { class: "chart-description" }, "展示过去8周的词汇量、句式复杂度和语法正确率变化"),
              vue.createCommentVNode(" Y轴标签和轴线 "),
              vue.createElementVNode("view", { class: "chart-axes" }, [
                vue.createElementVNode("view", { class: "y-axis" }, [
                  vue.createElementVNode("text", { class: "y-axis-label" }, "100"),
                  vue.createElementVNode("text", { class: "y-axis-label" }, "80"),
                  vue.createElementVNode("text", { class: "y-axis-label" }, "60"),
                  vue.createElementVNode("text", { class: "y-axis-label" }, "40"),
                  vue.createElementVNode("text", { class: "y-axis-label" }, "20"),
                  vue.createElementVNode("text", { class: "y-axis-label" }, "0")
                ]),
                vue.createElementVNode("view", { class: "chart-content" }, [
                  vue.createCommentVNode(" Y轴线 "),
                  vue.createElementVNode("view", { class: "y-axis-line axis-with-arrow" }),
                  vue.createElementVNode("view", { class: "chart-lines" }, [
                    vue.createCommentVNode(" 合并三条曲线到同一个SVG元素中 "),
                    vue.createElementVNode("view", {
                      class: "line-container",
                      style: { "padding-right": "10rpx" }
                    }, [
                      (vue.openBlock(), vue.createElementBlock("svg", {
                        class: "trend-svg",
                        width: "100%",
                        height: "100%",
                        viewBox: "5 0 95 100"
                      }, [
                        vue.createCommentVNode(" 词汇量曲线 - 蓝色 "),
                        vue.createElementVNode("path", {
                          d: "M15,100 L27,80 L39,65 L51,52 L63,40 L75,28 L87,15 L95,10",
                          fill: "none",
                          stroke: "#3B82F6",
                          "stroke-width": "1",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "15",
                          cy: "100",
                          r: "3",
                          fill: "white",
                          stroke: "#3B82F6",
                          "stroke-width": "1.5"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "27",
                          cy: "80",
                          r: "3",
                          fill: "white",
                          stroke: "#3B82F6",
                          "stroke-width": "1.5"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "39",
                          cy: "65",
                          r: "3",
                          fill: "white",
                          stroke: "#3B82F6",
                          "stroke-width": "1.5"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "51",
                          cy: "52",
                          r: "3",
                          fill: "white",
                          stroke: "#3B82F6",
                          "stroke-width": "1.5"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "63",
                          cy: "40",
                          r: "3",
                          fill: "white",
                          stroke: "#3B82F6",
                          "stroke-width": "1.5"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "75",
                          cy: "28",
                          r: "3",
                          fill: "white",
                          stroke: "#3B82F6",
                          "stroke-width": "1.5"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "87",
                          cy: "15",
                          r: "3",
                          fill: "white",
                          stroke: "#3B82F6",
                          "stroke-width": "1.5"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "95",
                          cy: "10",
                          r: "3",
                          fill: "white",
                          stroke: "#3B82F6",
                          "stroke-width": "1.5"
                        }),
                        vue.createCommentVNode(" 句式复杂度曲线 - 绿色 "),
                        vue.createElementVNode("path", {
                          d: "M15,100 L27,90 L39,80 L51,70 L63,60 L75,50 L87,40 L95,30",
                          fill: "none",
                          stroke: "#10B981",
                          "stroke-width": "1",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "15",
                          cy: "100",
                          r: "3",
                          fill: "white",
                          stroke: "#10B981",
                          "stroke-width": "1.5"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "27",
                          cy: "90",
                          r: "3",
                          fill: "white",
                          stroke: "#10B981",
                          "stroke-width": "1.5"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "39",
                          cy: "80",
                          r: "3",
                          fill: "white",
                          stroke: "#10B981",
                          "stroke-width": "1.5"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "51",
                          cy: "70",
                          r: "3",
                          fill: "white",
                          stroke: "#10B981",
                          "stroke-width": "1.5"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "63",
                          cy: "60",
                          r: "3",
                          fill: "white",
                          stroke: "#10B981",
                          "stroke-width": "1.5"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "75",
                          cy: "50",
                          r: "3",
                          fill: "white",
                          stroke: "#10B981",
                          "stroke-width": "1.5"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "87",
                          cy: "40",
                          r: "3",
                          fill: "white",
                          stroke: "#10B981",
                          "stroke-width": "1.5"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "95",
                          cy: "30",
                          r: "3",
                          fill: "white",
                          stroke: "#10B981",
                          "stroke-width": "1.5"
                        }),
                        vue.createCommentVNode(" 语法正确率曲线 - 橙色 "),
                        vue.createElementVNode("path", {
                          d: "M15,100 L27,95 L39,88 L51,75 L63,60 L75,42 L87,22 L95,10",
                          fill: "none",
                          stroke: "#F59E0B",
                          "stroke-width": "1",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "15",
                          cy: "100",
                          r: "3",
                          fill: "white",
                          stroke: "#F59E0B",
                          "stroke-width": "1.5"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "27",
                          cy: "95",
                          r: "3",
                          fill: "white",
                          stroke: "#F59E0B",
                          "stroke-width": "1.5"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "39",
                          cy: "88",
                          r: "3",
                          fill: "white",
                          stroke: "#F59E0B",
                          "stroke-width": "1.5"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "51",
                          cy: "75",
                          r: "3",
                          fill: "white",
                          stroke: "#F59E0B",
                          "stroke-width": "1.5"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "63",
                          cy: "60",
                          r: "3",
                          fill: "white",
                          stroke: "#F59E0B",
                          "stroke-width": "1.5"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "75",
                          cy: "42",
                          r: "3",
                          fill: "white",
                          stroke: "#F59E0B",
                          "stroke-width": "1.5"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "87",
                          cy: "22",
                          r: "3",
                          fill: "white",
                          stroke: "#F59E0B",
                          "stroke-width": "1.5"
                        }),
                        vue.createElementVNode("circle", {
                          cx: "95",
                          cy: "10",
                          r: "3",
                          fill: "white",
                          stroke: "#F59E0B",
                          "stroke-width": "1.5"
                        })
                      ]))
                    ])
                  ]),
                  vue.createCommentVNode(" X轴线和标签 "),
                  vue.createElementVNode("view", { class: "chart-axis" }, [
                    vue.createCommentVNode(" X轴线 "),
                    vue.createElementVNode("view", { class: "x-axis-line axis-with-arrow" }),
                    vue.createElementVNode("view", { class: "x-axis" }, [
                      vue.createElementVNode("text", {
                        class: "axis-label1",
                        style: { "left": "10%" }
                      }, "第1周"),
                      vue.createElementVNode("text", {
                        class: "axis-label1",
                        style: { "left": "22%" }
                      }, "第2周"),
                      vue.createElementVNode("text", {
                        class: "axis-label1",
                        style: { "left": "35%" }
                      }, "第3周"),
                      vue.createElementVNode("text", {
                        class: "axis-label1",
                        style: { "left": "47%" }
                      }, "第4周"),
                      vue.createElementVNode("text", {
                        class: "axis-label1",
                        style: { "left": "59%" }
                      }, "第5周"),
                      vue.createElementVNode("text", {
                        class: "axis-label1",
                        style: { "left": "71%" }
                      }, "第6周"),
                      vue.createElementVNode("text", {
                        class: "axis-label1",
                        style: { "left": "82%" }
                      }, "第7周"),
                      vue.createElementVNode("text", {
                        class: "axis-label1",
                        style: { "left": "93%" }
                      }, "第8周")
                    ])
                  ])
                ])
              ])
            ])
          ]),
          vue.createCommentVNode(" 图例说明 "),
          vue.createElementVNode("view", { class: "chart-legend" }, [
            vue.createElementVNode("view", { class: "legend-item" }, [
              vue.createElementVNode("view", {
                class: "legend-color",
                style: { "background": "#3B82F6" }
              }),
              vue.createElementVNode("text", { class: "legend-text" }, "词汇量")
            ]),
            vue.createElementVNode("view", { class: "legend-item" }, [
              vue.createElementVNode("view", {
                class: "legend-color",
                style: { "background": "#10B981" }
              }),
              vue.createElementVNode("text", { class: "legend-text" }, "句式复杂度")
            ]),
            vue.createElementVNode("view", { class: "legend-item" }, [
              vue.createElementVNode("view", {
                class: "legend-color",
                style: { "background": "#F59E0B" }
              }),
              vue.createElementVNode("text", { class: "legend-text" }, "语法正确率")
            ])
          ]),
          vue.createCommentVNode(" 数据指标卡片 "),
          vue.createElementVNode("view", { class: "metrics-cards" }, [
            vue.createElementVNode("view", { class: "metric-card" }, [
              vue.createElementVNode("text", { class: "metric-value" }, "520"),
              vue.createElementVNode("text", { class: "metric-label" }, "词汇量"),
              vue.createElementVNode("text", { class: "metric-change positive" }, "+15%")
            ]),
            vue.createElementVNode("view", { class: "metric-card" }, [
              vue.createElementVNode("text", { class: "metric-value" }, "6.8"),
              vue.createElementVNode("text", { class: "metric-label" }, "句式复杂度"),
              vue.createElementVNode("text", { class: "metric-change positive" }, "+8%")
            ]),
            vue.createElementVNode("view", { class: "metric-card" }, [
              vue.createElementVNode("text", { class: "metric-value" }, "85"),
              vue.createElementVNode("text", { class: "metric-label" }, "语法正确率"),
              vue.createElementVNode("text", { class: "metric-change positive" }, "+12%")
            ])
          ])
        ]),
        vue.createCommentVNode(" 学习内容变化 "),
        vue.createElementVNode("view", { class: "section" }, [
          vue.createElementVNode("view", { class: "section-header" }, [
            vue.createElementVNode("text", { class: "section-title" }, "学习内容变化"),
            vue.createElementVNode("text", { class: "section-subtitle" }, "探索不同类型的学习内容")
          ]),
          vue.createElementVNode("view", { class: "content-type-chart" }, [
            vue.createElementVNode("view", { class: "content-type-item" }, [
              vue.createElementVNode("view", {
                class: "type-circle",
                style: { "background-color": "#3B82F6" }
              }, [
                vue.createElementVNode("text", { class: "type-ratio" }, "45%")
              ]),
              vue.createElementVNode("text", { class: "type-name" }, "作文")
            ]),
            vue.createElementVNode("view", { class: "content-type-item" }, [
              vue.createElementVNode("view", {
                class: "type-circle",
                style: { "background-color": "#10B981" }
              }, [
                vue.createElementVNode("text", { class: "type-ratio" }, "25%")
              ]),
              vue.createElementVNode("text", { class: "type-name" }, "语法")
            ]),
            vue.createElementVNode("view", { class: "content-type-item" }, [
              vue.createElementVNode("view", {
                class: "type-circle",
                style: { "background-color": "#F59E0B" }
              }, [
                vue.createElementVNode("text", { class: "type-ratio" }, "20%")
              ]),
              vue.createElementVNode("text", { class: "type-name" }, "词汇")
            ]),
            vue.createElementVNode("view", { class: "content-type-item" }, [
              vue.createElementVNode("view", {
                class: "type-circle",
                style: { "background-color": "#EC4899" }
              }, [
                vue.createElementVNode("text", { class: "type-ratio" }, "10%")
              ]),
              vue.createElementVNode("text", { class: "type-name" }, "阅读")
            ])
          ]),
          vue.createElementVNode("view", { class: "recent-topics" }, [
            vue.createElementVNode("view", { class: "topic-item" }, [
              vue.createElementVNode("view", { class: "topic-index" }, "1"),
              vue.createElementVNode("view", { class: "topic-info" }, [
                vue.createElementVNode("text", { class: "topic-name" }, "记叙文写作技巧"),
                vue.createElementVNode("text", { class: "topic-date" }, "2025-09-28")
              ]),
              vue.createElementVNode("text", { class: "topic-progress" }, "90%")
            ]),
            vue.createElementVNode("view", { class: "topic-item" }, [
              vue.createElementVNode("view", { class: "topic-index" }, "2"),
              vue.createElementVNode("view", { class: "topic-info" }, [
                vue.createElementVNode("text", { class: "topic-name" }, "修辞手法应用"),
                vue.createElementVNode("text", { class: "topic-date" }, "2025-09-25")
              ]),
              vue.createElementVNode("text", { class: "topic-progress" }, "75%")
            ]),
            vue.createElementVNode("view", { class: "topic-item" }, [
              vue.createElementVNode("view", { class: "topic-index" }, "3"),
              vue.createElementVNode("view", { class: "topic-info" }, [
                vue.createElementVNode("text", { class: "topic-name" }, "句子结构优化"),
                vue.createElementVNode("text", { class: "topic-date" }, "2025-09-20")
              ]),
              vue.createElementVNode("text", { class: "topic-progress" }, "85%")
            ])
          ])
        ]),
        vue.createCommentVNode(" 题目练习变化 "),
        vue.createElementVNode("view", { class: "section" }, [
          vue.createElementVNode("view", { class: "section-header" }, [
            vue.createElementVNode("text", { class: "section-title" }, "题目练习变化"),
            vue.createElementVNode("text", { class: "section-subtitle" }, "你的答题能力提升")
          ]),
          vue.createCommentVNode(" 静态练习进度图表 "),
          vue.createElementVNode("view", { class: "chart-container" }, [
            vue.createElementVNode("view", { class: "static-chart" }, [
              vue.createElementVNode("text", { class: "chart-title" }, "题目练习变化趋势"),
              vue.createCommentVNode(" Y轴标签和轴线 "),
              vue.createElementVNode("view", { class: "chart-axes" }, [
                vue.createElementVNode("view", { class: "y-axis" }, [
                  vue.createElementVNode("text", { class: "y-axis-label" }, "100"),
                  vue.createElementVNode("text", { class: "y-axis-label" }, "80"),
                  vue.createElementVNode("text", { class: "y-axis-label" }, "60"),
                  vue.createElementVNode("text", { class: "y-axis-label" }, "40"),
                  vue.createElementVNode("text", { class: "y-axis-label" }, "20"),
                  vue.createElementVNode("text", { class: "y-axis-label" }, "0")
                ]),
                vue.createElementVNode("view", { class: "chart-content" }, [
                  vue.createCommentVNode(" Y轴线 "),
                  vue.createElementVNode("view", { class: "y-axis-line axis-with-arrow" }),
                  vue.createElementVNode("view", { class: "bar-chart" }, [
                    vue.createElementVNode("view", { class: "bar-group" }, [
                      vue.createElementVNode("text", {
                        class: "bar-label",
                        style: { "top": "calc(100% - 10%)" }
                      }, "18"),
                      vue.createElementVNode("view", {
                        class: "bar",
                        style: { "background": "#3B82F6", "height": "18%" }
                      })
                    ]),
                    vue.createElementVNode("view", { class: "bar-group" }, [
                      vue.createElementVNode("text", {
                        class: "bar-label",
                        style: { "top": "calc(100% - 21%)" }
                      }, "29"),
                      vue.createElementVNode("view", {
                        class: "bar",
                        style: { "background": "#3B82F6", "height": "29%" }
                      })
                    ]),
                    vue.createElementVNode("view", { class: "bar-group" }, [
                      vue.createElementVNode("text", {
                        class: "bar-label",
                        style: { "top": "calc(100% - 25%)" }
                      }, "33"),
                      vue.createElementVNode("view", {
                        class: "bar",
                        style: { "background": "#3B82F6", "height": "33%" }
                      })
                    ]),
                    vue.createElementVNode("view", { class: "bar-group" }, [
                      vue.createElementVNode("text", {
                        class: "bar-label",
                        style: { "top": "calc(100% - 39%)" }
                      }, "47"),
                      vue.createElementVNode("view", {
                        class: "bar",
                        style: { "background": "#3B82F6", "height": "47%" }
                      })
                    ]),
                    vue.createElementVNode("view", { class: "bar-group" }, [
                      vue.createElementVNode("text", {
                        class: "bar-label",
                        style: { "top": "calc(100% - 43%)" }
                      }, "51"),
                      vue.createElementVNode("view", {
                        class: "bar",
                        style: { "background": "#3B82F6", "height": "51%" }
                      })
                    ]),
                    vue.createElementVNode("view", { class: "bar-group" }, [
                      vue.createElementVNode("text", {
                        class: "bar-label",
                        style: { "top": "calc(100% - 55%)" }
                      }, "63"),
                      vue.createElementVNode("view", {
                        class: "bar",
                        style: { "background": "#3B82F6", "height": "63%" }
                      })
                    ]),
                    vue.createElementVNode("view", { class: "bar-group" }, [
                      vue.createElementVNode("text", {
                        class: "bar-label",
                        style: { "top": "calc(100% - 70%)" }
                      }, "78"),
                      vue.createElementVNode("view", {
                        class: "bar",
                        style: { "background": "#3B82F6", "height": "78%" }
                      })
                    ]),
                    vue.createElementVNode("view", { class: "bar-group" }, [
                      vue.createElementVNode("text", {
                        class: "bar-label",
                        style: { "top": "calc(100% - 85%)" }
                      }, "93"),
                      vue.createElementVNode("view", {
                        class: "bar",
                        style: { "background": "#3B82F6", "height": "93%" }
                      })
                    ])
                  ]),
                  vue.createCommentVNode(" X轴线和标签 "),
                  vue.createElementVNode("view", { class: "chart-axis" }, [
                    vue.createCommentVNode(" X轴线 "),
                    vue.createElementVNode("view", { class: "x-axis-line axis-with-arrow" }),
                    vue.createElementVNode("view", { class: "x-axis" }, [
                      vue.createElementVNode("text", {
                        class: "axis-label2",
                        style: { "left": "6%" }
                      }, "第1周"),
                      vue.createElementVNode("text", {
                        class: "axis-label2",
                        style: { "left": "19%" }
                      }, "第2周"),
                      vue.createElementVNode("text", {
                        class: "axis-label2",
                        style: { "left": "31%" }
                      }, "第3周"),
                      vue.createElementVNode("text", {
                        class: "axis-label2",
                        style: { "left": "44%" }
                      }, "第4周"),
                      vue.createElementVNode("text", {
                        class: "axis-label2",
                        style: { "left": "57%" }
                      }, "第5周"),
                      vue.createElementVNode("text", {
                        class: "axis-label2",
                        style: { "left": "69%" }
                      }, "第6周"),
                      vue.createElementVNode("text", {
                        class: "axis-label2",
                        style: { "left": "81%" }
                      }, "第7周"),
                      vue.createElementVNode("text", {
                        class: "axis-label2",
                        style: { "left": "94%" }
                      }, "第8周")
                    ])
                  ])
                ])
              ])
            ])
          ]),
          vue.createCommentVNode(" 练习统计 "),
          vue.createElementVNode("view", { class: "practice-stats" }, [
            vue.createElementVNode("view", { class: "stat-item" }, [
              vue.createElementVNode("text", { class: "stat-label" }, "总练习次数"),
              vue.createElementVNode("text", { class: "stat-value" }, "412")
            ]),
            vue.createElementVNode("view", { class: "stat-divider" }),
            vue.createElementVNode("view", { class: "stat-item" }, [
              vue.createElementVNode("text", { class: "stat-label" }, "正确率"),
              vue.createElementVNode("text", { class: "stat-value" }, "78%")
            ]),
            vue.createElementVNode("view", { class: "stat-divider" }),
            vue.createElementVNode("view", { class: "stat-item" }, [
              vue.createElementVNode("text", { class: "stat-label" }, "最高分"),
              vue.createElementVNode("text", { class: "stat-value" }, "96")
            ])
          ])
        ])
      ])
    ]);
  }
  const PagesProfileVariation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-1483e2ba"], ["__file", "D:/多媒体比赛/momo9.29/pages/profile/variation.vue"]]);
  __definePage("pages/splash/splash", PagesSplashSplash);
  __definePage("pages/home/index", PagesHomeIndex);
  __definePage("pages/correct/index", PagesCorrectIndex);
  __definePage("pages/profile/index", PagesProfileIndex);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/register/register", PagesRegisterRegister);
  __definePage("pages/home/essay", PagesHomeEssay);
  __definePage("pages/profile/settings", PagesProfileSettings);
  __definePage("pages/correct/checkone", PagesCorrectCheckone);
  __definePage("pages/profile/edit", PagesProfileEdit);
  __definePage("pages/correct/idiom_story", PagesCorrectIdiomStory);
  __definePage("pages/guidance/guidance", PagesGuidanceGuidance);
  __definePage("pages/correct/correct_result", PagesCorrectCorrectResult);
  __definePage("pages/correct/special", PagesCorrectSpecial);
  __definePage("pages/profile/portrait", PagesProfilePortrait);
  __definePage("pages/profile/my_essay", PagesProfileMyEssay);
  __definePage("pages/profile/favourites", PagesProfileFavourites);
  __definePage("pages/profile/help", PagesProfileHelp);
  __definePage("pages/correct/photo", PagesCorrectPhoto);
  __definePage("pages/profile/variation", PagesProfileVariation);
  const _sfc_main = {
    __name: "App",
    setup(__props, { expose: __expose }) {
      __expose();
      onLaunch(() => {
        formatAppLog("log", "at App.vue:9", "App Launch");
        vue.provide("router", {});
        const status = checkLoginStatus();
        if (status === "needs_refresh") {
          refreshAccessToken().then(() => {
            formatAppLog("log", "at App.vue:20", "静默刷新token成功");
          }).catch((error) => {
            formatAppLog("log", "at App.vue:24", "静默刷新token失败:", error ? error.message : "未知错误");
          });
        }
      });
      onShow(() => {
        formatAppLog("log", "at App.vue:30", "App Show");
      });
      onHide(() => {
        formatAppLog("log", "at App.vue:34", "App Hide");
      });
      const __returned__ = { get checkLoginStatus() {
        return checkLoginStatus;
      }, get refreshAccessToken() {
        return refreshAccessToken;
      }, provide: vue.provide, get onLaunch() {
        return onLaunch;
      }, get onShow() {
        return onShow;
      }, get onHide() {
        return onHide;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/多媒体比赛/momo9.29/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
