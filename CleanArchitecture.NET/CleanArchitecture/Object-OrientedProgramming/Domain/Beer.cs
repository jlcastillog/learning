namespace Object_OrientedProgramming.Domain
{
    public class Beer : Drink, ISalable, ISend
    {
        private string Category = "Cerveza";
        public string Name { get; set; }
        public decimal Price { get; set; }

        public static int QuantityObjects;

        public decimal Alcohol
        {
            get
            {
                return _alcohol;
            }
            set
            {
                if (value < 0)
                {
                    value = 0;
                }
                _alcohol = value;
            }
        }
        private decimal _alcohol;

        public Beer(string name, decimal price, decimal alcohol, int quantity) : base(quantity)
        {
            Name = name;
            Price = price;  
            Alcohol = alcohol;
            QuantityObjects++;
        }

        public virtual string GetInfo()
        {
            return $"Nombre: {Name}, Precio: ${Price}, Alcohol: {Alcohol}, {GetQuantity()}";
        }

        public override string GetCategory() => Category;

        public decimal GetPrice() => Price;

        public void Send()
        {
            Console.WriteLine($"Se envia por correo: {GetInfo()}");
        }
    }
}
