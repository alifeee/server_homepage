// focus .input on page load or click
document.querySelector(".input").focus();
document.addEventListener("click", function () {
  document.querySelector(".input").focus();
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    bottomSpan = document.querySelector("#bottom");
    text = document.querySelector(".input").innerText;
    result = parseCommand(text).then((result) => {
      bottomSpan.insertAdjacentHTML(
        "beforebegin",
        `<span class="command">${text}</span>`
      );
      if (result) {
        bottomSpan.insertAdjacentHTML("beforebegin", result);
      }
      document.querySelector(".input").innerHTML = "";
    });
  }
});

async function parseCommand(text) {
  if (text.includes("help")) {
    return `
    <span class='result'>
      Commands: help, ls, clear
    </span>`;
  } else if (
    text.startsWith("ls") ||
    text.startsWith("dir") ||
    text.startsWith("list-projects")
  ) {
    // get projects with fetch() to projects.html
    response = await fetch("projects.html")
      .then((response) => response.text())
      .then((text) => {
        return text;
      });
    return `
    <span class='result'>
      ${response}
    </span>
    `;
  } else if (text.startsWith("cd")) {
    return `
    <span class='result'>
      No
    </span>
    `;
  } else if (text.startsWith("clear")) {
    document.querySelectorAll(".console > *").forEach((el) => {
      if (el.id !== "bottom") {
        el.remove();
      }
    });
  }
}
