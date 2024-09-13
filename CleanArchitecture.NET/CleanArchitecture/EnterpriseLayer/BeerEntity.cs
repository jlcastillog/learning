namespace EnterpriseLayer
{
    public class BeerEntity
    {
        public int Id {  get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public decimal Alcohol { get; set; }
        public bool IsStrongBeer() => Alcohol > 7.5m;
    }
}
