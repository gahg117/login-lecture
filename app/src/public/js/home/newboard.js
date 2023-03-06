const title = document.querySelector("#title"),
  body = document.querySelector("#body");

function paintBoard() {
  const req = {
    title: title.value,
    body: body.value,
  };

  fetch("/newboard", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("새 글 작성 중 에러 발생"));
    });
}
