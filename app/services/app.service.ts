export class AppService {

    participants: Object [];

    constructor() {
        this.participants = [
            {
                name: "Nicolas",
                lastname: "Sigal"
            },
            {
                name: "Nicolas",
                lastname: "Sigal"
            },
            {
                name: "Nicolas",
                lastname: "Sigal"
            },
        ];
    }

    getParticipants(): Object [] {
        return this.participants
    }
}