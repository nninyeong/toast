import EventBus from "./EventBus.js";

export const showToast = (message, options = {}) => {
  EventBus.publish("SHOW_TOAST", { message, ...options });
};
