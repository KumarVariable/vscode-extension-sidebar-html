(function () {
  const vscode = acquireVsCodeApi();

  document.querySelector(".add-color-button").addEventListener("click", () => {
    readInputText();
  });

  function readInputText() {
    const testInput = document.getElementById("mail").value;
    vscode.postMessage({ command: "alert", text: testInput });
  }
})();
