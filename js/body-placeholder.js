function replaceParagraphBodyPlaceholder( settings, name ) {
    if ( name !== 'core/paragraph' ) return settings;

    console.log(settings)
    console.log(settings.bodyPlaceholder)

    return {
        ...settings,
        bodyPlaceholder: 'ブロックを選択するには「/」または「；」を入力'
    };
}

!function() {
   wp.hooks.addFilter(
       'blocks.registerBlockType',
        'studrime/gutenbergx-jp/replace-body-placeholder',
       replaceParagraphBodyPlaceholder,
       11
   );
}();