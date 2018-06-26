export default class SpaceAge {

    private EarthYearInSeconds:number = 31557600;
    // private EarthYearInDays:number = 365.25;
    private OrbitalPeriodInEarthYears: { [key: string]: number } = {
        "Earth": 1.0,
        "Mercury": 0.2408467,
        "Venus": 0.61519726,
        "Mars": 1.8808158,
        "Jupiter": 11.862615,
        "Saturn": 29.447498,
        "Uranus": 84.016846,
        "Neptune": 164.79132
    }

    public constructor(public seconds: number){}

    public onPlanet(planet: string, format: boolean = true): number{
        if(format){
            return parseFloat(this.onPlanet(planet, false).toFixed(2));
        } else {
            return this.seconds/(this.OrbitalPeriodInEarthYears[planet] * this.EarthYearInSeconds);
        }
    }

    public onEarth(): number {
        return this.onPlanet("Earth");
    }
    public onMercury(): number {
        return this.onPlanet("Mercury");
    }
    public onVenus(): number {
        return this.onPlanet("Venus");
    }
    public onMars(): number {
        return this.onPlanet("Mars");
    }
    public onJupiter(): number {
        return this.onPlanet("Jupiter");
    }
    public onSaturn(): number {
        return this.onPlanet("Saturn");
    }
    public onUranus(): number {
        return this.onPlanet("Uranus");
    }
    public onNeptune(): number {
        return this.onPlanet("Neptune");
    }
}
