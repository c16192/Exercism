class Transcriptor {
    toRna(rnaString: string): string {
        if (rnaString.length == 1) {
            if (rnaString === 'C') {
                return 'G';
            } else if (rnaString === 'G') {
                return 'C';
            } else if (rnaString === 'A') {
                return 'U';
            } else if (rnaString === 'T') {
                return 'A';
            } else {
                throw 'Invalid input DNA.';
            }
        } else if (rnaString.length > 1) {
            let translatedRNA:string = "";
            for(let i = 0; i < rnaString.length; i++){
                let rnaCharacter:string = rnaString.charAt(i);
                translatedRNA += this.toRna(rnaCharacter);
            }
            return translatedRNA;
        } else {
            throw 'Invalid input DNA.';
        }
    }
}

export default Transcriptor