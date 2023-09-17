import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fichier',
  templateUrl: './fichier.component.html',
  styleUrls: ['./fichier.component.css']
})
export class FichierComponent {
  selectedFile : File | null= null;
  files: File[] = [];

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload(){
    if (!this.selectedFile) {
      return;
    }
    const fd = new FormData();
    fd.append('image',this.selectedFile , this.selectedFile.name);
    this.http.post('http://localhost:3000/upload', fd)
    .subscribe(res => {
      console.log(res);
    });

  }


}
