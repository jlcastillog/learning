using Interface_Adapters_Adapter;
using Interface_Adapters_Adapter.Dtos;
using System.Text.Json;

namespace FrameworkDrivers_ExternalService
{
    public class PostService : IExternalService<PostServiceDto>
    {
        private readonly HttpClient _httpClient;
        private readonly JsonSerializerOptions _serializerOptions;

        public PostService(HttpClient httpClient)
        {
            _httpClient = httpClient;
            _serializerOptions = new JsonSerializerOptions()
            {
                PropertyNameCaseInsensitive = true,
            };
        }

        public async Task<IEnumerable<PostServiceDto>> GetContentAsync()
        {
            var response = await _httpClient.GetAsync(_httpClient.BaseAddress);
            response.EnsureSuccessStatusCode();
            var responseData = await response.Content.ReadAsStringAsync();

            return JsonSerializer.Deserialize<IEnumerable<PostServiceDto>>(responseData, _serializerOptions);
        }
    }
}
