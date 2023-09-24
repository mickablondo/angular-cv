export class Project {
    public name: string;
    public link: string;
    public description: string;
    public techno: string;
    public year: string;

    constructor(name: string, link: string, description: string, techno: string, year: string) {
        this.name = name;
        this.link = link;
        this.description = description;
        this.techno = techno;
        this.year = year;
    }
}