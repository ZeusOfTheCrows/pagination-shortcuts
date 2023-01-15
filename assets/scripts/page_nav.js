let page_links = [];

function add_links_to_array(link_array) {
	// loop through all list anchor tags,
	// add ones that contain a single digit to an array
	for (const link of document.querySelectorAll('li > a')) {
		if (/^[1-9]$/.test(link.innerText)) {
			link_array[link.innerText] = link;  // -1? otherwise 0th element is empty
		}
	}
	return link_array;
}

page_links = add_links_to_array(page_links);

console.log(page_links);

// on alt+№
// find a tag[№]
// click it