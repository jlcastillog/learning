namespace EnterpriseLayer
{
    public class SaleEntity
    {
        public int Id { get; }
        public DateTime Date { get; set; }
        public decimal Total { get; set; }
        public List<ConceptEntity> Concepts { get; set; }

        public SaleEntity(DateTime date, List<ConceptEntity> concepts)
        {
            Date = date;
            Concepts = concepts;
            Total = GetTotal();
        }

        public SaleEntity(int id, DateTime date, List<ConceptEntity> concepts)
        {
            Id = id;
            Date = date;
            Concepts = concepts;
            Total = GetTotal();
        }

        private decimal GetTotal()
            => Concepts.Sum(c => c.Price); 
    }
}
