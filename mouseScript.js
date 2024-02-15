const mouseEffect = document.getElementById("mouseEffect");

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  mouseEffect.style.transform = `translate(${mouseX - 25}px, ${mouseY - 25}px)`;
  mouseEffect.style.opacity = 1;
});

document.addEventListener("mouseleave", () => {
  mouseEffect.style.opacity = 0;
});
