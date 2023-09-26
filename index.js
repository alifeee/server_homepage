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
    return `
    <span class='result'>
      Commands: help, ls, clear
    </span>`;
  } else if (
    text.startsWith("ls") ||
    text.startsWith("dir") ||
    text.startsWith("list-projects")
  ) {
    return `
    <table class='result'>
      <tr>
        <th>Name</th>
        <th>Docker image</th>
        <th>Port</th>
        <th>GitHub</th>
      </tr>
      <tr>
        <td>---</td><td>---</td><td>---</td><td>---</td>
      </tr>
      <tr>
        <td>(Nginx) Homepage</td>
        <td>☑</td>
        <td>80</td>
        <td>
          <a target="_blank" href='https://github.com/alifeee/server_homepage'>https://github.com/alifeee/server_homepage</a>
        </td>
      </tr>
      <tr>
        <td>(Python API) Steam collage API</td>
        <td>☑</td>
        <td>5000</td>
        <td>
          <a target="_blank" href='https://github.com/alifeee/steam_collage_api'>https://github.com/alifeee/steam_collage_api</a>
        </td>
      </tr>
      <tr>
        <td>(Telegram bot) Daily budgeter bot</td>
        <td>☐</td>
        <td>-</td>
        <td>
          <a target="_blank" href='https://github.com/alifeee/telegram-budgeter'>https://github.com/alifeee/telegram-budgeter</a>
        </td>
      </tr>
      <tr>
        <td>(Telegram bot) Pollen bot</td>
        <td>☐</td>
        <td>-</td>
        <td>
          <a target="_blank" href='https://github.com/alifeee/pollen_bot'>https://github.com/alifeee/pollen_bot</a>
        </td>
      </tr>
      <tr>
        <td>(Telegram bot) Bus bot</td>
        <td>☐</td>
        <td>-</td>
        <td>
          <a target="_blank" href='https://github.com/alifeee/bus_bot'>https://github.com/alifeee/bus_bot</a>
        </td>
      </tr>
      <tr>
        <td>(Mumble Server) Murmur</td>
        <td>☐</td>
        <td>64738</td>
        <td>
          <a target="_blank" href='https://gist.github.com/alifeee/2b8831d503438ff147fb8df6c01858c4'>https://gist.github.com/alifeee/2b8831d503438ff147fb8df6c01858c4</a>
        </td>
      </tr>
    </table>`;
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

document.querySelector("#bottom").insertAdjacentHTML(
  "beforebegin",
  `
    <span class=command>
      list-projects
    </span>
    <br/>
    ${parseCommand("ls")}
    `
);
