import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit{
  constructor(private http : HttpClient){
    
  }
  titre:string = ' ';
  ngOnInit(): void {
    
    this.http.get("http://localhost:8080/hi", { responseType: 'text' }).subscribe((data)=>{this.titre=data;console.log(data)});
}
}