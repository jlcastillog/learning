using ApplicationLayer;
using EnterpriseLayer;
using InterfaceAdapters_Data;
using InterfaceAdapters_Models;
using Microsoft.EntityFrameworkCore;

namespace InterfaceAdapters_Repository
{
    public class SaleRepository : IRepository<SaleEntity>
    {
        private readonly AppDbContext _dbContext;

        public SaleRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task AddAsync(SaleEntity sale)
        {
            var saleModel = new SaleModel()
            {
                Total = sale.Total,
                CreationDate = sale.Date,
                Concepts = sale.Concepts.Select(c => new ConceptModel()
                {
                    UnitPrice = c.UnitPrice,
                    IdBeer = c.IdBeer,
                    Quantity = c.Quantity,
                }).ToList(),    
            };

            await _dbContext.Sales.AddAsync(saleModel);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<SaleEntity>> GetAllAsync()
        {
            return await _dbContext.Sales
                .Select(s => new SaleEntity(s.Id, s.CreationDate,
                _dbContext.Concepts.Where(c => c.IdSale == s.Id)
                                   .Select(c => new ConceptEntity(c.Quantity, c.IdBeer, c.UnitPrice))
                                   .ToList()))
                .ToListAsync();
        }

        public async Task<SaleEntity> GetByIdAsync(int id)
        {
            var saleModel = await _dbContext.Sales.FindAsync(id);
            return new SaleEntity(saleModel.Id, saleModel.CreationDate, _dbContext.Concepts
                                    .Where(c => c.IdSale == saleModel.Id)
                                    .Select(c => new ConceptEntity(c.Quantity, c.IdBeer, c.UnitPrice))
                                    .ToList());
        }
    }
}
