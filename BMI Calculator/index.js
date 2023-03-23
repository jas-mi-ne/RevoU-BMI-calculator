function cl(){
	//get datas from html
	var weight = parseInt(document.getElementById("weight").value)
	var height = parseInt(document.getElementById("height").value)
	var age = parseInt(document.getElementById("age").value)
	var heightM = height/100
	var heightSq = heightM**2
	var result = weight/heightSq

	var keterangan = document.getElementById("keterangan");
	var bmi=document.getElementById('current-bmi');
	
	bmi.innerText = result.toFixed(1);
	console.log(result);
	var BMI = result;
	//kalo dibawah atau lebih apa show text, user di kategori apa
	if (BMI<18.5 && BMI){
		keterangan.innerText = "Anda underweight"
	console.log("<18.5");
    }else if (BMI>18.5 && BMI<24.9){
		keterangan.innerText = "Selamat! BMI Anda normal."
    console.log(">18.5 24.9>");        
    }else if (BMI>25.0 && BMI<29.9){
		keterangan.innerText = "Anda overweight!"
    console.log(">25 29.9>");
    }else if (BMI>=30){
		keterangan.innerText = "Anda obesitas!"
    console.log("30>");
    }
}

function c2(){
	var inputBx = document.getElementsByClassName("input-box")
	//reset all values in input boxes
	var reset=document.getElementById('reset');
	for (i=0; i<inputBx.length;i++){
    inputBx[i].value = ''}
	//Once inputs reset, reset the BMI 
	var bmi=document.getElementById('current-bmi');
	bmi.innerText = 0
	keterangan.innerText = ''
}