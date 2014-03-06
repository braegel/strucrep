if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
    }
else
    {// code for IE6, IE5
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

xmlhttp.open("GET","logic.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;



var f = document.createElement("form");
var newDiv = document.createElement("div");
var newContent = document.createTextNode("Region");
newDiv.appendChild(newContent); // Textknoten dem zuvor erstellten div hinzufügen.

f.appendChild(newDiv);
var i = document.createElement("select"); //input element, text
i.setAttribute('id',"select_region");
i.setAttribute('onclick',"render_questions(this.value)");
f.appendChild(i);
document.getElementsByTagName('body')[0].appendChild(f);


var x = document.getElementById("select_region");
var option = document.createElement("option");


logic=xmlDoc.getElementsByTagName("region");

var theregion='';;
for (i=0;i<logic.length;i++){
    var option = document.createElement("option");
    theregion=logic[i].getAttribute('name');
    option.setAttribute('value',theregion);
    option.text = theregion;
    x.add(option)
}


var s = document.createElement("input"); //input element, Submit button
s.setAttribute('type',"submit");
s.setAttribute('value',"Submit");


function render_questions (region){
    var newStructure;
    var newContent;
    var newQuestion;
    var questions;
    var structures;

    for (i=0;i<logic.length;i++){
	if (region == logic[i].getAttribute('name')){
	    structures=logic[i].getElementsByTagName("structure");
	}
    }


    for (i=0;i<structures.length;i++){

	questions=structures[i].getElementsByTagName("question");


	newStructure = document.createElement("div");
	newContent = document.createTextNode(structures[i].getAttribute('name'));
	newStructure.appendChild(newContent); // Textknoten dem zuvor erstellten div hinzufügen.

	for (j=0;j<questions.length;j++){
	    //	    console.log(questions[j].getAttribute('text'));
	    newQuestion = document.createElement("div");
	    newContent = document.createTextNode(questions[j].getAttribute('text'));
	    newQuestion.appendChild(newContent);
	    newStructure.appendChild(newQuestion);
	}

	document.getElementsByTagName('form')[0].appendChild(newStructure);
    }
}