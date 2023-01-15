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

// on alt+№
// find a tag[№]
// click it

// maybe alt+p to just use numbers with no accelerator?

window.addEventListener("keydown", function(event) {
	if (event.defaultPrevented) {
		return;  // do nothing if the event was already processed
	}

	if (/^[1-9]$/.test(event.key)) {  // bit ugly to use regex for this
		page_links[event.key].click();
		// cancel the default action to avoid it being handled twice
		event.preventDefault();
	}

}, true);  // capture = true - i don't quite understand this