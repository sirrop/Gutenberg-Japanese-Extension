const list = {
    name: 'core/list',
    applyFilter( transforms, createBlock ) {
        return {
            from: [
                ...transforms.from,
                ...['＊', 'ー', '＋', '・'].map( prefix => ({
                    type: 'enter',
                    regExp: new RegExp(`^${prefix}$`),
                    transform: () => createBlock('core/list', {}, [
                        createBlock('core/list-item', {})
                    ])
                })),
                ...['1。', '1）'].map( prefix => ({
                    type: 'enter',
                    regExp: new RegExp(`^${prefix}$`),
                    transform: () => createBlock('core/list', { ordered: true }, [
                        createBlock('core/list-item', {})
                    ])
                }))
            ],
            to: transforms.to
        }
    }
}

export default list;