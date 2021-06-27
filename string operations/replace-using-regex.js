const songDecoder = (song) => song.replace(/(WUB)+/g, ' ').trim()

console.log(songDecoder('WUBWUBWEWUBWUBWUBAREWUBWUBTHEWUBWUBWUBCHAMPIONS'))
