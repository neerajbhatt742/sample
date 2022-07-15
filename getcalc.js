function validate(){
		var req = document.getElementsByClassName("required");
		for(var i =0;i<req.length;i++){
			if(req[i].value==="")
			{
			    req[i].focus();
		            return false;
			}
		}
		var amt = document.getElementById("amt").value;
		if(amt<100000){
			alert("Minimum amount should be 1lakh");
			return false;
		}
		return true;
	}
	function calculateEmi(){
		if(!validate()){return;}
		var loanType = document.getElementById("type").value;
		var roi=0;
		switch(loanType){
		case "Home" : roi = 7;
		break;
		case "Car" : roi = 9;
		break;
		case "Personal" : roi = 12;
		break;	
		}
		document.getElementById("roi").value=roi;
		var amt = document.getElementById("amt").value;
		var n = document.getElementById("duration").value
		var emi =  amt*roi*(Math.pow((1+roi),n))/(Math.pow((1+roi),(n)-1));
		if((roi==7&&(n>=1||n<=25))||(roi==9&&(n>=1||n<=7))||(roi==12&&(n>=1||n<=5)) ){
		document.getElementById("emi").value=emi;
		}
		else{
			alert("Wrong Duration");
		}
		
	}

var flag = true;
function getCalculator(){
	
	var str = `<form >
			<table>
				<tr>
				<td> <label for="name"><b>Applicant Name<b></label> </td>	
				<td> <input type="text" placeholder="name" id="name" class="required"> </td>
				</tr>
	
				<tr>
				<td> <label for="type"><b>Loan Type<b></label> </td>
				<td ><select id="type">
					<option value="Home">Home Loan</option>
					<option value="Car">Car Loan</option>
					<option value="Personal">Personal Loan</option>
				</select> </td>
				</tr>
		
				<tr>
				<td> <label for="amt"><b>Amount</b></label> </td>
				<td> <input type="number" id="amt" min=10000 class="required"> </td>
				</tr>
		
				<tr>
				<td> <label for="roi"><b>ROI</b></label> </td>
				<td> <input type="number" disabled id="roi" > </td>
				</tr>

				<tr>
				<td> <label for="duration"><b>Duration</b></label> </td>
				<td><input type="number" id="duration" class="required" min=1> </td>
				</tr>

				<tr>
				<td> <label for="emi"><b>EMI</b></label> </td>
				<td> <input type="number" id="emi" disabled> </td>
				</tr>
	
				<tr>
				<td> <input style="color:white ; background-color:#800080" type="button" onClick="calculateEmi()" value="Calculate"> </td>
				<td> <input style="color:white ; background-color:#800080" type="reset" value="Reset"> </td>	
				</tr>
			</table>
		</form>`
	if(flag){
		document.getElementById("loan").innerHTML=str;
	}
	else{
		document.getElementById("loan").innerHTML="";
	}
	flag=!flag;
}