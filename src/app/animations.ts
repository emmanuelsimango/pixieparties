import { trigger, transition, style, animate, state } from '@angular/animations';


export const slideLeft = trigger('slide', [
    transition(':enter', [
        style({transform: 'translateX(-20px)'}),
        animate('0.5s ease-in')
    ]),

    transition(':leave', [
        animate('0.5s 1s ease-in', style({transform: 'translateX(-100%)'}))
    ])
]);

export const fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [
        style({ backgroundColor: 'yellow' }),
        animate(2000)
    ]),

]);
