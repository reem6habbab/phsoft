export interface GalleryProps {
  id: string;
  srcImage: string;
  name: string;
  categoryName: string;
  categoryId: string;
}


export interface GalleriesProps {
  galleries: GalleryProps[]; // Accept an array of SlideProps
}

//nawras
