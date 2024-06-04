import heading from "./heading.js"
import list from "./list.js"
import quote from "./quote.js"
import separator from "./separator.js"

function isTarget( name ) {
    return names.includes( name )
}

function getModule(name) {
    if (name === heading.name) return heading.applyFilter
    if (name === list.name) return list.applyFilter
    if (name === quote.name) return quote.applyFilter
    if (name === separator.name) return separator.applyFilter
    return null
}

wp.hooks.addFilter(
    'blocks.registerBlockType',
    'my-plugin/class-names/list-block',
    function( settings, name ) {
        const applyFilter = getModule( name )

        if (applyFilter === null) return settings;

        const transforms = settings.transforms;
        const createBlock = wp.blocks.createBlock;

        settings.transforms = applyFilter(transforms, createBlock);

        return settings;
    }
);