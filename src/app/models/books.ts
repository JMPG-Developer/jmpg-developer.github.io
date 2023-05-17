export interface Books {
  list: Book[];
}

export interface Book {
  id?: number;
  languages?: string[];
  name: string;
  description: string;
  resume?: string;
  tags?: string[];
  image: string;
  authors?: string[];
  link?: string;
  notes?: BookNotes;
}

export interface BookNotes {
  level: string;
  highlights: string[];
  whenToRead: string;
}