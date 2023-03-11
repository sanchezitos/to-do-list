import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ToDoService {
    private apiUrl = 'https://tpmo81rzfa.execute-api.us-east-1.amazonaws.com/dev/node/todo/actions';

    constructor(private http: HttpClient) { }

    getToDo(): Observable<any> {
        const getURL = `${this.apiUrl}/gettodos`
        return this.http.get<any>(getURL);
    }

    addToDo(name: string): Observable<any> {
        const addUrl = `${this.apiUrl}/addtodo`
        const newItem = { name: name };
        return this.http.post<any>(addUrl, newItem);
    }

    deleteItem(id: string): Observable<any> {
        const deleteUrl = `${this.apiUrl}/${id}`;
        return this.http.delete<any>(deleteUrl);
    }
}
