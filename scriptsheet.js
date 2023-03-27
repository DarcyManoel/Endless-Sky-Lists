var elements=[[],[],[],[],[]]
	//	Outfits
	//	Ships
	//	Systems
	//	Persons
var filter=``
//	Actions
function actionUpload(that){
	document.querySelectorAll('.blocked').forEach((element)=>{
		element.classList.remove('blocked')
	})
	var files=event.target.files
	elements=[[],[],[],[],[]]
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
					for(i3=i2+1;i3<lines.length;i3++){
						if(!lines[i3].startsWith(`\t`)){
							break
						}else if(lines[i3].replaceAll(`\t`,``).startsWith(`#`)){
							continue
						}
						if(lines[i3].replaceAll(`\t`,``).replaceAll(`"`,``).startsWith(`category `)){
							elements[0][elements[0].length-1][1]=[lines[i3].replaceAll(`"`,``).slice(10),[``,``]]
							if(lines[i3].replaceAll(`"`,``).slice(10)==`Engines`){
								for(i4=i3+1;i4<lines.length;i4++){
									if(!lines[i4].startsWith(`\t`)){
										break
									}else if(lines[i4].replaceAll(`\t`,``).startsWith(`#`)){
										continue
									}
									if(lines[i4].replaceAll(`\t`,``).replaceAll(`"`,``).startsWith(`thrust `)){
										elements[0][elements[0].length-1][1][1][0]=lines[i4].replaceAll(`"`,``).slice(8)
									}
									if(lines[i4].replaceAll(`\t`,``).replaceAll(`"`,``).startsWith(`turn `)){
										elements[0][elements[0].length-1][1][1][1]=lines[i4].replaceAll(`"`,``).slice(6)
									}
								}
							}
						}
					}
				}
				//	Ships
				if(lines[i2].startsWith(`ship `)){
					if(!lines[i2].slice(5).includes(`" "`)){
						elements[1].push([lines[i2].slice(5).replaceAll(`"`,``),[],[]])
						for(i3=i2+1;i3<lines.length;i3++){
							if(!lines[i3].startsWith(`\t`)){
								break
							}else if(lines[i3].replaceAll(`\t`,``).startsWith(`#`)){
								continue
							}
							if(lines[i3].replaceAll(`\t`,``).replaceAll(`"`,``).startsWith(`sprite `)){
								elements[1][elements[1].length-1][1]=(lines[i3].replaceAll(`"`,``).slice(8))
							}
							if(lines[i3].replaceAll(`\t`,``).replaceAll(`"`,``).startsWith(`self destruct `)){
								if(lines[i3].replaceAll(`"`,``).slice(16)!=1){
									elements[1][elements[1].length-1][2]=(lines[i3].replaceAll(`"`,``).slice(16))
								}
							}
						}
					}
				}
				//	Systems
				if(lines[i2].startsWith(`system `)){
					elements[2].push(lines[i2].slice(7).replaceAll(`"`,``))
				}
				//	Persons
				if(lines[i2].startsWith(`person `)){
					elements[3].push(lines[i2].slice(7).replaceAll(`"`,``))
				}
				//	Governments
				if(lines[i2].startsWith(`government `)){
					elements[4].push([lines[i2].slice(11).replaceAll(`"`,``),[]])
					for(i3=i2+1;i3<lines.length;i3++){
						if(!lines[i3].startsWith(`\t`)){
							break
						}else if(lines[i3].replaceAll(`\t`,``).startsWith(`#`)){
							continue
						}
						if(lines[i3].replaceAll(`\t`,``).replaceAll(`"`,``).startsWith(`player reputation `)){
							elements[4][elements[4].length-1][1]=lines[i3].replaceAll(`"`,``).slice(19)
						}
					}
				}
			}
		}
	}
	filter=``
	printOutput()
}
function actionFilter(id){
	filter=id
	document.querySelectorAll('.filter').forEach((element)=>{
		element.classList.add('dark')
	})
	document.getElementById(id).classList.remove(`dark`)
	printOutput()
}
function actionCopy(){
	navigator.clipboard.writeText(
		document.getElementById(`output`).innerHTML
	)
}
//	Display Text
function printOutput(){
	document.getElementById(`output`).innerHTML=``
	switch(filter){
		case `omnis`:
			var shipsWithSprites=0
			document.getElementById(`output`).innerHTML+=`#\tArena\nsystem "Omnis"\n\tpos 0 -10000\n\tadd object\n`
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
			document.getElementById(`output`).innerHTML+=`#\tJobs\nmission "resetReputation"\n\tdescription "Reset reputation of all factions to game default."\n\tjob\n\tname "Reset Reputation"\n\ton accept\n`
			for(i1=0;i1<elements[4].length;i1++){
				if(elements[4][i1][1].length){
					document.getElementById(`output`).innerHTML+=`\t\t"reputation: `+elements[4][i1][0]+`" = `+elements[4][i1][1]+`\n`
				}
			}
			document.getElementById(`output`).innerHTML+=`\trepeat\n\tsource\n\t\tgovernment "Omnis"\n`
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
		case `omnisCompat`:
			document.getElementById(`output`).innerHTML+=`#\tSales\n`
			if(elements[0].length){
				document.getElementById(`output`).innerHTML+=`outfitter "everything"\n`
				for(i1=0;i1<elements[0].length;i1++){
					document.getElementById(`output`).innerHTML+=`\t`+elements[0][i1][0]+`\n`
				}
			}
			if(elements[1].length){
				document.getElementById(`output`).innerHTML+=`shipyard "everything"\n`
				for(i1=0;i1<elements[1].length;i1++){
					document.getElementById(`output`).innerHTML+=`\t"`+elements[1][i1][0]+`"\n`
				}
			}
			break
		case `boardingEase`:
			document.getElementById(`output`).innerHTML+=`#\tOverride\n`
			for(i1=0;i1<elements[1].length;i1++){
				if(elements[1][i1][2].length){
					document.getElementById(`output`).innerHTML+=`ship "`+elements[1][i1][0]+`"\n\tattributes\n\t\t"self destruct" `+elements[1][i1][2]/2+`\n`
				}
			}
			break
		case `noAsteroids`:
			for(i1=0;i1<elements[2].length;i1++){
				document.getElementById(`output`).innerHTML+=`system "`+elements[2][i1]+`"\n\tasteroids 0\n`
			}
			break
		case `noPersons`:
			document.getElementById(`output`).innerHTML+=`#\tDisabled\ndisable person\n`
			for(i1=0;i1<elements[3].length;i1++){
				document.getElementById(`output`).innerHTML+=`\t"`+elements[3][i1]+`"\n`
			}
			break
	}
	console.log(elements)
}