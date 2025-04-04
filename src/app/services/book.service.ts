import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { Author } from '../model/author';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  protected books: Book[] = [

    {
      "id": 26184,
      "title": "Simple Sabotage Field Manual",
      "authors": [
        {
          "name": "United States. Office of Strategic Services",
          "birth_year": null,
          "death_year": null
        }
      ],
      "summaries": [
        "\"Simple Sabotage Field Manual\" by United States. Office of Strategic Services is a historical publication written during the early 1940s, amid World War II. This manual acts as a guide for ordinary civilians to conduct simple acts of sabotage against enemy operations without the need for specialized training or equipment. Its main topic revolves around promoting small, accessible forms of resistance that could collectively disrupt the enemy's war effort.  The manual outlines various strategies and techniques for citizens to engage in sabotage that could be executed discreetly and with minimal risk. It provides specific suggestions for targeting transportation, communication, and industrial facilities to create delays and inefficiencies in enemy operations. The manual emphasizes the power of many individuals acting independently to contribute to a larger campaign of disruption, encouraging simple acts such as misplacing tools, delaying communication, or damaging equipment with household items. Overall, the \"Simple Sabotage Field Manual\" serves as a unique historical artifact that illustrates grassroots resistance efforts and the belief in the collective power of ordinary people during wartime. (This is an automatically generated summary.)"
      ],
      "subjects": [
        "Sabotage"
      ],
      "image": "https://www.gutenberg.org/cache/epub/26184/pg26184.cover.medium.jpg"
    },
    
    {
      "id": 84,
      "title": "Frankenstein; Or, The Modern Prometheus",
      "authors": [
        {
          "name": "Shelley, Mary Wollstonecraft",
          "birth_year": 1797,
          "death_year": 1851
        }
      ],
      "summaries": [
        "\"Frankenstein; Or, The Modern Prometheus\" by Mary Wollstonecraft Shelley is a novel written in the early 19th century. The story explores themes of ambition, the quest for knowledge, and the consequences of man's hubris through the experiences of Victor Frankenstein and the monstrous creation of his own making.   The opening of the book introduces Robert Walton, an ambitious explorer on a quest to discover new lands and knowledge in the icy regions of the Arctic. In his letters to his sister Margaret, he expresses both enthusiasm and the fear of isolation in his grand venture. As Walton's expedition progresses, he encounters a mysterious, emaciated stranger who has faced great suffering—furthering the intrigue of his narrative. This stranger ultimately reveals his tale of creation, loss, and the profound consequences of seeking knowledge that lies beyond human bounds. The narrative is set up in a manner that suggests a deep examination of the emotions and ethical dilemmas faced by those who dare to defy the natural order. (This is an automatically generated summary.)"
      ],
      "subjects": [
        "Frankenstein's monster (Fictitious character) -- Fiction",
        "Frankenstein, Victor (Fictitious character) -- Fiction",
        "Gothic fiction",
        "Horror tales",
        "Monsters -- Fiction",
        "Science fiction",
        "Scientists -- Fiction"
      ],
      "image": "https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg"
      
    },
    {
      "id": 2701,
      "title": "Moby Dick; Or, The Whale",
      "authors": [
        {
          "name": "Melville, Herman",
          "birth_year": 1819,
          "death_year": 1891
        }
      ],
      "summaries": [
        "\"Moby Dick; Or, The Whale\" by Herman Melville is a novel written in the mid-19th century. The story follows Ishmael, a sailor on a whaling voyage, who seeks adventure and escape from his gloomy life on land. As he embarks on this journey, he becomes drawn into the complex world of whaling and is introduced to the ominous figure of Captain Ahab, whose obsession with a legendary white whale ultimately drives the narrative.  At the start of the novel, Ishmael introduces himself and shares his philosophy about the sea as a remedy for his melancholic disposition. He muses on the magnetic pull of the ocean, describing not only his own urge to set sail but also the collective longing of city dwellers for the water. Ishmael's journey takes him to New Bedford, where he experiences a series of humorous and strange encounters while seeking lodging before joining a whaling ship. As he navigates his way through the town, he is introduced to Queequeg, a tattooed harpooner with a mysterious past, setting the stage for a unique friendship that unfolds amidst the backdrop of whaling adventures. (This is an automatically generated summary.)"
      ],
      "subjects": [
        "Adventure stories",
        "Ahab, Captain (Fictitious character) -- Fiction",
        "Mentally ill -- Fiction",
        "Psychological fiction",
        "Sea stories",
        "Ship captains -- Fiction",
        "Whales -- Fiction",
        "Whaling -- Fiction",
        "Whaling ships -- Fiction"
      ],
      "image": "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg"
    },
    {
      "id": 1513,
      "title": "Romeo and Juliet",
      "authors": [
        {
          "name": "Shakespeare, William",
          "birth_year": 1564,
          "death_year": 1616
        }
      ],
      "summaries": [
        "\"Romeo and Juliet\" by William Shakespeare is a tragedy likely written during the late 16th century. The play centers on the intense love affair between two young lovers, Romeo Montague and Juliet Capulet, whose families are embroiled in a bitter feud. Their love, while passionate and profound, is met with adversities that ultimately lead to tragic consequences.  At the start of the play, a Prologue delivered by the Chorus sets the stage for the tale of forbidden love, revealing the familial conflict that surrounds Romeo and Juliet. The opening scenes depict a public brawl ignited by the feud between the Montagues and Capulets, showcasing the hostility that envelops their lives. As we are introduced to various characters such as Benvolio, Tybalt, and Mercutio, we learn of Romeo's unrequited love for Rosaline. However, this quickly changes when Romeo encounters Juliet at the Capulet ball, where they share a famous and romantic exchange, unwittingly falling in love with each other despite their families' bitter enmity. This initial encounter foreshadows the obstacles they will face as their love story unfolds amidst chaos and conflict. (This is an automatically generated summary.)"
      ],
      "subjects": [
        "Conflict of generations -- Drama",
        "Juliet (Fictitious character) -- Drama",
        "Romeo (Fictitious character) -- Drama",
        "Tragedies",
        "Vendetta -- Drama",
        "Verona (Italy) -- Drama",
        "Youth -- Drama"
      ],
      "image": "https://www.gutenberg.org/cache/epub/1513/pg1513.cover.medium.jpg"
    },
    {
      "id": 1342,
      "title": "Pride and Prejudice",
      "authors": [
        {
          "name": "Austen, Jane",
          "birth_year": 1775,
          "death_year": 1817
        }
      ],
      "summaries": [
        "\"Pride and Prejudice\" by Jane Austen is a classic novel written in the early 19th century. The story delves into themes of love, social class, and individual agency, largely revolving around the life of Elizabeth Bennet, one of five sisters from a modest but genteel family navigating the complex social landscape of Regency England.  The opening of the novel introduces the seemingly universal truth that a single man of wealth is a target for matchmaking mothers in the neighborhood. Mrs. Bennet is eager to marry off her daughters and is excited to hear about the arrival of Mr. Bingley, a wealthy young man who has taken up residence at Netherfield Park. Mr. Bennet's teasing yet indifferent nature contrasts sharply with Mrs. Bennet's anxious and businesslike demeanor as she plans to visit Mr. Bingley to create an opportunity for her daughters. Their witty exchanges set the tone for the story's exploration of family dynamics and social expectations, while also hinting at deeper character developments and the challenges Elizabeth will face regarding love and prejudice in her interactions with Mr. Darcy and the Bingley family. (This is an automatically generated summary.)"
      ],
      "subjects": [
        "Courtship -- Fiction",
        "Domestic fiction",
        "England -- Fiction",
        "Love stories",
        "Sisters -- Fiction",
        "Social classes -- Fiction",
        "Young women -- Fiction"
      ],
      "image": "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg"
    },
    {
      "id": 11,
      "title": "Alice's Adventures in Wonderland",
      "authors": [
        {
          "name": "Carroll, Lewis",
          "birth_year": 1832,
          "death_year": 1898
        }
      ],
      "summaries": [
        "\"Alice's Adventures in Wonderland\" by Lewis Carroll is a classic children's novel written in the mid-19th century. The story follows a young girl named Alice who, feeling bored and sleepy while sitting by a riverbank, encounters a White Rabbit and follows it down a rabbit hole, plunging into a fantastical world filled with curious creatures and whimsical adventures.  The opening of the book introduces Alice as she daydreams about her surroundings before spotting the White Rabbit, who is both flustered and animated. Curious, Alice pursues the Rabbit and finds herself tumbling down a deep rabbit hole, leading to a curious hall filled with doors, all locked. After experiencing a series of bizarre changes in size from eating and drinking mysterious substances, she begins exploring this new world, initially frustrated by her newfound challenges as she navigates her size and the peculiar inhabitants she meets. The narrative sets the tone for Alice's whimsical and often nonsensical adventures that characterize the entire tale. (This is an automatically generated summary.)"
      ],
      "subjects": [
        "Alice (Fictitious character from Carroll) -- Juvenile fiction",
        "Children's stories",
        "Fantasy fiction",
        "Imaginary places -- Juvenile fiction"
      ],
      "image": "https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg"
    }
  ]

  getAllBooks(): Book[] {
    const storedBooks = localStorage.getItem('arraybooks');
  
    if (storedBooks) {
      
      this.books = JSON.parse(storedBooks);
    } else {
      
      this.books = this.books;
      localStorage.setItem('arraybooks', JSON.stringify(this.books));
    }
  
    return this.books;
  }

  getBookById(id: number): Book | undefined{
    return this.books.find((book) => book.id === id);
  }

 

  submitBook( newId: number, NewTitle: string, newAuthor: string, NewImage: string, newSummary: string, newSubject: string){

    const authorObj: Author  = {
      name: newAuthor,
      birth_year: null,
      death_year: null
    }
const authorsArray: Author[] = [];
authorsArray.push(authorObj);

    const book: Book = {
      id: newId,
      title: NewTitle,
      authors: authorsArray,
      image: NewImage,
      summaries: newSummary,
      subject: newSubject
  };

  // Recuperiamo i libri già salvati (se presenti)
  const books = JSON.parse(localStorage.getItem('arraybooks') || '[]');

  // Aggiungiamo il nuovo libro alla lista
  books.push(book);

  // Salviamo l'array aggiornato nel LocalStorage
  localStorage.setItem('arraybooks', JSON.stringify(books));

  console.log("Libro salvato correttamente!");



    
  } 
  
}
