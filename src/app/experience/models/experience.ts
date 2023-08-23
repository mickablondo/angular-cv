export class Experience {
    public company: string;
    public link: string;
    public position: string;
    public from: Date;
    public to: Date;
    public description: string;
    public techno: string;

    constructor(company: string, link: string, position: string, from: Date, to: Date, description: string, techno: string){
        this.company = company,
        this.link = link,
        this.position = position,
        this.from = from,
        this.to = to,
        this.description = description,
        this.techno = techno
    }
}