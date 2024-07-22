import {renderHeader} from './header.js';
import {renderBackground} from './background.js'

renderBackground();
renderHeader();
renderAboutMePage();

function renderAboutMePage(){
  const page = document.querySelector('.page-content');
  page.innerHTML = 
  `
  <div class="left-section">
    <div class="profile-picture-container overlap">Picture Container</div>
  </div>

  <div class="right-section">
    <div class="profile-description-container overlap">Description Container</div>
  </div>
  `
}