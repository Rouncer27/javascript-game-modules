import { createTheFormModel } from "../view";
import findAHero from "./FindAHero";

const getHeroInfo = function(event, state, getTheRoot) {
  const type = event.currentTarget.dataset.herotype;
  const { form, formEl, cancelBtn } = createTheFormModel(type);

  cancelBtn.addEventListener("click", function() {
    formEl.remove();
  });

  form.addEventListener("submit", event => {
    findAHero(type, event, state, getTheRoot);
    formEl.innerHTML = "";
  });
};

export default getHeroInfo;
