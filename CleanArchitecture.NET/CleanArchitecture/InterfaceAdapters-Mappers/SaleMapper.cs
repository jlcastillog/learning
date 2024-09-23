using ApplicationLayer;
using EnterpriseLayer;
using InterfaceAdapters_Mappers.Dtos.Requests;

namespace InterfaceAdapters_Mappers
{
    public class SaleMapper : IMapper<SaleRequestDto, SaleEntity>
    {
        public SaleEntity ToEntity(SaleRequestDto input)
        {
            var concepts = new List<ConceptEntity>();

            foreach (var conceptDto in input.Concepts)
            {
                concepts.Add(new ConceptEntity(conceptDto.Quantity, conceptDto.IdBeer, conceptDto.UnitPrice));
            }

            var sale = new SaleEntity(DateTime.Now, concepts);

            return sale;
        }
    }
}
