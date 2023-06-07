import { ref, onMounted, onBeforeUnmount } from "vue";

export function useEventSubscriber(handlerEventProvider) {
  const buttons = ref([]);
  const textfields = ref([]);

  const subscribeToButtonEvents = () => {
    buttons.value.forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });
  };

  const subscribeToTextfieldEvents = () => {
    textfields.value.forEach((textfield) => {
      textfield.addEventListener("change", handleTextfieldChange);
    });
  };

  const unsubscribeFromButtonEvents = () => {
    buttons.value.forEach((button) => {
      button.removeEventListener("click", handleButtonClick);
    });
  };


  const handleButtonClick = (event) => {
    const tag = event.currentTarget.getAttribute("tag");
    if (!tag) {
      return;
    }
    const handlerName = `btn${tag}_click`;

    if (
      handlerEventProvider[handlerName] &&
      typeof handlerEventProvider[handlerName] === "function"
    ) {
      handlerEventProvider[handlerName](event);
    } else {
      console.log(`Handler '${handlerName}' not found.`);
    }
  };

  const handleTextfieldChange = (event) => {
    const tag = event.currentTarget.getAttribute("tag");
    if (!tag) {
      return;
    }
    const handlerName = `tf${tag}_change`;

    if (
      handlerEventProvider[handlerName] &&
      typeof handlerEventProvider[handlerName] === "function"
    ) {
      handlerEventProvider[handlerName](event);
    } else {
      console.log(`Handler '${handlerName}' not found.`);
    }
  };

  onMounted(() => {
    let containerEl = document.querySelector('[itemid="pnContainer"]');

    buttons.value = Array.from(containerEl.querySelectorAll("button"));
    textfields.value = Array.from(containerEl.querySelectorAll('input[type="text"]'));

    subscribeToButtonEvents();
    // subscribeToTextfieldEvents();

  });

  onBeforeUnmount(() => {
    unsubscribeFromButtonEvents();
  });
}
