const separator = {
    name: 'core/separator',
    applyFilter( transforms, createBlock ) {
        return {
            from: [
                ...transforms.from,
                {
                    type: 'enter',
                    regExp: /^ーーー$/,
                    transform: () => createBlock('core/separator')
                }
            ]
        }
    }
}

export default separator;
