var elements=[[]]
function loadFiles(that){
	var files=event.target.files
	elements=[[]]
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
						elements[0][elements[0].length-1][1].push(lines[i3])
					}
				}
			}
		}
	}
	setTimeout(printOutput,500)
}
function printOutput(){
	for(i1=0;i1<elements[0].length;i1++){
		document.getElementById(`output`).innerHTML+=`outfit `+elements[0][i1][0]+`\n`
		for(i2=0;i2<elements[0][i1][1].length;i2++){
			document.getElementById(`output`).innerHTML+=elements[0][i1][1][i2]+`\n`
		}
	}
	console.log(elements)
}