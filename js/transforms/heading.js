const heading = {
    name: 'core/heading',
    applyFilter: function( transforms, createBlock ) {
        return {
            from: [
                ...transforms.from,
                ...[ 1, 2, 3, 4, 5, 6 ].map( ( level ) => ( {
                    type: 'enter',
                    regExp: new RegExp( '^' + '＃'.repeat(level) + '$' ),
                    transform: () => createBlock( 'core/heading', { level } ),
                } ) ),
                ...[ 1, 2, 3, 4, 5, 6 ].map( ( level ) => ( {
                    type: 'enter',
                    regExp: new RegExp( `^；(h|H)${ level }$` ),
                    transform: () => createBlock( 'core/heading', { level } ),
                } ) )
            ],
            to: transforms.to
        }
    }
};

export default heading;
