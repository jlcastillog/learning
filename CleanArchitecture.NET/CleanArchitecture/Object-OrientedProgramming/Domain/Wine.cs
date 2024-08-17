namespace Object_OrientedProgramming.Domain
{
    public class Wine : Drink
    {
        private string Category = "Vino"; 

        public Wine(int quantity) : base(quantity)
        {
        }

        public override string GetCategory() => Category;
    }
}
