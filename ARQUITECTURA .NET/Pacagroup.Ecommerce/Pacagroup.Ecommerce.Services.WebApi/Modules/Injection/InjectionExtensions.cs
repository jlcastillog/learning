using Pacagroup.Ecommerce.Services.WebApi.Modules.GlobalException;

namespace Pacagroup.Ecommerce.Services.WebApi.Modules.Injection
{
    public static class InjectionExtensions
    {
        public static IServiceCollection AddInjections(this IServiceCollection services)
        {
            services.AddTransient<GlobalExceptionHandler>();
            
            return services;
        }
    }
}
