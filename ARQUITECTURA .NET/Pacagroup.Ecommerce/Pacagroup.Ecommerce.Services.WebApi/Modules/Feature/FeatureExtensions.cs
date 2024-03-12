using System.Text.Json.Serialization;

namespace Pacagroup.Ecommerce.Services.WebApi.Modules.Feature
{
    public static class FeatureExtensions
    {
        public static string myPolicy = "policyApiEcommenrce";

        public static IServiceCollection AddFeature(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddCors(options => options.AddPolicy(myPolicy, policy => policy.WithOrigins(configuration.GetSection("Config:OriginCors").Value)
                                                                                .AllowAnyHeader()
                                                                                .AllowAnyMethod()));
            services.AddMvc(); 

            services.AddControllers().AddJsonOptions(opt =>
            {
                var enumConverter = new JsonStringEnumConverter();
                opt.JsonSerializerOptions.Converters.Add(enumConverter);
            });

            return services;
        }
    }
}
