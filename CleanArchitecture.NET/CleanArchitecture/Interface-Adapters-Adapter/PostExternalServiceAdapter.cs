using ApplicationLayer;
using EnterpriseLayer;
using Interface_Adapters_Adapter.Dtos;
using System.Runtime.CompilerServices;

namespace Interface_Adapters_Adapter
{
    public class PostExternalServiceAdapter : IExternalServiceAdapter<PostEntity>
    {
        private readonly IExternalService<PostServiceDto> _externalService;

        public PostExternalServiceAdapter(IExternalService<PostServiceDto> externalService)
        {
            _externalService = externalService;
        }

        public async Task<IEnumerable<PostEntity>> GetDataAsync()
        {
            var result = await _externalService.GetContentAsync();
            return result.Select(p => new PostEntity
            {
                Body = p.Body,
                Id = p.Id,
                Title = p.Title,   
            });
        }
    }
}
