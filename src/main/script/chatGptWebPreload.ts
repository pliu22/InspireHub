// In guest page.
import { ipcRenderer } from "electron";
ipcRenderer.on("assemblePrompt", (_, msg) => {
  console.log("assemblePrompt", msg);
  ipcRenderer.sendToHost(
    "from assemblePrompt",
    "have received assemblePrompt arg"
  );
  console.log(window);

  let textInputDom: null | HTMLInputElement

  function initTextInputDom() {
    textInputDom = document.querySelector("#prompt-textarea");
    console.log("textDom", textInputDom);
  }

  const assemblePrompt = (val: string) => {
    if (!textInputDom) {
      initTextInputDom();
    }
    textInputDom!.value = val;
    const btn = document.querySelector("#prompt-textarea ~ button")
    btn!.removeAttribute('disabled');
    (btn as any).click()
    btn!.setAttribute('disabled', 'true')
  };

  assemblePrompt(msg);
});

console.log("chatGptWebPreload.ts loaded");
