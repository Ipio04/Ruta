import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
    <h1>HomePage</h1>
  
    <div>
      <Link to="/sorpresa">Ir a la página de imágenes</Link>
    </div>
    <div>
      <Link to="/video">Ir a la página de video</Link>
    </div>
    <div>
      <Link to="/blog">Ir a la página de blog</Link>
    </div>
    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bfbb35d2-b26f-4fc4-a63e-e483ef6c723e/de73gff-6b3a7cd4-d57f-46bf-9fa1-c4d3e0454c9a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JmYmIzNWQyLWIyNmYtNGZjNC1hNjNlLWU0ODNlZjZjNzIzZVwvZGU3M2dmZi02YjNhN2NkNC1kNTdmLTQ2YmYtOWZhMS1jNGQzZTA0NTRjOWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dXxSd5vhn94wqNIowZcwlQZhQtv6WT8xJ5KlqtopNzw" alt="Descripción de la imagen" />
  </div>
  )
}