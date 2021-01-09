window.addEventListener('DOMContentLoaded', () => {
   timer();
});

function timer() {
   let deadline = '2022-01-1';

   function getTimeRemaining(endtime){
      let t = Date.parse(endtime) - Date.parse(new Date()),
         seconds = Math.floor( (t /1000) % 60),
         minutes = Math.floor( (t / 1000 / 60) % 60),
         hours = Math.floor( (t / 1000 / 60 / 60) % 24),
         days = Math.floor( (t / 1000 / 60 / 60 / 24) % 365);

      return {
         'total' : t,
         'seconds' : seconds,
         'minutes' : minutes,
         'hours' : hours,
         'days' : days
      }
   }

   function setClock(id, endtime){
      const timer = document.getElementById(id);
            seconds = timer.querySelector('.timer__seconds'),
            minutes = timer.querySelector('.timer__minutes'),
            hours = timer.querySelector('.timer__hours'),
            days = timer.querySelector('.timer__days'),
            timeInterval = setInterval(updateClock, 1000);
            
      function updateClock(){
         let t = getTimeRemaining(endtime);

         function addZero(num){
            if(num <= 9){
               return '0' + num;
            } else return num;
         }

         seconds.textContent = addZero(t.seconds);
         minutes.textContent = addZero(t.minutes);
         hours.textContent = addZero(t.hours);
         days.textContent = addZero(t.days);

         if(t.total <= 0){
            clearInterval(timeInterval);
            seconds.textContent = '00';
            minutes.textContent = '00';
            hours.textContent = '00';
            days.textContent = '00';
         }
      }
   }
   setClock('timer', deadline);
};