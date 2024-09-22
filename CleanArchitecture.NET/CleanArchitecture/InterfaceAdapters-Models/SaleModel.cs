namespace InterfaceAdapters_Models
{
    public class SaleModel
    {
        public int Id { get; }
        public DateTime CreationDate { get; set; }
        public decimal Total { get; set; }
        public List<ConceptModel> Concepts { get; set; }
    }
}
