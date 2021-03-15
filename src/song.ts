export class Song
{
    constructor(private title:string, private author:string,private length:string, private year:number)
    {
        this.title=title;
        this.author=author;
        this.length=length;
        this.year=year;
    }

    showInfo()
    {
        //console.log(`Title: ${this.title}, author: ${this.author}, score: ${this.year}, lenght: ${this.length}`);
        return `Title: ${this.title}, author: ${this.author}, year: ${this.year}, lenght: ${this.length}`;
    }

    getLength()
    {
        return this.length;
    }
} 