using Microsoft.AspNetCore.RateLimiting;

namespace Pacagroup.Ecommerce.Services.WebApi.Modules.RateLimiter
{
    public static class RateLimiterExtensions
    {
        public static IServiceCollection AddRateLimiting(this IServiceCollection services, IConfiguration configuration)
        {
            var fixedWindowPolicy = "fixedWindow";

            services.AddRateLimiter(options =>
            {
                options.AddFixedWindowLimiter(policyName: fixedWindowPolicy, fixedWindowOpt =>
                {
                    fixedWindowOpt.PermitLimit = int.Parse(configuration["RateLimiting:PermitLimit"]);
                    fixedWindowOpt.Window = TimeSpan.FromSeconds(int.Parse(configuration["RateLimiting:Window"]));
                    fixedWindowOpt.QueueProcessingOrder = System.Threading.RateLimiting.QueueProcessingOrder.OldestFirst;
                    fixedWindowOpt.QueueLimit = int.Parse(configuration["RateLimiting:QueueLimit"]);
                });
                options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
            });

            return services;
        }

    }
}
