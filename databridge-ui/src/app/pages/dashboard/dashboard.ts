import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadService } from '../../services/file-upload';
import { HttpResponse, HttpEventType } from '@angular/common/http';

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
  error: string | null = null;

  constructor(private fileService: FileUploadService) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.error = null;
      console.log("File selected:", file.name);
    }
  }

  upload() {
    if (!this.selectedFile) return;

    this.loading = true;
    this.error = null;
    console.log("Starting upload to backend...");

    this.fileService.uploadFile(this.selectedFile).subscribe({
      next: (event: any) => {
        if (event.type === HttpEventType.Response) {
          this.uploadResult = event.body;
          this.loading = false;
          console.log("Analysis Success:", this.uploadResult);
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = "Upload failed. Please ensure the Python server is running on port 8000.";
        console.error("Backend Error:", err);
      }
    });
  }
}