document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('#timetable td');
  
    cells.forEach(cell => {
      cell.addEventListener('click', () => {
        let str = cell.getAttribute('data-value');

        alert(str);

      });
    });
  });
  
  document.addEventListener('DOMContentLoaded',function(){
    const table = document.getElementById('trainingplan');
    let completed = 0;
    let total = 0;
  
    const rows = table.getElementsByTagName('tr');
    const today = new Date();
    today.setHours(0,0,0,0);

    for( let i = 1; i < rows.length;i++ ){
      let row = rows[i];
      let cells = row.getElementsByTagName('td');
      let allPast = true; 

      for(let j = 1; j < cells.length; j++){
        if(j < 8 && cells[j].innerText != "RACE" && cells[j].innerText != ""){
          total++;    
        }
        let cell = cells[j];

      const cellDate = cell.getAttribute('data-date');
      if (cellDate){
        const cellFullDate = new Date(cellDate);
        if (cellFullDate < today){
            cell.className ="";
            cell.classList.add('passedDate');
            completed++;
        } else{
          allPast = false; 
        }
      }

    }
      if(allPast){
        rows[i].getElementsByTagName('td')[0].textContent ='✔️';
      }

    }

      const percentage = (total > 0) ? (completed / total * 100).toFixed(0) : 0 ;
      const percentageCell = document.getElementById('completion-percentage');
      percentageCell.textContent = `${percentage}% complete`;
      
      function getBackGroundColor(percentage){
        const red = Math.min(255, (100-percentage) *2.55);
        const green = Math.min (255, percentage * 2.55);
        return `rgb(${red}, ${green}, 0)`;
      }

      percentageCell.style.backgroundColor = getBackGroundColor(percentage);

      const totalKM = (41.1 + 39 + 42 + 53 + 56.2 + 59 + 56 + 61 + 57.6 + 51 + 45 +46 + 38.2 + 34.8 + 31.6).toFixed(1);
      document.getElementById('allTotal').innerText = `${totalKM}km`;      

  });


  