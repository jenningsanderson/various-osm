function buildBeautifulListItemLink(object){
	var liElem = document.createElement('li')

	var displayName = object.name;
	
	//take out html
	if (displayName.indexOf('.html') > 0){
		displayName = object.name.substring(0,object.name.indexOf('.html'))
	}

    //replace dashes and underscores with spaces
	displayName = displayName.replace(/_/g, " ");
	displayName = displayName.replace(/-/g, " ");

	//capitalize first letters
	var parts = []
	displayName.split(" ").forEach(function(t){
		parts.push(t[0].toUpperCase() + t.substring(1,t.length))
	})
	displayName = parts.join(" ")

	liElem.classList += 'analysis-item'

	liElem.innerHTML = 

		'<a href="'+object.name+'">' + displayName + '</a>'
	
	return liElem
}