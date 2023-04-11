namespace Summaries.Data
{
    public interface IBookService
    {
        List<Book> GetAllBooks();

        Book? GetBookById(int id);

        void UpdateBook(int id,Book newBook);

        void DeleteBook(int id);

        void AddBook(Book newBook);
    }

    public class BookService : IBookService
    {
        public List<Book> GetAllBooks()
        {
            return Data.Books.ToList();
        }

        public Book? GetBookById(int id)
        {
            Book? bk = Data.Books.FirstOrDefault(x => x.Id == id);
            return bk;
        }

        public void UpdateBook(int id, Book newBook)
        {
            Book? bk = Data.Books.FirstOrDefault(x => x.Id == id);
            if (bk != null)
            {
                bk.Title = newBook.Title;
                bk.Author = newBook.Author;
                bk.Description = newBook.Description;
                bk.Rate = newBook.Rate;
                bk.DateStart = newBook.DateStart;
                bk.DateRead = newBook.DateRead;
            }
        }

        public void DeleteBook(int id)
        {
            Book? bk = Data.Books.FirstOrDefault(x => x.Id == id);
            if (bk != null)
            {
                Data.Books.Remove(bk);
            }
        }

        public void AddBook(Book newBook)
        {
            Data.Books.Add(newBook);
        }
    }
}