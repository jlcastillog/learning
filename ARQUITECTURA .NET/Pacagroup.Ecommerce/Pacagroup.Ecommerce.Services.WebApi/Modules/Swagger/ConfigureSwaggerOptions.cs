using Asp.Versioning.ApiExplorer;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Pacagroup.Ecommerce.Services.WebApi.Modules.Swagger
{
    public class ConfigureSwaggerOptions : IConfigureOptions<SwaggerGenOptions>
    {
        readonly IApiVersionDescriptionProvider _provider;

        public ConfigureSwaggerOptions(IApiVersionDescriptionProvider provider)
        {
            _provider = provider;
        }

        static OpenApiInfo CreateInfoForApiVersion(ApiVersionDescription description)
        {
            var info = new OpenApiInfo()
            {
                Version = description.ApiVersion.ToString(),
                Title = "Pacagroup Technology Services APIP Market",
                Description = "A simple example ASP.NET Core Web API. ",
                TermsOfService = new Uri("https://pacagroup.com/terms"),
                Contact = new OpenApiContact()
                {
                    Name = "Jose Luis",
                    Email = "jlcgalvez@gmail.com",
                    Url = new Uri( "https://pacagroup.com/Contact")
                },
                License = new OpenApiLicense()
                {
                    Name = "Use under LICX",
                    Url = new Uri("https://pacagroup.com/License")
                }
            };

            if (description.IsDeprecated)
            {
                info.Description += "Deprecated version.";
            }

            return info;
        }

        public void Configure(SwaggerGenOptions options)
        {
            // add a swagger ducment for each discovered API  version
            // note: you might choose to skip or document deprecated API version differently
            foreach (var description in _provider.ApiVersionDescriptions)
            {
                options.SwaggerDoc(description.GroupName, CreateInfoForApiVersion(description));
            }
        }
    }
}
