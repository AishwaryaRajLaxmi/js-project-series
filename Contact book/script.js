const submitDetail = document.querySelector("#submit-btn");
submitDetail.addEventListener("click", (event) => {
  let contactName = document.querySelector("#contact-name").value;
  let contactNumber = document.querySelector("#contact-number").value;
  let dnotification = document.querySelector("#display-notification");
  if (contactName == "" || contactNumber == "") {
    dnotification.innerHTML = "Please enter details !";
    dnotification.style.color = "red";
  } else {
    // items set to localStorage

    localStorage.setItem(contactName, contactNumber);
    dnotification.innerHTML = "✔ Successfully Added New Contact";
    dnotification.style.color = "green";
  }

  contactName.innerHTML="";
  contactNumber.innerHTML="";

  setInterval(()=>{
    dnotification.innerHTML="";

  },1000)
});


// getdetails
const getDetailsBtn=document.querySelector('#get-data');
getDetailsBtn.addEventListener('click',(event)=>{

  const displayOutput=document.querySelector('#display-contact');
  displayOutput.style.display="block";

  // getItem
  
  const contactName=document.querySelector('#get-contact-name').value;
  let output=localStorage.getItem(contactName);
  displayOutput.innerHTML=`${contactName} :${output}`

  contactName="";

  function reset(){
    location.reload();
  }

  

})

