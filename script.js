
// SWIPPER
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

//   MODEL SECTION
  const trigger = document.querySelector('#login-trigger');
  const modelWrapper = document.querySelector('.model-wrapper');
  const modelWrapper2 = document.querySelector('.model-wrapper2');
  const closeBtn = document.querySelector('.close');
  const closeBtn2 = document.querySelector('.close2');
  const signInTrigger=document.querySelector('#signIn-trigger')
  const mainDiv=document.querySelector('.model-data');
  let clicked = true;

// LOGIN BUTTON
  trigger.addEventListener('click',function(){
    if(clicked){
        mainDiv.style.display = 'block'
        modelWrapper.classList.add('active');
    }
  });

  closeBtn.addEventListener('click',function(){
    modelWrapper.classList.remove('active');
    if(clicked){
        mainDiv.style.display = 'none'
    }
  })

//   SIGN IN BUTTON
  signInTrigger.addEventListener('click',function(){
    modelWrapper2.classList.add('active');
    if(clicked){
        mainDiv.style.display = 'block'
    }
  })

  closeBtn2.addEventListener('click',function(){
    modelWrapper2.classList.remove('active');
    if(clicked){
        mainDiv.style.display = 'none'
       
    }
  })

//   TABS SECTION

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();