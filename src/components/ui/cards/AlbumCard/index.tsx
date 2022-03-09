import { ReactNode } from 'react';

interface AlbumCardProps {
  children: ReactNode;
}

function AlbumCard({ children }: AlbumCardProps) {
  return (
    <>
      <h1>AlbumCard</h1>
      {children}
    </>
  );
}

export default AlbumCard;
