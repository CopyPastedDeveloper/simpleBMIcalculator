
	
	function calculateBmi() {

	const weight = document.bmiForm.weight.value
	const height= document.bmiForm.height.value
	let m=document. getElementById ("message")
	let w=document.getElementById("Warning");

	if(weight > 0 && height > 0){

	let bmiValue = weight/(height/100*height/100)
	document.bmiForm.bmi.value = bmiValue.toFixed(2);

	if(bmiValue < 18.5){

	m.innerHTML="<b>Successfully Calculated</b>" 
	document.bmiForm.bmiCategory.value = "Your underweight"
	alert("Successfully !")
	}
	else if(bmiValue > 18.5 && bmiValue <= 24.9){
	m.innerHTML="<b>Successfully Calculated</b>"
	document.bmiForm.bmiCategory.value = "Normal weight"
	alert("Successfully !")
	}
	else if(bmiValue >25 && bmiValue <=29.9){
	m.innerHTML="<b>Successfully Calculated</b>"
	document.bmiForm.bmiCategory.value = "Overweight"
	alert("Successfully !")
	}
	else if(bmiValue > 29.9){
	m.innerHTML="<b>Successfully Calculated</b>"
	document.bmiForm.bmiCategory.value = "Obesity"
	alert("Successfully !")
	}
	else {
	alert("Please fill in correctly !!")
	w.innerHTML="<b>Warning!! Input number only</b>"
	}
	}
    };
  
    
  
    
    

	