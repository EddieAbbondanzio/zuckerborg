let treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
);

let textNodes = [];

//Build the list of DOM elements we need to visit.
while (treeWalker.nextNode()) {
    textNodes.push(treeWalker.currentNode);
}

let regex = new RegExp('zuckerberg', 'ig');

//Run through each node, and see if we need to replace
//it with zuckerborg.
for (var i = 0, len = textNodes.length; i < len; i++) {
    textNodes[i].nodeValue = textNodes[i].nodeValue.replace(regex,
        function (match) {
            console.log(match);

            //Do we need to handle an uppercase?
            if(match.charAt(0) == match.charAt(0).toUpperCase()){
                return 'Zuckerborg';
            }
            else {
                return 'zuckerborg';
            }
        }
    );
}
