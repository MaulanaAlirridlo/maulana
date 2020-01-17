function tambah(){
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
function kurangi(){
		var i=parseInt(document.getElementById('bil1').value);
		var j=parseInt(document.getElementById('bil2').value);
		if (isNaN(i) ||  isNaN(j)) {
  		alert("mohon isi angka");
  		}
		else{
		var kurang=i-j
		alert("hasilnya adalah "+kurang)
		return kurang
		}
}
function kali(){
		var i=parseInt(document.getElementById('bil1').value);
		var j=parseInt(document.getElementById('bil2').value);
		if (isNaN(i) ||  isNaN(j)) {
  		alert("mohon isi angka");
  		}
		else{
		var kali=i*j
		alert("hasilnya adalah "+kali)
		return kali
		}
}
function bagi(){
		var i=parseInt(document.getElementById('bil1').value);
		var j=parseInt(document.getElementById('bil2').value);
		if (isNaN(i) ||  isNaN(j)) {
  		alert("mohon isi angka");
  		}
		else{
		var bagi=i/j
		alert("hasilnya adalah "+bagi)
		return bagi
		}
}