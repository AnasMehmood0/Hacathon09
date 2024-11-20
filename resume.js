var toggleSkillsButton = document.getElementById('toggle-skills');
var skillsSection = document.querySelector('.skills');
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection) {
        var isHidden = skillsSection.classList.toggle('hidden');
        toggleSkillsButton.textContent = isHidden ? 'Show Skills' : 'Hide Skills';
    }
});
