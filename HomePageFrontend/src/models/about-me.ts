

export class AboutMeModel{

    //Things needed in the Side Bar
    name: string;
    country: string;
    place: string;
    address: string;
    github: string;
    others: Map<string, string>;

    //Things needed in the main container(Mainly Text)
    text: string;
    highLights: Map<string, number[]>
    
}