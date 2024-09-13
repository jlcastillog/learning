namespace InterfaceAdapters_Mappers.Dtos.Requests
{
    public class BeerRequestDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public decimal Alcohol { get; set; }
    }
}
