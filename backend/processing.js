var elements=[[],[],[]]
//	Outfits
//	Ships
//	Systems
function loadFiles(that){
	var files=event.target.files
	elements=[[],[],[]]
	for(i1=0;i1<files.length;i1++){
		var systemsReader=new FileReader()
		systemsReader.readAsText(files[i1])
		systemsReader.onload=function(e){
			var output=e.target.result
			lines=output.split(`\n`)
			for(i2=0;i2<lines.length;i2++){
				//	Outfits
				if(lines[i2].startsWith(`outfit `)){
					elements[0].push([lines[i2].slice(7),[]])
				}
				//	Ships
				if(lines[i2].startsWith(`ship `)){
					if(!lines[i2].slice(5).includes(`" "`)){
						elements[1].push([lines[i2].slice(5).replaceAll(`"`,``),[]])
						for(i3=i2+1;i3<lines.length;i3++){
							if(!lines[i3].startsWith(`\t`)){
								break
							}else if(lines[i3].replaceAll(`\t`,``).startsWith(`#`)){
								continue
							}
							if(lines[i3].replaceAll(`\t`,``).replaceAll(`"`,``).startsWith(`sprite `)){
								elements[1][elements[1].length-1][1].push(lines[i3].replaceAll(`"`,``).slice(8))
							}
						}
					}
				}
				//	Systems
				if(lines[i2].startsWith(`system `)){
					elements[2].push(lines[i2].slice(7).replaceAll(`"`,``))
				}
			}
		}
	}
	filter=``
	switchFilter()
	printOutput()
}
function printOutput(){
	document.getElementById(`output`).innerHTML=``
	switch(filter){
		case `omnis`:
			var shipsWithSprites=0
			document.getElementById(`output`).innerHTML+=`#\tArena\nsystem "Omnis"\n\tadd object\n`
			for(i1=0;i1<elements[1].length;i1++){
				if(!elements[1][i1][1].length){
					elements[1].splice(i1,1)
				}
			}
			for(i1=0;i1<elements[1].length;i1++){
				if(elements[1][i1][1].length){
					document.getElementById(`output`).innerHTML+=`\t\tobject "`+elements[1][i1][0]+` "\n\t\t\tdistance `+Math.round((elements[1].length*75)+300)+`\n\t\t\toffset `+Math.round((i1/elements[1].length)*36000)/100+`\n\t\t\tsprite "`+elements[1][i1][1]+`"\n`
				}
			}
			for(i1=0;i1<elements[1].length;i1++){
				if(elements[1][i1][1].length){
					document.getElementById(`output`).innerHTML+=`planet "`+elements[1][i1][0]+` "\n\tbribe 0\n\tgovernment "Arena"\n\ttribute 1\n\t\tfleet "`+elements[1][i1][0]+` "\n\t\tthreshold 0\n`
					document.getElementById(`output`).innerHTML+=`fleet "`+elements[1][i1][0]+` "\n\tgovernment "Arena"\n\tpersonality "heroic"\n\tvariant\n\t\t"`+elements[1][i1][0]+`"\n`
				}
			}
			document.getElementById(`output`).innerHTML+=`#\tMapping\nevent "revealMap"\n`
			for(i1=0;i1<elements[2].length;i1++){
				document.getElementById(`output`).innerHTML+=`\tvisit "`+elements[2][i1]+`"\n`
			}
			document.getElementById(`output`).innerHTML+=`#\tSales\noutfitter "everything"\n`
			for(i1=0;i1<elements[0].length;i1++){
				document.getElementById(`output`).innerHTML+=`\t`+elements[0][i1][0]+`\n`
			}
			document.getElementById(`output`).innerHTML+=`shipyard "everything"\n`
			for(i1=0;i1<elements[1].length;i1++){
				document.getElementById(`output`).innerHTML+=`\t"`+elements[1][i1][0]+`"\n`
			}
			break
	}
	console.log(elements)
}