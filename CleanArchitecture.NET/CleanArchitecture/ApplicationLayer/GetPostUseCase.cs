using EnterpriseLayer;

namespace ApplicationLayer
{
    public  class GetPostUseCase
    {
        private readonly IExternalServiceAdapter<PostEntity> _adapter;

        public GetPostUseCase(IExternalServiceAdapter<PostEntity> adapter)
        {
            _adapter = adapter;
        }

        public async Task<IEnumerable<PostEntity>> ExecuteAsync()
        {
            return await _adapter.GetDataAsync();
        }
    }
}
