using ApplicationLayer;
using EnterpriseLayer;
using InterfaceAdapters_Mappers.Dtos.Requests;

namespace InterfaceAdapters_Mappers
{
    public class BeerMapper : IMapper<BeerRequestDto, BeerEntity>
    {
        public BeerEntity ToEntity(BeerRequestDto input)
        {
            return new BeerEntity()
            {
                Id = input.Id,
                Name = input.Name,
                Description = input.Description,
                Alcohol = input.Alcohol,
                Type = input.Type,
            };
        }
    }
}
