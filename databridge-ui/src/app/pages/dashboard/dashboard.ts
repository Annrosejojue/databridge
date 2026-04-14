import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadService } from '../../services/file-upload';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  selectedFile: File | null = null;
  uploadResult: any = null;
  loading = false;

  constructor(private fileService: FileUploadService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  upload() {
    if (!this.selectedFile) return;
    this.loading = true;
    this.fileService.uploadFile(this.selectedFile).subscribe({
      next: (event: any) => {
        if (event instanceof HttpResponse) {
          this.uploadResult = event.body;
          this.loading = false;
        }
      },
      error: () => { this.loading = false; alert("Upload failed!"); }
    });
  }
}