import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadService } from '../../services/file-upload';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics.html',
  styleUrls: ['./analytics.css']
})
export class AnalyticsComponent implements OnInit {
  history: any[] = [];
  loading = true;

  constructor(private fileService: FileUploadService) {}

  ngOnInit(): void {
    this.fileService.getAnalyses().subscribe({
      next: (data) => {
        this.history = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        console.error("Could not fetch history");
      }
    });
  }
}