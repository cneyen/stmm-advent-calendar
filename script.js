// Test content for Door 1 (always open)
const dailyContent = {
  1: {
    title: "Zotero for Research",
    text: "Organize references, sync across devices, and cite with ease. Perfect for medical research papers.",
    link: "https://www.zotero.org"
  }
  // Add more doors later: 2: { title: "...", text: "...", link: "..." }
};

// Set start date: Dec 1, 2024 (Berlin time)
const startDate = new Date('2024-12-01T00:00:00+01:00'); // Europe/Berlin
const today = new Date();

// Always open Door 1 for testing
document.getElementById('door-1').classList.add('open');
const door1 = document.getElementById('door-1');
const infoEl = door1.querySelector('.info');
infoEl.innerHTML = `Opens Dec 1 <span class="lock-icon">🔓</span>`;
door1.querySelector('.lock-icon').style.color = '#99C33A';

// Load content for Door 1
const content = dailyContent[1];
if (content) {
  door1.innerHTML = `
    <span class="number">1</span>
    <div class="content">
      <h3>${content.title}</h3>
      <p>${content.text}</p>
      <a href="${content.link}" target="_blank" class="link">Learn more →</a>
    </div>
  `;
}

// Unlock other doors only if today is Dec 1–24
const day = today.getUTCDate();
const isInRange = day >= 1 && day <= 24;

document.querySelectorAll('.door').forEach((door, index) => {
  const doorDay = index + 1;
  if (doorDay === 1) return; // Already handled

  if (isInRange && doorDay <= day) {
    door.classList.add('open');
    const infoEl = door.querySelector('.info');
    infoEl.innerHTML = `Opens Dec ${doorDay} <span class="lock-icon">🔓</span>`;
    door.querySelector('.lock-icon').style.color = '#99C33A';
  } else {
    const infoEl = door.querySelector('.info');
    infoEl.innerHTML = `Opens Dec ${doorDay} <span class="lock-icon">🔒</span>`;
    door.querySelector('.lock-icon').style.color = '#ccc';
  }
});
