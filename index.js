function handleClick(e) {
  e.preventdefault();
  const bars = document.querySelectorAll(".bar");

  bars.forEach((bar, i) => {
    bar.style.animationPlayState = "running";
  });

  const lastbar = bars[bars.length - 1];
  lastbar.addEventListener("animationend", () => {
    setTimeout(() => {
      window.location = e.target.href;
    }, 500);
  });
}
