function tambah(){
	var i=parseInt(document.getElementById('bil1').value);
	var j=parseInt(document.getElementById('bil2').value);
	var jumlah = i+j
	alert("hasilnya "+jumlah)
}
function kurang(){
	var i=parseInt(document.getElementById('bil1').value);
	var j=parseInt(document.getElementById('bil2').value);
	var jumlah = i-j
	alert("hasilnya "+jumlah)
}
function kali(){
	var i=parseInt(document.getElementById('bil1').value);
	var j=parseInt(document.getElementById('bil2').value);
	var jumlah = i*j
	alert("hasilnya "+jumlah)
}
function bagi(){
	var i=parseInt(document.getElementById('bil1').value);
	var j=parseInt(document.getElementById('bil2').value);
	var jumlah = i/j
	alert("hasilnya "+jumlah)
}