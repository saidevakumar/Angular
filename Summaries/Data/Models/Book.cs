namespace Summaries.Data
{
    public class Book {
        public int Id { get; set; }
        public String? Title { get; set; }

        public string? Author { get; set; }

        public string? Description { get; set; }

        public Double? Rate  { get; set; }

        public DateTime? DateStart { get; set; }

        public DateTime? DateRead { get; set; }

    }
}