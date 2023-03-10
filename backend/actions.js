var filter=``
function switchFilter(id){
	switch(id){
		case `omnis`:
			filter=`omnis`
			break
	}
	document.getElementById(`omnis`).classList.add(`dark`)
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
