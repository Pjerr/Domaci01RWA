import {Song} from "./song"

export class Album{
    constructor(private songs:Song[])
    {
        this.songs=[];
    }

    showAlbum(host:HTMLElement)
    {
        this.clearBox('album');
        let x;
        for(let i=0;i<this.songs.length;i++)
        {
            x=document.createElement('pre');
            host.appendChild(x);
            x=document.createElement('label');
            x.innerHTML=this.songs[i].showInfo();
            host.appendChild(x);
            x=document.createElement('pre');
            host.appendChild(x);
        }
        console.log(this.songs);
    }

    addSong(s:Song)
    {
        this.songs.push(s);
    }

    removeSong(s:Song)
    {
        this.songs=this.songs.filter(obj=> obj !== s);
    }


    private compareObjects(obj1:Song, obj2:Song)
    {
        let l1=(parseFloat)(obj1.getLength());
        let l2=(parseFloat)(obj2.getLength());

        if(l1>l2)
            return 1;
        if(l1<l2)
            return -1;
        return 0;
    }

    sortSongsByLenght(host:HTMLElement)
    {
        this.clearBox('album');
        this.songs.sort((s1,s2)=>(this.compareObjects(s1,s2)));
        let x;
        for(let i=0;i<this.songs.length;i++)
        {
            x=document.createElement('pre');
            host.appendChild(x);
            x=document.createElement('label');
            x.innerHTML=this.songs[i].showInfo();
            host.appendChild(x);
            x=document.createElement('pre');
            host.appendChild(x);
        }
        console.log(this.songs);
    }

    clearBox(elementID:any) {
        document.getElementById(elementID).innerHTML="";   
    }
}