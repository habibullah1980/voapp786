const textInput = document.getElementById('text-input');
const generateBtn = document.getElementById('generate-btn');
const generateBtnHero = document.getElementById('generate-btn-hero');
const status = document.getElementById('status');
const themeToggle = document.getElementById('theme-toggle');

function generateVoice(text) {
  if(!text) { status.textContent = 'Please type something!'; return; }
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
  status.textContent = 'Playing...';
  utterance.onend = () => status.textContent = 'Done!';
}

generateBtn.addEventListener('click', () => generateVoice(textInput.value.trim()));
generateBtnHero.addEventListener('click', () => generateVoice('Welcome to HthinkersVO, the professional AI voice generator.'));
themeToggle.addEventListener('click', () => document.body.classList.toggle('dark'));
