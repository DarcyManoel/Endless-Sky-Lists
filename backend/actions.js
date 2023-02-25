var filter=`omnisFleets`
function switchFilter(id){
	switch(id){
		case `omnisFleets`:
			filter=`omnisFleets`
			break
		case `omnisMap`:
			filter=`omnisMap`
			break
		case `omnisMissions`:
			filter=`omnisMissions`
			break
		case `omnisSales`:
			filter=`omnisSales`
			break
		case `outfits`:
			filter=`outfits`
			break
	}
	document.getElementById(`omnisFleets`).classList.add(`dark`)
	document.getElementById(`omnisMap`).classList.add(`dark`)
	document.getElementById(`omnisMissions`).classList.add(`dark`)
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
