import { Observable, Subject } from "rxjs"

export class MemberManager {

    private Register$ = new Subject<boolean>;
    
    getSubject():Observable<boolean> {
        return this.Register$.asObservable();
    }

    setSubject(value:boolean){
        this.Register$.next(value);
    }
}

export class PeriodManager {

    private Period$ = new Subject<boolean>;
    
    getSubject():Observable<boolean> {
        return this.Period$.asObservable();
    }

    setSubject(value:boolean){
        this.Period$.next(value);
    }
}