const songsmanager = () => {
let songs = {}


const addSong = (key,value) => {
    
    songs[key] = (value.split("="))[1]
  
    }
    console.log(songs)



const getSong = (key) =>{  
    console.log("https://www.youtube.com/watch?v="+songs[key])}

return {addSong: addSong,
      getSong: getSong}

}

const songsManager = songsmanager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")


songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ

// "abcde".split("c") = ["ab", "de"]
// "abcde".indexOf("c") = 2 (2 тавим до с)