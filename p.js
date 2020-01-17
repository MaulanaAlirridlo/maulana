function hasil(){
		var i=parseInt(document.getElementById('bil1').value);
		var j=parseInt(document.getElementById('bil2').value);
		if (isNaN(i) ||  isNaN(j)) {
  		alert("mohon isi angka");
  		}
		else{
		var jumlah=i+j
		alert("hasilnya adalah "+jumlah)
		return jumlah
		}
	}
