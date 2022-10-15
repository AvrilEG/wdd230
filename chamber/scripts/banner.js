//Chamber meeting banner div
const banner = document.querySelector('.meet');
const days = new Date();


  if (days.getDay() == 1 ) {
    saturdayBanner.style.display = 'block';
  } else  if(days.getDay() == 2 ) {
    saturdayBanner.style.display = 'block';
  } else {
    banner.style.display = 'none';
  }