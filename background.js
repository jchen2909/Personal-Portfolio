export const decorationProfiles = [
  {
    name: 'decoration1',
    type: 'small-circle',
    color: 'dark-blue',
    top: '400px',
    left: '280px',

  },
  {
    name: 'decoration2',
    type: 'small-circle',
    color: 'light-blue',
    top: '250px',
    left: '700px',
  },
  {
    name: 'decoration3',
    type: 'small-circle',
    color: 'dark-blue',
    top: '213px',
    left: '1000px',
  },
  {
    name: 'decoration4',
    type: 'small-circle',
    color: 'light-blue',
    top: '500px',
    left: '900px',
  },
  {
    name: 'decoration5',
    type: 'big-circle',
    color: 'dark-blue',
    top: '100px',
    left: '120px',
  },
  {
    name: 'decoration6',
    type: 'big-circle',
    color: 'light-blue',
    top: '400px',
    left: '100px',
  },
  {
    name: 'decoration7',
    type: 'big-circle',
    color: 'dark-blue',
    top: '100px',
    left: '800px',
  },
  {
    name: 'decoration8',
    type: 'huge-circle',
    color: 'dark-blue',
    top: '350px',
    left: '450px',
  },
  {
    name: 'decoration9',
    type: 'huge-circle',
    color: 'light-blue',
    top: '-150px',
    left: '320px',
  },
  {
    name: 'decoration10',
    type: 'small-circle',
    color: 'light-blue',
    top: '10px',
    left: '1050px',
  },
  {
    name: 'decoration11',
    type: 'small-circle',
    color: 'light-blue',
    top: '300px',
    left: '10px',
  },
  {
    name: 'decoration12',
    type: 'small-circle',
    color: 'light-blue',
    top: '270px',
    left: '350px',
  },
  {
    name: 'decoration13',
    type: 'big-circle',
    color: 'dark-blue',
    top: '335px',
    left: '1000px',
  },
  {
    name: 'decoration14',
    type: 'small-circle',
    color: 'light-blue',
    top: '350px',
    left: '850px',
  }
  
];

export function renderBackground(){
  const background = document.querySelector('.background-container');
  for(let i = 0; i < decorationProfiles.length; i++){
    background.innerHTML += 
    `
      <div style="
        position: fixed;
        top: ${decorationProfiles[i].top};
        left: ${decorationProfiles[i].left};
      " class="${decorationProfiles[i].type} ${decorationProfiles[i].color} ${decorationProfiles[i].name} decoration"></div>
    `
  }
  
}