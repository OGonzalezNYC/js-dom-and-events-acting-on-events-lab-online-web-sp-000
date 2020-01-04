function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()




function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}


function addNewElementAsLi() {
  let x = document.querySelector('ul');
  let y = document.createElement('li');
  let z = retrieveEmployeeInformation();
  y.innerHTML = z;
  x.appendChild(y);
}


function addNewLiOnClick() {
  let x = document.querySelectorAll('input')[1];
  x.addEventListener('click', addNewElementAsLi());
  document.querySelector('input').value = ''
}


function clearEmployeeListOnLinkClick() {
  let x = document.querySelector('ul');
  // for (i = 0; i < x.length; i++) {
  //   x.remove(x[i]);
  // }
  if (x.children.length > 0) {
    
  }
}