using ApplicationLayer;
using EnterpriseLayer;
using InterfaceAdapters_Mappers.Dtos.Requests;

namespace InterfaceAdapters_Mappers
{
    public class SaleMapper : IMapper<SaleRequestDto, Sale>
    {
        public Sale ToEntity(SaleRequestDto input)
        {
            var concepts = new List<Concept>();

            foreach (var conceptDto in input.Concepts)
            {
                concepts.Add(new Concept(conceptDto.Quantity, conceptDto.Id, conceptDto.UnitPrice));
            }

            var sale = new Sale(DateTime.Now, concepts);

            return sale;
        }
    }
}
