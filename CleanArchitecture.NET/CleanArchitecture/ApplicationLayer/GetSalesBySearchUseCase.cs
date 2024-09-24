using EnterpriseLayer;
using System.Linq.Expressions;

namespace ApplicationLayer
{
    public class GetSalesBySearchUseCase<TModel>
    {
        private readonly IRespositorySearch<TModel, SaleEntity> _saleRepository;

        public GetSalesBySearchUseCase(IRespositorySearch<TModel, SaleEntity> saleRepository)
        {
            _saleRepository = saleRepository;
        }

        public async Task<IEnumerable<SaleEntity>> ExecuteAsync(Expression<Func<TModel, bool>> predicate)
        {
            return await _saleRepository.GetBySearchAsync(predicate);
        }
    }
}
