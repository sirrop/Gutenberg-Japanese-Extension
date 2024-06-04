const quote = {
    name: 'core/quote',
    applyFilter( transforms, createBlock ) {
        return {
            ...transforms,
            from: [
                ...transforms.from,
                {
                    type: 'enter',
                    regExp: /^＞$/,
                    transform: ( content ) => createBlock( 'core/quote', {}, [
                        createBlock( 'core/paragraph', { content } ),
                    ] )
                }
            ],
            to: transforms.to
        }
    }
}

export default quote;
