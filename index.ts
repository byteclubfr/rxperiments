import { countdown, externalObservableCountdown, observableCountdown, prepareLab } from './utils';
import { publish, publishReplay, share } from 'rxjs/operators';

import { of } from 'rxjs/observable/of';

const labs = {

    // 1. Promise async ?
    rxPeriments1() {
        const { lab, log } = prepareLab(1);
        const promise = Promise.resolve(1);
        log('avant');
        promise.then(log);
        log('après');
    },

    // 2. Observable (rx) async ?
    rxPeriments2() {
        const { lab, log } = prepareLab(2);
        const observable$ = of(1);
        log('avant');
        observable$.subscribe(log, null, log);
        log('après');
    },

    // 3. countdown sans observable
    rxPeriments3() {
        const { lab, log } = prepareLab(3);
        countdown(lab, log, log);
    },

    // 4. countdown créé dans un observable
    rxPeriments4() {
        const { lab, log } = prepareLab(4);
        const observableCountDown$ = observableCountdown(lab);
    },

    // 5. observable countdown avec 1 observer
    rxPeriments5() {
        const { lab, log } = prepareLab(5);
        const observableCountDown$ = observableCountdown(lab);
        observableCountDown$.subscribe(log, null, log);
    },

    // 6. observable countdown avec 2 observer
    rxPeriments6() {
        const { lab, log } = prepareLab(6);
        const observableCountDown$ = observableCountdown(lab);
        observableCountDown$.subscribe(log, null, log);
        observableCountDown$.subscribe(log, null, log);
    },

    // 7. observable countdown avec 2 observer dont 1 après 3s
    rxPeriments7() {
        const { lab, log } = prepareLab(7);
        const observableCountDown$ = observableCountdown(lab);
        observableCountDown$.subscribe(log, null, log);
        setTimeout(() => observableCountDown$.subscribe(log, null, log), 3000);
    },

    // 8. shared observable countdown avec 2 observer
    rxPeriments8() {
        const { lab, log } = prepareLab(8);
        const observableCountDown$ = observableCountdown(lab)
            .pipe(share());
        observableCountDown$.subscribe(log, null, log);
        observableCountDown$.subscribe(log, null, log);
    },

    // 9. shared observable countdown avec 2 observer dont 1 après 3s
    rxPeriments9() {
        const { lab, log } = prepareLab(9);
        const observableCountDown$ = observableCountdown(lab)
            .pipe(share());
        observableCountDown$.subscribe(log, null, log);
        setTimeout(() => observableCountDown$.subscribe(log, null, log), 3000);
    },

    // 10. shared observable countdown avec 2 observer dont 1 après 12s
    rxPeriments10() {
        const { lab, log } = prepareLab(10);
        const observableCountDown$ = observableCountdown(lab)
            .pipe(share());
        observableCountDown$.subscribe(log, null, log);
        setTimeout(() => observableCountDown$.subscribe(log, null, log), 12000);
    },

    // 11. observable countdown avec coundown créé en dehors de l'observable et pas d'observer
    rxPeriments11() {
        const { lab, log } = prepareLab(11);
        const observableCountDown$ = externalObservableCountdown(lab);
    },

    // 12. observable countdown avec coundown créé en dehors de l'observable et 1 observer
    rxPeriments12() {
        const { lab, log } = prepareLab(12);
        const observableCountDown$ = externalObservableCountdown(lab);
        observableCountDown$.subscribe(log, null, log);
    },

    // 13. observable countdown avec coundown créé en dehors de l'observable et 2 observers
    rxPeriments13() {
        const { lab, log } = prepareLab(13);
        const observableCountDown$ = externalObservableCountdown(lab);
        observableCountDown$.subscribe(log, null, log);
        observableCountDown$.subscribe(log, null, log);
    },

    // 14. observable countdown avec coundown créé en dehors de l'observable et 2 observers dont 1 après 3s
    rxPeriments14() {
        const { lab, log } = prepareLab(14);
        const observableCountDown$ = externalObservableCountdown(lab);
        observableCountDown$.subscribe(log, null, log);
        setTimeout(() => observableCountDown$.subscribe(log, null, log), 3000);
    },

    // 15. observable countdown avec coundown créé en dehors de l'observable et 2 observers dont 1 après 12s
    rxPeriments15() {
        const { lab, log } = prepareLab(15);
        const observableCountDown$ = externalObservableCountdown(lab);
        observableCountDown$.subscribe(log, null, log);
        setTimeout(() => observableCountDown$.subscribe(log, null, log), 12000);
    },

    lab(to: number) {
        document.querySelector(`#lab${to}`).scrollIntoView({
            behavior: 'smooth'
        });
    }

};

Object.assign(window, labs);
