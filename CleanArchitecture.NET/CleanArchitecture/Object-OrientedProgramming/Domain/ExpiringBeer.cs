namespace Object_OrientedProgramming.Domain
{
    public class ExpiringBeer : Beer
    {
        public DateTime ExpirationDate { get; set; }

        public ExpiringBeer(string name, decimal price, decimal alcohol, int quantity, DateTime expirationDate) : base(name, price, alcohol, quantity)
        {
            ExpirationDate = expirationDate;
        }

        public override string GetInfo()
        {
            return $"Nombre: {Name}, Precio: ${Price}, Alcohol: {Alcohol}, {GetQuantity()}, Fecha de expiración: {ExpirationDate.ToString()}"; ;
        }
    }
}
