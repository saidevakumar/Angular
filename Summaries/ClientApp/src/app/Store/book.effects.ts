import { ActivationStart } from "@angular/router";
import { BookService } from "../services/book.service";
import {Actions,ofType, createEffect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import { mergeMap, Observable,map } from "rxjs";
import * as types from './action.types';
import * as bookActions from './book.actions';

export class BookEffects{

    constructor(private service:BookService, 
        private actions$: Actions)
    {
        //@createEffect() loadBooks$: Observable<Action> = this.actions$.pipe(
        //    ofType<bookActions.loadBooksAction>(types.LOAD_BOOKS),mergeMap(()=> 
        //    this.service.getAllBooks().pipe(map(books => 
        //        new bookActions.loadBookSuccessAction(books))))
        //);
    }
}