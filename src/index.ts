import {Song} from "./song";
import {Album} from "./album";

var songs:Song[];
var s1=new Song("Smells like teen spirit", "Nirvana", "5:01", 1991);
var s2=new Song("In Bloom","Nirvana","4:41",1991);
var s3=new Song("Breed","Nirvana","3:03",1991);
var s4=new Song("Drain you","Nirvana","3:43",1991);
var s5=new Song("Come as you are","Nirvana","3:39",1991);
var album=new Album(songs);
album.addSong(s1);
album.addSong(s2);
album.addSong(s3);
album.addSong(s4);
album.addSong(s5);
let btnShow=document.getElementById("show");
btnShow.addEventListener("click", (e:Event) => album.showAlbum(document.getElementById("album")));

let btnSort=document.getElementById("sort");
btnSort.addEventListener("click",(e:Event) => album.sortSongsByLenght(document.getElementById("album")));