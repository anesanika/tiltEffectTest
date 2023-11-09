const mianCont = document.querySelector('.mianCont');
const card = document.querySelector('.card');

// const updateCardTransform = (e) => {
//   const rect = mianCont.getBoundingClientRect();
//   const contCenterX = rect.left + rect.width / 2;
//   const contCenterY = rect.top + rect.height / 2;

//   const mouseX = (contCenterX - e.clientX) / 20;
//   const mouseY = (contCenterY - e.clientY) / 20;

//   card.style.transform = `perspective(1000px) rotateY(${mouseX}deg) rotateX(${mouseY}deg)`;
//   console.log(mouseX, mouseY);

// };

// mianCont.addEventListener('mousemove', updateCardTransform);

mianCont.addEventListener('mousemove', (e) =>{
  const contProp = mianCont.getBoundingClientRect();

  const contCenterX = contProp.left + contProp.width / 2;
  const contCenterY = contProp.top + contProp.height / 2;

  const mouseX = (contCenterX - e.clientX) / 20;
  const mouseY = (contCenterY - e.clientY) / 20;


  card.style.transform = `perspective(1000px) rotateY(${mouseX}deg) rotateX(${mouseY}deg)`;
  
  
  console.log(mouseX, mouseY);
})




mianCont.addEventListener('mouseleave', () =>{
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
})