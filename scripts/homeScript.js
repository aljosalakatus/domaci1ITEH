
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openEditForm() {


  document.getElementById("eModal").style.display = "block";
  const checked = $('input[name=checked-donut]:checked'); //getting seleted row id
  
    request = $.ajax({
        url: 'handler/getRepair.php',
        type: 'post',
        data: {'id': checked.val()},
        dataType: 'json'
    });


    request.done(function (response, textStatus, jqXHR) {
        console.log('Loading form data');
        $('#descripton').val(response[0]['descr']);
        console.log(response[0]['descr']);

        $('#idCar').val(response[0]['idCar'].trim());
        console.log(response[0]['idCar'].trim());

        $('#dateFrom').val(response[0]['dateFrom'].trim());
        console.log(response[0]['dateFrom'].trim());
        
        $('#dateTo').val(response[0]['dateTo'].trim());
        console.log(response[0]['dateTo'].trim());

        $('#id').val(checked.val());

        console.log(response);
    });
}
function closeEditForm() {
  document.getElementById("eModal").style.display = "none";
}


function onSubmit(){

  event.preventDefault();
  console.log("Adding new repair");
  const $form =$('#addForm');
  const $input = $form.find('input, select, button, textarea');

  const serijalizacija = $form.serialize();
  console.log(serijalizacija);

  $input.prop('disabled', true);

  req = $.ajax({
      url: 'handler/addRepair.php',
      type:'post',
      data: serijalizacija
  });

  req.done(function(res, textStatus, jqXHR){
      if(res=="Success"){
          
          location.reload(true);
      }else console.log("Repair is NOT added!!! "+res);
      console.log(res);
  });

  req.fail(function(jqXHR, textStatus, errorThrown){
      console.error('Error occured '+textStatus, errorThrown)
  });
}

function deleteRow(){

  if(confirm("Confirm delete operation")){
    console.log("Deleting selected repair");

  const checked = $('input[name=checked-donut]:checked');


  console.log(checked.val());

  req = $.ajax({
      url: 'handler/deleteRepair.php',
      type:'post',
      data: {'id':checked.val()}
  });

  req.done(function(res, textStatus, jqXHR){
      if(res=="Success"){
         checked.closest('tr').remove();
         alert('Selected repair is deleted');
         console.log('Deleted');
      }else {
      console.log("Repair is NOT deleted "+res);
      alert("Kolokvijum nije obrisan ");

      }
      console.log(res);
  });
  }

 

}

function onEdit(){

  
  event.preventDefault();
  console.log("Editing repair");
  const $form =$('#efrm');
  const $input = $form.find('input, select, button, textarea');

  const checked = $('input[name=checked-donut]:checked');
  console.log($('#efrm').length);
  const serijalizacija = $form.serialize();
  console.log(serijalizacija);
  

  $input.prop('disabled', true);

  req = $.ajax({
      url: 'handler/updateRepair.php',
      type:'post',
      //data: {'id':checked.val(), serijalizacija}
      data: serijalizacija
  });

  req.done(function(res, textStatus, jqXHR){
      if(res=="Success"){
          
          location.reload(true);
      }else console.log("Repair is NOT updated!!! "+res);
      console.log(res);
  });

  req.fail(function(jqXHR, textStatus, errorThrown){
      console.error('Error occured '+textStatus, errorThrown)
  });

}

function sortTable(selectedColumn) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[selectedColumn];
      y = rows[i + 1].getElementsByTagName("TD")[selectedColumn];
      // Check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        // If so, mark as a switch and break the loop:
        console.log(x.innerHTML.toLowerCase());
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function searchLaptopID() {
  // Declare variables
  
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}