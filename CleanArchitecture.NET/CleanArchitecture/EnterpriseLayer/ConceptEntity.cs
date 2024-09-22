namespace EnterpriseLayer
{
    public class ConceptEntity
    {
        public int IdBeer { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal Price { get; set; }

        public ConceptEntity(int quantity, int idBeer, decimal unitPrice)
        {
            Quantity = quantity;
            IdBeer = idBeer;    
            UnitPrice = unitPrice; 
            Price = GetTotalPrice();
        }

        private decimal GetTotalPrice()
            => Quantity * UnitPrice;
    }
}
