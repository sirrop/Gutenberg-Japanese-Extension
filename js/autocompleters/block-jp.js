/**
 * @param {array<WPCompleter>} completers
 * @param {string} blockName
 * @return {array<WPCompleter>}
 */
function appendCompleter( completers, blockName ) {
    /** @type {WPCompleter|null} */
    let res = null;
    for (i in completers) {
        const completer = completers[i];

        // override WordPress autocompleter
        if (completer.name === 'blocks') {
            res = {
                ...completer,
                triggerPrefix: '；'
            };
        }
    }

    if (res === null) {
        return completers;
    } else {
        return blockName === 'core/paragraph'
            ? [ ...completers, res ]
            : completers;
    }
}

!function() {
    wp.hooks.addFilter(
        'editor.Autocomplete.completers',
        'studrime/gutenbergx-jp/add-autocompleter',
        appendCompleter,
        11
    );
}();