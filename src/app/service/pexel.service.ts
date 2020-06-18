import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PexelService {
  constructor(private http: HttpClient) {}

  getRandomCookingVideos(): Promise<any> {
    const headers = new HttpHeaders({
      Authorization: '563492ad6f91700001000001db81e8f5936240a6a28ff0b7a35bfc69',
    });

    return this.http
      .get<any>(

        'https://api.pexels.com/videos/search?query=cook&per_page=10&min_width=3800&duration=10',
        {
          headers,
        }
      )
      .toPromise();
  }

  getRandomPhotos(query: string): Promise<any> {
    const headers = new HttpHeaders({
      Authorization: '563492ad6f91700001000001db81e8f5936240a6a28ff0b7a35bfc69',
    });

    return this.http
      .get<any>(`https://api.pexels.com/v1/search?query=${query}&per_page=15`, {
        headers,
      })
      .toPromise();
  }


  getPhotoById(id: number) {
    const headers = new HttpHeaders({
      Authorization: '563492ad6f91700001000001db81e8f5936240a6a28ff0b7a35bfc69',
    });
    return this.http
      .get<any>(`https://api.pexels.com/v1/photos/${id}`, {
        headers,
      })
      .toPromise();
  }
}
