var quranAudio = require('./quranAudio.js')

module.exports.function = function findQuran(searchTerm) {
    const keysToSearchOn = ['title', 'chapter', 'subtitle', 'albumName']
    let quranAudioFound = []

    if (searchTerm) {
        searchTerm = searchTerm.toLowerCase()
        quranAudioFound = quranAudio.audioItems.filter(function (audioItem) {
            return keysToSearchOn.some(function (key) {
                return audioItem[key] && audioItem[key].toLowerCase().includes(searchTerm)
            })
        })
    } else {
        quranAudioFound = quranAudio.audioItems
    }
    return quranAudioFound
}