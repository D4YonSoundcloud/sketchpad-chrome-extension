window.addEventListener("load", () => {
  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "z") {
      console.log("Undo!");
    }
  });

  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  //resizing
  canvas.height = window.innerHeight - 8;
  canvas.width = window.innerWidth - 8;

  //   context.beginPath();
  //   context.moveTo(100, 100);
  //   context.lineTo(200, 100);
  //   context.stroke();

  //variables
  let painting = false;
  let lastX = null;
  let lastY = null;

  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function finishedPosition() {
    painting = false;
    context.beginPath();
  }

  function draw(e) {
    if (!painting) return;
    context.lineWidth = 3;
    context.lineCap = "round";

    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    // context.beginPath();
    // context.moveTo(e.clientX, e.clientY);
  }

  //   function undo(e) {
  //       if(e.ctrlKey && e.key === 'z') {
  //           alert('Undo!');
  //       }
  //   }
  //eventListeners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
  //   canvas.addEventListener('keydown', undo);
});

//resizes when you resize browser
window.addEventListener("resize", () => {
  canvas.height = window.innerHeight - 8;
  canvas.width = window.innerWidth - 8;
});
