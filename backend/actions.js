var filter=`outfit `
function switchFilter(){
	switch(filter){
		case `Outfits`:
			document.getElementById(`element`).innerHTML=`Outfits`
			filter=`outfit `
			break
	}
}
function copyOutput(){
	navigator.clipboard.writeText(
		document.getElementById(`output`).innerHTML
	)
}
