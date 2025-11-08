const textInput = document.getElementById('text-input');
const generateBtn = document.getElementById('generate-btn');
const status = document.getElementById('status');
const themeToggle = document.getElementById('theme-toggle');

generateBtn.addEventListener('click', () => {
  const text = textInput.value.trim();
  if(!text) {
    status.textContent = 'Please type something first!';
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
  status.textContent = 'Playing...';
  utterance.onend = () => status.textContent = 'Done!';
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
