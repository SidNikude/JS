import { Observable } from 'rxjs';

const obs = new Observable((observer)=>{
    observer.next("Welcome");
    observer.next("to the JS session");
    observer.complete();
});

const subscribeObj = {
    next: (val) =>{
        console.log(val);
    },
    complete: () =>{
        console.log("Observable is completed");
    }  
}

const subs = obs.subscribe(subscribeObj);

subs.unsubscribe();