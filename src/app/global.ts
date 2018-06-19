export const MTDInfo = Object.freeze({
    allEntries: window['getAllEntries'](),
    allAudioEntries: window['getAllAudioEntries'](),
    config: window['config'],
    build: window['build'],
    dataDict: window['dataDict'],
    dataKeys: Object.keys(window['dataDict']),
    songs: window['songs']

    //... more of your variables
});



