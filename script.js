const copyBtn = document.getElementById("copyLink");
const toggleBtn = document.getElementById("toggleTranscript");
const transcript = document.getElementById("transcript");

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    copyBtn.textContent = "Link Copied ✓";
    setTimeout(() => (copyBtn.textContent = "Copy Page Link"), 1600);
  } catch {
    alert("Could not copy automatically. You can copy the URL from the address bar.");
  }
});

toggleBtn.addEventListener("click", () => {
  const isHidden = transcript.classList.contains("hidden");
  transcript.classList.toggle("hidden");
  transcript.setAttribute("aria-hidden", String(!isHidden));
  toggleBtn.textContent = isHidden ? "Hide Transcript" : "Show Transcript";
});
