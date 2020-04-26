

function buildBeautifulListItemLink(object){
	var liElem = document.createElement('li')

	var displayName = object.name;
	if (displayName.indexOf('.html') > 0){
		displayName = object.name.substring(0,object.name.indexOf('.html'))
	}

	displayName = displayName.replace(/_/g, " ");
	displayName = displayName.replace(/-/g, " ");

	liElem.classList += 'analysis-item'

	liElem.innerHTML = 

		'<a href="'+object.name+'">' + displayName + '</a>'

	
	
	return liElem
}