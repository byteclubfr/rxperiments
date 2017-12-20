import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export function prepareLab(id) {
    const logger = document.querySelector(`#lab${id} .log`);
    const lab = document.querySelector(`#lab${id} .lab`);
    logger.innerHTML = '';
    if (lab) {
        lab.innerHTML = '';
    }
    return {
        lab,
        log: (...x) => {
            if (!x.length) {
                x = ['terminated'];
            }
            logger.innerHTML += x.map(a => `<br>${a}`);
            logger.scrollTop = logger.scrollHeight; // scroll to last line
        }
    }
}

export function countdown(parent: Element = document.body, onprogress = console.log, onend = () => {}) {
    const element = document.createElement('div');
    element.classList.add('countdown');
    let time = 10;
    element.textContent = String(time);
    onprogress(time);
    parent.appendChild(element);
    const interval = setInterval(() => {
        time--;
        onprogress(time);
        element.textContent = String(time).padStart(2, '0');
        if (time === 0) {
            onend();
            clearInterval(interval);
            element.classList.add('terminated');
        }
    }, 1000);
}

export function observableCountdown (parent: Element = document.body) {
    return Observable.create(observer => {
        countdown(parent, observer.next.bind(observer), observer.complete.bind(observer));
    });
}

export function externalObservableCountdown (parent: Element = document.body) {
    const subject$ = new Subject();
    countdown(parent,
        x => subject$.next(x),
        () => subject$.complete()
    );
    return subject$;
}
