function bionicReading(node) {
    let text = node.data;
    let result = '';
    let words = text.split(' ');
    for (let word of words) {
        let bolded = word.slice(0, 3);
        let unbolded = word.slice(3);
        result += `<b>${bolded}</b>${unbolded} `;
    }
    return result.trim();
}

function walk(node) {
    if (node.nodeType === 3) {
        let replacedText = bionicReading(node);
        if (replacedText !== node.data) {
            node.parentNode.innerHTML = replacedText;
        }
    } else if (node.nodeType === 1 && node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
        for (let i = 0; i < node.childNodes.length; i++) {
            walk(node.childNodes[i]);
        }
    }
}

walk(document.body);
