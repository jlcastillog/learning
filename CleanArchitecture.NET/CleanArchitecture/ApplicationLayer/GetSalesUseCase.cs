using EnterpriseLayer;
using System.ComponentModel.DataAnnotations;

namespace ApplicationLayer
{
    public class GetSalesUseCase
    {
        private readonly IRepository<SaleEntity> _saleRepository;

        public GetSalesUseCase(IRepository<SaleEntity> saleRepository)
        {
            _saleRepository = saleRepository;
        }

        public async Task<IEnumerable<SaleEntity>> ExecuteAsync()
        {
            return await _saleRepository.GetAllAsync();
        }
    }
}
