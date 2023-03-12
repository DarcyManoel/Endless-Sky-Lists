var filter=``
function switchFilter(id){
	switch(id){
		case `omnis`:
			filter=`omnis`
			break
		case `omnisCompat`:
			filter=`omnisCompat`
			break
		case `boardingEase`:
			filter=`boardingEase`
			break
	}
	document.getElementById(`omnis`).classList.add(`dark`)
	document.getElementById(`omnisCompat`).classList.add(`dark`)
	document.getElementById(`boardingEase`).classList.add(`dark`)
	if(id){
		document.getElementById(id).classList.remove(`dark`)
	}
	printOutput()
}
function copyOutput(){
	navigator.clipboard.writeText(
		document.getElementById(`output`).innerHTML
	)
}
