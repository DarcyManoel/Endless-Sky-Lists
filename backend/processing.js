var elements=[[]]
var outfitKeywords=
[
	`category`,
	`flotsam sprite`,
	`flare sprite`,
	`reverse flare sprite`,
	`steering flare sprite`,
	`flare sound`,
	`reverse flare sound`,
	`steering flare sound`,
	`afterburner effect`,
	`thumbnail`,
	`licenses`,
	`jump effect`,
	`jump sound`,
	`jump in sound`,
	`jump out sound`,
	`hyperdrive sound`,
	`hyperdrive in sound`,
	`hyperdrive out sound`,
	`cost`,
	`mass`,
	`outfit space`,
	`engine capacity`,
	`weapon capacity`,
	`cargo space`,
	`atrocity`,
	`illegal`,
	`shields`,
	`shield generation`,
	`shield energy`,
	`shield heat`,
	`shield fuel`,
	`shield delay`,
	`depleted shield delay`,
	`hull`,
	`hull repair rate`,
	`hull energy`,
	`hull heat`,
	`hull fuel`,
	`repair delay`,
	`disabled repair delay`,
	`absolute threshold`,
	`threshold percentage`,
	`hull threshold`,
	`shield generation multiplier`,
	`shield energy multiplier`,
	`shield heat multiplier`,
	`shield fuel multiplier`,
	`hull repair multiplier`,
	`hull energy multiplier`,
	`hull heat multiplier`,
	`hull fuel multiplier`,
	`energy capacity`,
	`energy generation`,
	`energy consumption`,
	`heat generation`,
	`ramscoop`,
	`solar collection`,
	`solar heat`,
	`fuel capacity`,
	`fuel consumption`,
	`fuel energy`,
	`fuel heat`,
	`fuel generation`,
	`thrust`,
	`thrusting energy`,
	`thrusting heat`,
	`thrusting shields`,
	`thrusting hull`,
	`thrusting fuel`,
	`thrusting discharge`,
	`thrusting corrosion`,
	`thrusting ion`,
	`thrusting leakage`,
	`thrusting burn`,
	`thrusting slowing`,
	`thrusting disruption`,
	`turn`,
	`turning energy`,
	`turning heat`,
	`turning shields`,
	`turning hull`,
	`turning fuel`,
	`turning discharge`,
	`turning corrosion`,
	`turning ion`,
	`turning leakage`,
	`turning burn`,
	`turning slowing`,
	`turning disruption`,
	`reverse thrust`,
	`reverse thrusting energy`,
	`reverse thrusting heat`,
	`reverse thrusting shields`,
	`reverse thrusting hull`,
	`reverse thrusting fuel`,
	`reverse thrusting discharge`,
	`reverse thrusting corrosion`,
	`reverse thrusting ion`,
	`reverse thrusting leakage`,
	`reverse thrusting burn`,
	`reverse thrusting slowing`,
	`reverse thrusting disruption`,
	`afterburner thrust`,
	`afterburner energy`,
	`afterburner heat`,
	`afterburner fuel`,
	`afterburner shields`,
	`afterburner hull`,
	`afterburner discharge`,
	`afterburner corrosion`,
	`afterburner ion`,
	`afterburner leakage`,
	`afterburner burn`,
	`afterburner slowing`,
	`afterburner disruption`,
	`cooling`,
	`active cooling`,
	`cooling energy`,
	`heat dissipation`,
	`heat capacity`,
	`overheat damage rate`,
	`overheat damage threshold`,
	`cooling inefficiency`,
	`atmosphere scan`,
	`cargo scan power`,
	`cargo scan speed`,
	`outfit scan power`,
	`outfit scan speed`,
	`scan interference`,
	`inscrutable`,
	`asteroid scan power`,
	`tactical scan power`,
	`capture attack`,
	`capture defense`,
	`unplunderable`,
	`hyperdrive`,
	`scram drive`,
	`jump drive`,
	`jump speed`,
	`jump fuel`,
	`jump range`,
	`bunks`,
	`required crew`,
	`crew equivalent`,
	`gun ports`,
	`turret mounts`,
	`cloak`,
	`cloaking energy`,
	`cloaking fuel`,
	`cloaking heat`,
	`disruption resistance`,
	`disruption resistance energy`,
	`disruption resistance heat`,
	`disruption resistance fuel`,
	`ion resistance`,
	`ion resistance energy`,
	`ion resistance heat`,
	`ion resistance fuel`,
	`slowing resistance`,
	`slowing resistance energy`,
	`slowing resistance heat`,
	`slowing resistance fuel`,
	`discharge resistance`,
	`discharge resistance energy`,
	`discharge resistance heat`,
	`discharge resistance fuel`,
	`corrosion resistance`,
	`corrosion resistance energy`,
	`corrosion resistance heat`,
	`corrosion resistance fuel`,
	`leak resistance`,
	`leak resistance energy`,
	`leak resistance heat`,
	`leak resistance fuel`,
	`burn resistance`,
	`burn resistance energy`,
	`burn resistance heat`,
	`burn resistance fuel`,
	`piercing resistance`,
	`disruption protection`,
	`energy protection`,
	`force protection`,
	`fuel protection`,
	`heat protection`,
	`hull protection`,
	`ion protection`,
	`piercing protection`,
	`shield protection`,
	`slowing protection`,
	`discharge protection`,
	`corrosion protection`,
	`leak protection`,
	`burn protection`,
	`maintenance costs`,
	`operating costs`,
	`income`,
	`operating income`,
	`ammo`,
	`drag`,
	`installable`,
	`minable`,
	`map`,
	`radar jamming`,
	`self destruct`,
	[`weapon`,
		[
			[`sprite`,
				[
					`frame rate`,
					`frame time`,
					`delay`,
					`start frame`,
					`random start frame`,
					`no repeat`,
					`rewind`
				]
			],
			`hardpoint sprite`,
			`hardpoint offset`,
			`sound`,
			`ammo`,
			`icon`,
			`fire effect`,
			`live effect`,
			`hit effect`,
			`target effect`,
			`die effect`,
			`submunition`,
			`facing`,
			`offset`,
			`stream`,
			`cluster`,
			`safe`,
			`phasing`,
			`no damage scaling`,
			`gravitational`,
			`parallel`,
			`lifetime`,
			`random lifetime`,
			`velocity`,
			`random velocity`,
			`acceleration`,
			`drag`,
			`turn`,
			`inaccuracy`,
			`turret turn`,
			`range override`,
			`velocity override`,
			`firing energy`,
			`firing force`,
			`firing fuel`,
			`firing heat`,
			`firing hull`,
			`firing shields`,
			`firing ion`,
			`firing slowing`,
			`firing disruption`,
			`firing discharge`,
			`firing corrosion`,
			`firing leak`,
			`firing burn`,
			`relative firing energy`,
			`relative firing fuel`,
			`relative firing heat`,
			`relative firing hull`,
			`relative firing shields`,
			`reload`,
			`burst count`,
			`burst reload`,
			`homing`,
			`infrared tracking`,
			`optical tracking`,
			`radar tracking`,
			`tracking`,
			`missile strength`,
			`anti-missile`,
			`split range`,
			`trigger radius`,
			`blast radius`,
			`hit force`,
			`piercing`,
			`damage dropoff`,
			`dropoff modifier`,
			`shield damage`,
			`hull damage`,
			`disabled damage`,
			`minable damage`,
			`heat damage`,
			`fuel damage`,
			`energy damage`,
			`relative shield damage`,
			`relative hull damage`,
			`relative disabled damage`,
			`relative minable damage`,
			`relative heat damage`,
			`relative fuel damage`,
			`relative energy damage`,
			`ion damage`,
			`disruption damage`,
			`slowing damage`,
			`discharge damage`,
			`corrosion damage`,
			`leak damage`,
			`burn damage`
		]
	],
	`description`
]
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
					for(i3=0;i3<outfitKeywords.length;i3++){
						if(!Array.isArray(outfitKeywords[i3])){
							for(i4=i2+1;i4<lines.length;i4++){
								if(!lines[i4].startsWith(`\t`)){
									break
								}else if(lines[i4].replaceAll(`\t`,``).startsWith(`#`)){
									continue
								}
								if(lines[i4].replaceAll(`\t`,``).startsWith(outfitKeywords[i3])||lines[i4].replaceAll(`\t`,``).startsWith(`"`+outfitKeywords[i3]+`"`)){
									elements[0][elements[0].length-1][1].push(lines[i4])
								}
							}
						}else{
							for(i4=i2+1;i4<lines.length;i4++){
								if(!lines[i4].startsWith(`\t`)){
									break
								}else if(lines[i4].replaceAll(`\t`,``).startsWith(`#`)){
									continue
								}
								if(lines[i4].replaceAll(`\t`,``).startsWith(outfitKeywords[i3][0])||lines[i4].replaceAll(`\t`,``).startsWith(`"`+outfitKeywords[i3][0]+`"`)){
									elements[0][elements[0].length-1][1].push(lines[i4])
								}
							}
							for(i4=0;i4<outfitKeywords[i3][1].length;i4++){
								for(i5=i2+1;i5<lines.length;i5++){
									if(!lines[i5].startsWith(`\t`)){
										break
									}else if(lines[i5].replaceAll(`\t`,``).startsWith(`#`)){
										continue
									}
									if(lines[i5].replaceAll(`\t`,``).startsWith(outfitKeywords[i3][1][i4])||lines[i5].replaceAll(`\t`,``).startsWith(`"`+outfitKeywords[i3][1][i4]+`"`)){
										elements[0][elements[0].length-1][1].push(lines[i5])
									}
								}
							}
						}
					}
				}
			}
		}
	}
	setTimeout(printOutput,500)
}
function printOutput(){
	switch(filter){
		case `outfit `:
			for(i1=0;i1<elements[0].length;i1++){
				document.innerHTML+=`<div class="outfit" id="outfit`+i1+`"></div>`
				document.getElementById(`output`).innerHTML+=`outfit `+elements[0][i1][0]+`\n`
				for(i2=0;i2<elements[0][i1][1].length;i2++){
					document.getElementById(`output`).innerHTML+=elements[0][i1][1][i2]+`\n`
				}
			}
			break
	}
	console.log(outfitKeywords)
	console.log(elements)
}