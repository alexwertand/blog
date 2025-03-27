import { Tooltip, Toast } from 'bootstrap';

// Initialize a tooltip (example)
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
  new Tooltip(el);
});

// Initialize a toast (example)
document.querySelectorAll('.toast').forEach(el => {
  new Toast(el).show();
});

console.log('hello1');