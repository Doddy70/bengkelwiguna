const getNiceSelectValue = (setArrangeInput, inputClass) => {
  const checkIsNiceSelect = setInterval(() => {
    const niceSelect = document.querySelector(
      `.${inputClass ? inputClass : "nice-select"}:nth-child(2)`
    );

    if (niceSelect) {
      handleClearInterval();
      const niceSelectInputs = niceSelect.querySelectorAll("ul li");
      niceSelectInputs?.forEach((input) => {
        input?.addEventListener("click", function () {
          const dataValue = this.getAttribute("data-value");
          const value = dataValue ? dataValue : this.innerText;
          setArrangeInput(value);
        });
      });
    }
  }, 100);

  function handleClearInterval() {
    clearInterval(checkIsNiceSelect);
  }
};

export default getNiceSelectValue;
