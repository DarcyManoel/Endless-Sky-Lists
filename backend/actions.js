var filter=`omnisArenaMap`
function switchFilter(id){
	switch(id){
		case `omnisArenaMap`:
			filter=`omnisArenaMap`
			break
		case `omnisSales`:
			filter=`omnisSales`
			break
		case `outfits`:
			filter=`outfits`
			break
	}
	document.getElementById(`omnisArenaMap`).classList.add(`dark`)
	document.getElementById(`omnisSales`).classList.add(`dark`)
	document.getElementById(`outfits`).classList.add(`dark`)
	document.getElementById(id).classList.remove(`dark`)
	printOutput()
}
function copyOutput(){
	navigator.clipboard.writeText(
		document.getElementById(`output`).innerHTML
	)
}
