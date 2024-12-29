function getFormvalue() {
    //Write your code here
	 event.preventDefault();
	 const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
	 alert(`${firstName} ${lastName}`);

}
document.getElementById('nameForm').addEventListener('submit', getFormvalue);
