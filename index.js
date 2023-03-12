// focus .input on page load or click
document.querySelector(".input").focus();
document.addEventListener("click", function () {
  document.querySelector(".input").focus();
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    bottomSpan = document.querySelector("#bottom");
    text = document.querySelector(".input").innerText;
    bottomSpan.insertAdjacentHTML(
      "beforebegin",
      `<span class="command">${text}</span>`
    );
    result = parseCommand(text);
    if (result) {
      bottomSpan.insertAdjacentHTML("beforebegin", result);
    }
    document.querySelector(".input").innerHTML = "";
  }
});

function parseCommand(text) {
  if (text.includes("help")) {
    return "<span class='result'>Commands: help, ls, clear</span>";
  } else if (
    text.startsWith("ls") ||
    text.startsWith("dir") ||
    text.startsWith("list-projects")
  ) {
    return "<table class='result'><tr><th>Name</th><th>Docker image</th><th>GitHub</th></tr><tr><td>---</td><td>---</td><td>---</td></tr><tr><td>Steam collage</td><td>☑</td><td><a href='https://github.com/alifeee/steam_collage_api'>https://github.com/alifeee/steam_collage_api</a></td></tr></table>";
  } else if (text.startsWith("cd")) {
    return "<span class='result'>No</span>";
  } else if (text.startsWith("clear")) {
    document.querySelectorAll(".console > *").forEach((el) => {
      if (el.id !== "bottom") {
        el.remove();
      }
    });
  }
}
