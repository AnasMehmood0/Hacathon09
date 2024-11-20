const toggleSkillsButton = document.getElementById('toggle-skills');
const skillsSection = document.querySelector('.skills');

toggleSkillsButton?.addEventListener('click', () => {
    if (skillsSection) {
        const isHidden = skillsSection.classList.toggle('hidden');
        toggleSkillsButton.textContent = isHidden ? 'Show Skills' : 'Hide Skills';
    }
});
