(function () {
  const vscode = acquireVsCodeApi();

  document.querySelector(".add-color-button").addEventListener("click", () => {
    readInputText();
  });

  function readInputText() {
    let username = document.getElementById("name").value;
    let email = document.getElementById("mail").value;

    let user = {username:username, email:email};

    vscode.postMessage({ command: "alert", arguments:user });
  }
})();
