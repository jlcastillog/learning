namespace Object_OrientedProgramming.Domain
{
    public abstract class Drink
    {
        public int Quantity { get; set; }

        public Drink(int quantity) 
        {
            this.Quantity = quantity;
        }

        public string GetQuantity()
        {
            return $"{Quantity.ToString()} ml";
        }

        public abstract string GetCategory();
    }
}
