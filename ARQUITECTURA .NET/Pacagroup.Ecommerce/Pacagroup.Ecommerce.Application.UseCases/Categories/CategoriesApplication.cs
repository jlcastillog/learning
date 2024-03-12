using AutoMapper;
using Microsoft.Extensions.Caching.Distributed;
using Pacagroup.Ecommerce.Application.DTO;
using Pacagroup.Ecommerce.Application.Interface.UseCases;
using Pacagroup.Ecommerce.Application.Interface.Persistence;
using Pacagroup.Ecommerce.Transversal.Common;
using System.Text;
using System.Text.Json;
using Microsoft.Extensions.Logging;

namespace Pacagroup.Ecommerce.Application.UseCases.Categories
{
    public class CategoriesApplication : ICategoriesApplication
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly ILogger<CategoriesApplication> _logger;
        private readonly IDistributedCache _distributedCache;

        public CategoriesApplication(IUnitOfWork unitOfWork, IMapper mapper, ILogger<CategoriesApplication> logger, IDistributedCache distributedCache)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _logger = logger;
            _distributedCache = distributedCache;
        }

        public async Task<Response<IEnumerable<CategoryDTO>>> GetAll()
        {
            var response = new Response<IEnumerable<CategoryDTO>>();
            var cacheKey = "categoriesList";

            try
            {
                var resCategories = await _distributedCache.GetAsync(cacheKey);

                if (resCategories != null)
                {
                    response.Data = JsonSerializer.Deserialize<IEnumerable<CategoryDTO>>(resCategories);
                }
                else
                {
                    var allCategories = await _unitOfWork.Categories.GetAll();
                    response.Data = _mapper.Map<IEnumerable<CategoryDTO>>(allCategories);

                    if (response.Data != null)
                    {
                        var serializedCategories = Encoding.UTF8.GetBytes(JsonSerializer.Serialize(response.Data));
                        var options = new DistributedCacheEntryOptions()
                            .SetAbsoluteExpiration(DateTime.Now.AddDays(8))
                            .SetSlidingExpiration(TimeSpan.FromMinutes(60));

                        await _distributedCache.SetAsync(cacheKey, serializedCategories, options);
                    }
                }

                if (response.Data != null)
                {
                    response.IsSuccess = true;
                    response.Message = "GetAll succeded!!";
                    _logger.LogInformation("GetAll succeded!!");
                }
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = ex.Message;
                _logger.LogError(ex.Message);
            }

            return response;
        }
    }
}
