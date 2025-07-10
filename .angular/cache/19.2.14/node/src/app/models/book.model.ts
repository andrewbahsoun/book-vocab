
export interface Book {
    id: number;
    title: string;
    authors: Array<{
      name: string;
      birth_year: number;
      death_year: number;
    }>;
    summaries: string[];
    translators: any[];
    subjects: string[];
    bookshelves: string[];
    languages: string[];
    copyright: boolean;
    media_type: string;
    formats: { [key: string]: string };
    download_count: number;
  }
  