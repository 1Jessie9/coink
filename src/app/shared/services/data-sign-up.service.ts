import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGender } from '../interfaces/gender.interface';
import { IDocumentType } from '../interfaces/document-type.interface';

@Injectable({
    providedIn: 'root'
})
export class DataSignUpService {
    private apiUrl: string = environment.api_url;
    private apiKey: string = environment.api_key;

    constructor(
        private http: HttpClient,
    ) { }

    getDocumentTypes(): Observable<IDocumentType[]> {
        const params = new HttpParams().set('apiKey', this.apiKey);
        const url = "assets/data/document-types.json";
        // const url = `${this.apiUrl}/signup/documentTypes`; entorno real
        return this.http.get<IDocumentType[]>(url, { params })
            .pipe(
                delay(1000), // Simula demora para loader
                catchError(this.handleError)
            );
    }

    getGenders(): Observable<IGender[]> {
        const params = new HttpParams().set('apiKey', this.apiKey);
        const url = "assets/data/genders.json";
        // const url = `${this.apiUrl}/signup/genders`; entorno real
        return this.http.get<IGender[]>(url, { params })
            .pipe(
                delay(1000), // Simula demora para loader
                catchError(this.handleError)
            );
    }

    private handleError(error: any): Observable<never> {
        // Maneja el error de la forma que desees
        console.error('Ocurrió un error:', error);
        return throwError(() => new Error('Error en la solicitud HTTP'));
    }
}
