(function () {
  const vscode = acquireVsCodeApi();

  document.querySelector(".add-color-button").addEventListener("click", () => {
    addColor();
  });

  function addColor() {
    const testInput = document.getElementById("mail").value;
    vscode.postMessage({ command: "alert", text: testInput });
  }
})();
