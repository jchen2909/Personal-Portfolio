export function renderHeader(){
  const header = document.querySelector('.header');
  header.innerHTML = `
      <div class="name-header-label header-label">Jacky Chen</div>
      <div class="selectable-header-label-container">
        <div class="about-me-header-label selectable-header-label header-label">About me</div>
        <div class="experience-header-label selectable-header-label header-label">Experience</div>
        <div class="project-header-label selectable-header-label header-label">Projects</div>
        <div class="contacts-header-label selectable-header-label header-label">Contacts</div>
        <div class="find-out-more-header-label selectable-header-label header-label">Find out more</div>
      </div>
      `
}